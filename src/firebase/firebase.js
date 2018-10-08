import * as firebase from 'firebase';
import config from './firebaseConfig';

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// const coffee = {
//   amount: 999999,
//   date: '15/10/2018',
//   description: 'My BD'
// }

// const formatSnapshot = (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((child) => {
//     expenses.push({
//       id: child.key,
//       ...child.val()
//     });
//   });
//   return (expenses);
// };

// database.ref('expenses').once('value').then((snapshot)=>{ formatSnapshot(snapshot) });

// database.ref('expenses').on('child_changed', (snapshot) => { console.log(`Has been changed - ${snapshot.val().desc}`) });


// database.ref().set({
//   name: 'Pakhomov Kirill',
//   age: 26,
//   stressLevel: 6,
//   location: {
//     city: 'Saint-Petersburg',
//     country: 'Russia'
//   },
//   job: {
//     title: 'web developer',
//     company: 'markon'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((err) => {
//   console.log('this failed '+err);
// });

// database.ref('attributes').set({
//   height: '174cm',
//   weight: '~75kg'
// }).then(() => {
//   console.log('attributes is saved!');
// }).catch((err) => {
//   console.log('something went wrong' + err);
// });

// database.ref().update({
//   'location/city': 'Oakland',
//   'location/country': 'New Zealand',
//   'job/company': 'Google',
//   stressLevel: 0
// });