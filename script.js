const firebaseConfig = {
    apiKey: "AIzaSyDNZsrHtq706Rc0xrryFbNqLQcqust3sQ0",
    authDomain: "iste-task.firebaseapp.com",
    databaseURL: "https://iste-task-default-rtdb.firebaseio.com",
    projectId: "iste-task",
    storageBucket: "iste-task.appspot.com",
    messagingSenderId: "781954682549",
    appId: "1:781954682549:web:ddf4c22df1fdd91c5178fc",
    measurementId: "G-BVDVGTSMLG"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("Iste Applicants");
document.getElementById("user-details").addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();
    var first_name = getElementVal("firstname");
    var last_name = getElementVal("lastname");
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