importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-messaging.js');



const firebaseConfig = {
    apiKey: "AIzaSyD1E1djOcRZ8GcsY4bVGuwFuKiiRJVvHqw",
    authDomain: "notificationapp-9d693.firebaseapp.com",
    projectId: "notificationapp-9d693",
    storageBucket: "notificationapp-9d693.appspot.com",
    messagingSenderId: "154476143995",
    appId: "1:154476143995:web:9555d4156238b18aecc9de"
  };


  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();