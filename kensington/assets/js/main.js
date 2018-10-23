$(document).ready(function($){
  
  $('#header-menu_btn').on('click', function(){
    $('.header-menu').slideToggle();
    $(this).toggleClass('active');
  });
  
  $('.top-search_btn').on('click', function(){
    $('#search-form').slideToggle();
  });
  
  
  $(document).mouseup(function(e) {
    var $target1 = $(e.target);
    if ($target1.closest('.header-menu').length == 0 && $target1.closest('#header-menu_btn').length == 0) {
      $('.header-menu').slideUp();
      $('#header-menu_btn').removeClass('active');
    }
  });
  $(document).mouseup(function(e) {
    var $target2 = $(e.target);
    if ($target2.closest('#search-form').length == 0 && $target2.closest('.top-search_btn').length == 0) {
      $('#search-form').slideUp();
    }
  });
  
  
  $('#header-slider').slick();
  $('#header-slider .slick-prev').html('<i class="fas fa-caret-left"></i>');
  $('#header-slider .slick-next').html('<i class="fas fa-caret-right"></i>');
  
  $('#filter-slider').slick({
    centerMode: true,
    variableWidth: true,
    dots: true,
    responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: false,
        centerMode: false,
        variableWidth: false
      }
    }
  ]
  });
  $('#filter-slider .slick-prev').html('<i class="fas fa-caret-left"></i>');
  $('#filter-slider .slick-next').html('<i class="fas fa-caret-right"></i>');
  
  $('#property-slider').slick({
//    infinite: false,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 576,
      settings: {
        dots: false,
        centerMode: false,
        variableWidth: false
      }
    }
  ]
  });
  
  
  $('.footer .links-title').on('click', function(){
    if ($(window).width() < 768){
      $(this).toggleClass('active');
      var footer_link = $(this).next('.footer-links');
      $(footer_link).slideToggle();
    }
  });
  
  $('.single-menu-btn').on('click', function(){
    $(this).next('.container').slideToggle();
  });
  
  
});
