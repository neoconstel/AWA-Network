<template>
    <div class="">
        <!-- NOTE (browser compatibility): RouterLink below must be set as 
         inline-block display type (along with setting it as relative position) 
         otherwise it's child div using absolute position will fail to display 
         properly on FireFox-->
        <RouterLink class="relative inline-block" :to="`/review/${review.id}/`">
            <img class="aspect-square w-full object-cover object-top" :src="review.caption_media_thumbnail_url" alt="">
            <div class="absolute flex w-full h-1/5 bottom-0 bg-gray-900 bg-opacity-50 justify-center px-2">
                <h2 class="text-xl my-auto overflow-hidden whitespace-nowrap text-ellipsis text-gray-200">
                    {{
                        review.title
                    }}</h2>
            </div>
        </RouterLink>
        <!-- <img class="object-cover object-top h-1/3 w-full" :src="review.caption_media_url" alt=""> -->

        <!-- <div class="bg-gray-500 dark:bg-gray-900 flex-grow grid px-2" style="grid-template-rows: 2fr 7fr 1fr;">
            <h2 class="text-2xl my-auto overflow-hidden whitespace-nowrap text-ellipsis">{{ review.title }}</h2>
            <p class="mt-3">{{ review.content.slice(0, 200) + (review.content.length > 200 ? '...' : '') }}
            </p>
            <p class="ml-3">
                <RouterLink class="text-gray-200 dark:text-cyan-500 hover:text-pink-700 dark:hover:text-gray-100"
                    :to="`/review/${review.id}/`">
                    ...See more
                </RouterLink>
            </p>
        </div> -->
    </div>
</template>


<script>

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {

    name: 'ReviewCard',
    props: {
        'review': Object,
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
