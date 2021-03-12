Handlebars.registerPartial('article', document.getElementById('myArticlePartial').innerHTML);
let template = Handlebars.compile(document.getElementById('myMiddleSection').innerHTML);
let partials = Handlebars.compile(document.getElementById('partials').innerHTML)
window.addEventListener('hashchange', router);

function router(e) {
    try {
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector(`#scroller a[href$="${location.hash.slice(1)}"]`).parentElement.classList.add('selected');
    } catch (err) {
        console.log(err);
    }

    let hash = location.hash.slice(1)
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
            renderAndSortArticles((a, b) => Number(b.points) - Number(a.points)).slice(0, 5);
            break;
        case 'Fresh':
            renderAndSortArticle((a, b) => {
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
