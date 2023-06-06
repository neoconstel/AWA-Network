<template>
  <!-- <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink> -->

  <header>
    <div class="grid grid-cols-2" style="grid-template-columns: 3fr 1fr;">
      <div><img style="height:55px;" src="icons/awa_logo.svg" /></div>
      <div>
        <Input :placeholderText="'hothead'" />
      </div>
    </div>
  </header>

  <RouterView />

  <footer></footer>
</template>

<script>
import Input from "@/components/TextInput.vue"

export default {
  components: {
    Input
  },
  mounted() {

  }
}
</script>