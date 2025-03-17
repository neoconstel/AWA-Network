<template>
  <div class="sticky top-0 z-10 grid grid-cols-2 p-3 bg-gray-500 dark:bg-gray-900 mx-16"
    style="grid-template-columns: 1fr 1fr;">

    <!-- test code -->
    <!-- <button v-if="!this.dataStore.allowTestUser" @click.prevent="this.dataStore.allowTestUser = true"
      class="absolute top-0 left-1/3 z-20 text-cyan text-lg p-2 bg-pink-500 rounded-lg"><a href="">
        Test: Switch to logged-in mode
      </a></button>
    <button v-if="this.dataStore.allowTestUser" @click.prevent="this.dataStore.allowTestUser = false"
      class="absolute top-0 left-1/3 z-20 text-cyan text-lg p-2 bg-green-500 rounded-lg"><a href="">
        Test: Switch to anonymous
        user
        mode
      </a></button> -->
    <!-- test code ends -->

    <div>
      <RouterLink to="/">
        <img style="height:55px;" src="/static/icons/awa_logo.svg" />
      </RouterLink>
    </div>
    <div class="flex relative justify-center gap-2 [&>*]:my-auto">
      <Input :placeholderText="'Search'" />
      <span v-if="!this.dataStore.user.id" class="flex gap-2">
        <RippleButton :buttonText="'Sign Up'" type="button"
          class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-twe-toggle="modal" data-twe-target="#signupModal" data-twe-ripple-init data-twe-ripple-color="light" />
        <RippleButton :buttonText="'Login'" type="button"
          class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-twe-toggle="modal" data-twe-target="#loginModal" data-twe-ripple-init data-twe-ripple-color="light" />
      </span>
      <span v-else class="ml-4 flex flex-row">
        <RippleButton :buttonText="'Logout'" type="button"
          class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-twe-toggle="modal" data-twe-target="#logoutModal" data-twe-ripple-init data-twe-ripple-color="light" />
        <a class="my-auto ml-3" @click.prevent="" href=""><svg name="user-icon" class="fill-gray-800 dark:fill-gray-200"
            @click="showUserMenu = !showUserMenu" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24">
            <path
              d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
          </svg></a>
      </span>
      <span class="ml-3">
        <svg v-if="this.dataStore.darkTheme" name="moon-icon" @click="toggleTheme" xmlns="http://www.w3.org/2000/svg"
          class="fill-gray-300" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z" />
        </svg>
        <svg v-else name="sun-icon" @click="toggleTheme" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24">
          <path
            d="M12 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm-4.184-.599l-3.593-3.594-1.415 1.414 3.595 3.595c.401-.537.876-1.013 1.413-1.415zm4.184-1.401c.34 0 .672.033 1 .08v-5.08h-2v5.08c.328-.047.66-.08 1-.08zm5.598 2.815l3.595-3.595-1.414-1.414-3.595 3.595c.537.402 1.012.878 1.414 1.414zm-12.598 4.185c0-.34.033-.672.08-1h-5.08v2h5.08c-.047-.328-.08-.66-.08-1zm11.185 5.598l3.594 3.593 1.415-1.414-3.594-3.593c-.403.536-.879 1.012-1.415 1.414zm-9.784-1.414l-3.593 3.593 1.414 1.414 3.593-3.593c-.536-.402-1.011-.877-1.414-1.414zm12.519-5.184c.047.328.08.66.08 1s-.033.672-.08 1h5.08v-2h-5.08zm-6.92 8c-.34 0-.672-.033-1-.08v5.08h2v-5.08c-.328.047-.66.08-1 .08z" />
        </svg>
      </span>
      <div v-if="this.dataStore.user.id && showUserMenu"
        class="bg-gray-700 opacity-90 text-gray-300 h-72 w-1/3 absolute right-20 top-full px-5">
        <img class="w-1/4 aspect-square rounded-full mx-auto my-5" :src="profileImage" alt="">
        <h3 class="text-center">{{ this.dataStore.user.name }}</h3>
        <p class="text-xs text-center">{{ this.dataStore.user.username }}</p>
        <hr class="my-2" />
        <div>
          <RouterLink v-if="this.dataStore.user.id" @click='showUserMenu = false;'
            :to="`/artistPortfolio/${this.dataStore.user.username}`">
            <h5>Your Profile</h5>
          </RouterLink>
          <h5 @click="showUserMenu = false">Settings</h5>
          <h5 @click="showUserMenu = false" class="mt-4">Sign Out</h5>
        </div>
      </div>
    </div>
  </div>
  <header class="w-full">


    <!-- <button class="bg-green-600" @click="this.$refs.scroll.leftmostToRightmost">Leftmost To Rightmost</button>
    <button class="bg-pink-600" @click="this.$refs.scroll.rightmostToLeftmost">Rightmost To Leftmost</button> -->
    <!-- <HScroll
      class="relative p-4 gap-4 bg-gray-400 dark:bg-gray-600 [&>div]:bg-gray-300 [&>div]:dark:bg-gray-700 [&>div]:px-20 [&>div]:py-14 hover:[&>div]:bg-slate-400 dark:hover:[&>div]:bg-slate-800 [&>div]:relative"
      :gap="16" ref="scroll">
      <div v-for="(link, index) in this.navLinks" key="index">
        <RouterLink class="text-gray-800 dark:text-gray-200" :to="link.url">{{ link.text }}</RouterLink>
      </div>
    </HScroll> -->

    <nav
      class="relative [&>div]:inline-block [&>div]:border-4 flex flex-row flex-wrap justify-evenly mx-16 p-4 gap-4 bg-gray-400 dark:bg-gray-600 [&>div]:bg-gray-300 [&>div]:dark:bg-gray-700 [&>div]:px-20 [&>div]:py-14 hover:[&>div]:bg-slate-400 dark:hover:[&>div]:bg-slate-800 [&>div]:relative">
      <!-- <div v-for="(link, index) in this.navLinks" key="index">
        <RouterLink class="text-gray-800 dark:text-gray-200" :to="link.url">{{ link.text }}</RouterLink>
      </div> -->

      <RouterLink v-for="(link, index) in this.navLinks" key="index"
        class="text-gray-800 dark:text-gray-200 inline-block flex-auto py-14 text-center border-4 bg-gray-300 dark:bg-gray-700 hover:bg-slate-400 dark:hover:bg-slate-800 relative"
        :to="link.url">
        <h1>{{ link.text }}</h1>
      </RouterLink>

    </nav>
  </header>

  <!-- for testing links (remove later) -->
  <!-- <div class="link-test-only inline w-100 fixed" style="bottom: 100px; z-index: 1">
    <h3 class="inline text-cyan-300 opacity-40">Link Test</h3>
    <ul
      class="[&>li]:inline-block [&>li]:p-1 [&>li]:bg-green-300 space-x-1 [&>li]:text-xs [&>li]:rounded-2xl [&>li]:opacity-30">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink :to="`/artwork/${33}`">ArtDetail
        </RouterLink>
      </li>
    </ul>
  </div> -->



  <RouterView />

  <Footer v-if="showFooter" :toggleFooter="toggleFooter" />
  <img class="fixed inline-block h-12 right-0 mr-5" style="bottom: 60px;" @click.prevent="scrollToTop"
    src="/static/icons/iconmonstr-angel-up-circle-thin.svg" alt="scroll to top">
  <div class="fixed h-12 w-full bg-gray-400 hover:bg-gray-600 opacity-60" style="bottom: 0px; z-index: 1;"
    @click.prevent="toggleFooter">
  </div>


  <!-- MODALS (popups) -->
  <SignupModal />
  <LoginModal />
  <LogoutModal />
  <AddworkModal />
  <EditworkModal />
  <DeleteprojectModal />
  <ForgotpasswordModal />
  <RemovelikeModal />
  <AddreviewModal />
</template>

<script>
import Input from "@/components/TextInput.vue"
import HScroll from "@/components/HorizontalScroll.vue"
import Footer from "@/components/FooterComponent.vue"

import Modal from "@/components/Modal.vue"
import SignupModal from "@/components/SignupModal.vue"
import LoginModal from "@/components/LoginModal.vue"
import LogoutModal from "@/components/LogoutModal.vue"
import AddworkModal from "@/components/AddworkModal.vue"
import EditworkModal from "@/components/EditworkModal.vue"
import DeleteprojectModal from "@/components/DeleteprojectModal.vue"
import RemovelikeModal from "@/components/RemovelikeModal.vue"
import ForgotpasswordModal from "@/components/ForgotpasswordModal.vue"
import AddreviewModal from "@/components/AddreviewModal.vue"


// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

import {
  Input as TailwindInput,
  Ripple,
  initTWE,
} from "tw-elements";


export default {
  name: 'App',
  components: {
    Input,
    HScroll,
    Footer,
    Modal,
    SignupModal,
    LoginModal,
    LogoutModal,
    AddworkModal,
    EditworkModal,
    DeleteprojectModal,
    RemovelikeModal,
    ForgotpasswordModal,
    AddreviewModal
  },
  data() {
    return {
      'showFooter': false,
      'showUserMenu': false,
      'navLinks': []
    }
  },
  computed: {
    ...mapStores(useDataStore),
    profileImage() {
      if (this.dataStore.user.profile_image)
        return this.dataStore.user.profile_image
      else
        return this.dataStore.siteConfigs.default_profile_image_url
    }
  },
  methods: {
    toggleFooter() {
      this.showFooter = !this.showFooter;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    toggleTheme() {
      const html = document.querySelector("html")
      html.classList.toggle('dark')
      this.dataStore.darkTheme = !this.dataStore.darkTheme
    },
    loginCheck() {
      // to check if there are valid login credentials and set (keep/delete)
      // the local user data (if any) accordingly

      const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/auth/user_info/`

      const headers = {
        'Content-Type': 'application/json',
        'X-CSRFToken': this.$cookies.get('csrftoken')
      }

      const requestOptions = {
        method: 'GET',
        headers: headers,
        credentials: 'include',
      };

      fetch(url, requestOptions)
        .then(response => response.json())
        .then((data) => {
          if (data.user)
            this.dataStore.user = data.user
          else
            this.dataStore.user = []
        })
        .catch(error => alert("Check internet connectivity issues"))



    },
    async fetchSiteCMS() {
      const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/v2/pages/?show_in_menus=true`
      const siteMenuPages = await fetch(url)
        .then(response => response.json())
        .then(pages => pages.items)

      const siteLinks = []
      siteMenuPages.forEach((page) => {
        const link = {
          'text': page.title,
          'url': page.meta.html_url
            .replace(import.meta.env.VITE_BACKEND_DOMAIN, "")
            .replace("http://localhost:8000", "")
            .replace("%5E.", "")
        }

        siteLinks.push(link)
      })

      this.navLinks = siteLinks

    },
    async fetchSiteConfigurations() {
      const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/siteconfigs/`
      const siteConfigurations = await fetch(url)
        .then(response => response.json())
        .then(data => this.dataStore.siteConfigs = data)
        .catch(error => console.log(error))
    }
  },
  mounted() {

    initTWE({ TailwindInput, Ripple });

    this.$nextTick(() => {
      setTimeout(() => {
        this.scrollToTop();
      }, 1000)

      // set initial theme state
      const html = document.querySelector("html")
      if (this.dataStore.darkTheme)
        html.classList.add('dark')

    })

    // fetch site navigation links from CMS
    this.fetchSiteCMS()

    // fetch site settings
    this.fetchSiteConfigurations()

    // verify login credentials. If invalid, delete user data
    this.loginCheck()

  }
}
</script>
