localStorage.getItem("ychime")
    ? ((document.getElementById("chime1").innerHTML = localStorage.getItem("chime1")),
      (document.getElementById("chime2").innerHTML = localStorage.getItem("chime2")),
      (document.getElementById("chime3").innerHTML = localStorage.getItem("chime3")),
      (document.getElementById("chime4").innerHTML = localStorage.getItem("chime4")),
      (document.getElementById("chime5").innerHTML = localStorage.getItem("chime5")),
      (document.getElementById("chime6").innerHTML = localStorage.getItem("chime6")),
      (document.getElementById("chime7").innerHTML = localStorage.getItem("chime7")),
      (document.getElementById("chime8").innerHTML = localStorage.getItem("chime8")),
      (document.getElementById("chime9").innerHTML = localStorage.getItem("chime9")),
      (document.getElementById("chime10").innerHTML = localStorage.getItem("chime10")),
      (document.getElementById("chime11").innerHTML = localStorage.getItem("chime11")),
      (document.getElementById("chime12").innerHTML = localStorage.getItem("chime12")),
      (document.getElementById("chime13").innerHTML = localStorage.getItem("chime13")),
      (document.getElementById("chime14").innerHTML = localStorage.getItem("chime14")),
      (document.getElementById("chime15").innerHTML = localStorage.getItem("chime15")),
      (document.getElementById("chime16").innerHTML = localStorage.getItem("chime16")),
      (document.getElementById("chime17").innerHTML = localStorage.getItem("chime17")),
      (document.getElementById("chime18").innerHTML = localStorage.getItem("chime18")),
      (document.getElementById("chime19").innerHTML = localStorage.getItem("chime19")),
      (document.getElementById("chime20").innerHTML = localStorage.getItem("chime20")),
      (document.getElementById("chime01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime1").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime2").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime3").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime4").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime5").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime6").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime7").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime8").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime9").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime10").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime11").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime12").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime13").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime14").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime15").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime16").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime17").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime18").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime19").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime20").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()))
    : (
      localStorage.setItem("chime1", "$" + Math.floor(200 * Math.random() + 1025).toLocaleString()),
      localStorage.setItem("chime2", "$" + Math.floor(200 * Math.random() + 1225).toLocaleString()),
      localStorage.setItem("chime3", "$" + Math.floor(200 * Math.random() + 1425).toLocaleString()),
      localStorage.setItem("chime4", "$" + Math.floor(200 * Math.random() + 1625).toLocaleString()),
      localStorage.setItem("chime5", "$" + Math.floor(200 * Math.random() + 1825).toLocaleString()),
      localStorage.setItem("chime6", "$" + Math.floor(200 * Math.random() + 2025).toLocaleString()),
      localStorage.setItem("chime7", "$" + Math.floor(200 * Math.random() + 2225).toLocaleString()),
      localStorage.setItem("chime8", "$" + Math.floor(200 * Math.random() + 2425).toLocaleString()),
      localStorage.setItem("chime9", "$" + Math.floor(200 * Math.random() + 2625).toLocaleString()),
      localStorage.setItem("chime10", "$" + Math.floor(200 * Math.random() + 2825).toLocaleString()),
      localStorage.setItem("chime11", "$" + Math.floor(200 * Math.random() + 3025).toLocaleString()),
      localStorage.setItem("chime12", "$" + Math.floor(200 * Math.random() + 3225).toLocaleString()),
      localStorage.setItem("chime13", "$" + Math.floor(200 * Math.random() + 3425).toLocaleString()),
      localStorage.setItem("chime14", "$" + Math.floor(200 * Math.random() + 3625).toLocaleString()),
      localStorage.setItem("chime15", "$" + Math.floor(200 * Math.random() + 3825).toLocaleString()),
      localStorage.setItem("chime16", "$" + Math.floor(200 * Math.random() + 4025).toLocaleString()),
      localStorage.setItem("chime17", "$" + Math.floor(200 * Math.random() + 4225).toLocaleString()),
      localStorage.setItem("chime18", "$" + Math.floor(200 * Math.random() + 4425).toLocaleString()),
      localStorage.setItem("chime19", "$" + Math.floor(200 * Math.random() + 4625).toLocaleString()),
      localStorage.setItem("chime20", "$" + Math.floor(200 * Math.random() + 4825).toLocaleString()),

      (document.getElementById("chime1").innerHTML = localStorage.getItem("chime1")),
      (document.getElementById("chime2").innerHTML = localStorage.getItem("chime2")),
      (document.getElementById("chime3").innerHTML = localStorage.getItem("chime3")),
      (document.getElementById("chime4").innerHTML = localStorage.getItem("chime4")),
      (document.getElementById("chime5").innerHTML = localStorage.getItem("chime5")),
      (document.getElementById("chime6").innerHTML = localStorage.getItem("chime6")),
      (document.getElementById("chime7").innerHTML = localStorage.getItem("chime7")),
      (document.getElementById("chime8").innerHTML = localStorage.getItem("chime8")),
      (document.getElementById("chime9").innerHTML = localStorage.getItem("chime9")),
      (document.getElementById("chime10").innerHTML = localStorage.getItem("chime10")),
      (document.getElementById("chime11").innerHTML = localStorage.getItem("chime11")),
      (document.getElementById("chime12").innerHTML = localStorage.getItem("chime12")),
      (document.getElementById("chime13").innerHTML = localStorage.getItem("chime13")),
      (document.getElementById("chime14").innerHTML = localStorage.getItem("chime14")),
      (document.getElementById("chime15").innerHTML = localStorage.getItem("chime15")),
      (document.getElementById("chime16").innerHTML = localStorage.getItem("chime16")),
      (document.getElementById("chime17").innerHTML = localStorage.getItem("chime17")),
      (document.getElementById("chime18").innerHTML = localStorage.getItem("chime18")),
      (document.getElementById("chime19").innerHTML = localStorage.getItem("chime19")),
      (document.getElementById("chime20").innerHTML = localStorage.getItem("chime20")),
      
      (document.getElementById("chime01").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime1").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime02").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime2").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime03").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime3").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime04").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime4").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime05").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime5").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime06").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime6").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime07").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime7").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime08").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime8").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime09").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime9").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime10").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime011").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime11").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime012").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime12").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime013").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime13").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime014").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime14").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime015").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime15").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime016").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime16").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime017").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime17").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime018").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime18").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime019").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime19").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("chime020").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("chime20").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString())),
    localStorage.setItem("ychime", !0);
