(function(){
    "use strict";
  
    var granimInstance = new Granim({
      element: '#canvas-interactive',
      name: 'interactive-gradient',
      elToSetClassOn: '.canvas-interactive-wrapper',
      direction: 'diagonal',
      isPausedWhenNotInView: true,
      stateTransitionSpeed: 500,
      states : {
        "default-state": {
          gradients: [
            ['#B3FFAB', '#12FFF7'],
            ['#ADD100', '#7B920A'],
            ['#1A2980', '#26D0CE']
          ],
          transitionSpeed: 10000
        },
        "violet-state": {
          gradients: [
            ['#9D50BB', '#6E48AA'],
            ['#4776E6', '#8E54E9']
          ],
          transitionSpeed: 2000
        },
        "orange-state": {
          gradients: [ ['#FF4E50', '#F9D423'] ],
          loop: false
        }
      }
    });
  
    window.addEventListener('load', function() {
      $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: true,
        slideshow: true,
        slideshowSpeed: 3000,
        animationSpeed: 800,
        start: function(slider) {
            granimInstance.changeState("default-state");
        },
        after: function(slider) {
            if (slider.currentSlide === 0) {
                granimInstance.changeState("default-state");
            } else if (slider.currentSlide === 1) {
                granimInstance.changeState("violet-state");
            } else if (slider.currentSlide === 2) {
                granimInstance.changeState("orange-state");
            }
        }
      });
    });

    $(window).on('load', function () {
        $('#maintext').flexslider({
            animation: "fade",
            slideshowSpeed: 300,
            animationSpeed: 800,
            controlNav: false,
            directionNav: false
        });
    });
  
})();
  