<template>
    <!-- card displaying an artist's sample work -->
    <div v-if="this.isMounted" @mouseenter="toggleStats" @mouseleave="toggleStats">
        <div class="bg-cyan-600" style="aspect-ratio: 1/1;">
            <RouterLink @click="storeUser" :to="{ path: `/artist_portfolio/${work.user.username}` }">
                <img class="h-full w-full" style="object-fit: cover; object-position: 0% 5%;" :src="work.thumbnail"
                    :alt="work.title">
            </RouterLink>
        </div>
        <div v-if="showStats" class="bg-gray-700 text-gray-200">
            <p class="text-center"><b>{{ work.title }}</b></p>
            <p class="text-gray-300"><img class="inline w-3 mx-2" src="/icons/iconmonstr-user-6.svg" alt="">{{
                work.user.name }}</p>
        </div>
    </div>
</template>
<script>

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {
    name: 'WorkSample',
    props: {
        'work': Object // an array
    },
    data() {
        return {
            'isMounted': false,
            'showStats': false
        }
    },
    methods: {
        toggleStats() {
            this.showStats = !this.showStats;
        },
        storeUser() {
            this.dataStore.artist = this.work.user.name
        }
    },
    computed: {
        ...mapStores(useDataStore)
    },
    mounted() {

        /**
         * only enable the isMounted variable when mounted. By this
         * time, the data (from the parent) necessary to display this component 
         * should have been loaded. The isMounted variable is then used with v-if 
         * to display the contents of this component.
         */
        this.isMounted = true;
    }
}
</script>