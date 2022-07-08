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

            localStorage.setItem('add-left',600)
            var wide = localStorage.getItem('add-left');

            var identity = setInterval(scene, 1000);
            function scene() {
                if(wide <= 0){
                    clearInterval(identity);
                } else {
                    wide--;
                    var minutes = Math.floor(wide/60);
                    var seconds = wide - minutes * 60;
                    if(seconds < 10){
                        seconds = '0'+seconds
                    }
                    $('#rootwizard').find('.bg-info').css({width:(wide/6)+'%'});
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