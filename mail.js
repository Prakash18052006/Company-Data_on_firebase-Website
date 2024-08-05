const firebaseConfig = {
    apiKey: "AIzaSyCKQxtWtQsd5Lg4Xxcy0ulo0dh26DmEwx4",
    authDomain: "contact-form-dae8c.firebaseapp.com",
    databaseURL: "https://contact-form-dae8c-default-rtdb.firebaseio.com",
    projectId: "contact-form-dae8c",
    storageBucket: "contact-form-dae8c.appspot.com",
    messagingSenderId: "435218922033",
    appId: "1:435218922033:web:e5d9bdcba2b7fbb293f310"
  };
  firebase.initializeApp(firebaseConfig);


  // reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};