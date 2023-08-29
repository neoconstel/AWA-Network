<template class="bg-gray-800">
    <section class="header dashboard">
        <div class="grid grid-cols-2 pb-16">
            <div class="grid pl-16 pr-24" style="grid-template-rows: 5fr 3fr;">
                <div class="grid" style="grid-template-columns: 2fr 5fr;">
                    <div class="" style="aspect-ratio: 1/1;">
                        <img class="w-full h-full rounded-full" src="https://i.imgur.com/40qCewV.jpg" alt="">
                    </div>
                    <div class="pl-20 text-gray-200">
                        <h3>{{ this.dataStore.artist }}</h3>
                        <p><img class="inline w-4 mr-1" src="/icons/iconmonstr-location-19.svg" alt=""><span
                                class="text-sm text-gray-400">Wysteria Lane, California</span></p>
                        <p class="mt-3">Tech support and Analyst, Visual Artist, Animator and 3D Generalist</p>
                        <p class="mt-2 text-yellow-300"><a
                                href="http://www.animationwestafrica.com">www.animationwestafrica.com</a></p>

                    </div>
                </div>
                <div class="grid grid-cols-2 gap-x-3 [&>*]:mt-auto">
                    <RippleButton class="bg-yellow-300 text-gray-900" :buttonText="'Follow'" />
                    <RippleButton class="text-gray-900" :buttonText="'Message'" />
                </div>
            </div>
            <div class="grid grid-rows-3 pl-24 pr-16 text-gray-300">
                <div class="grid grid-cols-4 [&>*]:space-y-1 border-b-gray-500" style="border-bottom-width: 1px;">
                    <div>
                        <p class="text-2xl">435251</p>
                        <p><img class="inline w-4 mr-1" src="/icons/iconmonstr-eye-lined.svg" alt=""><span
                                class="text-xs"><b>VIEWS</b></span>
                        </p>
                    </div>
                    <div>
                        <p class="text-2xl">234890</p>
                        <p><img class="inline w-4 mr-1" src="/icons/iconmonstr-thumb-10.svg" alt=""><span
                                class="text-xs"><b>LIKES</b></span>
                        </p>
                    </div>
                    <div>
                        <p class="text-2xl">35465</p>
                        <p><img class="inline w-4 mr-1" src="/icons/iconmonstr-user-6.svg" alt=""><span
                                class="text-xs"><b>FOLLOWERS</b></span>
                        </p>
                    </div>
                    <div>
                        <p class="text-2xl">5652</p>
                        <p><img class="inline w-4 mr-1" src="/icons/iconmonstr-user-6.svg" alt=""><span
                                class="text-xs"><b>FOLLOWING</b></span>
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-5 [&>*]:w-8 [&>*]:h-8 gap-x-14 [&>*]:my-auto">
                    <img src="/icons/iconmonstr-mail-thin.svg" alt="">
                    <img src="/icons/iconmonstr-facebook-1.svg" alt="">
                    <img src="/icons/iconmonstr-instagram-11.svg" alt="">
                    <img src="/icons/iconmonstr-linkedin-1.svg" alt="">
                    <img src="/icons/iconmonstr-twitter-1.svg" alt="">
                </div>
                <div class="flex items-center ali border-t-gray-500" style="border-top-width: 1px;">
                    <p class=""><b>Tools:</b> Maya, Cinema 4D, Blender, Photoshop, Illustrator, After Effects
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="tabs text-gray-300 sticky top-16">
        <div class="grid gap-x-1" style="grid-template-columns: 2fr 1fr 1fr 5fr">
            <div class="relative">
                <a @click.prevent="this.tab = 'projects'"
                    :class='["px-4 py-6 w-full bg-gray-900 hover:bg-gray-800 inline-block text-right", projectTabColor("projects")]'
                    href="">Projects</a>
                <p v-show="tab == 'projects'" class="bg-yellow-300 h-2 w-1/2 absolute right-0"></p>
            </div>
            <div class="relative">
                <a @click.prevent="this.tab = 'followers'"
                    :class='["px-4 py-6 w-full bg-gray-900 hover:bg-gray-800 inline-block text-center", projectTabColor("followers")]'
                    href="">Followers</a>
                <p v-show="tab == 'followers'" class="bg-yellow-300 h-2 w-full absolute"></p>
            </div>
            <div class="relative">
                <a @click.prevent="this.tab = 'following'"
                    :class='["px-4 py-6 w-full bg-gray-900 hover:bg-gray-800 inline-block text-center", projectTabColor("following")]'
                    href="">Following</a>
                <p v-show="tab == 'following'" class="bg-yellow-300 h-2 w-full absolute"></p>
            </div>
            <div class="relative">
                <a @click.prevent="this.tab = 'likes'"
                    :class='["px-4 py-6 w-full bg-gray-900 hover:bg-gray-800 inline-block", projectTabColor("likes")]'
                    href="">Likes</a>
                <p v-show="tab == 'likes'" class="bg-yellow-300 h-2 w-1/4 absolute"></p>
            </div>
        </div>
    </section>

    <section class="gallery stuff bg-gray-700">
        <WorksGallery v-show="this.tab == 'projects'" :works="works" :startIndex="0" :stopIndex="this.worksUpperLimit"
            @bottom-reached="addMoreWorks" :infiniteScroll="true" />
        <div v-show="this.tab == 'followers'" class="h-72 bg-purple-950 text-pink-400">followers content</div>
        <div v-show="this.tab == 'following'" class="h-72 bg-amber-700 text-yellow-400">following content</div>
        <div v-show="this.tab == 'likes'" class="h-72 bg-blue-950 text-green-400">likes content</div>
    </section>
</template>

<script>

import WorksGallery from "@/components/WorksGallery.vue"

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {

    name: 'ArtistPortfolio',
    components: {
        WorksGallery
    },
    data() {
        return {
            'tab': 'projects',
            "works": [],
            "worksUpperLimit": 5
        }
    },
    computed: {
        ...mapStores(useDataStore)
    },
    methods: {
        projectTabColor(tabName) {
            if (this.tab == tabName)
                return 'text-yellow-300'
            return 'text-gray-300'
        },
        addMoreWorks() {
            /** these first part is for simulating more data. replace with
             * fetch API or similar for the real application */
            if (this.works.length < this.worksDatabase.length) {
                this.works.push(this.worksDatabase[this.works.length])
            }

            /** I have excluded the else so that it doesn't generate infinitely
             * past the pseudo-database (array) size. This way, a single artist
             * should have a finite number of works in the test application */
            // else {
            //     let worksMiddleIndex = Math.ceil(this.works.length / 2)
            //     this.works.push(this.works[worksMiddleIndex])
            // }


            this.worksUpperLimit++;
        }
    },
    async mounted() {
        console.log('artistPortfolio view mounted')
        this.dataStore.currentView = this.$options.name

        // scroll to top
        this.$nextTick(() => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100)
        })


        // filter database to simulate backend filter on artist-specific portfolio
        this.worksDatabase = this.dataStore.worksDatabase.filter((work) => {
            return work.user.username == this.$route.params.username
        })

        // pre-load few works before scrolling begins
        let worksCount = 5
        let interval
        interval = setInterval(() => {
            if (worksCount-- > 0) {
                this.addMoreWorks()
            }
            else
                clearInterval(interval)
        }, 100)

        console.log(this.works)
        console.log(`works: ${this.works.length}`)
    }
}

</script>
