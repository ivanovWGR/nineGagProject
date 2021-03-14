(function () {
    const closePost = getById('closePost')
    const modalLogin = getById('modalLogin');
    const modalEmail = getById('modalEmail');
    const modalCont = getById('modalCont');
    const singUp = getById('signUp');
    const closeBtn = getById('closeBtn');
    const close = getById('close');
    const closeLogIn = getById('closeLogIn');
    const logIn = getById('logIn');
    const uploadModal = getById('uploadModal');
    const postBtn = getById('postBtn');
    const postModal = getById('postModal');
    const closeUpload = getById('closeUpload');
    const backBtn = getById('backBtn');
    const uploadPost = getById('uploadPost');


    const emailModalBtn = getById('emailModalBtn');
    const loginModalBtn = getById('loginModalBtn');


    singUp.addEventListener('click', function () {
        if (singUp.innerText === 'Sign up') {
            console.log(postModal)
            modalCont.style.display = 'block';
            if (modalCont.style.display === 'block') {
                closeBtn.addEventListener('click', function () {
                    modalCont.style.display = 'none';
                })
            }
        } else {
            fetch('assets/views/uploadModal.hbs')
                .then(res => res.text())
                .then(res => getUploadModal(res));
            postModal.style.display = 'none';
            uploadModal.style.display = 'block';
            closeUpload.addEventListener('click', () => {
                uploadModal.style.display = 'none';
            })

            postBtn.addEventListener('click', () => {
                postModal.style.display = 'block';
                uploadModal.style.display = 'none';
            })
        }
    })

    closePost.addEventListener('click', () => {
        postModal.style.display = 'none';
    })

    emailModalBtn.addEventListener('click', () => {
        modalEmail.style.display = 'block';
        modalCont.style.display = 'none';
        modalLogin.style.display = 'none';

    }
    )
    close.addEventListener('click', () => {
        modalEmail.style.display = 'none';
        modalCont.style.display = 'none';

    })

    logIn.addEventListener('click', () => {
        modalLogin.style.display = 'block';

    })

    loginModalBtn.addEventListener('click', () => {
        modalLogin.style.display = 'block';
        modalEmail.style.display = 'none';
        modalCont.style.display = 'none';
        if (modalLogin.style.display === 'block') {
        }
    })
    closeLogIn.addEventListener('click', () => {
        modalLogin.style.display = 'none';
    })
})();