import "./assets/css/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// import custom packages
import VueDragscroll from "vue-dragscroll";
import VueCookies from "vue-cookies";

// import custom components
import RippleButton from "@/components/RippleButton.vue";
// >> icons
import UserIcon from "@/components/icons/UserIcon.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueDragscroll);
app.use(VueCookies);

// register custom components
app.component("RippleButton", RippleButton);
// >> icons
app.component("UserIcon", UserIcon);

app.mount("#app");
