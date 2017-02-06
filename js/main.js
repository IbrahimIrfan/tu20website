$(document).on("ready", function() {
    /*           */
    /* FUNCTIONS */
    /*           */

    //scroll to anchor
    function scrollToAnchor(tag) {
        $('html,body').animate({
            scrollTop: tag.offset().top
        }, 1000);
    }

    // fade an image out and fade in a new image
    function fadeImage(item, delay, imgPath) {
        item.fadeOut(delay, function() {
            item.attr('src', imgPath);
            item.fadeIn(delay);
        });
    }

    // move slightly up while fading into view
    function fadeInAnimation(elem) {
        elem.css("top", "+=20px");
        elem.animate({
            'opacity': '1',
            'top': '-=20px'
        }, 1000);
    }

    function checkFade(){
      $('.fadeIn').each(function(i) {
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          if (bottom_of_window > bottom_of_object && $(this).css("opacity") == "0") {
              fadeInAnimation($(this));
              $(this).removeClass("fadeIn");
          }
      });
    }


    /*          */
    /*   MAIN   */
    /*          */
    checkFade()
    $('.parallax').parallax();

    // on window scroll, fade item if in view
    $(window).scroll(function() {
      checkFade();
    });

    // green arrow on hover, else white
    $('#downArrow').hover(function() {
        fadeImage($(this), 150, 'img/icons/greenArrow.png');
    }, function() {
        fadeImage($(this), 150, 'img/icons/whiteArrow.png');
    });

    // scroll to second section if arrow clicked
    $('#downArrow').on("click", function() {
        scrollToAnchor($('.section'));
    });

    $('#ctaBtn').on("click", function(){
      $.fancybox({
          href: '#joinPopup',
          width: 400,
          autoDimensions: false,
          autoSize: false
      });
    });

});
