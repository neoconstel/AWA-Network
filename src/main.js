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
import ThumbuppaintedIcon from "@/components/icons/ThumbuppaintedIcon.vue";
import EyeopenIcon from "@/components/icons/EyeopenIcon.vue";
import EyeclosedIcon from "@/components/icons/EyeclosedIcon.vue";
import MailIcon from "@/components/icons/MailIcon.vue";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import PencilIcon from "@/components/icons/PencilIcon.vue";

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
app.component("ThumbuppaintedIcon", ThumbuppaintedIcon);
app.component("EyeopenIcon", EyeopenIcon);
app.component("EyeclosedIcon", EyeclosedIcon);
app.component("MailIcon", MailIcon);
app.component("FacebookIcon", FacebookIcon);
app.component("InstagramIcon", InstagramIcon);
app.component("LinkedinIcon", LinkedinIcon);
app.component("TwitterIcon", TwitterIcon);
app.component("PencilIcon", PencilIcon);

app.mount("#app");
