<template>
  <div class="sticky top-0 z-10 grid grid-cols-2 p-3 bg-gray-800" style="grid-template-columns: 1fr 1fr;">
    <div><img style="height:55px;" src="/icons/awa_logo.svg" />
    </div>
    <div class="flex justify-center gap-2 [&>*]:my-auto">
      <Input :placeholderText="'Search'" />
      <RippleButton :buttonText="'Sign Up'" type="button"
        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-toggle="modal" data-te-target="#signupModal" data-te-ripple-init data-te-ripple-color="light" />
      <RippleButton :buttonText="'Login'" type="button"
        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-toggle="modal" data-te-target="#loginModal" data-te-ripple-init data-te-ripple-color="light" />
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



  <!-- Signup Modal -->
  <div data-te-modal-init
    class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
    <div data-te-modal-dialog-ref
      class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
      <div
        class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <!--Modal title-->
          <h5 class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200" id="signupModalLabel">
            Signup Modal Title
          </h5>
          <!--Close button-->
          <button type="button"
            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!--Modal body-->
        <div class="relative flex-auto p-4" data-te-modal-body-ref>
          Modal body text goes here.
        </div>

        <!--Modal footer-->
        <div
          class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <button type="button"
            class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
            data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
            Close
          </button>
          <button type="button"
            class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init data-te-ripple-color="light">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>


  <!-- Login Modal -->
  <div data-te-modal-init
    class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div data-te-modal-dialog-ref
      class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
      <div
        class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <!--Modal title-->
          <h5 class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200" id="loginModalLabel">
            Login Modal title
          </h5>
          <!--Close button-->
          <button type="button"
            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!--Modal body-->
        <div class="relative flex-auto p-4" data-te-modal-body-ref>
          Modal body text goes here.
        </div>

        <!--Modal footer-->
        <div
          class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <button type="button"
            class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
            data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
            Close
          </button>
          <button type="button"
            class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init data-te-ripple-color="light">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/TextInput.vue"
import HScroll from "@/components/HorizontalScroll.vue"
import Footer from "@/components/FooterComponent.vue"

import {
  Modal,
  Ripple,
  initTE,
} from "tw-elements";

export default {
  name: 'App',
  components: {
    Input,
    HScroll,
    Footer
  },
  data() {
    return {
      'showFooter': false,
    }
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

    initTE({ Modal, Ripple });

    this.$nextTick(() => {
      setTimeout(() => {
        this.scrollToTop();
      }, 1000)
    })
  }
}
</script>
