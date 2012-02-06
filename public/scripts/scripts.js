$(document).ready(function() {

  $(function() {
    var SCROLL_DURATION = 500;

    var images = $('section');
    var curr = 0;

    var scrollUp = function() {
      var oldcurr = curr;
      curr = Math.max(0, curr - 1);
      if (curr != oldcurr) $.scrollTo(images[curr], SCROLL_DURATION, { easing: 'easeInOutQuad' });
    }

    var scrollDn = function() {
      curr = curr + 1;
      $.scrollTo(images[curr], SCROLL_DURATION, { easing: 'easeInOutQuad' });
    }

    $(document).keydown(function(e) {
      if (e.keyCode == 38) {
        scrollUp();
        return false;
      }
      if (e.keyCode == 40) {
        scrollDn();
        return false;
      }
    })
  });

  $(window).load(function() {
    $.scrollTo(0);
    setTimeout(function() {
      window.resizeTo(1024, 768 + 30);
      }, 200);
    })

  });
  
  $(window).scroll(function() {
      // use the value from $(window).scrollTop();
      var pixels_scrolled = $(window).scrollTop();
      console.log(pixels_scrolled); 
  		$('.pixels_scrolled').html(pixels_scrolled); 


  		$("#waves_1").css("background-position", pixels_scrolled * 1);
  		$("#waves_2").css("background-position", pixels_scrolled * 8);
  		$("#waves_3").css("background-position", pixels_scrolled * 10);
  		$("#waves_4").css("background-position", pixels_scrolled * 6);
  		$("#waves_5").css("background-position", pixels_scrolled * 4);
  		$("#waves_6").css("background-position", pixels_scrolled * 12);						



  });
  