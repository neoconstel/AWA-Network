<template>
    <div class="mx-11">
        <div class="block md:grid mt-16 mb-4 gap-x-4 px-4" style="grid-template-columns: 4fr 1fr;">
            <div class="">
                <Carousel v-if="this.carouselImages.length > 1" :images="this.carouselImages" />
            </div>
            <div class="grid bg-gray-400 dark:bg-gray-600 xs:mt-5 md:mt-0" style="grid-template-rows: 30px 1fr;">
                <p class="text-center my-auto text-gray-800 dark:text-gray-200 text-2xl">{{
                    this.spotlightCaption }}</p>
                <div class="h-full w-full">
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


        <!-- collapse start -->
        <!-- <a class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-collapse-init data-twe-ripple-init data-twe-ripple-color="light" href="#collapseExample"
            role="button" aria-expanded="false" aria-controls="collapseExample">
            Link with href
        </a>
        <button
            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            type="button" data-twe-collapse-init data-twe-ripple-init data-twe-ripple-color="light"
            data-twe-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Button with data-twe-target
        </button>

        <div class="!visible hidden text-center" id="collapseExample" data-twe-collapse-item>
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
        </div> -->
        <!-- collapse end -->



        <section class="gallery">
            <WorksGallery class="xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-6" :works="works"
                :infoBgCol="'bg-gray-400 dark:bg-gray-700'" :startIndex="0" :stopIndex="12" :maxWorks="12"
                @bottom-reached="addMoreWorks" />
        </section>
        <section class="tv">
            <div class="grid grid-cols-2 bg-gray-400 dark:bg-gray-700 text-gray-700 dark:text-gray-200 pt-2 pb-2 px-7">
                <h3 class="text-right text-4xl">AWA TV</h3>
                <a class="block text-right" href="">More</a>
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
        <section class="gallery">
            <WorksGallery class="xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-6" :works="works"
                :infoBgCol="'bg-gray-400 dark:bg-gray-700'" :startIndex="12" :stopIndex="24" :maxWorks="24"
                @bottom-reached="addMoreWorks" />
        </section>
        <section class="reviews mb-10">
            <div class="bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4">
                <p class="grid grid-cols-2">
                <h3 class="">Reviews</h3>
                <a class="block text-right" href="">More</a>
                </p>
                <div class="grid grid-cols-4 gap-4">
                    <template v-for="(review, index) in reviews.slice(0, 4)">
                        <div class="relative grid bg-yellow-500">
                            <RouterLink class="w-full h-full aspect-video" :to="`/review/${review.id}/`">
                                <img class="h-full w-full object-cover" :src="review.caption_media_url" alt="">
                            </RouterLink>
                            <span class="absolute left-3 top-3 font-bold text-yellow-400">{{ review.title.slice(0, 40) +
                                (review.title.length > 36 ? '...' : '') }}</span>
                        </div>
                    </template>
                </div>
            </div>
        </section>
        <!-- <section class="spotlight mb-10">
            <div class="bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4">
                <p class="grid grid-cols-2">
                <h3 class="">Spotlight</h3>
                <a class="block text-right" href="">More</a>
                </p>
                <div class="grid grid-cols-4 gap-4">
                    <template v-for="    i in 4   ">
                        <div class="grid bg-gray-300 p-3" style="aspect-ratio: 16/9;">

                        </div>
                    </template>
                </div>
            </div>
        </section> -->
        <section class="gallery">
            <WorksGallery class="xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-6" :works="works"
                :infoBgCol="'bg-gray-400 dark:bg-gray-700'" :startIndex="24" :stopIndex="36" :maxWorks="36"
                @bottom-reached="addMoreWorks" />
        </section>
        <section class="challenges mb-10">
            <div class="bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4">
                <p class="grid grid-cols-2">
                <h3 class="">Challenges</h3>
                <a class="block text-right" href="">More</a>
                </p>
                <div class="grid grid-cols-4 gap-4">
                    <template v-for="i in 4">
                        <div class="grid bg-gray-300 p-3" style="aspect-ratio: 16/9;">

                        </div>
                    </template>
                </div>
            </div>
        </section>
        <section class="gallery">
            <WorksGallery class="xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-6" :works="works"
                :infoBgCol="'bg-gray-400 dark:bg-gray-700'" :startIndex="36" :stopIndex="48" :maxWorks="48"
                @bottom-reached="addMoreWorks" />
        </section>
        <section class="resources mb-10">
            <div class="bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4">
                <p class="grid grid-cols-2">
                <h3 class="">Resources</h3>
                <a class="block text-right" href="">More</a>
                </p>
                <div class="grid grid-cols-4 gap-4">
                    <template v-for="i in 4">
                        <div class="grid bg-gray-300 p-3" style="aspect-ratio: 16/9;">

                        </div>
                    </template>
                </div>
            </div>
        </section>
        <section class="gallery">
            <WorksGallery class="xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-6" :works="works"
                :infoBgCol="'bg-gray-400 dark:bg-gray-700'" :startIndex="48" :stopIndex="60" :maxWorks="60"
                @bottom-reached="addMoreWorks" />
        </section>
        <section class="meetups mb-10">
            <div class="bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4">
                <p class="grid grid-cols-2">
                <h3 class="">Meetups</h3>
                <a class="block text-right" href="">More</a>
                </p>
                <div class="grid grid-cols-4 gap-4">
                    <template v-for="i in 4">
                        <div class="grid bg-gray-300 p-3" style="aspect-ratio: 16/9;">

                        </div>
                    </template>
                </div>
            </div>
        </section>
        <section class="gallery">
            <WorksGallery class="xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-6" :works="works"
                :infoBgCol="'bg-gray-400 dark:bg-gray-700'" :startIndex="60" :stopIndex="72" :maxWorks="72"
                @bottom-reached="addMoreWorks" />
        </section>
        <section class="jobs">
            <div class="bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4">
                <p class="grid grid-cols-2">
                <h3 class="inline">Jobs</h3>
                <a class="block text-right" href="">All Jobs</a>
                </p>
                <div class="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <template v-for="i in 6">
                        <div class="grid bg-gray-300 p-3" style="grid-template-columns: 2fr 7fr; aspect-ratio: 5/1;">
                            <div><img style="width:100%; height:100%;" src="/static/icons/awa_logo.svg" /></div>
                            <div class="text-gray-800">
                                <p>Bungle</p>
                                <h3 class="mb-4">VFX Lead</h3>
                                <p>Bellevue, WA, United States</p>
                                <p class="flex xs:flex-col sm:flex-row gap-2">
                                    <!-- <RippleButton class="h-9 text-gray-900" :buttonText="'Permanent'" />
                                    <RippleButton class="h-9 text-gray-900" :buttonText="'Relocation'" /> -->
                                    <v-btn variant="outlined">
                                        Permanent
                                    </v-btn>
                                    <v-btn variant="outlined">
                                        Relocation
                                    </v-btn>
                                </p>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </section>
        <section class="gallery">
            <WorksGallery class="xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-6" :works="works"
                :infoBgCol="'bg-gray-400 dark:bg-gray-700'" :startIndex="72" :stopIndex="this.worksUpperLimit"
                @bottom-reached="addMoreWorks" :infiniteScroll="true" />
        </section>
    </div>
</template>

<script>
// Initialization for ES Users
import {
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

            "reviews": []
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
        initTWE({ Ripple });


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
