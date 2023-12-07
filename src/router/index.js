import { useDropZone } from "@vueuse/core";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

async function getWagtailPagesRoutes() {
  /**
   * this function fetches the wagtail page routes from
   * the django backend.
   */
  console.log("Getting wagtail-cms routes");

  const wagtailPageRoutes = [];
  const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/v2/pages/`;
  let pages = await fetch(url).then((response) => response.json());

  // the wagtail pages API doesn't need user credentials to be accessed.
  // However, the presence of invalid/expired credentials in the cookies would
  // prevent it from loading the page so this must be taken care of.

  // if it returns a token invalid error due to expired credentials
  if (pages.code && pages.code == "token_not_valid") {
    //delete all stored cookies and try again
    pages = await fetch(`${import.meta.env.VITE_BACKEND_DOMAIN}/auth/logout/`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => fetch(url))
      .then((response) => response.json());
  }

  pages.items.forEach((page) => {
    let title = page.title;
    let htmlUrl = page.meta.html_url;
    let type = page.meta.type;
    let slug = page.meta.slug;

    // get the relative path e.g "/animals/cats"
    let routePath = htmlUrl
      .replace(import.meta.env.VITE_BACKEND_DOMAIN, "")
      .replace("http://localhost:8000", "")
      .replace("%5E.", "");

    // get the component based on standard naming format of the page Type
    // main.AnimationChallengePage => AnimationChallenge
    // (remove "main." app name at the beginning and "Page" at the end)
    //TODO: improve to handle app names of different lengths
    let routeComponent = type.slice(5, -4);

    let pageRoute = {
      path: routePath.slice(0, -1),
      name: slug,
      component: () => import(`../views/${routeComponent}.vue`),
    };

    // Home is already in fixed routes so skip (lazy solution) TODO: improve
    if (routeComponent != "Home") wagtailPageRoutes.push(pageRoute);
  });

  return wagtailPageRoutes;
}

const wagtailPagesRoutes = await getWagtailPagesRoutes();
console.log("WagtailPageRoutes:");
console.log(wagtailPagesRoutes);

const fixedRoutes = [
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
];

const mergedRoutes = fixedRoutes.concat(wagtailPagesRoutes);
console.log("merged routes:");
console.log(mergedRoutes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: mergedRoutes,
});

export default router;
