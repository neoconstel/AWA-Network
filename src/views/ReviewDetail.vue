<template>
    <section v-if="review.id" class="grid" style="grid-template-columns: 5fr 1fr;">
        <main class="main space-y-5 mx-48 text-gray-800 dark:text-gray-200 mb-36">
            <section class="header">
                <div class="caption my-5">
                    <h3 class="text-center">Review:</h3>
                    <h1 class="text-8xl text-center">{{ review.title }}</h1>
                    <p class="text-center text-sm">{{ review.user.name }} | {{ review.date_published }}</p>
                </div>
                <div class="caption-media [&>*]:mx-auto">
                    <img v-if="review.caption_media_type == 'image'" class="w-full aspect-video"
                        :src="review.caption_media_url" alt="review caption image">
                    <video v-else class="" width="800" height="470" controls>
                        <source :src="review.caption_media_url" type="video/mp4">
                    </video>
                </div>
            </section>
            <section class="body space-y-5">
                <p class="text-center">{{ review.content }}</p>
                <div v-if="review.body_media_type != null" class="body-media [&>*]:mx-auto">
                    <img v-if="review.body_media_type == 'image'" class="w-full aspect-video" width="800" height="470"
                        :src="review.body_media_url" alt="review caption image">
                    <video v-else class="" width="800" height="470" controls>
                        <source :src="review.body_media_url" type="video/mp4">
                    </video>
                </div>
            </section>

            <section v-if="this.dataStore.user.id && this.dataStore.user.is_superuser && this.review.approved == false"
                class="admin-only">
                <p class="border-y-2 border-y-red-500"></p>
                <h3 class="text-red-500 text-center">Admin Only</h3>
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
        <aside class="border-l-2 border-l-gray-400 dark:border-l-gray-600 space-y-3 text-gray-800 dark:text-gray-200">
            <!-- related reviews -->
            <h4 class="text-center text-2xl mt-5">Related Reviews</h4>
            <div v-for="(relatedReview, index) in relatedReviews.slice(0, 12)" class="mx-2" :key="index">
                <div v-if="relatedReview.id != this.review.id" class="grid gap-x-1"
                    style="grid-template-columns: 1fr 4fr;">
                    <RouterLink class="" :to="`/review/${relatedReview.id}/`"><img class="aspect-square object-cover"
                            :src="relatedReview.caption_media_url" alt="">
                    </RouterLink>
                    <RouterLink class="overflow-hidden whitespace-nowrap text-ellipsis"
                        :to="`/review/${relatedReview.id}/`">
                        <h4>{{ relatedReview.title }}</h4>
                        <p class="text-sm">{{ relatedReview.content }}</p>
                    </RouterLink>
                </div>
            </div>
        </aside>
    </section>
</template>

<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {
    name: 'ReviewDetail',
    components: {
    },
    data() {
        return {
            "review": {},
            "relatedReviews": []
        }
    },
    computed: {
        ...mapStores(useDataStore)
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
