auth.onAuthStateChanged(user => {
	"use strict";
	var toast = localStorage.getItem('banktotal')
	let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1h');
	var toastbitcoin = '';
	var toastbitcoin2 = '';
	ws.onmessage = (event) => {
		let stockObject = JSON.parse(event.data);
		toastbitcoin = (toast / (parseFloat(stockObject.k.c))).toFixed(5);
		toastbitcoin2 = ((toast / (parseFloat(stockObject.k.c))) * 0.75).toFixed(5);
	}
	var i = -1;
	var $toastlast;
	var getMessage = function() {
		let items = [];
		items = JSON.parse(localStorage.getItem('banklogs'));
		if (((JSON.parse(localStorage.getItem('banklogs')).length) == 1)) {
			if (user.displayName && user.email) {
				for (var i = 0; i < items.length; i++) {
					var msgs = [`
						${user.displayName}, ${toastbitcoin} Bitcoin payment not detected
						<hr>
						Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
						<hr>
						${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance}
						<hr>
						An email invoice will be sent to your email @: ${user.email} after a successful download
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} else if (!user.displayName && user.email) {
				for (var i = 0; i < items.length; i++) {
					var msgs = [`
						${toastbitcoin} Bitcoin payment not detected
						<hr>
						Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
						<hr>
						${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance}
						<hr>
						An email invoice will be sent to your email @: ${user.email} after a successful download
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} else if (user.phoneNumber) {
				for (var i = 0; i < items.length; i++) {
					var msgs = [`
						${toastbitcoin} Bitcoin payment not detected
						<hr>
						Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
						<hr>
						${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance}
						<hr>
						An invoice link will also be sent to your phone number ${user.phoneNumber} after a successful download
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} 
		} else if (((JSON.parse(localStorage.getItem('banklogs')).length) == 3)) {
			if (user.displayName && user.email) {
				for (var i = 0; i < items.length; i++) {
					var msgs = [`
						${user.displayName}, ${toastbitcoin} Bitcoin payment not detected
						<hr>
						Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
						<hr>
						${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance}
						<hr>
						${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance}
						<hr>
						${items[2].account.replace(']',' ACCOUNT]')} with ${items[2].balance}
						<hr>
						An email invoice will be sent to your email @: ${user.email} after a successful download
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} else if (!user.displayName && user.email) {
				for (var i = 0; i < items.length; i++) {
					var msgs = [`
						${toastbitcoin} Bitcoin payment not detected
						<hr>
						Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
						<hr>
						${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance}
						<hr>
						${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance}
						<hr>
						${items[2].account.replace(']',' ACCOUNT]')} with ${items[2].balance}
						<hr>
						An email invoice will be sent to your email @: ${user.email} after a successful download
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} else if (user.phoneNumber) {
				for (var i = 0; i < items.length; i++) {
					var msgs = [`
						${toastbitcoin} Bitcoin payment not detected
						<hr>
						Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
						<hr>
						${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance}
						<hr>
						${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance}
						<hr>
						${items[2].account.replace(']',' ACCOUNT]')} with ${items[2].balance}
						<hr>
						An invoice link will also be sent to your phone number ${user.phoneNumber} after a successful download
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} 
		} else if (((JSON.parse(localStorage.getItem('banklogs')).length) == 2)) {
			if (user.displayName && user.email) {
				for (var i = 0; i < items.length; i++) {
					var msgs = [`
						${user.displayName}, ${toastbitcoin} Bitcoin payment not detected
						<hr>
						Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
						<hr>
						${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance}
						<hr>
						${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance}
						<hr>
						An email invoice will be sent to your email @: ${user.email} after a successful download
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} else if (!user.displayName && user.email) {
				for (var i = 0; i < items.length; i++) {
					var msgs = [`
						${toastbitcoin} Bitcoin payment not detected
						<hr>
						Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
						<hr>
						${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance}
						<hr>
						${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance}
						<hr>
						An email invoice will be sent to your email @: ${user.email} after a successful download
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} else if (user.phoneNumber) {
				for (var i = 0; i < items.length; i++) {
					var msgs = [`
						${toastbitcoin} Bitcoin payment not detected
						<hr>
						Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
						<hr>
						${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance}
						<hr>
						${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance}
						<hr>
						An invoice link will also be sent to your phone number ${user.phoneNumber} after a successful download
					`];
					i++;
					if (i === msgs.length) {
						i = 0;
					}
					return msgs[i];
				}
			} 
		}
	};

	var toastbut = document.getElementById('showtoasts');
	var toastbut_2 = document.getElementById('showtoasts_2');

	$(toastbut).click(function() {
		var shortCutFunction = 'success';
		var msg = '';
		var title = '';
		toastr.options = {
			closeButton: true,
			debug: false,
			newestOnTop: true,
			progressBar: true,
			positionClass: 'toast-top-full-width',
			preventDuplicates: true,
			onclick: null
		};
		if (!msg) {
			msg = getMessage();
		}
		var $toast = toastr[shortCutFunction](msg, title);
		$toastlast = $toast;
	});

	$(toastbut_2).click(function() {
		var shortCutFunction = 'success';
		var msg = `$100 bitcoin payment not detected to complete download, do not close this page or clear your browsing history. Cost of getting banklogs is very high right now. Sorry for any inconvinience caused`;
		var title = '';
		toastr.options = {
			closeButton: true,
			debug: false,
			newestOnTop: true,
			progressBar: true,
			positionClass: 'toast-top-full-width',
			preventDuplicates: true,
			onclick: null
		};
		if (!msg) {
			msg = getMessage();
		}
		var $toast = toastr[shortCutFunction](msg, title);
		$toastlast = $toast;
	});

});