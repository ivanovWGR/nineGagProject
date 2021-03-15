(function () {
    const uploadPost = getById('uploadPost');

    let sectionInput = getById('sectionInput');
    let titleInput = getById('titleInput');
    let urlInput = getById('urlInput');
    let description = getById('description');
    let noticeCont = getById('noticeCont');
    let today = new Date();

    try {
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = mm + '.' + dd + '.' + yyyy;
    } catch (err) {
        console.log(err);
    }

    uploadPost.addEventListener('click', () => {
        let value = sectionInput.value[0].toUpperCase() + sectionInput.value.slice(1);
        let isExist = validatePost(value);
        let checkInputs = validateInputs(titleInput.value, urlInput.value, description.value);
        if (isExist && checkInputs) {
            data.unshift(new Article(value, today, titleInput.value, urlInput.value, 0, 0, description.value));
            postModal.style.display = 'none';
            noticeCont.style.display = 'block';
            location.hash = value;
        }
    })

    function validatePost(category) {
        let categories = data.map(el => el.category);
        let isValid = categories.some(el => el.toLowerCase().trim() === category.toLowerCase().trim());
        return isValid;
    }

    function validateInputs(title, url, description) {
        let validate = false;
        if (title.trim().length > 3 && url.trim().length > 3 && description.trim().length > 3) {
            validate = true;
        }
        return validate;
    }

})();
