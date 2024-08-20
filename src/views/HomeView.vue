<template>
    <div class="mx-11">
        <div class="grid mt-16 mb-4 gap-x-4 px-4" style="grid-template-columns: 4fr 1fr;">
            <div>
                <Carousel v-if="this.carouselImages.length > 1" :images="this.carouselImages" />
            </div>
            <div class="bg-gray-400 dark:bg-gray-600 grid" style="grid-template-rows: 50px 1fr;">
                <p class="text-center my-auto text-gray-800 dark:text-gray-200 text-2xl">{{ this.spotlightCaption }}</p>
                <div>
                    <RouterLink :to="`/artwork/${this.spotlightArt.id}`">
                        <img class="h-full w-full" style="object-fit: cover; object-position: 0% 5%;"
                            :src="this.spotlightArt.image_url" alt="spotlight art">
                    </RouterLink>
                </div>
            </div>
        </div>
        <div v-if="this.dataStore.user.id" class="sticky inline top-36 z-10 ml-5">
            <a data-twe-toggle="modal" data-twe-target="#addWorkModal" @click.prevent="" href=""><svg
                    class="h-16 inline fill-gray-800 dark:fill-gray-200" clip-rule="evenodd" fill-rule="evenodd"
                    stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                        fill-rule="nonzero" />
                </svg></a>
        </div>


        <!-- collapse control button -->
        <div class="text-center mb-24">
            <button @click="highlightsOpen = !highlightsOpen"
                class="w-1/3 h-24 inline-block rounded-full px-6 pb-2 pt-2.5 text-5xl font-medium leading-normal text-gray-300 dark:text-gray-700 bg-gray-700 dark:bg-gray-300 hover:text-gray-400 dark:hover:text-gray-500 shadow-gray-900 dark:shadow-gray-100 shadow-2xl transition duration-150 ease-in-out hover:shadow-primary-2 focus:bg-gray-600 dark:focus:bg-gray-400 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:shadow-primary-2 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="button" data-twe-collapse-init data-twe-ripple-init data-twe-ripple-color="light"
                data-twe-target="#highlightsCollapseElement" aria-expanded="false"
                aria-controls="highlightsCollapseElement" ref="highlightsOpenButton"><span class="">HIGHLIGHTS</span>
                <svg v-if="!highlightsOpen"
                    class="arrow-down-filled inline relative bottom-1 fill-gray-200 dark:fill-gray-800 h-24"
                    clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
                </svg>
                <svg v-else class="arrow-up-filled inline relative bottom-1 fill-gray-200 dark:fill-gray-800 h-24"
                    clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m16.843 13.789c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291 1.002 1.299 3.044 3.945 4.243 5.498z" />
                </svg>
            </button>
        </div>

        <!-- collapse start (highlights) -->
        <div class="!visible hidden" id="highlightsCollapseElement" data-twe-collapse-item>
            <!-- <h1 class="text-9xl text-violet-700 font-bold italic">The Highlights Are Here!!!</h1> -->

            <section class="tv">
                <div
                    class="grid grid-cols-2 bg-gray-400 dark:bg-gray-700 text-gray-700 dark:text-gray-200 pt-2 pb-2 px-7 mb-12">
                    <h3 class="text-right text-4xl">AWA TV</h3>
                    <a class="block text-right" href="">More</a>
                    <div>
                        <img class="w-full" src="https://i.imgur.com/SLPdRb2.jpg" />
                    </div>
                    <div class="grid grid-rows-3 bg-gray-500 p-3 gap-x-8 gap-y-6"
                        style="grid-template-columns: 1fr 2fr;">
                        <div class="bg-pink-500"></div>
                        <div class="bg-cyan-500"></div>
                        <div class="bg-yellow-500"></div>
                        <div class="bg-orange-500"></div>
                        <div class="bg-blue-500"></div>
                        <div class="bg-violet-500"></div>
                    </div>
                </div>
            </section>
            <section class="reviews mb-10">
                <div class="bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4">
                    <p class="grid grid-cols-2">
                    <h3 class="text-right text-4xl">Reviews</h3>
                    <a class="block text-right" href="">More</a>
                    </p>
                    <div class="grid grid-cols-4 gap-4">
                        <template v-for="(review, index) in reviews">
                            <div class="relative grid bg-yellow-500">
                                <RouterLink class="w-full h-full aspect-video" :to="`/review/${review.id}/`">
                                    <img class="h-full w-full object-cover" :src="review.caption_media_url" alt="">
                                </RouterLink>
                                <span class="absolute left-3 top-3 font-bold text-yellow-400">{{ review.title.slice(0,
                                    40) +
                                    (review.title.length > 36 ? '...' : '') }}</span>
                            </div>
                        </template>
                    </div>
                </div>
            </section>
            <section class="spotlight mb-10">
                <div class="bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4">
                    <p class="grid grid-cols-2">
                    <h3 class="text-right text-4xl">Spotlight</h3>
                    <a class="block text-right" href="">More</a>
                    </p>
                    <div class="grid grid-cols-4 gap-4">
                        <template v-for="    i in 4   ">
                            <div class="grid bg-gray-300 p-3" style="aspect-ratio: 16/9;">

                            </div>
                        </template>
                    </div>
                </div>
            </section>
            <section class="challenges mb-10">
                <div class="bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4">
                    <p class="grid grid-cols-2">
                    <h3 class="text-right text-4xl">Challenges</h3>
                    <a class="block text-right" href="">More</a>
                    </p>
                    <div class="grid grid-cols-4 gap-4">
                        <template v-for="    i in 4   ">
                            <div class="grid bg-gray-300 p-3" style="aspect-ratio: 16/9;">

                            </div>
                        </template>
                    </div>
                </div>
            </section>
            <section class="resources mb-10">
                <div class="bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4">
                    <p class="grid grid-cols-2">
                    <h3 class="text-right text-4xl">Resources</h3>
                    <a class="block text-right" href="">More</a>
                    </p>
                    <div class="grid grid-cols-4 gap-4">
                        <template v-for="    i in 4   ">
                            <div class="grid bg-gray-300 p-3" style="aspect-ratio: 16/9;">

                            </div>
                        </template>
                    </div>
                </div>
            </section>
            <section class="meetups mb-10">
                <div class="bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4">
                    <p class="grid grid-cols-2">
                    <h3 class="text-right text-4xl">Meetups</h3>
                    <a class="block text-right" href="">More</a>
                    </p>
                    <div class="grid grid-cols-4 gap-4">
                        <template v-for="    i in 4   ">
                            <div class="grid bg-gray-300 p-3" style="aspect-ratio: 16/9;">

                            </div>
                        </template>
                    </div>
                </div>
            </section>
            <section class="jobs mb-8">
                <div class="bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4">
                    <p class="grid grid-cols-2">
                    <h3 class="inline text-right text-4xl">Jobs</h3>
                    <a class="block text-right" href="">All Jobs</a>
                    </p>
                    <div class="grid grid-cols-3 gap-4">
                        <template v-for="    i in 6   ">
                            <div class="grid bg-gray-300 p-3"
                                style="grid-template-columns: 2fr 7fr; aspect-ratio: 5/1;">
                                <div><img style="width:100%; height:100%;" src="/static/icons/awa_logo.svg" /></div>
                                <div>
                                    <p>Bungle</p>
                                    <h3 class="mb-4">VFX Lead</h3>
                                    <p>Bellevue, WA, United States</p>
                                    <p class="flex gap-2">
                                        <RippleButton class="h-9 text-gray-900" :buttonText="'Permanent'" />
                                        <RippleButton class="h-9 text-gray-900" :buttonText="'Relocation'" />
                                    </p>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </section>

            <!-- <button @click="highlightsOpen = false" class="block mx-auto">
                <svg class="arrow-up-filled fill-gray-800 dark:fill-gray-200 h-48" clip-rule="evenodd"
                    fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m16.843 13.789c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291 1.002 1.299 3.044 3.945 4.243 5.498z" />
                </svg>
            </button> -->
        </div>
        <!-- collapse end (highlights) -->

        <!-- this paragraph just serves as a horizontal line with custom colour/width -->
        <p class="border-t-gray-300 dark:border-t-gray-700 w-9/12 mx-auto border-t-2"></p>

        <!-- <h2>Discover Artworks</h2> -->
        <section class="gallery">
            <WorksGallery :works="works" :infoBgCol="'bg-gray-400 dark:bg-gray-700'" :startIndex="0" :stopIndex="15"
                :maxWorks="15" @bottom-reached="addMoreWorks" />
        </section>


        <section class="gallery">
            <WorksGallery :works="works" :infoBgCol="'bg-gray-400 dark:bg-gray-700'" :startIndex="15" :stopIndex="30"
                :maxWorks="30" @bottom-reached="addMoreWorks" />
        </section>


        <section class="gallery">
            <WorksGallery :works="works" :infoBgCol="'bg-gray-400 dark:bg-gray-700'" :startIndex="30"
                :stopIndex="this.worksUpperLimit" @bottom-reached="addMoreWorks" :infiniteScroll="true" />
        </section>
    </div>
</template>

<script>
// Initialization for ES Users
import {
    Collapse,
    Ripple,
    initTWE,
} from "tw-elements";


import Carousel from "@/components/CarouselComponent.vue"
import WorksGallery from "@/components/WorksGallery.vue"

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {
    name: 'Home',
    components: {
        Carousel,
        WorksGallery
    },
    data() {
        return {
            "works": [],
            "worksUpperLimit": 40,
            "worksFetchPage": 1,
            "carouselImages": [], // {url,caption}
            "spotlightArt": {}, // {id, url}
            "spotlightCaption": "",

            "reviews": [],
            "highlightsOpen": false
        }
    },
    computed: {
        ...mapStores(useDataStore)
    },
    methods: {
        randomIntInclusive(a, b) {
            a = Math.ceil(a);
            b = Math.floor(b);
            return Math.floor(Math.random() * (b - a + 1) + a);
        },
        addMoreWorks() {
            /** these first part is for simulating more data. replace with
             * fetch API or similar for the real application */
            // if (this.works.length < this.worksDatabase.length) {
            //     this.works.push(this.worksDatabase[this.works.length])
            // }
            // else {
            //     let worksMiddleIndex = Math.ceil(this.works.length / 2)
            //     this.works.push(this.works[worksMiddleIndex])
            // }

            // fetch works from current fetch page


            // increment fetch page

            // do not touch
            this.worksUpperLimit++;
        },
        async fetchWorks() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/artworks/?page_size=70`

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    // console.log(data)
                    this.works.splice(this.works.length, 0, ...(data['results']))
                    console.log(this.works)
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
        async fetchPageCMS() {
            const url =
                `${import.meta.env.VITE_BACKEND_DOMAIN}/api/v2/pages/?`
                + `type=main.HomePage`
                + `&fields=gallery_images,spotlight_art,spotlight_caption`

            const homePage = await fetch(url)
                .then(response => response.json())
                .then(pages => pages.items[0])

            this.carouselImages = homePage.gallery_images
            this.spotlightArt = homePage.spotlight_art
            this.spotlightCaption = homePage.spotlight_caption
        },

        async fetchReviews() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/reviews/`

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    // console.log(data)
                    this.reviews.splice(this.reviews.length, 0, ...(data['results']))
                    console.log(this.reviews)
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },

    },
    async mounted() {
        initTWE({ Collapse, Ripple });


        console.log('home view mounted')
        this.dataStore.currentView = this.$options.name

        this.$nextTick(() => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100)
        })

        this.fetchPageCMS()
        this.fetchWorks()
        this.fetchReviews()

    }
}
</script>
