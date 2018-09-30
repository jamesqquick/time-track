
import firebase from 'firebase';
import Rebase from 're-base';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC1JnXY3KtgJ8yutf_0rxxQkgIlape8Lu8",
    authDomain: "time-tracker-847b9.firebaseapp.com",
    databaseURL: "https://time-tracker-847b9.firebaseio.com",
    projectId: "time-tracker-847b9",
    storageBucket: "time-tracker-847b9.appspot.com",
    messagingSenderId: "267534775665"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
