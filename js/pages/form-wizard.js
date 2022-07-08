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

            var amount = document.getElementById('the-input').value;
            localStorage.setItem('the-bitcoin', amount);

            document.getElementById('modal-amount').innerText = 'Send $'+ amount;

            let binance = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1h");
            let bitcoin = document.getElementById("satoshinakamoto");

            binance.onmessage = event => {
                let confirm = JSON.parse(event.data);
                bitcoin.innerHTML = `
                <i class="fas fa-spin fa-sync-alt spinner-bordez"></i> awaiting 
                <span id="the-one">
                    ${(localStorage.getItem('the-bitcoin') / parseFloat(confirm.k.c)).toFixed(5)}
                </span> bitcoin payment
                `;
            }

            if(!localStorage.getItem('added-time')){
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
                        $('#rootwizard').find('.bg-success').css({width:(wide/6)+'%'});
                        document.getElementById('escoz').innerText = `Time left: ${minutes}:${seconds}`;
                    }
                }
            } else {
                console.log('Hello world')
            }
            localStorage.setItem('added-time',true)
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