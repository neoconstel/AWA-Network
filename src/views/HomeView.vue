<template>
    <div class="grid mb-16" style="grid-template-columns: 40fr 11fr;">
        <div>
            <Carousel />
        </div>
        <div class="grid bg-gray-400" style="grid-template-rows: 1fr 9fr;">
            <p class="text-center my-auto">Spotlight Art</p>
            <img class="mx-auto h-full" src="https://i.imgur.com/40qCewV.jpg" alt="spotlight art">
        </div>
    </div>
    <section class="gallery">
        <div class="grid grid-cols-5 gap-x-3 gap-y-14 px-4 py-14 bg-gray-900">

            <!-- user portfolio -->
            <div v-for="(portfolio, index) in portfolios.slice(0, 15)" :key="index"
                class="bg-gray-300 h-44 grid grid-rows-1 grid-cols-1"
                :style="`grid-template-rows: ${binaryChoice() + 2}fr ${binaryChoice() + 2}fr; grid-template-columns: ${binaryChoice() + 2}fr ${binaryChoice() + 2}fr;`">
                <!-- works by this user -->
                <div class="bg-pink-500">{{ index }}<img src="https://picsum.photos/200/300"
                        :alt="portfolio.works[0].title"></div>
                <div class="bg-cyan-500">{{ index }}</div>
                <div class="bg-yellow-500">{{ index }}</div>
                <div class="bg-orange-500">{{ index }}</div>
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
    },
    data() {
        return {
            "portfolios": [],
        }
    },
    methods: {
        binaryChoice() {
            let decimal = Math.random() * 10;
            let num = Math.floor(decimal)
            let isEven = num % 2 != 0;
            let binaryOutput = isEven ? 0 : 1;
            return binaryOutput;
        }
    },
    async mounted() {
        console.log('home view mounted')

        const res = await fetch('/src/sample_portfolios.json')
        let data = await res.json()
        this.portfolios = data
        console.log(this.portfolios)
        console.log(`portfolios: ${this.portfolios.length}`)
        console.log(this.portfolios[1].user)
        console.log(this.portfolios[1].works.title)
    }
}
</script>
