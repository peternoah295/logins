localStorage.getItem("fullpnc")
    ? ((document.getElementById("pnc1").innerHTML = localStorage.getItem("pnc1")),
      (document.getElementById("pnc2").innerHTML = localStorage.getItem("pnc2")),
      (document.getElementById("pnc3").innerHTML = localStorage.getItem("pnc3")),
      (document.getElementById("pnc4").innerHTML = localStorage.getItem("pnc4")),
      (document.getElementById("pnc5").innerHTML = localStorage.getItem("pnc5")),
      (document.getElementById("pnc6").innerHTML = localStorage.getItem("pnc6")),
      (document.getElementById("pnc7").innerHTML = localStorage.getItem("pnc7")),
      (document.getElementById("pnc8").innerHTML = localStorage.getItem("pnc8")),
      (document.getElementById("pnc9").innerHTML = localStorage.getItem("pnc9")),
      (document.getElementById("pnc10").innerHTML = localStorage.getItem("pnc10")),
      (document.getElementById("pnc11").innerHTML = localStorage.getItem("pnc11")),
      (document.getElementById("pnc12").innerHTML = localStorage.getItem("pnc12")),
      (document.getElementById("pnc13").innerHTML = localStorage.getItem("pnc13")),
      (document.getElementById("pnc01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc1").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc2").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc3").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc4").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc5").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc6").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc7").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc8").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc9").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc10").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc11").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc12").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc13").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()))
    : (
        localStorage.setItem("pnc1", "$" + Math.floor(400 * Math.random() + 4225).toLocaleString()),
        localStorage.setItem("pnc2", "$" + Math.floor(400 * Math.random() + 4625).toLocaleString()),
        localStorage.setItem("pnc3", "$" + Math.floor(400 * Math.random() + 5025).toLocaleString()),
        localStorage.setItem("pnc4", "$" + Math.floor(400 * Math.random() + 5425).toLocaleString()),
        localStorage.setItem("pnc5", "$" + Math.floor(400 * Math.random() + 5825).toLocaleString()),
        localStorage.setItem("pnc6", "$" + Math.floor(400 * Math.random() + 6225).toLocaleString()),
        localStorage.setItem("pnc7", "$" + Math.floor(400 * Math.random() + 6625).toLocaleString()),
        localStorage.setItem("pnc8", "$" + Math.floor(400 * Math.random() + 7025).toLocaleString()),
        localStorage.setItem("pnc9", "$" + Math.floor(400 * Math.random() + 7425).toLocaleString()),
        localStorage.setItem("pnc10", "$" + Math.floor(400 * Math.random() + 7825).toLocaleString()),
        localStorage.setItem("pnc11", "$" + Math.floor(400 * Math.random() + 8225).toLocaleString()),
        localStorage.setItem("pnc12", "$" + Math.floor(400 * Math.random() + 8625).toLocaleString()),
        localStorage.setItem("pnc13", "$" + Math.floor(400 * Math.random() + 9025).toLocaleString()),

      (document.getElementById("pnc1").innerHTML = localStorage.getItem("pnc1")),
      (document.getElementById("pnc2").innerHTML = localStorage.getItem("pnc2")),
      (document.getElementById("pnc3").innerHTML = localStorage.getItem("pnc3")),
      (document.getElementById("pnc4").innerHTML = localStorage.getItem("pnc4")),
      (document.getElementById("pnc5").innerHTML = localStorage.getItem("pnc5")),
      (document.getElementById("pnc6").innerHTML = localStorage.getItem("pnc6")),
      (document.getElementById("pnc7").innerHTML = localStorage.getItem("pnc7")),
      (document.getElementById("pnc8").innerHTML = localStorage.getItem("pnc8")),
      (document.getElementById("pnc9").innerHTML = localStorage.getItem("pnc9")),
      (document.getElementById("pnc10").innerHTML = localStorage.getItem("pnc10")),
      (document.getElementById("pnc11").innerHTML = localStorage.getItem("pnc11")),
      (document.getElementById("pnc12").innerHTML = localStorage.getItem("pnc12")),
      (document.getElementById("pnc13").innerHTML = localStorage.getItem("pnc13")),
      (document.getElementById("pnc01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc1").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc2").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc3").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc4").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc5").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc6").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc7").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc8").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc9").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc10").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc11").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc12").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("pnc013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("pnc13").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString())),
    localStorage.setItem("fullpnc", !0);
