function getById(id) {
    return document.getElementById(id);
}

function getUploadModal() {
    //TODO    
}

function handleView(response, conteiner) {
    let template = Handlebars.compile(response);
    let html = template(response);
    conteiner.innerHTML = html;
}

function debounceArg(func, ms) {
    let timerId;
    return function (...res) {
        clearTimeout(timerId);
        timerId = setTimeout(func, ms, ...res);
    };
}