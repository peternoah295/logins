localStorage.getItem("halfnfcu")
    ? (
      (document.getElementById("nfcu1").innerHTML =  localStorage.getItem("nfcu1")),
      (document.getElementById("nfcu2").innerHTML =  localStorage.getItem("nfcu2")),
      (document.getElementById("nfcu3").innerHTML =  localStorage.getItem("nfcu3")),
      (document.getElementById("nfcu4").innerHTML =  localStorage.getItem("nfcu4")),
      (document.getElementById("nfcu5").innerHTML =  localStorage.getItem("nfcu5")),
      (document.getElementById("nfcu6").innerHTML =  localStorage.getItem("nfcu6")),
      (document.getElementById("nfcu7").innerHTML =  localStorage.getItem("nfcu7")),
      (document.getElementById("nfcu8").innerHTML =  localStorage.getItem("nfcu8")),
      (document.getElementById("nfcu9").innerHTML =  localStorage.getItem("nfcu9")),
      (document.getElementById("nfcu10").innerHTML = localStorage.getItem("nfcu10")),
      (document.getElementById("nfcu11").innerHTML = localStorage.getItem("nfcu11")),
      (document.getElementById("nfcu01").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu1").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu02").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu2").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu03").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu3").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu04").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu4").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu05").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu5").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu06").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu6").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu07").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu7").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu08").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu8").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu09").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu9").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu10").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu11").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString())
      )
    : (
      localStorage.setItem("nfcu1", "$" +  Math.floor(200 * Math.random() + 1725).toLocaleString()),
      localStorage.setItem("nfcu2", "$" +  Math.floor(200 * Math.random() + 1925).toLocaleString()),
      localStorage.setItem("nfcu3", "$" +  Math.floor(200 * Math.random() + 2125).toLocaleString()),
      localStorage.setItem("nfcu4", "$" +  Math.floor(200 * Math.random() + 2325).toLocaleString()),
      localStorage.setItem("nfcu5", "$" +  Math.floor(200 * Math.random() + 2525).toLocaleString()),
      localStorage.setItem("nfcu6", "$" +  Math.floor(200 * Math.random() + 2725).toLocaleString()),
      localStorage.setItem("nfcu7", "$" +  Math.floor(200 * Math.random() + 2925).toLocaleString()),
      localStorage.setItem("nfcu8", "$" +  Math.floor(200 * Math.random() + 3125).toLocaleString()),
      localStorage.setItem("nfcu9", "$" +  Math.floor(200 * Math.random() + 3325).toLocaleString()),
      localStorage.setItem("nfcu10", "$" + Math.floor(200 * Math.random() + 3525).toLocaleString()),
      localStorage.setItem("nfcu11", "$" + Math.floor(200 * Math.random() + 3725).toLocaleString()),

      (document.getElementById("nfcu1").innerHTML =  localStorage.getItem("nfcu1")),
      (document.getElementById("nfcu2").innerHTML =  localStorage.getItem("nfcu2")),
      (document.getElementById("nfcu3").innerHTML =  localStorage.getItem("nfcu3")),
      (document.getElementById("nfcu4").innerHTML =  localStorage.getItem("nfcu4")),
      (document.getElementById("nfcu5").innerHTML =  localStorage.getItem("nfcu5")),
      (document.getElementById("nfcu6").innerHTML =  localStorage.getItem("nfcu6")),
      (document.getElementById("nfcu7").innerHTML =  localStorage.getItem("nfcu7")),
      (document.getElementById("nfcu8").innerHTML =  localStorage.getItem("nfcu8")),
      (document.getElementById("nfcu9").innerHTML =  localStorage.getItem("nfcu9")),
      (document.getElementById("nfcu10").innerHTML = localStorage.getItem("nfcu10")),
      (document.getElementById("nfcu11").innerHTML = localStorage.getItem("nfcu11")),
      (document.getElementById("nfcu01").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu1").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu02").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu2").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu03").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu3").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu04").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu4").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu05").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu5").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu06").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu6").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu07").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu7").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu08").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu8").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu09").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("nfcu9").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu10").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("nfcu011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("nfcu11").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString())
      ),
    localStorage.setItem("halfnfcu", !0);