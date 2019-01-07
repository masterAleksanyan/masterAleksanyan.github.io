$(document).ready(function($){
  
  if($(window).width() < 1024){
    
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
    
    for (var i = 0; i < trackItems.length; i++){
      trackItems[i].innerHTML = paginationItems[i].innerHTML
    }
    
    var slideW = $('.ms-slide').width();
    
    tracks.addEventListener('click', function(){
      var tracksTransform = (tracks.style.transform);
      var s = '';
      for(var i=0; i<tracksTransform.length; i++){
        if(+tracksTransform[i] === +tracksTransform[i]){
         s += tracksTransform[i]
        }
      }
      if(s > (paginationItems.length - 2) * slideW){
//        console.log(s, (paginationItems.length - 2) * slideW)
        
      }
    })
    
    
    
  }
  
  
  
});





