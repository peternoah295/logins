(function($) {
    "use strict";
    var $window = $(window);
    $('#preloader').fadeOut('normall', function() {
        $(this).remove();
    });
    $window.on('scroll', function() {
        var scroll = $window.scrollTop();
        if (scroll <= 50) {
            $("header").removeClass("scrollHeader").addClass("fixedHeader");
        } else {
            $("header").removeClass("fixedHeader").addClass("scrollHeader");

        }
    });
    var pageSection = $(".parallax,.bg-img");
    pageSection.each(function(indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    $window.on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);
        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });
    $(".scroll-to-top").on('click', function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });


    $(document).ready(function() {
        if ($(".countdown").length !== 0) {
            var tpj = jQuery;
            var countdown;
            tpj(document).ready(function() {
                if (tpj(".countdown").countdown == undefined) {
                    revslider_showDoubleJqueryError(".countdown");
                } else {
                    countdown = tpj(".countdown").show().countdown({
                        date: "7 Aug 2022 00:01:00",
                        format: "on"
                    });
                }
            });
        }
        $('#services-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            dots: true,
            nav: true,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                768: {
                    items: 3,
                    margin: 10
                },
                992: {
                    items: 3,
                    margin: 10
                },
                1200: {
                    items: 5,
                    margin: 10
                }
            }
        });

        if ($("#rev_slider_2").length !== 0) {
			var tpj = jQuery;
			var revapi2;
			tpj(document).ready(function() {
				if (tpj("#rev_slider_2").revolution == undefined) {
					revslider_showDoubleJqueryError("#rev_slider_2");
				} else {
					revapi2 = tpj("#rev_slider_2").show().revolution({
						sliderType: "standard",
						sliderLayout: "fullwidth",
						dottedOverlay: "none",
						delay: 9000,
						spinner: "spinner4",
						navigation: {
							keyboardNavigation: "off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation: "off",
							onHoverStop: "off",
							touch: {
								touchenabled: "on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							},
							arrows: {
								enable: false,
								style: 'metis',
								tmp: '',
								rtl: false,
								hide_onleave: true,
								hide_onmobile: true,
								hide_under: 0,
								hide_over: 9999,
								hide_delay: 200,
								hide_delay_mobile: 1200,
								left: {
									container: 'slider',
									h_align: 'left',
									v_align: 'center',
									h_offset: 20,
									v_offset: 0
								},
								right: {
									container: 'slider',
									h_align: 'right',
									v_align: 'center',
									h_offset: 20,
									v_offset: 0
								}
							},
							bullets: {
								enable: false,
							},
						},
						responsiveLevels: [1240, 1024, 767, 480],
                        gridwidth: [1170, 1170, 767, 480, 480],
						gridheight: [600, 1550, 1050, 1040, 1040],
						lazyType: "none",
						shadow: 0,
						shuffle: "off",
						autoHeight: "off",
					});
				}
			});
		}
    });

    $window.on("load", function() {
        $.scrollIt({
            upKey: 38,
            downKey: 40,
            easing: 'swing',
            scrollTime: 600,
            activeClass: 'active',
            onPageChange: null,
            topOffset: -70
        });
        function toggleFullScreen() {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        }
        ;var navbar_init = function() {
            $('.switcher-setting').on('click', function() {
                toggleFullScreen();
                return false;
            });
        };
        navbar_init();

    });
}
)(jQuery);

function changeImage() {
    var image = document.getElementById('theIcon');
    if(image.classList.contains('fa-toggle-on')){
        image.classList.remove('fa-toggle-on')
        image.classList.add('fa-toggle-off');
    } else if(image.classList.contains('fa-toggle-off')){
        image.classList.remove('fa-toggle-off')
        image.classList.add('fa-toggle-on');
    }
}
$("#exampleModal").on("show.bs.modal", function (event) {
    ("use strict");
});