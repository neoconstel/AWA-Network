<template>
    <div id="carouselExampleIndicators" class="relative" data-twe-carousel-init data-twe-ride="carousel">
        <!--Carousel indicators-->
        <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-twe-carousel-indicators>
            <button type="button" data-twe-target="#carouselExampleIndicators" data-twe-slide-to="0"
                data-twe-carousel-active
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true" aria-label="Slide 1"></button>

            <template v-if="this.images.length >= 2" v-for="(image, index) in images.slice(1)" :key="index">
                <button type="button" data-twe-target="#carouselExampleIndicators" :data-twe-slide-to="index + 1"
                    class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    :aria-label="`Slide ${index + 2}`"></button>
            </template>
        </div>

        <!--Carousel items-->
        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <!--First item-->
            <div class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                style="aspect-ratio: 16/7; object-fit: cover;" data-twe-carousel-item data-twe-carousel-active>
                <img :src="images[0].url" class="block w-full h-full object-cover" :alt="images[0].caption" />
            </div>
            <!--Other items-->
            <div v-if="this.images.length >= 2" v-for="(image, index) in images.slice(1)"
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                style="aspect-ratio: 16/7; object-fit: cover;" data-twe-carousel-item :key="index">
                <img :src="image.url" class="block w-full h-full object-cover" :alt="image.caption" />
            </div>
        </div>

        <!--Carousel controls - prev item-->
        <button
            class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" data-twe-target="#carouselExampleIndicators" data-twe-slide="prev">
            <span class="inline-block h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </span>
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
        </button>
        <!--Carousel controls - next item-->
        <button
            class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" data-twe-target="#carouselExampleIndicators" data-twe-slide="next">
            <span class="inline-block h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </span>
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
        </button>
    </div>
</template>

<script>
// tailwind-elements initialization
import {
    Carousel,
    initTWE,
} from "tw-elements";

export default {
    name: 'CarouselComponent',
    props: {
        'images': Object // image/caption objects owned by carousel instance 
    },
    data() {
        return {

        }
    },
    mounted() {
        initTWE({ Carousel });
    }
}
</script>
