<template class="bg-gray-800">
    <div class="page-container xs:px-2 lg:px-16 pb-16">
        <div v-if="userOwnsThisArtistProfile()" class="edit-control xs:mx-2 lg:mx-16">
            <v-btn v-if="!editMode" @click="editMode = true">Edit Profile</v-btn>
            <div v-else-if="editMode" class="">
                <v-btn @click="saveProfileChanges(); editMode = false">Save</v-btn>
                <v-btn @click="editMode = false" class="ml-2">Cancel</v-btn>
            </div>
        </div>


        <!-- header -->
        <section v-if="this.artist.id" class="header dashboard">
            <div class="grid xs:grid-cols-1 lg:grid-cols-2 [&>*]:fill-gray-800 [&>*]:dark:fill-gray-200">
                <!-- header left column/top row (in terms of desktop/mobile layout) -->
                <div class="grid lg:pl-16 lg:pr-24 lg:grid-rows-[5fr_3fr]">
                    <div class="grid mt-0 xs:pt-5 lg:pt-10 grid-cols-1 lg:grid-cols-[2fr_5fr]">
                        <div class="lg:aspect-square flex max-h-48">
                            <img class="mx-auto my-auto w-36 h-36 rounded-full object-cover" :src="profileImage"
                                alt="profile_image">
                        </div>
                        <div class="xs-0 lg:pl-20 text-gray-800 dark:text-gray-200">
                            <div>
                                <h3 v-show="!editMode">{{ this.artist.user.name }}</h3>
                                <div class="grid grid-cols-2 gap-x-2">
                                    <input v-show="editMode" class="outline outline-1 outline-gray-500" type="text"
                                        :value="this.artist.user.first_name" placeholder="First Name"
                                        ref="firstNameInput">
                                    <input v-show="editMode" class="outline outline-1 outline-gray-500" type="text"
                                        :value="this.artist.user.last_name" placeholder="Last Name" ref="lastNameInput">
                                </div>
                            </div>
                            <p><img class="inline w-4 mr-1" src="/static/icons/iconmonstr-location-19.svg" alt="">
                                <span v-show="!editMode" class="text-sm text-gray-400">{{ this.artist.location }}</span>
                                <input v-show="editMode" class="outline outline-1 outline-gray-500 w-full mt-1"
                                    type="text" :value="this.artist.location" placeholder="Location"
                                    ref="locationInput">
                            </p>
                            <div>
                                <p v-show="!editMode" class="mt-3">{{ this.artist.bio }}</p>
                                <textarea v-show="editMode" class="outline outline-1 outline-gray-500 w-full mt-1"
                                    type="text" :value="this.artist.bio" placeholder="Bio" ref="bioInput" name=""
                                    id=""></textarea>
                            </div>
                            <div>
                                <p v-show="!editMode" class="mt-2 text-yellow-800 dark:text-yellow-200"><a
                                        :href="`https://${this.artist.website}`" target="_blank">{{
                                            this.artist.website }}</a></p>
                                <input v-show="editMode" class="outline outline-1 outline-gray-500 w-full mt-1"
                                    type="text" :value="this.artist.website" placeholder="Website" ref="websiteInput">
                            </div>
                        </div>
                    </div>
                    <div v-if="this.dataStore.user.id && this.artist.user.username != this.dataStore.user.username"
                        class="grid grid-cols-2 gap-x-3 [&>*]:mt-auto">
                        <RippleButton v-if="userFollowsArtist" @click="unfollow"
                            class="bg-yellow-800 dark:bg-yellow-300 hover:bg-yellow-600 text-gray-900"
                            :buttonText="'Unfollow'" />
                        <RippleButton v-else @click="follow"
                            class="bg-yellow-800 dark:bg-yellow-300 hover:bg-yellow-600 text-gray-900"
                            :buttonText="'Follow'" />
                        <RippleButton class="bg-primary-300 hover:bg-primary-600 text-gray-900" :buttonText="'Message'"
                            style="background-image: url('/icons/iconmonstr-mail-thin.svg'); background-repeat: no-repeat; background-position: 34% 50%; background-size: 7%;" />
                    </div>
                    <p v-show="editMode"><input type="file" accept="image/*" name="" id="" ref="profileImageInput"></p>
                </div>


                <!-- header right column/bottom row (in terms of desktop/mobile layout) -->
                <div class="grid grid-rows-3 xs:px-2 lg:pl-24 lg:pr-16 pt-10 text-gray-300">
                    <div class="grid grid-cols-2 sm:grid-cols-4 [&>*]:mx-auto [&>*]:space-y-1 border-b-gray-500 [&>*]:text-gray-800 dark:[&>*]:text-gray-200 [&>*]:fill-gray-800 [&>*]:dark:fill-gray-200"
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
                    <div class="grid grid-cols-5 [&>*]:w-8 [&>*]:h-8 [&>*]:mx-auto [&>*]:my-auto">
                        <MailIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                        <LinkedinIcon />
                        <TwitterIcon />
                    </div>
                    <div class="flex items-center ali border-t-gray-500 text-gray-800 dark:text-gray-200"
                        style="border-top-width: 1px;">
                        <div>
                            <p v-show="!editMode" class=""><b>Tools:</b> {{ this.artist.tools }}</p>
                            <textarea v-show="editMode" class="outline outline-1 outline-gray-500 w-full mt-1"
                                type="text" :value="this.artist.tools" placeholder="Tools" ref="toolsInput" name=""
                                id=""></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- tabs -->
        <section class="tabs text-gray-300 sticky top-16 z-10" ref="tabsSection">
            <div class="grid gap-x-1 gap-y-1 grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_5fr]">
                <div class="relative">
                    <a @click.prevent="this.tab = 'projects'; this.scrollToRef('tabsSection', offset = 300)"
                        :class='["px-4 py-6 w-full bg-gray-700 dark:bg-gray-900 hover:bg-gray-800 inline-block xs:text-center sm:text-right", projectTabColor("projects")]'
                        href="">Projects</a>
                    <p v-show="tab == 'projects'"
                        class="bg-yellow-800 dark:bg-yellow-300 h-2 w-1/2 absolute right-0 hidden lg:block">
                    </p>
                </div>
                <div class="relative">
                    <a @click.prevent="this.tab = 'followers'; this.scrollToRef('tabsSection', offset = 300)"
                        :class='["px-4 py-6 w-full bg-gray-700 dark:bg-gray-900 hover:bg-gray-800 inline-block xs:text-center sm:text-left lg:text-center", projectTabColor("followers")]'
                        href="">Followers</a>
                    <p v-show="tab == 'followers'"
                        class="bg-yellow-800 dark:bg-yellow-300 h-2 w-full absolute hidden lg:block"></p>
                </div>
                <div class="relative">
                    <a @click.prevent="this.tab = 'following'; this.scrollToRef('tabsSection', offset = 300)"
                        :class='["px-4 py-6 w-full bg-gray-700 dark:bg-gray-900 hover:bg-gray-800 inline-block text-center", projectTabColor("following")]'
                        href="">Following</a>
                    <p v-show="tab == 'following'"
                        class="bg-yellow-800 dark:bg-yellow-300 h-2 w-full absolute hidden lg:block"></p>
                </div>
                <div class="relative">
                    <a @click.prevent="this.tab = 'likes'; this.scrollToRef('tabsSection', offset = 300)"
                        :class='["px-4 py-6 w-full bg-gray-700 dark:bg-gray-900 hover:bg-gray-800 inline-block xs:text-center lg:text-left", projectTabColor("likes")]'
                        href="">Likes</a>
                    <p v-show="tab == 'likes'"
                        class="bg-yellow-800 dark:bg-yellow-300 h-2 w-1/4 absolute hidden lg:block"></p>
                </div>
            </div>
        </section>


        <!-- tabs contents -->
        <section v-if="this.artist.id"
            class="gallery stuff bg-gray-400 dark:bg-gray-700 [&>div]:min-h-screen [&>div]:place-content-start">
            <div v-show="this.tab == 'projects'">
                <WorksGallery class="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" :works="works"
                    :infoBgCol="'bg-gray-300 dark:bg-gray-800'" :startIndex="0" :stopIndex="this.worksUpperLimit"
                    @bottom-reached="" :infiniteScroll="true" :galleryType="'projects'"
                    :showDelete="userOwnsThisArtistProfile()" />
            </div>
            <div v-show="this.tab == 'followers'"
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-10 xs:px-4 lg:px-16">
                <template v-for="(followingInstance, index) in this.followers" :key="index">
                    <ArtistCard :artist="followingInstance.follower" :artPlaceholder="this.artPlaceholder" />
                </template>
            </div>
            <div v-show="this.tab == 'following'"
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-10 xs:px-4 lg:px-16">
                <template v-for="(followingInstance, index) in this.following" :key="index">
                    <ArtistCard :artist="followingInstance.following" :artPlaceholder="this.artPlaceholder" />
                </template>
            </div>
            <div v-show="this.tab == 'likes'">
                <WorksGallery class="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" :works="likedWorks"
                    :infoBgCol="'bg-gray-300 dark:bg-gray-800'" :startIndex="0" :stopIndex="this.worksUpperLimit"
                    @bottom-reached="" :infiniteScroll="true" :galleryType="'likes'"
                    :showDelete="userOwnsThisArtistProfile()" />
            </div>
        </section>
    </div>
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
        return this.defaultData()
    },
    computed: {
        ...mapStores(useDataStore),
        profileImage() {
            if (this.artist.user.profile_image)
                return this.artist.user.profile_image
            else
                return this.dataStore.siteConfigs.default_profile_image_url
        }
    },
    methods: {
        defaultData() {
            // data such as artPlaceholder are not reset by the reset method
            return {
                'tab': 'projects',
                "works": [],
                "likedWorks": [],
                "artist": {},
                "worksUpperLimit": 5,
                "userFollowsArtist": false,
                "followers": [],
                "following": [],
                "artPlaceholder": this.$data.artPlaceholder == null ? {} : this.$data.artPlaceholder,
                "editMode": false
            }
        },
        resetData() {
            // reset data to values defined in default data
            Object.assign(this.$data, this.defaultData())
        },
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
        async fetchLikedWorks() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/artworks/?page_size=50&search=${this.$route.params.username}&liked_by=${this.$route.params.username}`

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
                    this.likedWorks.splice(this.likedWorks.length, 0, ...(data['results']))
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
        async fetchPageCMS() {
            const url =
                `${import.meta.env.VITE_BACKEND_DOMAIN}/api/v2/pages/?`
                + `type=main.PortfolioPage`
                + `&fields=art_placeholder`

            const portfolioPage = await fetch(url)
                .then(response => response.json())
                .then(pages => pages.items[0])

            this.artPlaceholder = portfolioPage.art_placeholder
        },
        userOwnsThisArtistProfile() {
            return this.dataStore.user.id && this.artist.user.username == this.dataStore.user.username
        },
        async saveProfileChanges() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/artist/profile/save/`

            const headers = {
                'X-CSRFToken': this.$cookies.get('csrftoken')
            }

            const formData = new FormData()
            formData.append('firstName', this.$refs.firstNameInput.value)
            formData.append('lastName', this.$refs.lastNameInput.value)
            formData.append('location', this.$refs.locationInput.value)
            formData.append('bio', this.$refs.bioInput.value)
            formData.append('website', this.$refs.websiteInput.value)
            formData.append('tools', this.$refs.toolsInput.value)
            formData.append('profileImage', this.$refs.profileImageInput.files[0])

            const requestOptions = {
                method: 'POST',
                headers: headers,
                body: formData,
                credentials: 'include',
                redirect: 'follow'
            };

            fetch(url, requestOptions)
                .then(response => {
                    if (response.ok) {
                        // Case 1: Successful response (status 2xx)
                        return response.json(); // or response.text(), etc.
                    } else {
                        // Case 2: Response returned but with non-2xx status
                        throw new Error(`Server error: ${response.status}`);
                    }
                })
                .then(data => {
                    // Handle the successful data here
                    // console.log('Data received:', data);
                    this.artist = data['artist']
                    this.dataStore.user = data['user']

                    // clear profile image input
                    this.$refs.profileImageInput.value = ''
                    alert("Profile Updated")
                })
                .catch(error => {
                    // Case 3: Network failure or thrown error from above
                    console.error('Fetch error:', error.message);
                    this.errorMessage = error.message
                    alert("Failed to update profile. " + error.message)
                });
        },
        scrollToRef(ref, offset = 0) {
            const el = this.$refs[ref]
            if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - offset
                window.scrollTo({ top: y, behavior: 'smooth' })
            }
        }
    },
    async mounted() {
        // stuffs that should be fetched or executed once, at page load
        this.fetchPageCMS()
    },
    watch: {
        // stuffs that should be re-fetched or re-executed if something changes

        '$route.params.username': {
            immediate: true,
            handler(newVal) {
                // first reset data using custom function, resetData
                this.resetData()

                //fetch data for different artist              
                this.fetchArtist()
                this.fetchWorks()
                this.fetchLikedWorks()
                this.fetchFollowers()
                this.fetchFollowing()
                this.fetchFollowingStatus()


                console.log('artistPortfolio view mounted')

                // scroll to top
                this.$nextTick(() => {
                    setTimeout(() => {
                        window.scrollTo(0, 0);
                    }, 100)
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
    }
}

</script>
