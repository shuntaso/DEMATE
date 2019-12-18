import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCTN0x4BykUF0dV_WbOXMyfLIPTFcxZjhI",
  authDomain: "dema-d663a.firebaseapp.com",
  databaseURL: "https://dema-d663a.firebaseio.com",
  projectId: "dema-d663a",
  storageBucket: "dema-d663a.appspot.com",
  messagingSenderId: "149869333958",
  appId: "1:149869333958:web:31244e0807863fde4e76c7",
  measurementId: "G-79CNCQPEZT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
