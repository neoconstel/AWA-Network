<template>
    <Carousel class="mb-16" />
    <section class="gallery">
        <div class="grid grid-cols-5 gap-x-3 gap-y-14 px-4 py-14 bg-gray-900">
            <div v-for="i in 20" class="bg-cyan-300 h-44"></div>
        </div>
    </section>
</template>

<script>
import Carousel from "@/components/CarouselComponent.vue"

export default {
    name: 'Home',
    components: {
        Carousel
    }
}
</script>