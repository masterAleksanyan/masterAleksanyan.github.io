$(document).ready(function() {

  $('.confident-link').click(function() {
      $('.hidden-conf').show();
      if ($(window).height() < 760) {
          $('.conf-info').css({
              'height': ($(window).height() - 120),
              'overflow-y': 'scroll'
          });
      };
      return false;
  });
  $('.close-conf').click(function() {
      $('.hidden-conf').hide();
      return false;
  });
  if ($('select').length) {} else {
      $('.c-s').css({
          'display': 'none'
      })
  };
  
  
  var date, month, year, day;
  date = new Date();
  
  day = date.getDate() + 2;
  month = date.getMonth() + 1;
  year = date.getFullYear();
  var price_date = document.querySelectorAll('.price-old-x--top');
  for (let i=0; i<price_date.length;i++){
    price_date[i].innerHTML = day + '.' + month + '.' + year;
  }
  
  
  $('.header__call').on('click', function(){
    $('.modal_mouse_out').addClass('active');
  });
  $('.phone-call').on('click', function(){
    $('.modal_mouse_out').addClass('active');
  });
  
  $('.close-mouse').on('click', function(){
    $('.modal_mouse_out').removeClass('active');
  });
  
  var isEvent = true;
  $(document).mouseleave(function(){
    if (isEvent){
      $('.modal_mouse_out').addClass('active');
    }
    isEvent = false;
  });
  
  
  function start_timer(){
    setInterval(timer, 15000);
  }
  
  var goods_item = 60;
  
  if(localStorage.getItem('goods_item')){
    goods_item = localStorage.getItem('goods_item');
    $('.lastpack').html(goods_item);
  } else {
    $('.lastpack').html('60');
  }
  
  function timer(){
    if(goods_item > 7){
      $('.lastpack').html(goods_item - 1);
      goods_item--;
    } else {
      $('.lastpack').html(7);
    }
    localStorage.setItem("goods_item", goods_item);
  }

  start_timer();
  
  ymaps.ready(function(){
    ymaps.geolocation.get({
      provider: "yandex"
    }).then(function (result) {
      var g = result.geoObjects.get(0);
      if (g.getCountry() != 'Россия'){
        $('.country_span').html('Страны СНГ');
      } else {
        $('.country_span').html(g.getLocalities()[0]);
      }
    });
  });
  
  $('input[name="phone"]').mask('+7 (999) 999-99-99');
  
  
  if (window.location.href.indexOf("callback=") > -1){
    var ind = window.location.href;
    var arr = ind.split('callback=');
    var num = arr[1];
    num = parseInt(num);
    
    alert('Есть параметр callback, со значением:' + num);
  }
  
});









