import "./assets/css/main.scss";

import { createApp } from "vue";
import App from "./App.vue";

// import custom packages
import { createPinia } from "pinia";
import router from "./router";

import VueDragscroll from "vue-dragscroll";
import VueCookies from "vue-cookies";
// custom packages: Vuetify packages
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

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
import StarIcon from "@/components/icons/StarIcon.vue";
import StarhalfIcon from "@/components/icons/StarhalfIcon.vue";
import StarfilledIcon from "@/components/icons/StarfilledIcon.vue";

const app = createApp(App);

// create/use components
app.use(createPinia());
app.use(router);
app.use(VueDragscroll);
app.use(VueCookies);
const vuetify = createVuetify({
  components,
  directives,
});
app.use(vuetify);

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
app.component("StarIcon", StarIcon);
app.component("StarhalfIcon", StarhalfIcon);
app.component("StarfilledIcon", StarfilledIcon);

app.mount("#app");
