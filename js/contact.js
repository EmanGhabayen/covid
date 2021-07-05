var firebaseConfig = {
    apiKey: "AIzaSyCOjnc6yjUG3k3VOHk3jPxJkMraK6JX3F4",
    authDomain: "corona-d9491.firebaseapp.com",
    databaseURL: "https://corona-d9491-default-rtdb.firebaseio.com",
    projectId: "corona-d9491",
    storageBucket: "corona-d9491.appspot.com",
    messagingSenderId: "376099717886",
    appId: "1:376099717886:web:4b0462fce54474fc741baf",
    measurementId: "G-S1JJL36DW8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".cf").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    //   Get input Values
    let name = document.querySelector(".nme").value;
    let email = document.querySelector(".eml").value;
    let phone = document.querySelector(".phn").value;
    let message = document.querySelector(".msg").value;

    saveContactInfo(name, email, phone, message);

    document.querySelector(".cf").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        message: message,
    });
}