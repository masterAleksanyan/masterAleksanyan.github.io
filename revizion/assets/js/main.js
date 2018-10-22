$(function(){
  
  $('.logo_city').on('click', function(){
    $('.header_logo_city').toggleClass('block');
  });
  
  var header_category_list = $('.header_category_list li');
  $(header_category_list).on('click', function(){
    $(header_category_list).removeClass('active_category');
    $(this).addClass('active_category');
  });
  
  
  $('.category_btn .view1').on('click', function(){
    $('.category_btn .view1').addClass('active');
    $('.category_btn .view2').removeClass('active');
    $('#category1').addClass('active');
    $('#category2').removeClass('active');
  });
  $('.category_btn .view2').on('click', function(){
    $('.category_btn .view2').addClass('active');
    $('.category_btn .view1').removeClass('active');
    $('#category2').addClass('active');
    $('#category1').removeClass('active');
  });
  
  
  $('.worktime').on('click', function(){
    $(this).next().toggle(200);
  });
  
  
  
  
  
  $('.restaurant_review_category span').on('click', function(){
    var thisis = this;
    var target = $(thisis).attr('data-target');
//    console.log(target);
    var this_comm_div = $(thisis).closest('.restaurant_review');
    if(target === "unhappy-target"){
      $(this_comm_div).find('.happy').hide(300);
      $(this_comm_div).find('.unhappy').show(300);
    } else if (target === "happy-target"){
      $(this_comm_div).find('.unhappy').hide(300);
      $(this_comm_div).find('.happy').show(300);
    } else {
      $(this_comm_div).find('.restaurant_review_content div').show(300);
    }
    
    $('.restaurant_review_category span').removeClass('active');
    $(thisis).addClass('active');
    
  });

  if ($('.reviews_item_answer')){
    $('.reviews_item_answer').prev().css('margin-bottom', '0');
  }
  
  
//  $('.reviews_item').next('.reviews_item_answer');
  
  

  $('.btn_filtr').on('click', function(){
    $('.header_filtr_menu input[type="checkbox"]:checked').prop('checked', false);
    $('#header_filtr_menu').toggle(400);
    $('#filter_names').text('');
  });

  $('#filtration').on('click', function(){ 
    var checked = $('.header_filtr_menu input[type="checkbox"]:checked');
    for(var i = 0;i < checked.length; i++){
      var filter = checked[i].value;

      $('#filter_names').append(filter + ", ");
    };

    $('#header_filtr_menu').hide(400);
  });

  $('.btn_menu_list').on('click', function(){
    $('.btn_menu_list i').toggleClass('fa-align-right');
    $('.header_menu_list').toggleClass('flex');
  });
  
  var header_menu_list = $('.header_menu_list li');
  $(header_menu_list).on('click', function(){
    $(header_menu_list).removeClass('active');
    $(this).addClass('active');
    $('.btn_menu_list i').toggleClass('fa-align-right');
    $('.header_menu_list').toggleClass('flex');
  });

  $('.reiting').on('click', function(){
    $('i.fa-caret-down').toggleClass('fa-caret-up');
  });

  $('.header_logo_city li').on('click', function(){
    var li = this;
    var city = $(li).find('a').html();
    var search_city = $('.header_search_city span');
    var logo_city = $('.header_logo_img span');
    var comment_city = $('.reviews_title .active_city');
    $(logo_city).html(city);
    $(search_city).html(city);
    $(comment_city).html(city);
    $('.header_logo_city').toggleClass('block');
    console.log(city);
  });
  

  var timetable_contact = $('.timetable_contact p');
  $(timetable_contact).on('click', function(){
    $(this).find('.show-next').toggle();
    $(this).find('.show_').toggle();
  });
  
  $('.leaderboard_showbtn').on('click', function(){
    $('.leaderboard_showbtn i').toggleClass('fa-align-right');
    $('.leaderboard_menu').toggle(300);
    
  });
  
  var leadeboard_li = $('.leaderboard_menu li');
  $(leadeboard_li).on('click', function(){
    $(leadeboard_li).removeClass('active');
    $(this).addClass('active');
  });
  
});

  