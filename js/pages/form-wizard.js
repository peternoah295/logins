$(document).ready(function() {
    
    "use strict";
    
    var $validator = $("#wizardForm").validate({
        rules: {
            exampleInputName: {
                required: true,
                number: true
            }
        }
    });
 
    $('#rootwizard').bootstrapWizard({
        'tabClass': 'nav nav-tabs',
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = ($current/$total) * 100;
            $('#rootwizard').find('.bg-success').css({width:$percent+'%'});
        },
        'onNext': function(tab, navigation, index) {
            var $valid = $("#wizardForm").valid();
            if(!$valid) {
                $validator.focusInvalid();
                return false;
            }
            document.getElementById('prev').style.display = 'block';
            document.getElementById('next').style.display = 'none';

            var wide = 100;
            var identity = setInterval(scene, 1000);
            function scene() {
                if(wide <= 50){
                    clearInterval(identity);
                } else {
                    wide--;
                    var minutes = Math.floor(wide/60);
                    var seconds = wide - minutes * 60;
                    if(seconds < 10){
                        seconds = '0'+seconds
                    }
                    $('#rootwizard').find('.bg-success').css({width:wide+'%'});
                    document.getElementById('escoz').innerText = `Time left: ${minutes}:${seconds}`;
                }
            }
        },
        'onPrevious': function(tab, navigation, index) {
            document.getElementById('prev').style.display = 'none';
            document.getElementById('next').style.display = 'block';
        },
        'onTabClick': function(tab, navigation, index) {
            var $valid = $("#wizardForm").valid();
            if(!$valid) {
                $validator.focusInvalid();
                return false;
            }
        },
    });
    
});