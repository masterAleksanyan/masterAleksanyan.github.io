$(document).ready(function($){
  
  if($(window).width() < 1025){
    
    // Get pagination items
    var slidersContainer = document.querySelector('.sliders-container');
    var pagination = document.querySelector('.pagination');
    var paginationItems = [].slice.call(pagination.children);
    
    // Initializing the images slider
    var msImages = new MomentumSlider({
        // Element to append the slider
        el: slidersContainer,
        // CSS class to reference the slider
        cssClass: 'ms--images',
        // Generate the 4 slides required
        range: [0, paginationItems.length - 1]
    });
  
    var tracks = document.querySelector('.ms-track');
    var trackItems = [].slice.call(tracks.children);
    console.log(trackItems.length, paginationItems.length)
    
    for (var i = 2; i < trackItems.length - 2; i++){
      console.log(trackItems[i])
      trackItems[i].innerHTML = paginationItems[i-2].innerHTML;
    }
    trackItems[0].innerHTML = paginationItems[paginationItems.length - 2].innerHTML;
    trackItems[1].innerHTML = paginationItems[paginationItems.length - 1].innerHTML;
    trackItems[trackItems.length-2].innerHTML = paginationItems[0].innerHTML;
    trackItems[trackItems.length-1].innerHTML = paginationItems[1].innerHTML;
    
  }
  
  
  
});





