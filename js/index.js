// PROFILE PIC
jQuery(document).ready(function() {

    var picOffset = jQuery(".pro_pic").offset().top;

    jQuery(window).scroll(function() {
        var scrollPos = jQuery(window).scrollTop();
        
        if(scrollPos >= picOffset) {
            jQuery(".pro_pic").addClass("fixed");
            jQuery(".pro_pic").css({
                "color": "orange",
                "background-color" : "rgb(1, 1, 19)"
            });
        }

        else{
            jQuery(".pro_pic").removeClass("fixed");
        }
    });
    
});

// SCROLL EVENTS
jQuery(document).ready(function() {

    var windowHeight = jQuery(window).height();
    var windowScrollPosTop = jQuery(window).scrollTop();
    var windowScrollPosBottom = windowHeight + windowScrollPosTop;

    jQuery.fn.revealOnScroll = function(direction, speed) {
        return this.each(function() {
            var objectOffset = jQuery(this).offset();
            var objectOffsetTop = objectOffset.top;

            if(!jQuery(this).hasClass("hidden")) {

                if(direction == "right") {
                    jQuery(this).css({
                        "opacity": 0,
                        "right": "5000px"
                    });
                }

                else if(direction == "left") {
                    jQuery(this).css({
                        "opacity": 0,
                        "right": "-5000px"
                    });
                }

                else{
                    jQuery(this).css({
                        "opacity": 0
                    })
                }

                jQuery(this).addClass("hidden");
            }

            if(!jQuery(this).hasClass("animation_complete")) {
                if(windowScrollPosBottom > objectOffsetTop) {
                    jQuery(this).animate({"opacity": 1, "right": 0}, speed).addClass("animation_complete")
                }
            }
        });
    } //end function here

    jQuery(window).scroll(function() {

        windowHeight = jQuery(window).height();
        windowScrollPosTop = jQuery(window).scrollTop();
        windowScrollPosBottom = windowHeight + windowScrollPosTop;

        jQuery(".projects").revealOnScroll("right", 4000);
        jQuery(".skills").revealOnScroll("left");
        jQuery(".skills ul li").revealOnScroll("right", 1000);
        jQuery(".services ul li").revealOnScroll("left");
    });
});