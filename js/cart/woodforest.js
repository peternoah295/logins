localStorage.getItem("hwood")
    ? ((document.getElementById("wood1").innerHTML = localStorage.getItem("wood1")),
      (document.getElementById("wood2").innerHTML = localStorage.getItem("wood2")),
      (document.getElementById("wood3").innerHTML = localStorage.getItem("wood3")),
      (document.getElementById("wood4").innerHTML = localStorage.getItem("wood4")),
      (document.getElementById("wood5").innerHTML = localStorage.getItem("wood5")),
      (document.getElementById("wood6").innerHTML = localStorage.getItem("wood6")),
      (document.getElementById("wood7").innerHTML = localStorage.getItem("wood7")),
      (document.getElementById("wood8").innerHTML = localStorage.getItem("wood8")),
      (document.getElementById("wood9").innerHTML = localStorage.getItem("wood9")),
      (document.getElementById("wood10").innerHTML = localStorage.getItem("wood10")),
      (document.getElementById("wood01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood1").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood2").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood3").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood4").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood5").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood6").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood7").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood8").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood9").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood10").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()))
    : (
        localStorage.setItem("wood1", "$" + Math.floor(700 * Math.random() + 4825).toLocaleString()),
        localStorage.setItem("wood2", "$" + Math.floor(700 * Math.random() + 5525).toLocaleString()),
        localStorage.setItem("wood3", "$" + Math.floor(700 * Math.random() + 6225).toLocaleString()),
        localStorage.setItem("wood4", "$" + Math.floor(700 * Math.random() + 6925).toLocaleString()),
        localStorage.setItem("wood5", "$" + Math.floor(700 * Math.random() + 7625).toLocaleString()),
        localStorage.setItem("wood6", "$" + Math.floor(700 * Math.random() + 8325).toLocaleString()),
        localStorage.setItem("wood7", "$" + Math.floor(700 * Math.random() + 9025).toLocaleString()),
        localStorage.setItem("wood8", "$" + Math.floor(700 * Math.random() + 9725).toLocaleString()),
        localStorage.setItem("wood9", "$" + Math.floor(700 * Math.random() + 10425).toLocaleString()),
        localStorage.setItem("wood10", "$" + Math.floor(700 * Math.random() + 11125).toLocaleString()),

      (document.getElementById("wood1").innerHTML = localStorage.getItem("wood1")),
      (document.getElementById("wood2").innerHTML = localStorage.getItem("wood2")),
      (document.getElementById("wood3").innerHTML = localStorage.getItem("wood3")),
      (document.getElementById("wood4").innerHTML = localStorage.getItem("wood4")),
      (document.getElementById("wood5").innerHTML = localStorage.getItem("wood5")),
      (document.getElementById("wood6").innerHTML = localStorage.getItem("wood6")),
      (document.getElementById("wood7").innerHTML = localStorage.getItem("wood7")),
      (document.getElementById("wood8").innerHTML = localStorage.getItem("wood8")),
      (document.getElementById("wood9").innerHTML = localStorage.getItem("wood9")),
      (document.getElementById("wood10").innerHTML = localStorage.getItem("wood10")),
      (document.getElementById("wood01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood1").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood2").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood3").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood4").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood5").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood6").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood7").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood8").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood9").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("wood010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("wood10").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString())),
    localStorage.setItem("hwood", !0);
