<template>
    <Carousel class="mb-16" />
    <section class="gallery">
        <div class="grid grid-cols-5 gap-x-3 gap-y-14 px-4 py-14 bg-gray-900">
            <div v-for="i in 30" class="bg-gray-300 h-44 grid grid-rows-1 grid-cols-1"
                style="grid-template-rows: 1fr 2fr; grid-template-columns: 2fr 1fr;">
                <div class="bg-pink-500"></div>
                <div class="bg-cyan-500"></div>
                <div class="bg-yellow-500"></div>
                <div class="bg-orange-500"></div>
            </div>
        </div>
    </section>
    <section>
        <div class="grid grid-cols-2 bg-gray-400 pt-16 pb-10 px-7">
            <div>
                <img class="w-full" src="https://i.imgur.com/SLPdRb2.jpg" />
            </div>
            <div class="grid grid-rows-3 bg-gray-500 p-3 gap-x-8 gap-y-6" style="grid-template-columns: 1fr 2fr;">
                <div class="bg-pink-500"></div>
                <div class="bg-cyan-500"></div>
                <div class="bg-yellow-500"></div>
                <div class="bg-orange-500"></div>
                <div class="bg-blue-500"></div>
                <div class="bg-violet-500"></div>
            </div>
        </div>
    </section>
    <section class="gallery pb-4">
        <div class="grid grid-cols-5 gap-x-3 gap-y-14 px-4 py-14 bg-gray-900">
            <div v-for="i in 15" class="bg-gray-300 h-44 grid grid-rows-1 grid-cols-1"
                style="grid-template-rows: 1fr 2fr; grid-template-columns: 2fr 1fr;">
                <div class="bg-pink-500"></div>
                <div class="bg-cyan-500"></div>
                <div class="bg-yellow-500"></div>
                <div class="bg-orange-500"></div>
            </div>
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