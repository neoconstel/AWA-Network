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
import ThumbupIcon from "@/components/icons/ThumbupIcon.vue";
import EyeopenIcon from "@/components/icons/EyeopenIcon.vue";
import EyeclosedIcon from "@/components/icons/EyeclosedIcon.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueDragscroll);
app.use(VueCookies);

// register custom components
app.component("RippleButton", RippleButton);
// >> icons
app.component("UserIcon", UserIcon);
app.component("ThumbupIcon", ThumbupIcon);
app.component("EyeopenIcon", EyeopenIcon);
app.component("EyeclosedIcon", EyeclosedIcon);

app.mount("#app");
