import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import App from "./App.vue";
import router from "./router";
//element ui
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";


//firebaseRef
import { getApps, initializeApp } from "firebase/app";
/* ------------------------------------------------------ */
//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDANQhdSK89WMZSkZFiZCmkezk9rqkUZNY",
  authDomain: "vue-app-3cbf5.firebaseapp.com",
  projectId: "vue-app-3cbf5",
  storageBucket: "vue-app-3cbf5.appspot.com",
  messagingSenderId: "680758365828",
  appId: "1:680758365828:web:ebb012cc8010aa9107bcd1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
/* ------------------------------------------------------ */

const app = createApp(App);
app.use(firebaseApp);
app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");
