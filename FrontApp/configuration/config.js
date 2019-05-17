import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyClvXLJskXIE8_Y1f9uj26LXKu-f5pAJ3E",
    authDomain: "rtrnativereact.firebaseapp.com",
    databaseURL: "https://rtrnativereact.firebaseio.com",
    projectId: "rtrnativereact",
    storageBucket: "rtrnativereact.appspot.com",
    messagingSenderId: "640504063474",
    appId: "1:640504063474:web:d4b1631d6646d012"
};
let app = Firebase.initializeApp(config);
export const db = app.database();  