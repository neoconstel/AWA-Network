<template>
    <div class="flex flex-col rounded-full" style="aspect-ratio: 9/16;">
        <img class="object-cover object-top h-1/3 w-full rounded-t-3xl" :src="review.caption_media_url" alt="">
        <div class="bg-gray-500 dark:bg-gray-900 flex-grow rounded-b-3xl grid px-2"
            style="grid-template-rows: 2fr 7fr 1fr;">
            <h2 class="text-2xl my-auto">Title Goes Here</h2>
            <p class="mt-3">This is the body text preview This is the body text preview
                This is the body text preview This is the body text preview
            </p>
            <p class="ml-3">
                <RouterLink class="text-gray-200 dark:text-cyan-500 hover:text-pink-700 dark:hover:text-gray-100"
                    :to="`/review/${review.id}/`">
                    ...See more
                </RouterLink>
            </p>
        </div>
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
