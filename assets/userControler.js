(function () {
  //testing
  const modalCont = document.getElementById('modalCont');
  const singUp = document.getElementById('signUp');
  const closeBtn = document.getElementById('closeBtn');
  singUp.addEventListener('click', function () {
      modalCont.style.display = 'block';
      if (modalCont.style.display === 'block') {
             closeBtn.addEventListener('click',function(){
                 modalCont.style.display='none';
             })
      }
  })
}
)();