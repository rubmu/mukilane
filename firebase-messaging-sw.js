importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')

firebase.initializeApp({
    'messagingSenderId': '771554923359'
});

const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/assets/icons/notification_96.png'
    };
    return self.registration.showNotification(notificationTitle,
        notificationOptions);  
});
