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

    // bring one element forward and send the other back (change colors as well)
    function switchOverlap(one, two) {
        one.css({
            "z-index": 2,
            color: "#61B329",
            backgroundColor: "#FFFFFF"
        });
        two.css({
            "z-index": 1,
            color: "#FFFFFF",
            backgroundColor: "#61B329"
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

    /*          */
    /*   MAIN   */
    /*          */
    $('.parallax').parallax();

    // on window scroll, fade item if in view
    $(window).scroll(function() {
        $('.fadeIn').each(function(i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object && $(this).css("opacity") == "0") {
                fadeInAnimation($(this));
                $(this).removeClass("fadeIn");
            }
        });
    });

    // green arrow on hover, else white
    $('#downArrow').hover(function() {
        fadeImage($(this), 150, 'img/icons/greenArrow.png');
    }, function() {
        fadeImage($(this), 150, 'img/icons/whiteArrow.png');
    });

    // scroll to second section if arrow clicked
    $('#downArrow').on("click", function() {
        scrollToAnchor($('.second'));
    });

    // tab functionality (second section)
    $('.tab').on("click", function(elem){
      tabClicked = $(elem.currentTarget);
      tabNotClicked = $(".tab[tabId = " + ($(elem.currentTarget).attr("tabId") * -1) + "]");
      contentIn = $('.' + tabClicked.attr("name"));
      contentOut = $('.' + tabNotClicked.attr("name"));
      if (contentOut.css('opacity') != "0"){
        switchOverlap(tabClicked, tabNotClicked);
        fadeInAnimation(contentIn);
        contentOut.animate({
            opacity: "0"
        }, 100);
      }
    });

    $('.connectButton a img').hover(
        function() {
            $(this).css("cursor", "pointer");
            if ($(this).css("width") == "100px"){
            $(this).animate({
                "width": 110
            }, 500);
          }
        },
        function() {
            $(this).animate({
                "width": 100
            }, 500);
        });
});
