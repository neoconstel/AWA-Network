<template>
    <div class="grid mt-16 mb-4 gap-x-4 px-4" style="grid-template-columns: 4fr 1fr;">
        <div>
            <Carousel v-if="this.carouselImages.length > 1" :images="this.carouselImages" />
        </div>
        <div class="bg-gray-400 dark:bg-gray-600 grid" style="grid-template-rows: 30px 1fr;">
            <p class="text-center my-auto text-gray-800 dark:text-gray-200">Spotlight Art</p>
            <div>
                <a href="">
                    <img class="h-full w-full" style="object-fit: cover; object-position: 0% 5%;"
                        src="https://i.imgur.com/40qCewV.jpg" alt="spotlight art">
                </a>
            </div>
        </div>
    </div>
    <div v-if="this.dataStore.user.id" class="sticky inline top-36 z-10 ml-5">
        <a data-te-toggle="modal" data-te-target="#addWorkModal" @click.prevent="" href=""><svg
                class="h-16 inline fill-gray-800 dark:fill-gray-200" clip-rule="evenodd" fill-rule="evenodd"
                stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                    fill-rule="nonzero" />
            </svg></a>
    </div>
    <section class="gallery">
        <WorksGallery :works="works" :infoBgCol="'bg-gray-400 dark:bg-gray-700'" :startIndex="0" :stopIndex="15"
            :maxWorks="15" @bottom-reached="addMoreWorks" />
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
    <section class="gallery">
        <WorksGallery :works="works" :infoBgCol="'bg-gray-400 dark:bg-gray-700'" :startIndex="15" :stopIndex="30"
            :maxWorks="30" @bottom-reached="addMoreWorks" />
    </section>
    <section class="jobs">
        <div class="bg-gray-400 p-4">
            <p>
            <h3 class="inline">Featured Jobs</h3>
            <a class="absolute right-4" href="">All Jobs</a>
            </p>
            <div class="grid grid-cols-3 gap-4">
                <template v-for="    i     in     6   ">
                    <div class="grid bg-gray-300 p-3" style="grid-template-columns: 2fr 7fr; aspect-ratio: 5/1;">
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
    <section class="gallery">
        <WorksGallery :works="works" :infoBgCol="'bg-gray-400 dark:bg-gray-700'" :startIndex="30"
            :stopIndex="this.worksUpperLimit" @bottom-reached="addMoreWorks" :infiniteScroll="true" />
    </section>
</template>

<script>
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
            "carouselImages": [] // {url,caption}
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
        async fetchCarouselImages() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/v2/pages/?type=main.HomePage&fields=gallery_images`
            const galleryImages = await fetch(url)
                .then(response => response.json())
                .then(page => page.items[0].gallery_images)

            this.carouselImages = galleryImages
        }
    },
    async mounted() {
        console.log('home view mounted')
        this.dataStore.currentView = this.$options.name

        this.$nextTick(() => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100)
        })

        this.fetchCarouselImages()
        this.fetchWorks()

    }
}
</script>
