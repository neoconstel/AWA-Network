<template>
  <!-- <div class="flex flex-col xl:flex-row">
    <div class="flex-1" v-for="i in 6" :key="i">{{ i }}</div>
  </div>
  <p class="bg-green-500 xs:bg-blue-500 sm:bg-red-500 text-center  text-gray-100 font-bold">experimental firmament</p> -->

  <!-- Main navigation container -->
  <div class="sticky top-0 z-10">
    <div
      class="flex-no-wrap flex w-full items-center justify-between py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4 bg-gray-500 dark:bg-gray-900">
      <div class="flex w-full flex-wrap items-center justify-between px-3">
        <!-- Hamburger button for mobile view -->
        <button
          class="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          @click="showingMobileMenu = !showingMobileMenu" type="button" data-twe-collapse-init
          data-twe-target="#navbarSupportedContent12" aria-controls="navbarSupportedContent12" aria-expanded="false"
          aria-label="Toggle navigation" ref="hamburgerButton">
          <!-- Hamburger icon -->
          <span class="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg id="hamburgerIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" id="hamburgerPath"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>
        <!-- Collapsible navigation container -->
        <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent12" data-twe-collapse-item>
          <!-- AWA LOGO Text -->
          <div>
            <RouterLink to="/">
              <img class="xs:ml-2 sm:ml-16" style="height:55px;" src="/static/icons/logo.png" />
            </RouterLink>
          </div>

        </div>
        <!-- Right elements -->
        <div class="relative flex items-center">

          <!-- search bar, etc -->
          <div class="flex relative justify-center gap-2 [&>*]:my-auto">


            <div class="relative flex outline outline-2 outline-gray-400 dark:outline-gray-200 rounded bg-transparent"
              data-twe-input-wrapper-init data-twe-input-group-ref>
              <input type="search"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-white data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Search" aria-label="Search" id="search-input" aria-describedby="search-button" />
              <label for="search-input"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none text-gray-300 dark:text-gray-200 peer-focus:text-white dark:peer-focus:text-white">Search
              </label>
              <button
                class="relative z-[2] -ms-0.5 flex items-center rounded-e px-5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:shadow-primary-2 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="button" id="search-button" data-twe-ripple-init data-twe-ripple-color="light">
                <span class="[&>svg]:h-5 [&>svg]:w-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </span>
              </button>
            </div>


            <span v-if="!this.dataStore.user.id" class="flex gap-2">
              <RippleButton :buttonText="'Sign Up'" type="button"
                class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-twe-toggle="modal" data-twe-target="#signupModal" data-twe-ripple-init
                data-twe-ripple-color="light" />
              <RippleButton :buttonText="'Login'" type="button"
                class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-twe-toggle="modal" data-twe-target="#loginModal" data-twe-ripple-init
                data-twe-ripple-color="light" />
            </span>
            <span v-else class="ml-4 flex flex-row">
              <RippleButton :buttonText="'Logout'" type="button"
                class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-twe-toggle="modal" data-twe-target="#logoutModal" data-twe-ripple-init
                data-twe-ripple-color="light" />
              <a class="my-auto ml-3" @click.prevent=""><svg id="userMenuIcon" name="user-icon"
                  class="fill-gray-800 dark:fill-gray-200" @click="showUserMenu = !showUserMenu"
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
                </svg></a>
            </span>
            <span class="ml-3">
              <svg v-if="this.dataStore.darkTheme" name="moon-icon" @click="toggleTheme"
                xmlns="http://www.w3.org/2000/svg" class="fill-gray-300" width="24" height="24" viewBox="0 0 24 24">
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
              class="bg-gray-700 opacity-90 text-gray-300 h-72 w-52 absolute right-20 top-full px-5">
              <img class="w-1/4 aspect-square object-cover rounded-full mx-auto my-5" :src="profileImage" alt="">
              <h3 class="text-center">{{ this.dataStore.user.name }}</h3>
              <p class="text-xs text-center">{{ this.dataStore.user.username }}</p>
              <hr class="my-2" />
              <div class="space-y-2">
                <RouterLink v-if="this.dataStore.user.id" class="block" @click='showUserMenu = false;'
                  :to="`/artistPortfolio/${this.dataStore.user.username}`">
                  <h5>Your Profile</h5>
                </RouterLink>
                <RouterLink v-if="this.dataStore.seller.id" class="block" @click='showUserMenu = false;'
                  :to="`/resources/store/${this.dataStore.seller.alias}`">
                  <h5>Your Assets Store</h5>
                </RouterLink>
                <RouterLink class="block" @click='showUserMenu = false;' :to="'/jobs'">
                  <h5>Jobs</h5>
                </RouterLink>
                <!-- <h5 @click="showUserMenu = false" class="">Sign Out</h5> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- the nav container has been given an id that makes it controllable by the NAV
   toggling button, and also given the data-twe attribute to enable it.
   Also, the classes: !visible and hidden should be absent in the beginning and
   then some javascript is to automatically put them in at the first time the
   screen size is found in the mobile size state.
   
   still, a possible alternate solution might be to use two different NAVS for
   each screen layout, and toggle them alternately. -->
  <div class="nav-container w-full !visible hidden lg:block z-10 lg:z-0 sticky top-32 lg:top-0 lg:relative"
    id="navbarSupportedContent12" data-twe-collapse-item>
    <nav
      class="relative [&>div]:inline-block [&>div]:border-4 flex flex-col lg:flex-row flex-wrap justify-evenly mx-16 p-4 gap-1 lg:gap-4 bg-gray-400 dark:bg-gray-600 [&>div]:bg-gray-300 [&>div]:dark:bg-gray-700 [&>div]:px-20 [&>div]:py-14 hover:[&>div]:bg-slate-400 dark:hover:[&>div]:bg-slate-800 [&>div]:relative">
      <!-- <div v-for="(link, index) in this.navLinks" key="index">
        <RouterLink class="text-gray-800 dark:text-gray-200" :to="link.url">{{ link.text }}</RouterLink>
      </div> -->

      <RouterLink v-for="(link, index) in this.orderedNavLinks" key="index"
        class="text-gray-800 dark:text-gray-200 inline-block flex-auto sm:py-4 lg:py-14 text-center border-4 bg-gray-300 dark:bg-gray-700 hover:bg-slate-400 dark:hover:bg-slate-800 relative"
        :to="link.url">
        <h1 class="text-sm lg:text-4xl">{{ link.text }}</h1>
      </RouterLink>

    </nav>
  </div>

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
  Collapse,
  Dropdown,
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
      'navLinks': [],
      'showingMobileMenu': false // just tells us if mobile menu is SHOWING, but does not control it
    }
  },
  computed: {
    ...mapStores(useDataStore),
    profileImage() {
      if (this.dataStore.user.profile_image)
        return this.dataStore.user.profile_image
      else
        return this.dataStore.siteConfigs.default_profile_image_url
    },
    orderedNavLinks() {
      // nav links will be ordered acording to this array
      /** this is a quick manual fix to order the NAV links. The problem with
       * this solution is that any nav link not included in the arrat or
       * spelled incorrectly will NOT be shown in the NAV, even if the admins
       * have enabled it from the CMS. TODO: make sure to later order the NAV 
       * links via a setting in the CMS, so that admins have full control of it.
       */
      const pageNames = ['Magazine', 'Reviews', 'Challenges', 'Resources', 'Meetups']
      let linkDataBuffer = []

      pageNames.forEach((name) => {
        let linkData = this.navLinks.find(data => data.text == name)
        if (linkData) {
          linkDataBuffer.push(linkData)
        }
      })

      return linkDataBuffer

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
          if (data.user) {
            this.dataStore.user = data.user

            // get seller instance of current user profile
            this.getSeller()
          }
          else {
            this.dataStore.user = {}
            this.dataStore.seller = {}
          }
        })
        .catch(error => alert("Check internet connectivity issues"))
    },
    async getSeller() {
      // gets the seller instance of current logged-in user
      const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/resources/seller/`

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
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          else {
            throw new Error(`Server error: ${response.status}`)
          }
        })
        .then((data) => {
          this.dataStore.seller = data
        })
        .catch(error => {
          // Case 3: Network failure or thrown error from above
          console.error('Fetch error:', error.message);
        })
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

    initTWE({ TailwindInput, Ripple, Collapse, Dropdown });

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

    // handle auto-closing of open menus
    window.addEventListener('click', (event) => {
      let target = event.target

      console.log(event.target)

      // if user menu is open and what was clicked isn't the user menu icon, close it
      if (this.showUserMenu && target.id != 'userMenuIcon') {
        this.showUserMenu = false
      }

      // if mobile menu is showing, click the hamburger button so it closes
      if (this.showingMobileMenu && target.id != 'hamburgerIcon' && target.id != 'hamburgerPath') {
        this.$refs.hamburgerButton.click()
      }
    })

  }
}
</script>
