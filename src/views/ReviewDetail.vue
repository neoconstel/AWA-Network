<template>
    <section v-if="review.id" class="main space-y-5 mx-48 text-gray-800 dark:text-gray-200 mb-36">
        <section class="header">
            <div class="caption my-5">
                <h3 class="text-center">Review:</h3>
                <h1 class="text-8xl text-center">{{ review.title }}</h1>
                <p class="text-center text-sm">Richard Miller | June 30, 2024</p>
            </div>
            <div class="caption-media [&>*]:mx-auto">
                <img v-if="review.caption_media_type == 'image'" class="w-full aspect-video" :src="review.caption_media_url"
                    alt="review caption image">
                <video v-else class="" width="800" height="470" controls>
                    <source :src="review.caption_media_url" type="video/mp4">
                </video>
            </div>
        </section>
        <section class="body space-y-5">
            <p class="text-center">{{ review.content }}</p>
            <div class="body-media [&>*]:mx-auto">
                <img v-if="review.body_media_type == 'image'" class="w-full aspect-video" width="800" height="470"
                    :src="review.body_media_url" alt="review caption image">
                <video v-else class="" width="800" height="470" controls>
                    <source :src="review.body_media_url" type="video/mp4">
                </video>
            </div>
        </section>
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
            "review": []
        }
    },
    computed: {
        ...mapStores(useDataStore)
    },
    methods: {
        async fetchReview(id) {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/review/${id}/`

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
    },
    async mounted() {
        console.log('ReviewDetail view mounted')

        this.fetchReview(this.$route.params.id)

        this.$nextTick(() => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100)
        })

    }
}
</script>
