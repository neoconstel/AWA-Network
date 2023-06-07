<template>
    <div class="flex" style="overflow: hidden;" v-dragscroll.x="true">
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    name: 'HorizontalScroll',
    data() {
        return {

        }
    }
}
</script>
  