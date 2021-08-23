import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDqVm12M-npBxiIcY9HiqYBDHbEmF7khTQ',
    authDomain: 'cadcar-poc.firebaseapp.com',
    projectId: 'cadcar-poc',
    storageBucket: 'cadcar-poc.appspot.com',
    messagingSenderId: '650674025929',
    appId: '1:650674025929:web:d26d9354a19e6a10b3a418',
    measurementId: 'G-P2ZLBKX8Z6'
};

firebase.initializeApp(config);

export const db = firebase.firestore();

export default firebase;
