window.onload = function(){
  document.getElementById('menu_btn').onclick = function(){
    this.nextElementSibling.classList.toggle('active');
  }
  
  document.querySelector('.header-form__input').addEventListener('input', function(){
    if(this.value.length){
      this.nextElementSibling.type = 'submit';
    } else {
      this.nextElementSibling.type = 'button';
    }
  });
  
  var form = document.getElementById('preem-form'),
      formItems = null;
  var understand = document.getElementById('understand');
  
  if(form){
    form.addEventListener('click', function(){
      if(!understand.checked){
        alert('Подтвердите, что вы ознакомились с сутью Преемственности');
      }
    });
    formItems = form.querySelectorAll('input, select');
  }
  
  if(understand){
    understand.addEventListener('change', function(){
      if(this.checked){
        for(let i = 0; i<formItems.length; i++){
          formItems[i].disabled = false;
        }
      } else {
        for(let i = 0; i<formItems.length; i++){
          formItems[i].disabled = true;
        }
      }
    });
  };
  
  
}


