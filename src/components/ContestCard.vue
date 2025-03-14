<template>
    <RouterLink :to="`/contest/${contest.id}`">
        <div class="bg-gray-300 dark:bg-gray-700 border-2 border-gray-500">
            <img class="aspect-video object-cover" :src="contest.thumbnail_image" alt="">
            <div class="p-3 space-y-1 [&>p]:text-gray-600 [&>p]:dark:text-gray-400">
                <h3 class="">{{ contest.title }}</h3>
                <p class="" v-if="contest.status == 'upcoming'">Starts: {{
                    this.methodsStore.formatDate(contest.start_date) }}</p>
                <p class="" v-else-if="contest.status == 'ongoing'">Ends: {{
                    this.methodsStore.formatDate(contest.end_date) }}</p>
                <p class="" v-else>Ended: {{ this.methodsStore.formatDate(contest.end_date)
                }}</p>
                <p>Total prize: ${{ contest.reward }}</p>
                <p class="text-center" v-if="contest.status == 'upcoming'">====Coming Soon====</p>
                <p class="text-center" v-else-if="contest.status == 'ongoing'">====Ongoing====</p>
                <p class="text-center" v-else>====Finished====</p>
            </div>
        </div>
    </RouterLink>
</template>
<script>


// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store
import useMethodsStore from '@/stores/functions'; // convention: use<storeID>Store

export default {

    name: 'ContestCard',
    props: {
        'contest': Object,
    },
    computed: {
        ...mapStores(useDataStore, useMethodsStore),
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
