const searchIcon = document.getElementById('search');
searchIcon.addEventListener('click', toggleInputForm);

function toggleInputForm(e) {
    e.preventDefault();
    searchIcon.nextElementSibling.classList.toggle('hidden');
}

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', searchData);

function searchData(e) {
    e.preventDefault();
    const searchValue = e.target.value;
    debounce(search, 1500)(searchValue);
}

function search(str) {
    const filterData = data.filter(({title}) => title.includes(str));
    
    if (filterData.length > 0) {
        let context = {};
        context.articles = filterData;
        let middleSection = document.getElementById('middle');
        middleSection.innerHTML = partials(context);
    }
}

function debounce(func, duration) {
    let timeout;

    return function (...args) {
        const effect = () => {
            timeout = null;

            return func.apply(this, args);
        }

        clearTimeout(timeout);
        timeout = setTimeout(effect, duration);
    }
}
