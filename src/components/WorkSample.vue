<template>
    <!-- card displaying an artist's sample work -->
    <div v-if="this.isMounted" class="relative" :id="'work-' + this.work.id" @mouseenter="toggleStats"
        @mouseleave="toggleStats">
        <div class="relative bg-violet-600 aspect-square">
            <img v-if="showDelete && this.workType == this.workTypes.projects" @click="storeWork"
                class="absolute top-0 right-0 bg-red-500 opacity-60" src="/static/icons/iconmonstr-x-mark-thin.svg" alt=""
                data-te-toggle="modal" data-te-target="#deleteProjectModal">
            <img v-else-if="showDelete && this.workType == this.workTypes.likes" @click="storeWork"
                class="absolute top-0 right-0 bg-red-500 opacity-60" src="/static/icons/iconmonstr-x-mark-thin.svg" alt="">
            <RouterLink :to="`/artwork/${work.id}`">
                <img class="h-full w-full" style="object-fit: cover; object-position: 0% 5%;" :src="work.file_url"
                    :alt="work.title">
            </RouterLink>
        </div>
        <div :class="['text-gray-800 dark:text-gray-200', infoBgCol]">
            <p class="text-center"><b>{{ work.title }}</b></p>
            <p><svg name="user-icon" class="inline w-3 mx-2 fill-gray-800 dark:fill-gray-200"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
                </svg>
                <RouterLink v-if="work.id" @click="storeWork" :to="`/artistPortfolio/${work.artist.user.username}`">
                    <span class="inline text-cyan-700 dark:text-cyan-500 hover:text-gray-100">{{
                        work.artist.user.name }}</span>
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