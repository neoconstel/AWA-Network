<template>
    <div class="text-gray-800 dark:text-gray-200">
        <RouterLink :to="`/resource/${product.id}`">
            <img class="w-full aspect-square object-cover object-top" :src="product.thumbnail_images[0]" alt="">

            <div class="relative h-28">
                <p class="mt-2 font-bold">{{ product.title }}<span class="text-sm text-gray-400 dark:text-gray-500"> in
                        {{
                            product.category.root
                        }}</span>
                </p>
                <p v-if="product.stats.rating_average"><span class="bg-cyan-500 text-xs px-1 py-0.5 mt-2 rounded">{{
                    product.stats.rating_average
                        }}</span> based
                    on {{
                        product.stats.ratings_count }} ratings, {{ product.stats.reviews_count }} reviews</p>
                <div class="grid mt-2 absolute bottom-0" style="grid-template-columns: 1fr 9fr;">
                    <img class="w-full rounded-full aspect-square self-center"
                        src="https://cdn.pixabay.com/photo/2024/07/13/08/02/penguin-8891658_1280.jpg" alt="">
                    <p class="relative">By {{ product.seller.brand_name }} <span class="absolute right-1">${{
                        product.price }}</span>
                    </p>
                </div>
            </div>
        </RouterLink>

    </div>
</template>


<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store
import { RouterLink } from 'vue-router';

export default {
    name: 'ProductCard',
    props: {
        'product': Object
    },
    computed: {
        ...mapStores(useDataStore),
    },
    data() {
        return {

        }
    },
    methods: {
    },
    async mounted() {

    },
}
</script>
