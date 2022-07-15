var firebaseConfig = {
	apiKey: "AIzaSyBBN4elJRDCog-yjgPa9pM0ZDr5fKlYvNA",
	authDomain: "logins-id7.firebaseapp.com",
	projectId: "logins-id7",
	storageBucket: "logins-id7.appspot.com",
	messagingSenderId: "353868186617",
	appId: "1:353868186617:web:ad7a3ea8742687c4c73328",
	measurementId: "G-Q32JQJ2BDH"
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

const logoHolder = document.getElementById("logo");
const avatarHolder = document.getElementById("avatar");
const jinaHolder = document.getElementById("jinaHolder");
const jinaHolder2 = document.getElementById("jinaHolder2");
const tableidHolder = document.getElementById('nameBro');
const tableidHolder2 = document.getElementById('nameBro1');
const email1 = document.getElementById('yourEmail1');
const email2 = document.getElementById('yourEmail2');
const email5 = document.getElementById('yourEmail5');

const displayNameField = document.getElementById('new-name');
const editButton = document.getElementById('update-profile');

const auth = firebase.auth();

auth.onAuthStateChanged(user => {
	let goodies = [];
	if (!user) {
		window.location.assign("index");
	}
	if (user.photoURL) {
		avatarHolder.setAttribute("src", user.photoURL);
		avatarHolder.style.display = 'block';
	} else if (!user.photoURL) {
		logoHolder.style.display = 'block';
	}
	if (user.displayName && user.email) {
		jinaHolder.innerText = user.displayName;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		tableidHolder.value = "Name: " + user.displayName;
		tableidHolder2.value = "Name: " + user.displayName;

		email1.innerHTML = `Check your email spam folder @:<strong>${user.email}</strong> after buying a bank log`;
		email2.innerHTML = `Always use VPN while logging into a bank log, and set the location based on the address information on the bank log`;
		email5.innerHTML = user.email;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = user.displayName;
			}
		}
	} else if (!user.displayName && user.email) {
		var themail = user.email;
		var theaddress = themail.substring(0, themail.indexOf('@'));

		jinaHolder.innerText = theaddress;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		tableidHolder.value = "Name: " + theaddress;
		tableidHolder2.value = "Name: " + theaddress;

		email1.innerHTML = `Check your email spam folder @:<strong>${user.email}</strong> after buying a bank log`;
		email2.innerHTML = `Always use VPN while logging into a bank log, and set the location based on the address information on the bank log`;
		email5.innerHTML = user.email;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = theaddress;
			}
		}
	} else if (user.phoneNumber) {
		jinaHolder.innerText = user.phoneNumber;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		tableidHolder.value = "Name: " + user.phoneNumber;
		tableidHolder2.value = "Name: " + user.phoneNumber;

		email1.innerHTML = `Check your text messages for a link @:<strong>${user.phoneNumber}</strong> after buying a bank log`;
		email2.innerHTML = `Always use VPN while logging into a bank log, and set the location based on the address information on the bank log`;
		email5.innerHTML = `Logged in with phone ${user.phoneNumber}, you will have to check your text messages inbox for a link`;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = user.phoneNumber;
			}
		}
	} else if(user.isAnonymous){
		jinaHolder.innerText = "Anonymous";
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		tableidHolder.value = "Name: Anonymous";
		tableidHolder2.value = "Name: Anonymous";

		email1.innerHTML = `Bank log files can only be downloaded <strong>ONCE</strong>, save them in a folder you won't forget`;
		email2.innerHTML = `Always use VPN while logging into a bank log, and set the location based on the address information on the bank log`;
		email5.innerHTML = `Logged in anonymously, no email invoice will be sent, but a text file will be available for download after a successful purchase`;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = 'Anonymous';
			}
		}
	}
});
fetch('https://ipapi.co/json/')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		document.getElementById('footer-email').innerHTML = `
    Your IP address: ${data.ip}, ${data.city}, ${data.country_name}, ${data.org}, ${data.region}, ${data.country_calling_code}
    <img src="https://countryflagsapi.com/png/${data.country_code}" id="the-flag" />
    `;
	});

document.getElementById("thebodyz").oncontextmenu = function() {
	return false
};

const logOut = document.getElementById('logout');
logOut.addEventListener('click', () => {
	auth.signOut()
		.then(() => {
			window.location.assign('index');
		})
		.catch(error => {
			console.error(error);
		})
})


var duration = 1800; 
setInterval(updateTimer, 1000);
function updateTimer() {
	duration--;
	if ( duration < 1 ) {
		auth.signOut()
			.then(() => {
				window.location.assign('index');
			})
			.catch(error => {
				console.error(error);
			})
	} 
}
window.addEventListener("mousemove", resetTimer);
function resetTimer() {
	duration = 1800;
}

document.getElementById('file').addEventListener('change', (event) => {
	const file = event.target.files[0];
	const storageRef = firebase.storage().ref('images/images' + file.name);
	storageRef.put(file).on('state_changed', (snapshot) => {
		const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		const progressBar_2 = document.getElementById("pablos");
		progressBar_2.style.width = progress + '%';
		document.getElementById('escoz-3').innerHTML = 'Upload Progress: ' + progress + '%';
	}, (err) => {
		console.log('an error has occurred')
	}, async () => {
		const url = await storageRef.getDownloadURL();

		var cartRow = document.createElement('div');
		cartRow.classList.add('col-xl-2', 'col-lg-3', 'col-md-4', 'col-6');
		var cartItems = document.getElementById('list');
		var cartRowContents = `
			<img src=${url} style="margin-bottom: 10px"/>
		`;
		cartRow.innerHTML = cartRowContents;
		cartItems.prepend(cartRow);
	});
});
var storageRef2 = firebase.storage().ref();
var i = 0;
storageRef2.child('images/').listAll().then(function(result) {
	result.items.forEach(function(imageRef) {
		i++;
		displayImage(i, imageRef);
	})
})

function displayImage(row, images) {
	images.getDownloadURL().then(function(url) {
		var cartRow = document.createElement('div');
		cartRow.classList.add('col-xl-2', 'col-lg-3', 'col-md-4', 'col-6', 'items');
		var cartItems = document.getElementById('list');
		var cartRowContents = `
			<img src=${url} style="margin-bottom: 10px"/>
		`;
		cartRow.innerHTML = cartRowContents;
		cartItems.prepend(cartRow);
	})
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 1
setInterval(drawClock, 1000);

function drawClock() {
	drawFace(ctx, radius);
	drawNumbers(ctx, radius);
	drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
	var grad;
	ctx.beginPath();
	ctx.arc(0, 0, radius, 0, 2 * Math.PI);
	ctx.fillStyle = 'white';
	ctx.fill();
	grad = ctx.createRadialGradient(0, 0, radius * 0.05, 0, 0, radius * 2.5);
	grad.addColorStop(0, '#121d33');
	grad.addColorStop(0.5, 'rgba(0,0,0,0)');
	grad.addColorStop(1, '#121d33');
	ctx.strokeStyle = grad;
	ctx.lineWidth = radius * 0;
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
	ctx.fillStyle = '#121d33';
	ctx.fill();
}

function drawNumbers(ctx, radius) {
	var ang;
	var num;
	ctx.font = radius * 0.33 + "px arial";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	for (num = 1; num < 13; num++) {
		ang = num * Math.PI / 6;
		ctx.rotate(ang);
		ctx.translate(0, -radius * 0.87);
		ctx.rotate(-ang);
		ctx.fillText(num.toString(), 0, 0);
		ctx.rotate(ang);
		ctx.translate(0, radius * 0.87);
		ctx.rotate(-ang);
	}
}

function drawTime(ctx, radius) {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	//hour
	hour = hour % 12;
	hour = (hour * Math.PI / 6) +
		(minute * Math.PI / (6 * 60)) +
		(second * Math.PI / (360 * 60));
	drawHand(ctx, hour, radius * 0.5, radius * 0.07);
	//minute
	minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
	drawHand(ctx, minute, radius * 0.8, radius * 0.07);
	// second
	second = (second * Math.PI / 30);
	drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.moveTo(0, 0);
	ctx.rotate(pos);
	ctx.lineTo(0, -length);
	ctx.stroke();
	ctx.rotate(-pos);
}


function getItems() {
	db.collection("todo-items").onSnapshot((snapshot) => {
		let items = [];
		snapshot.docs.forEach((doc) => {
			items.push({
				id: doc.id,
				...doc.data()
			})
		})
		generateItems(items);
	})
}

function generateItems(items) {
	let todoItems = []
	items.forEach((item) => {

		let todoItem = document.createElement("div");
		todoItem.classList.add("todo-item");
		let checkContainer = document.createElement("div");
		checkContainer.classList.add("check");
		let checkMark = document.createElement("div");
		checkMark.classList.add("check-mark");
		checkMark.innerHTML = '<img src="img/svg/icon-cross.svg">';
		checkMark.addEventListener("click", function() {
			markCompleted(item.id);
		})
		checkContainer.appendChild(checkMark);

		let todoText = document.createElement("div");
		todoText.classList.add("todo-text");
		todoText.innerText = item.text;

		if (item.status == "completed") {
			checkMark.classList.add("checked");
			todoText.classList.add("checked");
		}
		todoItem.appendChild(checkContainer);
		todoItem.appendChild(todoText);
		todoItems.push(todoItem)
	})
	document.querySelector(".todo-items").replaceChildren(...todoItems);
}



function addItem(event) {
	event.preventDefault();
	let text = document.getElementById("todo-input");
	let newItem = db.collection("todo-items").add({
		text: text.value,
		status: "active"
	})
	text.value = "";
}

function markCompleted(id) {
	let item = db.collection("todo-items").doc(id);
	item.get().then(function(doc) {
		if (doc.exists) {
			if (doc.data().status == "active") {
				item.update({
					status: "completed"
				});
				item.delete();
			} else {
				item.update({
					status: "active"
				})
			}
		}
	})
}

getItems();
