import "./assets/css/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueDragscroll from "vue-dragscroll";

// import custom components
import RippleButton from "@/components/RippleButton.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueDragscroll);

// register custom components
app.component("RippleButton", RippleButton);

app.mount("#app");
