<template>
    <div class="entire-page grid text-gray-100" style="grid-template-columns: 5fr 2fr">
        <div class="main-panel px-12 pb-48 space-y-14">
            <main class="artwork-display grid">
                <div><img class="px-16 py-8 mx-auto" :src="this.work.file_url" alt=""></div>
                <div class="flex flex-col gap-y-5">
                    <div class="px-10 py-8 bg-gray-400 dark:bg-gray-600 space-x-1 [&>span]:p-1 [&>span]:bg-gray-700">
                        <em class="text-gray-800 dark:text-gray-200">Tags</em>
                        <span v-if="this.work.tags" v-for="(tag, index) in this.work.tags.split(',')" key="index">{{ tag
                        }}</span>
                    </div>
                </div>
            </main>
            <section class="comments-section" style="border-top-width: 1px; border-color: gray;">
                <form v-if="this.dataStore.user.id && this.work.id" class="flex flex-col space-y-2" action="">
                    <label class="text-gray-800 dark:text-gray-200" id="comment" for="comment">Add a new comment</label>
                    <Textarea class="text-gray-800" rows="5" name="comment" ref="commentBox"></Textarea>
                    <div class="relative [&>span]:text-gray-800 [&>span]:dark:text-gray-200">
                        <RippleButton @click.prevent="submitComment" class="w-32 text-yellow-300" for="commentBox"
                            :buttonText="'Comment'" />
                        <button v-if="this.dataStore.user.id && this.work.id" class="ml-10 mr-2" type="button">
                            <ThumbuppaintedIcon @click="unreact('like')"
                                v-if="this.reactionData.user_reactions && this.reactionData.user_reactions.includes('like')"
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
                <div class="comments [&>.comment]:bg-gray-500 [&>.comment]:dark:bg-gray-700 space-y-5 mt-16">
                    <div v-for="(comment, index) in this.commentData.results" :key="index"
                        class="comment [&>p]:text-gray-800 [&>p]:dark:text-gray-200 p-3" :id="comment.id"
                        style="border-radius: 20px;">
                        <p><b>{{ comment.user.name }}</b></p>
                        <p>{{ comment.content }}</p>
                    </div>
                </div>
            </section>
        </div>
        <div class="side-panel px-10 bg-gray-500 dark:bg-gray-700">
            <section class="artwork-info">
                <div v-if="this.work.id">
                    <img class="inline-block w-14 h-14 rounded-full m-4" :src="this.work.artist.user.profile_image" alt="">
                    <RouterLink @click="storeWork" :to="`/artistPortfolio/${this.work.artist.user.username}`">
                        <h3 class="inline text-cyan-500 hover:text-gray-100">{{ this.work.artist.user.name }}</h3>
                    </RouterLink>
                </div>
                <div>
                    <h3 class="mb-2">{{ this.work.title }}</h3>
                    <p>{{ this.work.description }}</p>
                </div>
                <!-- <p class="mt-3">Published September 01, 2023</p> -->
                <p class="mt-3">Published: {{ new Date(this.work.date_published).toDateString() }}</p>
                <div class="py-5 mt-5 space-x-4" style="border-top-width: 1px;">
                    <span><img class="inline w-4 mr-1" src="/static/icons/iconmonstr-eye-lined.svg" alt="">{{
                        this.numberFormat(this.work.views) }}</span>
                    <span><img class="inline w-4 mr-1" src="/static/icons/iconmonstr-thumb-10.svg" alt="">{{
                        this.numberFormat(this.reactionData.count) }}</span>
                    <span><img class="inline w-4 mr-1" src="/static/icons/iconmonstr-speech-bubble-thin.svg" alt="">{{
                        this.numberFormat(this.commentData.count) }}</span>
                </div>
            </section>
            <aside class="extras">
                <h3 v-if="this.work.id && this.otherWorks.length > 0">More from {{ this.work.artist.user.name }}</h3>

                <!-- intentionally didn't set a grid-row, so if the images are few, they 
                fit into a single row but if they surpass the width for a single row, the
                new ones are fitted into a new row visually-->
                <div v-if="this.otherWorks.length > 0" class="grid grid-cols-2 gap-2 my-5">
                    <template v-for="(otherWork, index) in this.otherWorks" :key="index">
                        <RouterLink :to="`/artwork/${otherWork.id}`"><img class="aspect-square w-30 object-cover"
                                :src="otherWork.file_url" alt=""></RouterLink>
                    </template>
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
            "reactionData": {},
            "commentData": {},
            "otherWorks": []
        }
    },
    computed: {
        ...mapStores(useDataStore),
    },
    methods: {
        storeWork() {
            this.dataStore.work = this.work
        },
        async fetchArtwork(id) {
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

                    this.fetchOtherWorks()
                }
                )
                .catch((error) => {
                    console.log('error', error)
                })
        },
        async fetchArtworkReactions(id) {
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
        async fetchArtworkComments(id) {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/comments/artwork/${id}/`

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
                    this.commentData = data
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
        async fetchOtherWorks() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/artworks/?page_size=50&search=${this.work.artist.user.username}&filter=artist&random_sample=true&random_sample_size=4`

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
                    this.otherWorks = data['results']
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
        async commentOnArtwork(foreignEvent, content, parent_comment_id) {
            /**
             * this method simply handles the comment request, and is separate 
             * from the UI. In otherwords, a UI element gets the content to be
             * commented and passes it to this method to do the actual request.
             * 
             * the 'foreignEvent' argument connects this method with the UI
             * element which initiated the event, so that it can signal back
             * to the UI element what to do after the request is successful.
             */

            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/comments/artwork/1544/?parent_comment=${parent_comment_id}&content=${content}`

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
                    this.$data.commentData.results.splice(0, 0, data)

                    // clear text box associated with submit button
                    const commentBox = this.$refs[foreignEvent.srcElement.getAttribute("for")]
                    commentBox.value = ""
                }
                )
                .catch((error) => {
                    console.log('error', error)
                })
        },
        async submitComment(event, parent_comment_id) {
            /**
             * This method is designed to be used for any comment box (main
             * comment or reply), so long as the comment box is linked to its
             * submit button via a 'for' attribute on the submit button which
             * has the same value as the 'ref' attribute of the comment box.
             * 
             * Just like python's 'SELF' conventional keyword, 'event' is used
             * here as the first-place argument to catch event data, since this
             * method is meant to be called by UI events (button click)
             * 
             * example usage of this method in @click:
             * @click="submitComment"   // no parent_comment_id (main comment)
             * @click="submitComment(367)"  // parent_comment_id=367 (reply)
             */

            if (parent_comment_id == undefined)
                parent_comment_id = ""

            /** the submit button has a 'for' attribute equal to the 'ref'
             * attribute of the comment box it is meant to submit
             * 
             * e.g:
             * ref="commentBox"     // comment box
             * for="commentBox"     // submit button for comment box
             */
            const commentBox = this.$refs[event.srcElement.getAttribute("for")]
            let content = commentBox.value

            if (content.length > 0) {
                this.commentOnArtwork(event, content, parent_comment_id)
            }
        }

    },
    async mounted() {
        // stuffs that should be executed only at page initial load
        console.log('workdetail view mounted')
        this.dataStore.currentView = this.$options.name

        // scroll to top
        // this.$nextTick(() => {
        //     setTimeout(() => {
        //         window.scrollTo(0, 0);
        //     }, 100)
        // })
    },
    watch: {
        // stuffs that should be re-fetched or re-executed if something changes

        '$route.params.id': {
            immediate: true,
            handler(newVal) {
                // scroll to top
                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 100)

                this.fetchArtwork(this.$route.params.id)
                this.fetchArtworkReactions(this.$route.params.id)
                this.fetchArtworkComments(this.$route.params.id)

            }
        }
    }
}

</script>
