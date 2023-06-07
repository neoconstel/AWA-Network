<template>
  <!-- <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink> -->

  <header>
    <div class="grid grid-cols-2 p-3" style="grid-template-columns: 1fr 1fr;">
      <div><img style="height:55px;" src="icons/awa_logo.svg" /></div>
      <div class="flex justify-center gap-2 [&>*]:my-auto">
        <Input :placeholderText="'Search'" />
        <RippleButton :buttonText="'Sign Up'" />
        <RippleButton :buttonText="'Login'" />
      </div>
    </div>
    <HScroll>
      <img v-for="i in 30" style="height:55px;" src="icons/awa_logo.svg" />
    </HScroll>

  </header>

  <RouterView />

  <footer></footer>
</template>

<script>
import Input from "@/components/TextInput.vue"
import RippleButton from "@/components/RippleButton.vue"
import HScroll from "@/components/HorizontalScroll.vue"

export default {
  components: {
    Input,
    RippleButton,
    HScroll
  },
  mounted() {

  }
}
</script>