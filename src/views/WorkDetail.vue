<template>
    <div class="grid text-gray-100" style="grid-template-columns: 5fr 2fr">
        <main class="grid grid-cols-1">
            <div><img class="px-16 py-8 mx-auto" :src="this.work.file_url" alt=""></div>
            <div class="flex flex-col gap-y-5 px-12 pb-48">
                <div class="px-10 py-8 bg-gray-400 dark:bg-gray-600 space-x-1 [&>span]:p-1 [&>span]:bg-gray-700">
                    <em class="text-gray-800 dark:text-gray-200">Tags</em>
                    <span>Modelling</span>
                    <span>Texturing</span>
                    <span>Character Modelling</span>
                    <span>Sculpting</span>
                </div>
                <form v-if="this.dataStore.user.id && this.work.id" class="flex flex-col space-y-2" action="">
                    <label id="comment" for="comment">Add a new comment</label>
                    <Textarea class="text-gray-800" rows="5" name="comment"></Textarea>
                    <div class="relative">
                        <RippleButton class="w-32 text-yellow-300" :buttonText="'Comment'" />
                        <button v-if="this.dataStore.user.id && this.work.id" class="ml-10 mr-2" type="button"><img
                                class="inline h-14" src="/static/icons/iconmonstr-thumb-10.svg" alt=""></button>
                        <span class="absolute bottom-0">9.5k</span>
                        <span
                            v-if="this.dataStore.user.id && this.work.id && this.work.artist.user.username == this.dataStore.user.username"
                            class="absolute right-0">
                            <a @click.prevent="storeWork" href="" data-te-toggle="modal"
                                data-te-target="#editWorkModal"><img class="inline h-12 mr-5"
                                    src="/static/icons/iconmonstr-pencil-line-lined.svg" alt=""></a>
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
                    <span><img class="inline w-4 mr-1" src="/static/icons/iconmonstr-eye-lined.svg" alt="">34.8k</span>
                    <span><img class="inline w-4 mr-1" src="/static/icons/iconmonstr-thumb-10.svg" alt="">9.5k</span>
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
            work: {}
        }
    },
    computed: {
        ...mapStores(useDataStore)
    },
    methods: {
        storeWork() {
            this.dataStore.work = this.work
        },
        async fetchWork(id) {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/artwork/${id}/`

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
                    this.work = data
                    this.dataStore.work = data
                    console.log(this.work)
                }
                )
                .catch((error) => {
                    console.log('error', error)
                })
        }
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
    }
}

</script>
