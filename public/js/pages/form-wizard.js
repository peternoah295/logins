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
            $('#rootwizard').find('.progress-bar').css({width:$percent+'%'});
        },
        'onNext': function(tab, navigation, index) {
            var $valid = $("#wizardForm").valid();
            if(!$valid) {
                $validator.focusInvalid();
                return false;
            }
            document.getElementById('prev').style.display = 'block';
            document.getElementById('next').style.display = 'none';
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