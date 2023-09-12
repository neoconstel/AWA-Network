<template>
  <div class="sticky top-0 z-10 grid grid-cols-2 p-3 bg-gray-800" style="grid-template-columns: 1fr 1fr;">

    <!-- test code -->
    <button v-if="!this.dataStore.allowTestUser" @click.prevent="this.dataStore.allowTestUser = true"
      class="absolute top-0 left-1/3 z-20 text-cyan text-lg p-2 bg-pink-500 rounded-lg"><a href="">
        Test: Switch to logged-in mode
      </a></button>
    <button v-if="this.dataStore.allowTestUser" @click.prevent="this.dataStore.allowTestUser = false"
      class="absolute top-0 left-1/3 z-20 text-cyan text-lg p-2 bg-green-500 rounded-lg"><a href="">
        Test: Switch to anonymous
        user
        mode
      </a></button>
    <!-- test code ends -->

    <div><img style="height:55px;" src="/icons/awa_logo.svg" />
    </div>
    <div class="flex relative justify-center gap-2 [&>*]:my-auto">
      <Input :placeholderText="'Search'" />
      <span v-if="!this.dataStore.allowTestUser" class="flex gap-2">
        <RippleButton :buttonText="'Sign Up'" type="button"
          class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-toggle="modal" data-te-target="#signupModal" data-te-ripple-init data-te-ripple-color="light" />
        <RippleButton :buttonText="'Login'" type="button"
          class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-toggle="modal" data-te-target="#loginModal" data-te-ripple-init data-te-ripple-color="light" />
      </span>
      <span v-else class="ml-4">
        <a @click.prevent="" href=""><img @click="showUserMenu = !showUserMenu" src="/icons/iconmonstr-user-6.svg"
            alt=""></a>
      </span>
      <div v-if="this.dataStore.allowTestUser && showUserMenu"
        class="bg-gray-800 opacity-90 text-gray-300 h-72 w-1/3 absolute right-20 top-full px-5">
        <img class="w-1/4 aspect-square rounded-full mx-auto my-5" src="https://i.imgur.com/40qCewV.jpg" alt="">
        <h3 class="text-center">{{ this.dataStore.testUser.name }}</h3>
        <p class="text-xs text-center">{{ this.dataStore.testUser.email }}</p>
        <hr class="my-2" />
        <div>
          <h5>Your Profile</h5>
          <h5>Settings</h5>
          <h5 class="mt-4">Sign Out</h5>
        </div>
      </div>
    </div>
  </div>
  <header class="w-full">


    <!-- <button class="bg-green-600" @click="this.$refs.scroll.leftmostToRightmost">Leftmost To Rightmost</button>
    <button class="bg-pink-600" @click="this.$refs.scroll.rightmostToLeftmost">Rightmost To Leftmost</button> -->
    <HScroll
      class="relative p-4 gap-4 bg-gray-400 [&>div]:bg-gray-300 [&>div]:px-20 [&>div]:py-14 hover:[&>div]:bg-slate-400 [&>div]:relative"
      :gap="16" ref="scroll">
      <div><a href="">Spotlight</a></div>
      <div><a href="">AWAtv</a></div>
      <div><a href="">Reviews</a></div>
      <div><a href="">Challenge</a></div>
      <div><a href="">Magazine</a></div>
      <div><a href="">Foundation</a></div>
      <div v-for="i in 5"><a href="">Other link</a></div>
    </HScroll>
  </header>

  <!-- for testing links (remove later) -->
  <div class="link-test-only inline w-100 fixed" style="bottom: 100px; z-index: 1">
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
  </div>



  <RouterView />

  <Footer v-if="showFooter" :toggleFooter="toggleFooter" />
  <div class="fixed w-full" style="bottom: 60px;">
    <img @click.prevent="scrollToTop" class="h-12 ml-auto mr-5" src="/icons/iconmonstr-angel-up-circle-thin.svg"
      alt="scroll to top">
  </div>
  <div class="fixed h-12 w-full bg-gray-400 hover:bg-gray-600 opacity-60" style="bottom: 0px; z-index: 1;"
    @click.prevent="toggleFooter">
  </div>


  <!-- MODALS (popups) -->
  <SignupModal />
  <LoginModal />
  <Modal :tag="'addWorkModal'">
    <form class="flex flex-col gap-5 mb-3 p-10">
      <h3 class="text-gray-700">Upload new Artwork</h3>

      <input
        class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        type="text" id="title" placeholder="Title" />

      <!-- <input
        class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        type="text" id="category" placeholder="Category" /> -->

      <div>
        <input class="outline-gray-300 outline-none outline-2" type="text" list="sub-topics" id="categories"
          placeholder="Category" />
        <datalist id="sub-topics">
          <option value="Character Art"></option>
          <option value="Buildings"></option>
          <option value="Worlds"></option>
          <option value="Objects"></option>
        </datalist>
      </div>

      <textarea class="outline-gray-300 outline-none outline-2" rows="5" columns="5" placeholder="Tags"></textarea>

      <input
        class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        type="file" id="formFile" accept="image/*" />

      <RippleButton :buttonText="'Upload'" type="button"
        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init data-te-ripple-color="light" />
    </form>
  </Modal>
</template>

<script>
import Input from "@/components/TextInput.vue"
import HScroll from "@/components/HorizontalScroll.vue"
import Footer from "@/components/FooterComponent.vue"

import SignupModal from "@/components/SignupModal.vue"
import LoginModal from "@/components/LoginModal.vue"
import Modal from "@/components/Modal.vue"

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

import {
  Input as TailwindInput,
  Ripple,
  initTE,
} from "tw-elements";


export default {
  name: 'App',
  components: {
    Input,
    HScroll,
    Footer,
    Modal,
    SignupModal,
    LoginModal
  },
  data() {
    return {
      'showFooter': false,
      'showUserMenu': false
    }
  },
  computed: {
    ...mapStores(useDataStore)
  },
  methods: {
    toggleFooter() {
      this.showFooter = !this.showFooter;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  mounted() {

    initTE({ TailwindInput, Ripple });

    this.$nextTick(() => {
      setTimeout(() => {
        this.scrollToTop();
      }, 1000)
    })
  }
}
</script>
