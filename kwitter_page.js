//YOUR FIREBASE LINKS
var firebaseConfig = {
    apikey: "AIzaSyBRulxwpRj9Wyh38Z05VD202H8tyJcXnsI",
    authdomain: "kwitter-6e34b.firebaseapp.com",
    projectId: "kwitter-6e34b",
    databaseURL: "https://kwitter-6e34b-default-rtdb.firebaseio.com",
    storageBucket: "kwitter-6e34b.appspot.com",
    messagingSenderId: "64732949389",
    appId: "1:64732949389:web:a6753a19c93bb590d9abc4"
};

firebaseConfig.initializeApp(firebaseConfig);
user_name = localStorage.getItem('user_name');
room_name = localStorage.getItem('room_name');
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0 
    });
    document.getElementById("msg").value = "";
}
