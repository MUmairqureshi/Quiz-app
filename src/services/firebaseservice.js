import firebase from 'firebase'

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
export default  firebase


export function initNotification (){
    Notification.requestPermission().then((permission) =>{
        console.log(permission) 
        if(permission === "granted" ) {
         messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token =>" , "Token")
                    console.log(currentToken)
                } else {
               
                  console.log('No registration token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
              
        }
    }
    
    )   
}













