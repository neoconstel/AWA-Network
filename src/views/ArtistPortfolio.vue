<template class="bg-gray-800">
    <section v-if="this.artist.id" class="header dashboard">
        <div class="grid grid-cols-2 pb-16">
            <div class="grid pl-16 pr-24" style="grid-template-rows: 5fr 3fr;">
                <div class="grid pt-10" style="grid-template-columns: 2fr 5fr;">
                    <div class="" style="aspect-ratio: 1/1;">
                        <img class="w-full h-full rounded-full" src="https://i.imgur.com/40qCewV.jpg" alt="">
                    </div>
                    <div class="pl-20 text-gray-200">
                        <h3>{{ this.artist.user.name }}</h3>
                        <p><img class="inline w-4 mr-1" src="/static/icons/iconmonstr-location-19.svg" alt=""><span
                                class="text-sm text-gray-400">Wysteria Lane, California</span></p>
                        <p class="mt-3">Tech support and Analyst, Visual Artist, Animator and 3D Generalist</p>
                        <p class="mt-2 text-yellow-300"><a
                                href="http://www.animationwestafrica.com">www.animationwestafrica.com</a></p>

                    </div>
                </div>
                <div v-if="this.dataStore.user.id && this.artist.user.username != this.dataStore.user.username"
                    class="grid grid-cols-2 gap-x-3 [&>*]:mt-auto">
                    <RippleButton class="bg-yellow-300 hover:bg-yellow-600 text-gray-900" :buttonText="'Follow'" />
                    <RippleButton class="bg-primary-300 hover:bg-primary-600 text-gray-900" :buttonText="'Message'"
                        style="background-image: url('/icons/iconmonstr-mail-thin.svg'); background-repeat: no-repeat; background-position: 34% 50%; background-size: 7%;" />
                </div>
            </div>
            <div class="grid grid-rows-3 pl-24 pr-16 pt-10 text-gray-300">
                <div class="grid grid-cols-4 [&>*]:space-y-1 border-b-gray-500 [&>*]:text-gray-800 dark:[&>*]:text-gray-200 [&>*]:fill-gray-800 [&>*]:dark:fill-gray-200"
                    style="border-bottom-width: 1px;">
                    <div>
                        <p class="text-2xl">435251</p>
                        <p><svg name="eye-icon-on" class="inline w-4 mr-1" clip-rule="evenodd" fill-rule="evenodd"
                                stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"
                                    fill-rule="nonzero" />
                            </svg><span class="text-xs"><b>VIEWS</b></span>
                        </p>
                    </div>
                    <div>
                        <p class="text-2xl">234890</p>
                        <p><svg name="thumb-up" class="inline w-4 mr-1" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24">
                                <path
                                    d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z" />
                            </svg><span class="text-xs"><b>LIKES</b></span>
                        </p>





                    </div>
                    <div>
                        <p class="text-2xl">35465</p>
                        <p><svg name="user" class="inline w-4 mr-1" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24">
                                <path
                                    d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
                            </svg><span class="text-xs"><b>FOLLOWERS</b></span>
                        </p>





                    </div>
                    <div>
                        <p class="text-2xl">5652</p>
                        <p>
                            <UserIcon class="inline w-4 mr-1" /><span class="text-xs"><b>FOLLOWING</b></span>
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-5 [&>*]:w-8 [&>*]:h-8 gap-x-14 [&>*]:my-auto">
                    <img src="/static/icons/iconmonstr-mail-thin.svg" alt="">
                    <img src="/static/icons/iconmonstr-facebook-1.svg" alt="">
                    <img src="/static/icons/iconmonstr-instagram-11.svg" alt="">
                    <img src="/static/icons/iconmonstr-linkedin-1.svg" alt="">
                    <img src="/static/icons/iconmonstr-twitter-1.svg" alt="">
                </div>
                <div class="flex items-center ali border-t-gray-500" style="border-top-width: 1px;">
                    <p class=""><b>Tools:</b> Maya, Cinema 4D, Blender, Photoshop, Illustrator, After Effects
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="tabs text-gray-300 sticky top-16 z-10">
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

    <section v-if="this.artist.id" class="gallery stuff bg-gray-700 [&>div]:min-h-screen [&>div]:place-content-start">
        <div v-show="this.tab == 'projects'">
            <WorksGallery :works="works" :infoBgCol="'bg-gray-800'" :startIndex="0" :stopIndex="this.worksUpperLimit"
                @bottom-reached="addMoreWorks" :infiniteScroll="true" :galleryType="'projects'"
                :showDelete="this.dataStore.user.id && this.artist.user.username == this.dataStore.user.username" />
        </div>
        <div v-show="this.tab == 'followers'" class="grid grid-cols-4 gap-4 py-10 px-16">
            <ArtistCard v-for="artist in 19" />
        </div>
        <div v-show="this.tab == 'following'" class="grid grid-cols-4 gap-4 py-10 px-16">
            <ArtistCard v-for="artist in 7" />
        </div>
        <div v-show="this.tab == 'likes'">
            <WorksGallery :works="works" :infoBgCol="'bg-gray-800'" :startIndex="0" :stopIndex="this.worksUpperLimit"
                @bottom-reached="addMoreWorks" :infiniteScroll="true" :galleryType="'likes'"
                :showDelete="this.dataStore.user.id && this.artist.user.username == this.dataStore.user.username" />
        </div>
    </section>
</template>

<script>

import WorksGallery from "@/components/WorksGallery.vue"
import ArtistCard from "@/components/ArtistCard.vue"

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {

    name: 'ArtistPortfolio',
    components: {
        WorksGallery,
        ArtistCard
    },
    data() {
        return {
            'tab': 'projects',
            "works": [],
            "artist": {},
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
            // if (this.works.length < this.worksDatabase.length) {
            //     this.works.push(this.worksDatabase[this.works.length])
            // }

            /** I have excluded the else so that it doesn't generate infinitely
             * past the pseudo-database (array) size. This way, a single artist
             * should have a finite number of works in the test application */
            // else {
            //     let worksMiddleIndex = Math.ceil(this.works.length / 2)
            //     this.works.push(this.works[worksMiddleIndex])
            // }


            this.worksUpperLimit++;
        },
        async fetchArtist() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/artist/${this.$route.params.username}/`

            const headers = {
                'Content-Type': 'application/json',
                'X-CSRFToken': this.$cookies.get('csrftoken')
            }

            const requestOptions = {
                method: 'GET',
                headers: headers,
                credentials: 'include',
                redirect: 'follow'
            };

            fetch(url, requestOptions)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    // console.log(data)
                    this.artist = data
                    console.log(this.artist)
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
        async fetchWorks() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/artworks/?page_size=50&search=${this.$route.params.username}&filter=artist`

            const headers = {
                'Content-Type': 'application/json',
                'X-CSRFToken': this.$cookies.get('csrftoken')
            }

            const requestOptions = {
                method: 'GET',
                headers: headers,
                credentials: 'include',
                redirect: 'follow'
            };

            fetch(url, requestOptions)
                .then((response) => {
                    return response.json()
                })
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
        // this.worksDatabase = this.dataStore.worksDatabase.filter((work) => {
        //     return work.user.username == this.$route.params.username
        // })


        // this.worksDatabase = this.worksDatabase.filter((work) => {
        //     return work.user.username == this.$route.params.username
        // })

        this.fetchArtist()
        this.fetchWorks()

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
