<template>
    <!-- card displaying an artist's sample work -->
    <div v-if="this.isMounted" class="relative" @mouseenter="toggleStats" @mouseleave="toggleStats">
        <div class="relative bg-violet-600 aspect-square">
            <img v-if="showDelete" @click="deleteByType" class="absolute top-0 right-0"
                src="/icons/iconmonstr-x-mark-thin.svg" alt="">
            <RouterLink :to="`/artwork/${work.id}`">
                <img class="h-full w-full" style="object-fit: cover; object-position: 0% 5%;" :src="work.thumbnail"
                    :alt="work.title">
            </RouterLink>
        </div>
        <div :class="['text-gray-200', infoBgCol]">
            <p class="text-center"><b>{{ work.title }}</b></p>
            <p class="text-gray-300"><img class="inline w-3 mx-2" src="/icons/iconmonstr-user-6.svg" alt="">
                <RouterLink v-if="work.user" @click="storeWork" :to="`/artistPortfolio/${work.user.username}`">
                    <span class="inline text-cyan-500 hover:text-gray-100">{{ this.work.user.name }}</span>
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
    name: 'WorkSample',
    props: {
        'work': Object, // an array
        'infoBgCol': String, // background color of the info panel
        'workType': String, // work type ("projects" or "likes"). Helps distinguish when carrying out CRUD operations such as DELETE from the UI
        'showDelete': false // specifies if the DELETE button should be shown
    },
    data() {
        return {
            'isMounted': false,
            'showInfo': false,
            'workTypes': { 'projects': 'projects', 'likes': 'likes' }
        }
    },
    methods: {
        toggleStats() {
            this.showInfo = !this.showInfo;
        },
        storeWork() {
            this.dataStore.work = this.work
        },
        deleteByType() {
            alert('this would delete artwork with title: ' + this.work.title + ' and ID: ' + this.work.id + ' from workType: ' + this.workType)
        }
    },
    computed: {
        ...mapStores(useDataStore),
        bottom: function () {
            if (this.showInfo)
                return '42px'
            else
                return '0px'
        }
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