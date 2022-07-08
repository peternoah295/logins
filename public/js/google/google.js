const mailField = document.getElementById('exampleInputEmail');
const signUp = document.getElementById('signUp');
const signGoogle = document.getElementById("signGoogle");
const signYahoo = document.getElementById('signYahoo');

const phoneNumberField = document.getElementById('phoneNumber');
const codeField = document.getElementById('code');
const signInWithPhoneButton = document.getElementById('signInWithPhone');
const getCodeButton = document.getElementById('getCode');

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

const auth = firebase.auth();


const sendVerificationEmail = () => {
  auth.currentUser.sendEmailVerification()
}

const signUpFunction = () => {
  event.preventDefault();
  const email = mailField.value;
  var actionCodeSettings = {
      url: 'https://logins.id',
      handleCodeInApp: true,
  };
  auth.sendSignInLinkToEmail(email, actionCodeSettings)
  .then(() => {
    alert('Check your email ' + email + ' inbox for a verification link');
    window.localStorage.setItem('emailForSignIn', email);
  })
  .catch(error => {
    alert(error.message);
  });
}
signUp.addEventListener('click', signUpFunction);
document.getElementById('the-form').addEventListener('submit', signUpFunction);


if (auth.isSignInWithEmailLink(window.location.href)) {
  var email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    localStorage.setItem('the-email', true)
    email = window.prompt('Enter your email for confirmation');
  }
  auth.signInWithEmailLink(email, window.location.href)
    .then((result) => {
      if(localStorage.getItem('the-email')){
        window.location.assign('home');
        sendVerificationEmail();
      } else {
        alert('Return to previous tab, email has been confirmed')
        window.close();
        sendVerificationEmail();
      }
    })
    .catch((error) => {
      alert('Wrong email entered')
    });
}

const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider;
  auth.signInWithPopup(googleProvider).then(() => {
    sendVerificationEmail();
    window.location.assign('home');
  }).catch(error => {
    alert(error.message)
  });
};
signGoogle.addEventListener("click", signInWithGoogle);


window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
recaptchaVerifier.render().then(widgetId => {
  window.recaptchaWidgetId = widgetId;
})
const sendVerificationCode = () => {
    const phoneNumber = phoneNumberField.value;
    const appVerifier = window.recaptchaVerifier;
  
    auth.signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(confirmationResult => {
      const sentCodeId = confirmationResult.verificationId;
      signInWithPhoneButton.addEventListener('click', () => signInWithPhone(sentCodeId));
    })
}
const signInWithPhone = sentCodeId => {
  const code = codeField.value;
  const credential = firebase.auth.PhoneAuthProvider.credential(sentCodeId, code);
  auth.signInWithCredential(credential)
    .then(() => {
      window.location.assign('home');
    })
    .catch(error => {
      alert(error.message);
    })
}
getCodeButton.addEventListener('click', sendVerificationCode);

const signInWithYahoo = () => {
  const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
  auth.signInWithPopup(yahooProvider).then(() => {
    sendVerificationEmail();
    window.location.assign('home');
  }).catch(error => {
    alert(error.message);
  })
}
signYahoo.addEventListener("click", signInWithYahoo);

auth.onAuthStateChanged(user => {
  if (user) {
    window.location.assign('home');
  } 
});

document.getElementById("thebodyz").oncontextmenu = function() {
  return false
}; 

fetch('https://ipapi.co/json/')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  document.getElementById('the-flag').src = `https://countryflagsapi.com/png/${data.country_code}`;
  document.getElementById('phoneNumber').value = data.country_calling_code;
});


$("#exampleModal").on("show.bs.modal", function (event) {
  ("use strict");
});

$('#myform').on('submit', function(ev) {
  $('#codeModal').modal('show');
  $('#phoneModal').modal('hide');
  ev.preventDefault();
});