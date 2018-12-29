$(document).ready(function($){
  
  $('#menu-mob-btn').on('click', function(){
    $(this).toggleClass('active');
    $('#header-menu-block').find('.header-menu').toggleClass('active');
    $('.filter-menu').toggleClass('active');
    $('body').toggleClass('active');
    if ($('.language').css('display') == 'none'){
      $('.language').addClass('active');
    } else {
      $('.language').removeClass('active');
    }
  });
  
  
  
//  $('.menu-mob-btn').on('click', function(){
//      $(this).toggleClass('active');
//      $('.filter-menu').toggleClass('active');
//      
//  });
  
  $('.filter-name').on('click', function(){
    $('.filter-list').slideUp(300);
    $('.filter-name').removeClass('active');
    $(this).next('ul').slideToggle(300);
    $(this).addClass('active');
  });
  $(document).mouseup(function(e) {
    var $target1 = $(e.target);
    if ($target1.closest('.filter-list').length == 0 && $target1.closest('.filter-name').length == 0 && $(window).width() < 992.2) {
      $('.filter-list').slideUp();
      $('.filter-name').removeClass('active');
    }
  });
  
  $('#slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });
  
  
  $('.creative-text').niceScroll({
    cursorcolor: '#ebb03d'
  });
  
  $('#language').dropkick({
    mobile: true
  });
  $('#state').dropkick({
    mobile: true
  });
  
});
