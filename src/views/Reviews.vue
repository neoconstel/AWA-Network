<template>
    <section class="mt-10 mx-10">
        <h1 class="text-7xl text-gray-800 dark:text-gray-300 mx-5">Our Exclusive Reviews</h1>
        <div class="grid grid-cols-5 gap-5 mx-5 mt-5 text-gray-800 dark:text-gray-200 mb-36">
            <div v-for="(review_, index) in reviews" class="reviews" :key="index">
                <ReviewCard :review="review_" />
            </div>
        </div>
    </section>
</template>

<script>
import ReviewCard from "@/components/ReviewCard.vue"

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {
    name: 'Reviews',
    components: {
        ReviewCard
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
