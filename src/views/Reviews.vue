<template>
    <section class="mt-10 mx-10">
        <div v-if="this.dataStore.user.id && (this.dataStore.user.groups.includes('Reviewers') | this.dataStore.user.is_superuser)"
            class="sticky inline top-36 z-10 ml-5">
            <a data-twe-toggle="modal" data-twe-target="#addReviewModal" @click.prevent="" href=""><svg
                    class="h-16 inline fill-gray-800 dark:fill-gray-200" clip-rule="evenodd" fill-rule="evenodd"
                    stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                        fill-rule="nonzero" />
                </svg></a>
        </div>
        <h1 class="text-7xl text-gray-800 dark:text-gray-300 mx-5">Our Exclusive Reviews</h1>
        <div class="grid grid-cols-5 gap-5 mx-5 mt-5 text-gray-800 dark:text-gray-200 mb-36">
            <div v-for="(review, index) in reviews" class="reviews" :key="index">
                <ReviewCard :review="review" />
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
