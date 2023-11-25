import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

function getExtraRoutes() {
  /**
   * this function is just a placeholder for now, before the real functional
   * implementation which would be about fetching the wagtail page routes from
   * the django backend.
   */
  console.log("Getting routes");
  return [
    {
      path: "/extra",
      name: "extra_routes",
      component: () => import("../views/ExtraView.vue"),
    },
  ];
}
const extraRoutes = getExtraRoutes();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/artwork/:id",
      name: "workDetail",
      component: () => import("../views/WorkDetail.vue"),
    },
    {
      path: "/artistPortfolio/:username",
      name: "artistPortfolio",
      component: () => import("../views/ArtistPortfolio.vue"),
    },
    {
      path: "/verify_email",
      name: "verifyEmail",
      component: () => import("../views/VerifyEmail.vue"),
    },
    {
      path: "/reset_password",
      name: "resetPassword",
      component: () => import("../views/ResetPassword.vue"),
    },
    {
      path: "/user_info",
      name: "userInfo",
      component: () => import("../views/UserInfo.vue"),
    },
  ].concat(extraRoutes),
});

export default router;
