$(document).ready(function($){
  
  $('#burger_btn').on('click', function(){
    $(this).toggleClass('active');
    $('#menu-block').slideToggle();
  });
  
  $('#reviews-slider').slick({
    slidesToShow: 4,
    infinite: true,
    nextArrow: '<p class="slick-arrow slick-next"><i class="icon-angle-right"></i></p>',
    prevArrow: '<p class="slick-arrow slick-prev"><i class="icon-angle-left"></i></p>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });
  
  
  ymaps.ready(init);
  function init(){
    // Создание карты.    
    var myMap = new ymaps.Map("map", {
        center: [49.99319487, 36.22163656],
        zoom: 17,
        controls: []
    });
    
    myMap.behaviors.disable([
      'drag',
      'scrollZoom'
    ]);
    
    var myPin = new ymaps.GeoObjectCollection({}, {
      iconLayout: 'default#image',
      iconImageHref: 'assets/images/marker.png',
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42]
    });
    
    var myPlacemark = new ymaps.Placemark([49.99319487, 36.22163656], {
      hintContent: 'Харьков',
      balloonContentHeader: 'Однажды',
      balloonContentBody: 'В Харькове'
    });
    
    
    myPin.add(myPlacemark);
    myMap.geoObjects.add(myPin);
  }
  
  
});
