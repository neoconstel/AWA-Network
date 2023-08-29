<template>
  <div class="sticky top-0 z-10 grid grid-cols-2 p-3 bg-gray-800" style="grid-template-columns: 1fr 1fr;">
    <div><img style="height:55px;" src="/icons/awa_logo.svg" />
    </div>
    <div class="flex justify-center gap-2 [&>*]:my-auto">
      <Input :placeholderText="'Search'" />
      <RippleButton :buttonText="'Sign Up'" />
      <RippleButton :buttonText="'Login'" />
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
      <!-- <li>
        <RouterLink to="/artist_portfolio">Artist Portfolio
        </RouterLink>
      </li> -->
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
</template>

<script>
import Input from "@/components/TextInput.vue"
import HScroll from "@/components/HorizontalScroll.vue"
import Footer from "@/components/FooterComponent.vue"

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

    this.$nextTick(() => {
      setTimeout(() => {
        this.scrollToTop();
      }, 1000)
    })
  }
}
</script>
