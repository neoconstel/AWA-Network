import "./assets/css/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueDragscroll from "vue-dragscroll";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueDragscroll);

app.mount("#app");
