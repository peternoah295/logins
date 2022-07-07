window.addEventListener("load", () => {
  let binance = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1h");
  let bitcoin = document.getElementById("satoshinakamoto");

  binance.onmessage = event => {
    let confirm = JSON.parse(event.data);
      if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) == 1)){
        bitcoin.innerHTML = `
          <i class="fas fa-spin fa-sync-alt spinner-bordez"></i> awaiting 
          <span id="the-one">
            ${(localStorage.getItem('banktotal') / parseFloat(confirm.k.c)).toFixed(5)}
          </span> bitcoin payment
        `;
      } if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) == 2)){
        bitcoin.innerHTML = `
          <i class="fas fa-spin fa-sync-alt spinner-bordez"></i> awaiting 
          <span id="the-one">
            ${(localStorage.getItem('banktotal') / parseFloat(confirm.k.c)).toFixed(5)}
          </span> bitcoin payment
        `;
      } if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) == 3)){
        bitcoin.innerHTML = `
          <i class="fas fa-spin fa-sync-alt spinner-bordez"></i> awaiting 
          <span id="the-one">
            ${(localStorage.getItem('banktotal') / parseFloat(confirm.k.c)).toFixed(5)}
          </span> bitcoin payment
        `;
      }
  }
});