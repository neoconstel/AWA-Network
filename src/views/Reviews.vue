<template>
    <section v-if="reviews[0]" class="main space-y-5 mx-48 text-gray-800 dark:text-gray-200 mb-36">
        <section class="header">
            <div class="caption my-5">
                <h3 class="text-center">Review:</h3>
                <h1 class="text-8xl text-center">{{ reviews[0].title }}</h1>
                <p class="text-center text-sm">Richard Miller | June 30, 2024</p>
            </div>
            <div class="caption-media [&>*]:mx-auto">
                <img v-if="reviews[0].caption_media_type == 'image'" class="w-full aspect-video"
                    :src="reviews[0].caption_media_url" alt="review caption image">
                <video v-else class="" width="800" height="470" controls>
                    <source :src="reviews[0].caption_media_url" type="video/mp4">
                </video>
            </div>
        </section>
        <section class="body space-y-5">
            <p class="text-center">{{ reviews[0].content }}</p>
            <div class="body-media [&>*]:mx-auto">
                <img v-if="reviews[0].body_media_type == 'image'" class="w-full aspect-video" width="800" height="470"
                    :src="reviews[0].body_media_url" alt="review caption image">
                <video v-else class="" width="800" height="470" controls>
                    <source :src="reviews[0].body_media_url" type="video/mp4">
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
    name: 'Reviews',
    components: {

    },
    data() {
        return {
            "reviews": []
        }
    },
    computed: {
        ...mapStores(useDataStore)
    },
    methods: {
        async fetchReviews() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/reviews/`

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    // console.log(data)
                    this.reviews.splice(this.reviews.length, 0, ...(data['results']))
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
        console.log('Reviews view mounted')

        this.fetchReviews()

        this.$nextTick(() => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100)
        })

    }
}
</script>
