location.hash = '#Hot';

Handlebars.registerPartial('article', document.getElementById('myArticlePartial').innerHTML);

let template = Handlebars.compile(document.getElementById('myMiddleSection').innerHTML);
let partials = Handlebars.compile(document.getElementById('partials').innerHTML);

window.addEventListener('hashchange', router);

function router(e) {
    let hash = location.hash.slice(1);

    try {
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector(`#scroller a[href$="#${hash}"]`).parentElement.classList.add('selected');
    } catch (err) {
        console.log(err);
    }

    if (hash.includes('-')) {
        hash = hash.replace(/-/g, ' ');
    }

    let middleSection = document.getElementById('middle');
    middleSection.innerHTML = '';
    let context = {};
    context.hash = hash;

    switch (hash) {
        case 'Shuffle':
            context.articles = shuffle(data.slice());
            middleSection.innerHTML = partials(context);
            break;
        case 'Hot':
            renderAndSortArticles((a, b) => Number(b.comments) - Number(a.comments));
            break;
        case 'Trending':
            renderAndSortArticles((a, b) => Number(b.points) - Number(a.points));
            break;
        case 'Fresh':
            renderAndSortArticles((a, b) => {
                return Number(b.date.split('.').reverse().join('')) - Number(a.date.split('.').reverse().join(''));
            });
            break;
        default:
            context.articles = data.filter(article => article.category === hash);

            if (context.articles.length > 0) {
                context.description = context.articles[0].description;
                middleSection.innerHTML = template(context);
            }

    }

    (function addEventListenersToArticles() {
        const arrOfBtns = Array.from(middleSection.querySelectorAll('.bottomButtons'));
        arrOfBtns.forEach(btn => {
            btn.addEventListener('click', handler);
        });

        function handler(e) {
            let action = e.target.classList.value;
            let article = e.target.parentElement.parentElement.parentElement.parentElement;
            let p = article.querySelectorAll('p')[1];
            let pointsValue = Number(p.innerHTML.split(' ')[0]);
            let commentsValue = Number(p.innerHTML.split(' ')[3]);

            switch (action) {
                case 'up':
                    pointsValue++;
                    doubleEffect();
                    break;
                case 'down':
                    pointsValue--;
                    doubleEffect();
                    break;
                case 'comment':

                    if (article.querySelectorAll('textarea').length > 0) {
                        let textarea = article.querySelector('textarea');

                        if (textarea.style.display === 'none') {
                            textarea.style.display = 'block';
                        } else {
                            textarea.style.display = 'none';
                        }

                    } else {
                        let textarea = document.createElement('textarea');
                        article.append(textarea);
                        textarea.addEventListener('input', addComment);
                        let counter = 0;

                        function addComment() {

                            if (!counter) {
                                counter++;
                                commentsValue++;
                                rewriteParagraph(3, commentsValue);
                                correctData('comments', commentsValue);
                            }

                        }

                    }
            }

            function doubleEffect() {
                rewriteParagraph(0, pointsValue);
                correctData('points', pointsValue);
            }

            function rewriteParagraph(index, value) {
                let add = p.innerHTML.split(' ');
                add[index] = value;
                p.innerHTML = add.join(' ');

            }

            function correctData(key, value) {
                let [obj] = data.filter(obj => obj.title === article.querySelector('h1').innerHTML);
                let index = data.indexOf(obj);
                data[index][key] = value;
            }
        }
    }());




    function renderAndSortArticles(sortingFunction) {
        context.articles = data.slice().sort((a, b) => sortingFunction(a, b)).slice(0, 5);
        middleSection.innerHTML = partials(context);
    }

    function shuffle(arr) {
        let shuffledArr = [];

        for (let i = 0; i < 5; i++) {
            shuffledArr.push(arr[Math.floor(Math.random() * arr.length)]);
        }

        return shuffledArr;
    }

}
