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
    var pageSection = $(".parallax,.bg-img");
    pageSection.each(function(indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    $(document).ready(function() {

    	new Chart(document.getElementById("chart1"), {
    		"type": "line",
    		"data": {
    			"labels": [
                    "Bank of America", 
                    "Barclays",
                    "Chase", 
                    "Chime", 
                    "Citi", 
                    "Huntington",
                    "Navy Federal",
                    "P.N.C",
                    "Truist",
                    "Woodforest"
                ],
    			"datasets": [{
    				"label": "Logs Available",
    				"data": [
                        11, 
                        10,
                        16, 
                        20,
                        17,
                        17,
                        11,
                        13, 
                        12, 
                        10
                    ],
    				"borderColor": "rgb(135,205,235, 1)",
                    "backgroundColor":  "rgba(135,205,235,0.3)", 
    			}]
    		},
    		"options": {}
    	});

    	new Chart(document.getElementById("chart2"), {
    		"type": "bar",
    		"data": {
    			"labels": [
                    "Bank of America", 
                    "Barclays",
                    "Chase", 
                    "Chime", 
                    "Citi", 
                    "Huntington",
                    "Navy Federal",
                    "P.N.C",
                    "Truist",
                    "Woodforest"
                ],
    			"datasets": [{
    				"label": "Logs Available",
    				"data": [
                        11, 
                        10,
                        16, 
                        20,
                        17,
                        17,
                        11,
                        13, 
                        12, 
                        10
                    ],
    				"fill": false,
    				"backgroundColor": [
                        "rgba(3, 169, 245, 0.85)", 
                        "rgba(135, 206, 235, 0.85)",
                        "rgba(0, 115, 173, 0.85)",
                        "rgba(71, 88, 143, 0.85)", 
                        "rgba(250, 183, 2, 0.85)", 
                        "rgba(208, 173, 85, 0.85)", 
                        "rgba(73, 192, 208, 0.85)",
                        "rgba(22, 160, 134, 0.85)", 
                        "rgba(134, 188, 66, 0.85)", 
                        "rgba(135, 206, 235, 0.85)"
                    ],
    				"borderColor": [
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)"
                    ],
    				"borderWidth": 1
    			}]
    		},
    		"options": {
    			"scales": {
    				"yAxes": [{
    					"ticks": {
    						"beginAtZero": true
    					}
    				}]
    			}
    		}
    	});

    	new Chart(document.getElementById("chart3"), {
    		"type": "pie",
    		"data": {
                "labels": [
                    "Bank of America", 
                    "Barclays",
                    "Chase", 
                    "Chime", 
                    "Citi", 
                    "Huntington",
                    "Navy Federal",
                    "P.N.C",
                    "Truist",
                    "Woodforest"
                ],
    			"datasets": [{
    				"label": "Logs Available",
                    "data": [
                        11, 
                        10,
                        16, 
                        20,
                        17,
                        17,
                        11,
                        13, 
                        12, 
                        10
                    ],
                    "backgroundColor": [
                        "rgba(3, 169, 245, 0.85)", 
                        "rgba(135, 206, 235, 0.85)",
                        "rgba(0, 115, 173, 0.85)",
                        "rgba(71, 88, 143, 0.85)", 
                        "rgba(250, 183, 2, 0.85)", 
                        "rgba(208, 173, 85, 0.85)", 
                        "rgba(73, 192, 208, 0.85)",
                        "rgba(22, 160, 134, 0.85)", 
                        "rgba(134, 188, 66, 0.85)", 
                        "rgba(135, 206, 235, 0.85)"
                    ],
                    "borderColor": [
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)"
                    ],
    			}]
    		}
    	});

        new Chart(document.getElementById("chart4"), {
    		"type": "doughnut",
    		"data": {
                "labels": [
                    "Bank of America", 
                    "Barclays",
                    "Chase", 
                    "Chime", 
                    "Citi", 
                    "Huntington",
                    "Navy Federal",
                    "P.N.C",
                    "Truist",
                    "Woodforest"
                ],
    			"datasets": [{
    				"label": "Logs Available",
                    "data": [
                        11, 
                        10,
                        16, 
                        20,
                        17,
                        17,
                        11,
                        13, 
                        12, 
                        10
                    ],
                    "backgroundColor": [
                        "rgba(3, 169, 245, 0.85)", 
                        "rgba(135, 206, 235, 0.85)",
                        "rgba(0, 115, 173, 0.85)",
                        "rgba(71, 88, 143, 0.85)", 
                        "rgba(250, 183, 2, 0.85)", 
                        "rgba(208, 173, 85, 0.85)", 
                        "rgba(73, 192, 208, 0.85)",
                        "rgba(22, 160, 134, 0.85)", 
                        "rgba(134, 188, 66, 0.85)", 
                        "rgba(135, 206, 235, 0.85)"
                    ],
                    "borderColor": [
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)",
                        "rgba(255, 255, 255 , 0.49)"
                    ],
    			}]
    		}
    	});

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

$(document).ready(function() {
    "use strict";
    $('#example').dataTable();    
    $('#example2').dataTable();    
});