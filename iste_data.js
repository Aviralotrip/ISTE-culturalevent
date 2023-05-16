
const firebaseConfig = {
    apiKey: "AIzaSyAxA-YU-Ny0N5YpOsDgQmfzFnQ7zSL-AgM",
    authDomain: "project-iste.firebaseapp.com",
    databaseURL: "https://project-iste-default-rtdb.firebaseio.com",
    projectId: "project-iste",
    storageBucket: "project-iste.appspot.com",
    messagingSenderId: "1076907209539",
    appId: "1:1076907209539:web:27674096f51c31910ab5f6",
    measurementId: "G-HZPCHP7JLM"
  };
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("Iste Applicants");
document.getElementById("user-details").addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();
    var first_name = getElementVal("first-name");
    var last_name = getElementVal("last-name");
    var emailid = getElementVal("email");
    var contact_number = getElementVal("contact-number");
    var address = getElementVal("address");
    var msgContent = getElementVal("user-msg");

    saveMessages(first_name, last_name, emailid, contact_number, address, msgContent);

    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);
    //   reset the form
    document.getElementById("user-details").reset();
}
const saveMessages = (first_name, last_name, emailid, contact_number, address, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        first_name: first_name,
        last_name: last_name,
        emailid: emailid,
        contact_number: contact_number,
        address: address,
        msgContent: msgContent
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
const ourItemDiv = document.getElementsByClassName("item");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");

// console.log(ourItemDiv);

for (let i = 0; i < ourItemDiv.length; i++) {
  closeIcon[i].style.display = "none";

  ourItemDiv[i].addEventListener("click", () => {
    const result = ourItemDiv[i].classList.toggle("active");

    if (result) {
      closeIcon[i].style.display = "block";
      openIcon[i].style.display = "none";
    } else {
      closeIcon[i].style.display = "none";
      openIcon[i].style.display = "block";
    }
  });
}