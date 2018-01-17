import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBOzChqaHOYUinZReOM-JQH3d6yVxU_bYI",
  authDomain: "hardin-todo-app.firebaseapp.com",
  databaseURL: "https://hardin-todo-app.firebaseio.com",
  projectId: "hardin-todo-app",
  storageBucket: "hardin-todo-app.appspot.com",
  messagingSenderId: "568812591650"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();


//CRUD Procedures

//Create - [database name].set
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Joe',
    age: 25
  }
});

// var todosRef = firebaseRef.child('todos');
//
// todosRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// })
//
// var newTodosRef = todosRef.push({
//   text: 'Go for a walk'
// });
//
// var newTodosRef = todosRef.push({
//   text: 'Code like a madman!'
// });


// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// })
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// })
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// })
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
//
// console.log('Todo id', newNoteRef.key);

//Update - [database name].update

//Update Method 1
// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Roger'
// });

//Update Method 2
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });
//
// firebaseRef.child('user').update({
//   name: 'Roger'
// });

//Delete [database name].remove

//Remove entire database
//firebaseRef.remove();

//Remove nested items
///or value in an object
//firebaseRef.child('app/name').remove();

// alternate Method set value to null
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();

//Read

//Method 1 [database].once fetches entire database
// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log('unable to fetch vlue', e);
// });

//Method 2 [database].child('[item]').once fetches part of database
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('unable to fetch vlue', e);
// });

//Method 3 [database].on database update listener
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
//
// firebaseRef.off();  shuts of all listeners
//
// firebaseRef.update({isRunning: false});

//Alternate method 3
// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off(logData); //shuts of only indicated listener
//
// firebaseRef.update({isRunning: false});
