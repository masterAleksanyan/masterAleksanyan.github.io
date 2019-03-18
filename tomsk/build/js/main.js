window.onload = function(){
  
  // header menu 
  let menuBtn = document.getElementById('burger_btn');
  let menu = document.getElementById('header_menu');
  
  if(menuBtn){
    menuBtn.onclick = function(){
      this.classList.toggle('active');
      menu.classList.toggle('active');
    }
  }
  
  
  //  block  problems
  let deviceItems = document.querySelectorAll('.problems__devices-name');
  let problems__device = document.querySelectorAll('.problems__device');
  let problemsVersionList = document.querySelectorAll('.problems__version-list');
  let problems__version = document.querySelectorAll('.problems__version-list li');
  
  for(let i=0; i<deviceItems.length; i++){
    deviceItems[i].addEventListener('click', function(){
      let thisElems = this.parentNode.querySelectorAll('.problems__devices-name');
      removeActive(thisElems);
      
      this.classList.add('active');
      var device = this.attributes['data-device'].value;
      let d = document.getElementById(device);
      let thisDevElems = d.parentNode.querySelectorAll('.problems__device');
      
      removeActive(thisDevElems);
      d.classList.add('active');
    });
  }
  
  for(let i=0; i<problems__version.length; i++){
    problems__version[i].addEventListener('click', function(){
      let thisElems = this.parentNode.querySelectorAll('li');
      removeActive(thisElems);
      this.parentNode.classList.remove('active');
      this.classList.add('active');
      this.parentNode.classList.toggle('active');
    });
  }
  
  for(let i=0; i<problemsVersionList.length; i++){
    problemsVersionList[i].addEventListener('click', function(){
      this.classList.toggle('active');
    });
  }
  
  
  //  close menu btn
  let close_btn = document.getElementById('close_btn');
  let problemsItems = document.querySelectorAll('.menu__list-remont > span');
  let problemBlock = document.querySelectorAll('.problems');
  
  if(window.innerWidth < 1200){
    for(let i=0; i<problemsItems.length; i++){
      problemsItems[i].addEventListener('click', function(){
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        this.previousElementSibling.classList.add('active');
        close_btn.classList.add('active');
      });
    }
  }
  
  close_btn.onclick = function(){
    this.classList.remove('active');
    removeActive(problemBlock);
  }
  
  
  //  slider block
  let slider__buttons = document.querySelectorAll('.slider__button-item');
  let slider__items = document.querySelectorAll('.slider__block-img');
  for (let i=0; i<slider__buttons.length; i++){
    slider__buttons[i].addEventListener('click', function(){
      removeActive(slider__buttons);
      removeActive(slider__items);
      this.classList.add('active');
      let slideId = this.attributes['data-slide'].value;
      document.getElementById(slideId).classList.add('active');
    });
  }
  
  
  //  modal button
  let modalBtn = document.querySelectorAll('.modal__close, .modal__btn');
  for(let i=0; i<modalBtn.length; i++){
    modalBtn[i].addEventListener('click', function(){
      this.parentNode.parentNode.classList.remove('active');
    });
  }
  
  document.getElementById('header-signup').onclick = function(){
    document.getElementById('diagnos-modal').classList.add('active');
  }
  
  ////////////
  function removeActive(elems){
    for(let i=0; i<elems.length; i++){
      elems[i].classList.remove('active');
    }
  }
  
}