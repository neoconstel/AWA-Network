<template class="bg-gray-800">
    <section v-if="this.artist.id" class="header dashboard">
        <div class="grid grid-cols-2 pb-16 [&>*]:fill-gray-800 [&>*]:dark:fill-gray-200">
            <div class="grid pl-16 pr-24" style="grid-template-rows: 5fr 3fr;">
                <div class="grid pt-10" style="grid-template-columns: 2fr 5fr;">
                    <div class="" style="aspect-ratio: 1/1;">
                        <img class="w-full h-full rounded-full" src="https://i.imgur.com/40qCewV.jpg" alt="">
                    </div>
                    <div class="pl-20 text-gray-800 dark:text-gray-200">
                        <h3>{{ this.artist.user.name }}</h3>
                        <p><img class="inline w-4 mr-1" src="/static/icons/iconmonstr-location-19.svg" alt=""><span
                                class="text-sm text-gray-400">{{ this.artist.location }}</span></p>
                        <p class="mt-3">{{ this.artist.bio }}</p>
                        <p class="mt-2 text-yellow-800 dark:text-yellow-200"><a href="http://www.animationwestafrica.com">{{
                            this.artist.website }}</a></p>

                    </div>
                </div>
                <div v-if="this.dataStore.user.id && this.artist.user.username != this.dataStore.user.username"
                    class="grid grid-cols-2 gap-x-3 [&>*]:mt-auto">
                    <RippleButton v-if="userFollowsArtist" @click="unfollow"
                        class="bg-yellow-800 dark:bg-yellow-300 hover:bg-yellow-600 text-gray-900"
                        :buttonText="'Unfollow'" />
                    <RippleButton v-else @click="follow"
                        class="bg-yellow-800 dark:bg-yellow-300 hover:bg-yellow-600 text-gray-900" :buttonText="'Follow'" />
                    <RippleButton class="bg-primary-300 hover:bg-primary-600 text-gray-900" :buttonText="'Message'"
                        style="background-image: url('/icons/iconmonstr-mail-thin.svg'); background-repeat: no-repeat; background-position: 34% 50%; background-size: 7%;" />
                </div>
            </div>
            <div class="grid grid-rows-3 pl-24 pr-16 pt-10 text-gray-300">
                <div class="grid grid-cols-4 [&>*]:space-y-1 border-b-gray-500 [&>*]:text-gray-800 dark:[&>*]:text-gray-200 [&>*]:fill-gray-800 [&>*]:dark:fill-gray-200"
                    style="border-bottom-width: 1px;">
                    <div>
                        <p class="text-2xl">{{ this.artist.views }}</p>
                        <p>
                            <EyeopenIcon class="inline w-4 mr-1" /><span class="text-xs"><b>VIEWS</b></span>
                        </p>
                    </div>
                    <div>
                        <p class="text-2xl">{{ this.artist.likes }}</p>
                        <p>
                            <ThumbupIcon class="inline w-4 mr-1" /> <span class="text-xs"><b>LIKES</b></span>
                        </p>





                    </div>
                    <div>
                        <p class="text-2xl">{{ this.artist.followers }}</p>
                        <p>
                            <UserIcon class="inline w-4 mr-1" /><span class="text-xs"><b>FOLLOWERS</b></span>
                        </p>





                    </div>
                    <div>
                        <p class="text-2xl">{{ this.artist.following }}</p>
                        <p>
                            <UserIcon class="inline w-4 mr-1" /><span class="text-xs"><b>FOLLOWING</b></span>
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-5 [&>*]:w-8 [&>*]:h-8 gap-x-14 [&>*]:my-auto">
                    <MailIcon />
                    <FacebookIcon />
                    <InstagramIcon />
                    <LinkedinIcon />
                    <TwitterIcon />
                </div>
                <div class="flex items-center ali border-t-gray-500 text-gray-800 dark:text-gray-200"
                    style="border-top-width: 1px;">
                    <p class=""><b>Tools:</b> {{ this.artist.tools }}</p>
                </div>
            </div>
        </div>
    </section>
    <section class="tabs text-gray-300 sticky top-16 z-10">
        <div class="grid gap-x-1" style="grid-template-columns: 2fr 1fr 1fr 5fr">
            <div class="relative">
                <a @click.prevent="this.tab = 'projects'"
                    :class='["px-4 py-6 w-full bg-gray-700 dark:bg-gray-900 hover:bg-gray-800 inline-block text-right", projectTabColor("projects")]'
                    href="">Projects</a>
                <p v-show="tab == 'projects'" class="bg-yellow-800 dark:bg-yellow-300 h-2 w-1/2 absolute right-0"></p>
            </div>
            <div class="relative">
                <a @click.prevent="this.tab = 'followers'"
                    :class='["px-4 py-6 w-full bg-gray-700 dark:bg-gray-900 hover:bg-gray-800 inline-block text-center", projectTabColor("followers")]'
                    href="">Followers</a>
                <p v-show="tab == 'followers'" class="bg-yellow-800 dark:bg-yellow-300 h-2 w-full absolute"></p>
            </div>
            <div class="relative">
                <a @click.prevent="this.tab = 'following'"
                    :class='["px-4 py-6 w-full bg-gray-700 dark:bg-gray-900 hover:bg-gray-800 inline-block text-center", projectTabColor("following")]'
                    href="">Following</a>
                <p v-show="tab == 'following'" class="bg-yellow-800 dark:bg-yellow-300 h-2 w-full absolute"></p>
            </div>
            <div class="relative">
                <a @click.prevent="this.tab = 'likes'"
                    :class='["px-4 py-6 w-full bg-gray-700 dark:bg-gray-900 hover:bg-gray-800 inline-block", projectTabColor("likes")]'
                    href="">Likes</a>
                <p v-show="tab == 'likes'" class="bg-yellow-800 dark:bg-yellow-300 h-2 w-1/4 absolute"></p>
            </div>
        </div>
    </section>

    <section v-if="this.artist.id"
        class="gallery stuff bg-gray-400 dark:bg-gray-700 [&>div]:min-h-screen [&>div]:place-content-start">
        <div v-show="this.tab == 'projects'">
            <WorksGallery :works="works" :infoBgCol="'bg-gray-300 dark:bg-gray-800'" :startIndex="0"
                :stopIndex="this.worksUpperLimit" @bottom-reached="addMoreWorks" :infiniteScroll="true"
                :galleryType="'projects'"
                :showDelete="this.dataStore.user.id && this.artist.user.username == this.dataStore.user.username" />
        </div>
        <div v-show="this.tab == 'followers'" class="grid grid-cols-4 gap-4 py-10 px-16">
            <template v-for="(followingInstance, index) in this.followers" :key="index">
                <ArtistCard :artist="followingInstance.follower" />
            </template>
        </div>
        <div v-show="this.tab == 'following'" class="grid grid-cols-4 gap-4 py-10 px-16">
            <template v-for="(followingInstance, index) in this.following" :key="index">
                <ArtistCard :artist="followingInstance.following" />
            </template>
        </div>
        <div v-show="this.tab == 'likes'">
            <WorksGallery :works="works" :infoBgCol="'bg-gray-300 dark:bg-gray-800'" :startIndex="0"
                :stopIndex="this.worksUpperLimit" @bottom-reached="addMoreWorks" :infiniteScroll="true"
                :galleryType="'likes'"
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
            "worksUpperLimit": 5,
            "userFollowsArtist": false,
            "followers": [],
            "following": []
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
        },
        async follow() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/following/follow/${this.$route.params.username}/`

            const headers = {
                'Content-Type': 'application/json',
                'X-CSRFToken': this.$cookies.get('csrftoken')
            }

            const requestOptions = {
                method: 'POST',
                headers: headers,
                credentials: 'include',
                redirect: 'follow'
            };

            fetch(url, requestOptions)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    this.userFollowsArtist = true
                    console.log(data)
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
        async unfollow() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/following/unfollow/${this.$route.params.username}/`

            const headers = {
                'Content-Type': 'application/json',
                'X-CSRFToken': this.$cookies.get('csrftoken')
            }

            const requestOptions = {
                method: 'POST',
                headers: headers,
                credentials: 'include',
                redirect: 'follow'
            };

            fetch(url, requestOptions)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    this.userFollowsArtist = false
                    console.log(data)
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
        async fetchFollowingStatus() {
            // checks if logged-in user follows this artist and vice versa

            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/following/status/${this.$route.params.username}/`

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
                    this.userFollowsArtist = data["user_follows_other"]
                    console.log(data)
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
        async fetchFollowers() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/followings/?username=${this.$route.params.username}&filter=followers&page_size=50`

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
                    console.log("See followers:")
                    console.log(data.results)

                    this.followers = this.followers.concat(data.results)

                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
        async fetchFollowing() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/followings/?username=${this.$route.params.username}&filter=following&page_size=50`

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
                    console.log("See following:")
                    console.log(data.results)

                    this.following = this.following.concat(data.results)

                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
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
        this.fetchFollowers()
        this.fetchFollowing()
        this.fetchFollowingStatus()

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
