<template>
    <div class="grid text-gray-100" style="grid-template-columns: 5fr 2fr">
        <main class="grid grid-cols-1">
            <div><img class="px-16 py-8 mx-auto" :src="this.work.file_url" alt=""></div>
            <div class="flex flex-col gap-y-5 px-12 pb-48">
                <div class="px-10 py-8 bg-gray-400 dark:bg-gray-600 space-x-1 [&>span]:p-1 [&>span]:bg-gray-700">
                    <em class="text-gray-800 dark:text-gray-200">Tags</em>
                    <span v-if="this.work.tags" v-for="(tag, index) in this.work.tags.split(',')" key="index">{{ tag
                    }}</span>
                </div>
                <form v-if="this.dataStore.user.id && this.work.id" class="flex flex-col space-y-2" action="">
                    <label id="comment" for="comment">Add a new comment</label>
                    <Textarea class="text-gray-800" rows="5" name="comment"></Textarea>
                    <div class="relative [&>span]:text-gray-800 [&>span]:dark:text-gray-200">
                        <RippleButton class="w-32 text-yellow-300" :buttonText="'Comment'" />
                        <button v-if="this.dataStore.user.id && this.work.id" class="ml-10 mr-2" type="button">
                            <ThumbuppaintedIcon @click="unreact('like')"
                                v-if="this.reactionData.user_reactions.includes('like')"
                                class="inline h-14 w-14 fill-cyan-800 dark:fill-cyan-200" />
                            <ThumbupIcon @click="react('like')" v-else
                                class="inline h-14 w-14 fill-gray-800 dark:fill-gray-200" />
                        </button>
                        <span v-if="this.reactionData.count < 1000" class="absolute bottom-0">{{
                            this.numberFormat(this.reactionData.count)
                        }}</span>
                        <span
                            v-if="this.dataStore.user.id && this.work.id && this.work.artist.user.username == this.dataStore.user.username"
                            class="absolute right-0">
                            <a @click.prevent="storeWork" href="" data-te-toggle="modal" data-te-target="#editWorkModal">
                                <PencilIcon class="inline h-12 mr-5 fill-gray-800 dark:fill-gray-200" />
                            </a>
                            <RippleButton class="w-32 bg-red-600 hover:bg-red-700 text-yellow-300" :buttonText="'Delete'"
                                data-te-toggle="modal" data-te-target="#deleteProjectModal" />
                        </span>
                    </div>
                </form>
            </div>
        </main>
        <div class="px-10 bg-gray-500 dark:bg-gray-700">
            <section>
                <div>
                    <img class="inline-block w-14 h-14 rounded-full m-4" src="https://i.imgur.com/40qCewV.jpg" alt="">
                    <RouterLink v-if="this.work.user" @click="storeWork"
                        :to="`/artistPortfolio/${this.work.user.username}`">
                        <h3 class="inline text-cyan-500 hover:text-gray-100">{{ this.work.artist.user.name }}</h3>
                    </RouterLink>
                </div>
                <div>
                    <h3 class="mb-2">Flying Pink Unicorn</h3>
                    <p>This description about a crazy flying pink unicorn is just a placeholder text for testing the layout
                        of this sample profile. Even though it's just a meaningless piece of text it does find a purpose of
                        its own.</p>
                </div>
                <p class="mt-3">Published September 01, 2023</p>
                <div class="py-5 mt-5 space-x-4" style="border-top-width: 1px;">
                    <span><img class="inline w-4 mr-1" src="/static/icons/iconmonstr-eye-lined.svg" alt="">{{
                        this.numberFormat(this.work.views) }}</span>
                    <span><img class="inline w-4 mr-1" src="/static/icons/iconmonstr-thumb-10.svg"
                            alt="">{{ this.numberFormat(this.reactionData.count) }}</span>
                    <span><img class="inline w-4 mr-1" src="/static/icons/iconmonstr-speech-bubble-thin.svg"
                            alt="">239</span>
                </div>
            </section>
            <aside>
                <h3 v-if="this.work.id">More from {{ this.work.artist.user.name }}</h3>
                <div class="grid grid-cols-2 grid-rows-2 gap-2 my-5">
                    <a href=""><img class="aspect-square w-30 object-cover" src="https://i.imgur.com/40qCewV.jpg"
                            alt=""></a>
                    <a href=""><img class="aspect-square w-30 object-cover" src="https://i.imgur.com/40qCewV.jpg"
                            alt=""></a>
                    <a href=""><img class="aspect-square w-30 object-cover" src="https://i.imgur.com/40qCewV.jpg"
                            alt=""></a>
                    <a href=""><img class="aspect-square w-30 object-cover" src="https://i.imgur.com/40qCewV.jpg"
                            alt=""></a>
                </div>
                <div class="grid grid-cols-4">
                    <a href=""><img class="aspect-square w-30 object-cover" src="/static/icons/iconmonstr-facebook-1.svg"
                            alt=""></a>
                    <a href=""><img class="aspect-square w-30 object-cover" src="/static/icons/iconmonstr-instagram-11.svg"
                            alt=""></a>
                    <a href=""><img class="aspect-square w-30 object-cover" src="/static/icons/iconmonstr-twitter-1.svg"
                            alt=""></a>
                    <a href=""><img class="aspect-square w-30 object-cover" src="/static/icons/iconmonstr-linkedin-1.svg"
                            alt=""></a>
                </div>
            </aside>
        </div>
    </div>
</template>

<script>

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {

    name: 'WorkDetail',
    components: {

    },
    data() {
        return {
            "work": {},
            "reactionData": {}
        }
    },
    computed: {
        ...mapStores(useDataStore),
    },
    methods: {
        storeWork() {
            this.dataStore.work = this.work
        },
        async fetchWork(id) {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/artwork/${id}/`

            fetch(url)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    // console.log(data)
                    this.work = data
                    this.dataStore.work = data
                    console.log(this.work)
                }
                )
                .catch((error) => {
                    console.log('error', error)
                })
        },
        async fetchReactions(id) {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/react/list/artwork/${id}/`

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
                    this.reactionData = data
                }
                )
                .catch((error) => {
                    console.log('error', error)
                })
        },
        async react(reaction) {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/react/add/${reaction}/artwork/${this.$route.params.id}/`

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
                    // console.log(data)
                    this.reactionData.user_reactions.push(reaction)
                    this.reactionData.count++
                }
                )
                .catch((error) => {
                    console.log('error', error)
                })
        },
        async unreact(reaction) {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/react/remove/${reaction}/artwork/${this.$route.params.id}/`

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
                    // console.log(data)

                    // find the index of the reaction and remove it from array
                    const reactionIndex = this.reactionData.user_reactions.findIndex((x) => x == reaction)
                    this.reactionData.user_reactions.splice(reactionIndex, 1)

                    this.reactionData.count--
                }
                )
                .catch((error) => {
                    console.log('error', error)
                })
        },
        numberFormat(num) {
            if (num < 1000)
                return num
            else if (num < 1000000)
                return num + 'K'
            else if (num < 1000000000)
                return num + 'M'
            else if (num < 1000000000000)
                return num + 'B'
            else if (num < 1000000000000000)
                return num + 'T'
            else
                return '>trillions'
        },
    },
    async mounted() {
        console.log('workdetail view mounted')
        this.dataStore.currentView = this.$options.name

        // scroll to top
        this.$nextTick(() => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100)
        })




        // this.work = this.worksDatabase.find((work) => {
        //     return work.id == this.$route.params.id
        // })

        this.fetchWork(this.$route.params.id)
        this.fetchReactions(this.$route.params.id)
    }
}

</script>
