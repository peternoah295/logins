localStorage.getItem("halfbar")
    ? (
      (document.getElementById("bar1").innerHTML =  localStorage.getItem("bar1")),
      (document.getElementById("bar2").innerHTML =  localStorage.getItem("bar2")),
      (document.getElementById("bar3").innerHTML =  localStorage.getItem("bar3")),
      (document.getElementById("bar4").innerHTML =  localStorage.getItem("bar4")),
      (document.getElementById("bar5").innerHTML =  localStorage.getItem("bar5")),
      (document.getElementById("bar6").innerHTML =  localStorage.getItem("bar6")),
      (document.getElementById("bar7").innerHTML =  localStorage.getItem("bar7")),
      (document.getElementById("bar8").innerHTML =  localStorage.getItem("bar8")),
      (document.getElementById("bar9").innerHTML =  localStorage.getItem("bar9")),
      (document.getElementById("bar10").innerHTML = localStorage.getItem("bar10")),
      (document.getElementById("bar01").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar1").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar02").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar2").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar03").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar3").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar04").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar4").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar05").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar5").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar06").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar6").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar07").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar7").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar08").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar8").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar09").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar9").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bar10").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString())
      )
    : (
      localStorage.setItem("bar1", "$" +  Math.floor(200 * Math.random() + 1725).toLocaleString()),
      localStorage.setItem("bar2", "$" +  Math.floor(200 * Math.random() + 1925).toLocaleString()),
      localStorage.setItem("bar3", "$" +  Math.floor(200 * Math.random() + 2125).toLocaleString()),
      localStorage.setItem("bar4", "$" +  Math.floor(200 * Math.random() + 2325).toLocaleString()),
      localStorage.setItem("bar5", "$" +  Math.floor(200 * Math.random() + 2525).toLocaleString()),
      localStorage.setItem("bar6", "$" +  Math.floor(200 * Math.random() + 2725).toLocaleString()),
      localStorage.setItem("bar7", "$" +  Math.floor(200 * Math.random() + 2925).toLocaleString()),
      localStorage.setItem("bar8", "$" +  Math.floor(200 * Math.random() + 3125).toLocaleString()),
      localStorage.setItem("bar9", "$" +  Math.floor(200 * Math.random() + 3325).toLocaleString()),
      localStorage.setItem("bar10", "$" + Math.floor(200 * Math.random() + 3525).toLocaleString()),

      (document.getElementById("bar1").innerHTML =  localStorage.getItem("bar1")),
      (document.getElementById("bar2").innerHTML =  localStorage.getItem("bar2")),
      (document.getElementById("bar3").innerHTML =  localStorage.getItem("bar3")),
      (document.getElementById("bar4").innerHTML =  localStorage.getItem("bar4")),
      (document.getElementById("bar5").innerHTML =  localStorage.getItem("bar5")),
      (document.getElementById("bar6").innerHTML =  localStorage.getItem("bar6")),
      (document.getElementById("bar7").innerHTML =  localStorage.getItem("bar7")),
      (document.getElementById("bar8").innerHTML =  localStorage.getItem("bar8")),
      (document.getElementById("bar9").innerHTML =  localStorage.getItem("bar9")),
      (document.getElementById("bar10").innerHTML = localStorage.getItem("bar10")),
      (document.getElementById("bar01").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar1").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar02").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar2").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar03").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar3").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar04").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar4").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar05").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar5").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar06").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar6").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar07").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar7").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar08").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar8").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar09").innerHTML = "Buy: $" +  parseFloat((localStorage.getItem("bar9").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString()),
      (document.getElementById("bar010").innerHTML = "Buy: $" + parseFloat((localStorage.getItem("bar10").replace("$", "").replace(",", "") / 17.5).toFixed(0)).toLocaleString())
      ),
    localStorage.setItem("halfbar", !0);