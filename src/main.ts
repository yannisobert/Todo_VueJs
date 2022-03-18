import { createApp } from "vue";
import App from "./App.vue";
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAJypTzDJKv52R5c3en4NpVSLfH22QbZ74",
    authDomain: "vue-todo-fa3e3.firebaseapp.com",
    databaseURL: "https://vue-todo-fa3e3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vue-todo-fa3e3",
    storageBucket: "vue-todo-fa3e3.appspot.com",
    messagingSenderId: "499840676271",
    appId: "1:499840676271:web:9b81bf8df56a26d27d7f5a"
};

firebase.initializeApp(firebaseConfig);


createApp(App).mount("#app");
