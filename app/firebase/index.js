import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBOzChqaHOYUinZReOM-JQH3d6yVxU_bYI",
    authDomain: "hardin-todo-app.firebaseapp.com",
    databaseURL: "https://hardin-todo-app.firebaseio.com",
    projectId: "hardin-todo-app",
    storageBucket: "hardin-todo-app.appspot.com",
    messagingSenderId: "568812591650"
  };
  firebase.initializeApp(config);
} catch (e) {

};

export var firebaseRef = firebase.database().ref();

export default firebase;
