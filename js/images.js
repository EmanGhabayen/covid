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

var img_index = 1;
var storageRef = firebase.storage().ref();
var listRef = storageRef.child('images');
listRef.listAll().then(function(result){
    console.log(result);
    result.items.forEach(function(imgRef){
        imgRef.getDownloadURL().then(function(url){
            document.getElementById("gallery").innerHTML +=
                "<div class=\"col-lg-4 col-md-6\"><div class=\"gallery-item\"><img loading=\"lazy\" src=\"" + url +"\" class=\"img-fluid\" alt=\"gallery-image\"> <a data-fancybox=\"images\" href=\""+url +"\"></a><h3>Infographic "+ img_index +"</h3></div></div>";
            img_index++;
        });
    })
}).catch(function(error){
    console.log(error);
});