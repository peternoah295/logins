let items = [];

var table1 = jQuery('#example1').DataTable();

if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){

    items = JSON.parse(localStorage.getItem('banklogs'));
    document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);

    items.map(data=>{
        var image = `<td><img src=${data.image}></td>`
        var balance =`<td class="btn-balance">${data.balance}</td>`
        var account = `<td>${data.account}</td>`
        var remove = `<td><img src="failure.svg" class="btn-remove"></td>`
        var price = `<td class="btn-price">${data.price}</td>`
        var website = `<td>${data.website}</td>`
        var info1 = `<td>${data.info1}</td>`
        var info2 = `<td>${data.info2}</td>`
        var info3 = `<td>${data.info3}</td>`
        var info4 = `<td>${data.info4}</td>`
        var info5 = `<td>${data.info5}</td>`
        var info6 = `<td>${data.info6}</td>`
        
        table1.row.add([
            image,
            balance,      
            account,   
            remove,
            price,
            info1,   
            info2,   
            info3,   
            info4,   
            info5,   
            info6,   
            website,      
        ]).draw();
    });

    for(var i = 0; i < items.length; i++) {

        if((items[i].account).includes('CHECKING') || (items[i].account).includes('SPENDING') || (items[i].account.includes['CURRENT'])){
            var cartRow3 = document.createElement('div');
            cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-4', 'col-6');
            var balance2 = items[i].balance;
            var price2 = items[i].price;
            var balance3 = balance2.replace('Balance: ', '');
            var price3 = price2.replace('Price: ', 'In Cart: ');
            var cartItems3 = document.getElementsByClassName('xenon3')[0];
            var cartRowContents3 = `
                <div class="pricing-list highlight">
                    <div class="pricing-list-price">
                        <h2 class="text-white">${balance3}</h2>
                        <img src=${items[i].image} class="borderp">
                    </div>
                    <ul>
                        <li class="text-white">${items[i].website} </li>
                        <li class="text-white">${items[i].info1} </li>
                        <li class="text-white">${items[i].info2} </li>
                        <li class="text-white">${items[i].info3} </li>
                        <li class="text-white">${items[i].info4} </li>
                        <li class="text-white">${items[i].info5} </li>
                        <li class="text-white">${items[i].info6} </li>
                        <li class="text-white">${(items[i].account).replace('[','<br>[').replace(']',' ACCOUNT]')}</li>
                        <button type="submit" class="butn white">
                            ${price3}
                        </button>
                    </ul>
                </div>
            `;
            cartRow3.innerHTML = cartRowContents3;
            cartItems3.prepend(cartRow3);
        } else {
            var cartRow3 = document.createElement('div');
            cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-4', 'col-6');
            var balance2 = items[i].balance;
            var price2 = items[i].price;
            var balance3 = balance2.replace('Balance: ', '');
            var price3 = price2.replace('Price: ', 'In Cart: ');
            var cartItems3 = document.getElementsByClassName('xenon3')[0];
            var cartRowContents3 = `
                <div class="pricing-list">
                    <div class="pricing-list-price">
                        <h2>${balance3}</h2>
                        <img src=${items[i].image} class="borderp">
                    </div>
                    <ul>
                        <li>${items[i].website} </li>
                        <li>${items[i].info1} </li>
                        <li>${items[i].info2} </li>
                        <li>${items[i].info3} </li>
                        <li>${items[i].info4} </li>
                        <li>${items[i].info5} </li>
                        <li>${items[i].info6} </li>
                        <li>${(items[i].account).replace('[','<br>[').replace(']',' ACCOUNT]')}</li>
                        <button type="submit" class="butn">
                            ${price3}
                        </button>
                    </ul>
                </div>
            `;
            cartRow3.innerHTML = cartRowContents3;
            cartItems3.prepend(cartRow3);
        }
    }

    updateCartTotal();

    var removeFromCartButtons = document.getElementsByClassName('btn-remove');
    for(var i = 0; i <removeFromCartButtons.length; i++){
        var button = removeFromCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
} else {
    document.getElementById('logsection').style.display = 'none';
    document.getElementById('logsection2').style.display = 'none';
    document.getElementById('cartlength').style.display = 'none';
}


function removeCartItem(event) {
    var buttonClicked = event.target
    var cartItem = buttonClicked.parentElement.parentElement;
    var price = cartItem.children[4].innerText;
    var balance = cartItem.children[1].innerText;
    var account = cartItem.children[2].innerText;
    var website = cartItem.children[11].innerText;
    var image = cartItem.children[0].children[0].src;
    var info1 = cartItem.children[5].innerText;
    var info2 = cartItem.children[6].innerText;
    var info3 = cartItem.children[7].innerText;
    var info4 = cartItem.children[8].innerText;
    var info5 = cartItem.children[9].innerText;
    var info6 = cartItem.children[10].innerText;
    removeItemFromCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6);
    buttonClicked.parentElement.parentElement.remove();
}


function removeItemFromCart(price, balance,account,website,image,info1,info2,info3,info4,info5,info6){
    let item = {
        price: price,
        balance: balance,
        account: account,
        website: website,
        image: image,
        info1: info1,
        info2: info2,
        info3: info3,
        info4: info4,
        info5: info5,
        info6: info6
    }
    function checkAdult(items) {
        return JSON.stringify(items) !== JSON.stringify(item)
    }
    localStorage.setItem('time-left',600);
    localStorage.setItem('banklogs', JSON.stringify(items.filter(checkAdult)));
    items = items.filter(checkAdult);
    window.location.reload()
}


function updateCartTotal() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });

    if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
        document.getElementById('showtoasts').innerHTML = `Download ${JSON.parse(localStorage.getItem('banklogs')).length} Bank Log✅`;
        document.getElementById('modal-amount').innerHTML = `
            Send $ <span id="omanyala" class="countup">${parseInt(total).toLocaleString()}</span> 
        `;
        document.getElementById('titlelogs2').innerText = `Cart: ${JSON.parse(localStorage.getItem('banklogs')).length}, Total: $${total.toLocaleString()}`
    } else if(JSON.parse(localStorage.getItem('banklogs')).length == 2) {
        document.getElementById('showtoasts').innerHTML = `Download ${JSON.parse(localStorage.getItem('banklogs')).length} Bank Logs✅`;
        document.getElementById('modal-amount').innerHTML = `
            Send $ <span id="omanyala" class="countup">${parseInt(total).toLocaleString()}</span> 
        `;
        document.getElementById('titlelogs2').innerText = `Cart: ${JSON.parse(localStorage.getItem('banklogs')).length}, Total: $${total.toLocaleString()}`
    } else if(JSON.parse(localStorage.getItem('banklogs')).length == 3) {
        document.getElementById('showtoasts').innerHTML = `Download ${JSON.parse(localStorage.getItem('banklogs')).length} Bank Logs✅`;
        document.getElementById('modal-amount').innerHTML = `
            Send $ <span id="omanyala" class="countup">${parseInt(total).toLocaleString()}</span> 
        `;
        document.getElementById('titlelogs2').innerText = `Cart: ${JSON.parse(localStorage.getItem('banklogs')).length}, Total: $${total.toLocaleString()}`
    }
    localStorage.setItem('banktotal',total);
}