$(document).ready(function($){
  
  const STAT_YEAR = document.querySelector('.stat_year');
  const MY_YEAR = 2003;
  let year = (new Date()).getFullYear();
  STAT_YEAR.attributes['data-count'].value = year - MY_YEAR;
  
  let stats_block = (document.getElementById('stat-section').offsetTop);
  let stats_block_height = (document.getElementById('stat-section').offsetHeight);
  
  window.onscroll = function(){
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(stats_block_height, stats_block, scrolled);
    if(stats_block - scrolled + stats_block_height < window.innerHeight && stats_block - scrolled > 0) {
      time_state();
      window.onscroll = null;
    }
  }
  
  function time_state(){
    var stats = document.querySelectorAll('.stat-section .stat');
    
    let time_anim0 = 2000 / stats[0].dataset.count;
    let year_anim = setInterval(st_year, time_anim0);
    let j = 0;
    function st_year(){
      stats[0].querySelector('.number').innerHTML = 1 + j;
      j++;
      if(j == stats[0].dataset.count){
        clearInterval(year_anim);
      }
    }
    
    let k = 0;
    let implant_anim = setInterval(st_implant, 80);
    function st_implant(){
      stats[1].querySelector('.number').innerHTML = 0 + k;
      k+=57;
      if(k >= stats[1].dataset.count){
        stats[1].querySelector('.number').innerHTML = stats[1].dataset.count;
        clearInterval(implant_anim);
      }
    }
    
    let d = 0;
    let rew_anim = setInterval(st_rew, 110);
    function st_rew(){
      stats[2].querySelector('.number').innerHTML = 0 + d;
      d+=43;
      if(d >= stats[2].dataset.count){
        stats[2].querySelector('.number').innerHTML = stats[2].dataset.count;
        clearInterval(rew_anim);
      }
    }
    
    let c = 0;
    let subs_anim = setInterval(st_subs, 40);
    function st_subs(){
      stats[3].querySelector('.number').innerHTML = 0 + c;
      c+=355;
      if(c >= stats[3].dataset.count){
        stats[3].querySelector('.number').innerHTML = stats[3].dataset.count;
        clearInterval(subs_anim);
      }
    }
  }
  
  
  
//  if($(window).width() < 1024){
//    
//    // Get pagination items
//    var slidersContainer = document.querySelector('.services-list');
//    var articles_slider = document.querySelector('.articles-slider');
//    var sliderItems = [].slice.call(articles_slider.children);
//    
//    // Initializing the images slider
//    var msImages = new MomentumSlider({
//        // Element to append the slider
//        el: slidersContainer,
//        // CSS class to reference the slider
//        cssClass: 'ms--images',
//        // Generate the 4 slides required
//        range: [0, sliderItems.length - 1]
//    });
//  
//    var tracks = document.querySelector('.ms-track');
//    var trackItems = [].slice.call(tracks.children);
//    
//    for (var i = 0; i < trackItems.length; i++){
//      trackItems[i].innerHTML = sliderItems[i].innerHTML
//    }
//    
//  }
  
  
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.828960, 37.579290],
        zoom: 11,
        // Добавим панель маршрутизации.
        controls: ['routePanelControl']
    }, {
      searchControlProvider: 'yandex#search'
    }),
        
    // Создаем геообъект с типом геометрии "Точка".
      myGeoObject = new ymaps.GeoObject({
          // Опции.
          // Иконка метки будет растягиваться под размер ее содержимого.
          preset: 'islands#blackStretchyIcon',
          // Метку можно перемещать.
          draggable: true
      });
    
    myMap.geoObjects
      .add(myGeoObject)
      .add(new ymaps.Placemark([55.828960, 37.579290], {
          balloonContent: 'Россия, Москва, <br> ул. Милашенкова, 22'
      }))
      .add(new ymaps.Placemark([55.887111,37.523574], {
          balloonContent: 'Клязьминская ул., <br> д. 11, корп. 4'
      }))
      .add(new ymaps.Placemark([55.781086, 37.613029], {
          balloonContent: 'Россия, Москва, <br> Селезнёвская улица, 34к3'
      }))
      .add(new ymaps.Placemark([55.891453, 37.585677], {
          balloonContent: 'Россия, Москва, <br> Алтуфьевское шоссе, 85'
      }));
    
    var control = myMap.controls.get('routePanelControl');

    // Зададим опции панели для построения машрутов.
    control.routePanel.options.set({
        // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
        allowSwitch: false,
        // Включим определение адреса по координатам клика.
        // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
        reverseGeocoding: true,
        // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
        types: { masstransit: true, pedestrian: true, taxi: true }
    });

    // Создаем кнопку, с помощью которой пользователи смогут менять местами начальную и конечную точки маршрута.
    var switchPointsButton = new ymaps.control.Button({
        data: {content: "Поменять местами", title: "Поменять точки местами"},
        options: {selectOnClick: false, maxWidth: 160}
    });
    // Объявляем обработчик для кнопки.
    switchPointsButton.events.add('click', function () {
        // Меняет местами начальную и конечную точки маршрута.
        control.routePanel.switchPoints();
    });
    myMap.controls.add(switchPointsButton);
    
    
    
});
  
  
  document.getElementById('btn_yandex').addEventListener('click', function(){
    if(this.innerHTML == "x"){
      document.querySelector('.ymaps-2-1-72-controls__toolbar_left')
        .style.display = "none";
      this.innerHTML = "Как добраться";
    } else {
      document.querySelector('.ymaps-2-1-72-controls__toolbar_left')
        .style.display = 'block';
      this.innerHTML = "x";
    }
  });
  
  
//  const MAP = document.getElementById('map');
//  MAP.addEventListener('click', function(ev){
//    if(ev.target.value){
//      document.querySelector('.ymaps-2-1-72-controls__toolbar_left')
//        .style.display = 'block';
//      document.getElementById('btn_yandex').innerHTML = "x";
//      ymaps_i(ev.target.value);
//    }
//  });
  
  
//  function ymaps_i(a){
//    let kuda = /^Куда$/;
//    let ymaps_input = document.querySelectorAll('.ymaps-2-1-72-route-panel-input__input');
//    for(let i = 0; i<ymaps_input.length; i++){
//      if(ymaps_input[i].placeholder.match(kuda)){
//        ymaps_input[i].value = a;
//      }
//    }
//  }
  
});














