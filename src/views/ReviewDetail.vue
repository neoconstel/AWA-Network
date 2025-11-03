<template>
    <article v-if="review.id" class="grid grid-cols-1 lg:grid-cols-[5fr_1fr]">
        <main class="main space-y-5 mx-2 lg:mx-48 text-gray-800 dark:text-gray-200 mb-36">
            <section class="header">
                <div class="caption my-5">
                    <h3 class="text-center text-sm">Review:</h3>
                    <h1 class="text-lg lg:text-4xl text-center mb-2">{{ review.title }}</h1>
                    <div class="flex flex-row justify-center [&>*]:fill-gray-800 [&>*]:dark:fill-gray-200">
                        <template v-for="i in 5" :key="i">
                            <StarIcon v-if="i > Math.ceil(review.rating)" class="w-16 h-16" />
                            <StarhalfIcon v-else-if="i > review.rating" class="w-16 h-16" />
                            <StarfilledIcon v-else class="w-16 h-16" />
                        </template>
                    </div>
                    <p class="text-center text-sm">By {{ review.user.name }} | {{ review.date_published }}</p>
                </div>
                <!-- caption media -->
                <div class="caption-media [&>*]:mx-auto">
                    <img v-if="review.caption_media_type == 'image'" class="" style="max-height: 80vh"
                        :src="review.caption_media_url" alt="review caption image" ref="captionImage">
                    <video v-else class="" width="800" height="470" controls>
                        <source :src="review.caption_media_url" type="video/mp4">
                    </video>
                </div>
            </section>
            <section class="body space-y-5">
                <p class="text-left">{{ review.content }}</p>
                <!-- body media -->
                <div v-if="review.body_media_type != null" class="body-media [&>*]:mx-auto">
                    <img v-if="review.body_media_type == 'image'" class="w-full" :src="review.body_media_url"
                        alt="review caption image">
                    <video v-else class="" :style="{ aspectRatio: bodyVideoAspect() }" :height="this.bodyVideoHeight()"
                        :width="this.bodyVideoWidth()" ref="bodyVideo" controls>
                        <source :src="review.body_media_url" type="video/mp4">
                    </video>
                </div>
            </section>

            <section class="reviewer-bio pt-24">
                <div class="flex flex-col lg:flex-row bg-amber-50 dark:bg-gray-700 p-4">
                    <div class="flex"><img
                            class="rounded-full h-20 aspect-square object-cover block my-auto justify-center mx-auto "
                            :src="profileImage" alt="reviewer photo">
                    </div>
                    <div class="p-3 flex-1">
                        <h2>{{ review.user.name }}</h2>
                        <p>{{ review.user.bio }}</p>
                    </div>
                </div>
            </section>

            <section v-if="this.dataStore.user.id && this.dataStore.user.is_superuser && this.review.approved == false"
                class="admin-only">
                <p class="border-y-2 border-y-red-500"></p>
                <h3 class="text-red-500 text-center">Admin Only</h3>
                <p class="text-red-500 text-center text-sm">Caution: Only click 'approve' or 'delete' after you're
                    sure. There
                    will be no confirmation or retrieval after deletion.</p>
                <p class="border-y-2 border-y-red-500"></p>
                <div class="mt-3 text-center space-x-20">
                    <RippleButton @click="approveReview"
                        class="bg-blue-500 dark:bg-blue-400 hover:bg-yellow-600 text-gray-300 dark:text-gray-700"
                        :buttonText="'Approve'" />
                    <RippleButton @click="deleteReview"
                        class="bg-red-500 dark:bg-red-400 hover:bg-yellow-600 text-gray-300 dark:text-gray-700"
                        :buttonText="'Delete'" />
                </div>

            </section>
        </main>
        <aside
            class="border-l-0 lg:border-l-2 border-l-gray-400 dark:border-l-gray-600 space-y-3 text-gray-800 dark:text-gray-200">
            <!-- related reviews -->
            <h4 class="text-center text-2xl mt-5">Related Reviews</h4>
            <div v-for="(relatedReview, index) in relatedReviews.slice(0, 12)" class="mx-2" :key="index">
                <div v-if="relatedReview.id != this.review.id" class="grid gap-x-1"
                    style="grid-template-columns: 1fr 4fr;">
                    <RouterLink class="" :to="`/review/${relatedReview.id}/`"><img class="aspect-square object-cover"
                            :src="relatedReview.caption_media_thumbnail_url" alt="">
                    </RouterLink>
                    <RouterLink class="overflow-hidden whitespace-nowrap text-ellipsis"
                        :to="`/review/${relatedReview.id}/`">
                        <h4>{{ relatedReview.title }}</h4>
                        <p class="text-sm">{{ relatedReview.content }}</p>
                    </RouterLink>
                </div>
            </div>
        </aside>
    </article>
</template>

<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store
import StarIcon from '../components/icons/StarIcon.vue';

export default {
    name: 'ReviewDetail',
    components: {
    },
    data() {
        return {
            "review": {},
            "relatedReviews": [],
        }
    },
    computed: {
        ...mapStores(useDataStore),
        profileImage() {
            if (this.review.user && this.review.user.profile_image != null)
                return this.review.user.profile_image
            else
                return this.dataStore.siteConfigs.default_profile_image_url
        },

    },
    methods: {
        async fetchReview(id) {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/review/${id}/`

            // reset the review object to clear any existing review data
            this.review = {}

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    // console.log(data)
                    this.review = data
                    console.log(this.reviews)
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
        async fetchRelatedReviews() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/reviews/`

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    // console.log(data)
                    // this.relatedReviews.splice(this.relatedReviews.length, 0, ...(data['results']))
                    this.relatedReviews = data["results"]
                    console.log(this.relatedReviews)
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
        async approveReview() {

            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/review/${this.$route.params.id}/`

            const headers = {
                'Content-Type': 'application/json',
                'X-CSRFToken': this.$cookies.get('csrftoken')
            }

            // COPY review object and edit it
            let newReview = JSON.parse(JSON.stringify(this.review))
            newReview.approved = true

            const data = JSON.stringify(newReview);

            const requestOptions = {
                method: 'PUT',
                headers: headers,
                body: data,
                credentials: 'include',
                redirect: 'follow'
            };

            fetch(url, requestOptions)
                .then((response) => {
                    if (response.status < 300) {
                        setTimeout(() => {
                            alert("Review approved")
                        }, 1500)
                        this.review.approved = true
                        this.$refs.addreviewModal.close()
                    }
                    else
                        this.errorMessage = 'fill in the fields and try again'
                })
                .catch(error => this.errorMessage = error)
        },
        async deleteReview() {

            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/review/${this.$route.params.id}/`

            const headers = {
                'Content-Type': 'application/json',
                'X-CSRFToken': this.$cookies.get('csrftoken')
            }

            const requestOptions = {
                method: 'DELETE',
                headers: headers,
                credentials: 'include'
            };

            fetch(url, requestOptions)
                .then((response) => {
                    if (response.status < 300) {
                        // return to homepage
                        this.$router.push('/')
                    }
                })
                .catch(error => this.errorMessage = error)
        },
        bodyVideoWidth() {
            let bodyVideo = this.$refs.bodyVideo
            if (!bodyVideo)
                return ''

            let aspect = bodyVideo.videoWidth / bodyVideo.videoHeight
            if (aspect < 1) // portrait
                /** This multiplication is done to get a width value from a 
                 * given desired height and known aspect ratio, as the video 
                 * element appears to only respond to its width attribute and 
                 * not the height attribute.
                 * 
                 * The constant multiplied with the aspect ratio here is actually
                 * supposed to be an approximate of 80% of the screen height.
                 * However, this guessed figure can serve as a reliable constant
                 * for now until it is replaced with the accurate screen size
                 * value and 80% of it thereof.
                 */
                return `${aspect * 600}`
            else if (aspect > 1) // landscape
                return '800'
        },
        bodyVideoHeight() {
            // it appears that video elements only use the width attribute
            // so this function might be useless.
            let bodyVideo = this.$refs.bodyVideo
            if (!bodyVideo)
                return ''

            let aspect = bodyVideo.videoWidth / bodyVideo.videoHeight
            if (aspect < 1) // portrait
                return '470'
            else if (aspect > 1) // landscape
                return ''
        },
        bodyVideoAspect() {
            let bodyVideo = this.$refs.bodyVideo
            if (!bodyVideo)
                return ''
            return bodyVideo.videoWidth / bodyVideo.videoHeight
        }
    },
    async mounted() {
        console.log('ReviewDetail view mounted')

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

                this.fetchReview(this.$route.params.id)
                this.fetchRelatedReviews()
            }
        }
    }
}
</script>
