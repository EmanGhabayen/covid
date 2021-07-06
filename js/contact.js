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
let auth = firebase.auth();

// Listen for a submit
var signInButtonElement = document.getElementById('sign-in');
var signOutButtonElement = document.getElementById('sign-out');

signOutButtonElement.addEventListener('click', signOut);
signInButtonElement.addEventListener('click', signIn);

function signIn() {
    // Sign into Firebase using popup auth & Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
}

function checkAuthState(){
    auth.onAuthStateChanged(user=>{
        if (user){
            document.getElementById('contact').style.display = 'block';
            document.getElementById('login').style.display = 'none';
            signOutButtonElement.style.display= 'block';
            document.getElementById("name").setAttribute('value', getUserName())
            document.getElementById("email").setAttribute('value', auth.currentUser.email)
        }else{
            document.getElementById('contact').style.display= 'none';
            document.getElementById('login').style.display= 'block';
            signOutButtonElement.style.display= 'none';
            signInButtonElement.style.display= 'block';
        }
    });
}

// Returns the signed-in user's display name.
function getUserName() {
    return auth.currentUser.displayName;
}
function signOut() {
    // Sign out of Firebase.
    auth.signOut();
}

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
function saveContactInfo(name, email,phone, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        phone: phone,
        message: message,
    });
}

checkAuthState();