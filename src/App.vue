<template>
  <!-- <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink> -->

  <header>
    <div class="grid grid-cols-2 p-3 bg-gray-800" style="grid-template-columns: 1fr 1fr;">
      <div><img style="height:55px;" src="/icons/awa_logo.svg" /></div>
      <div class="flex justify-center gap-2 [&>*]:my-auto">
        <Input :placeholderText="'Search'" />
        <RippleButton :buttonText="'Sign Up'" />
        <RippleButton :buttonText="'Login'" />
      </div>
    </div>
    <HScroll
      class="p-4 gap-4 bg-gray-400 mb-16 [&>div]:bg-gray-300 [&>div]:px-20 [&>div]:py-14 hover:[&>div]:bg-slate-400 [&>div]:relative">
      <div><a href="">Spotlight</a></div>
      <div><a href="">AWAtv</a></div>
      <div><a href="">Reviews</a></div>
      <div><a href="">Challenge</a></div>
      <div><a href="">Magazine</a></div>
      <div><a href="">Foundation</a></div>
      <div v-for="i in 5"><a href="">Other link</a></div>
    </HScroll>
  </header>

  <RouterView />

  <Footer />
</template>

<script>
import Input from "@/components/TextInput.vue"
import HScroll from "@/components/HorizontalScroll.vue"
import Footer from "@/components/FooterComponent.vue"

export default {
  components: {
    Input,
    HScroll,
    Footer
  },
  mounted() {
    alert("Site still in development\n Working on the cyclic navigation and the gallery")
  }
}
</script>