<template>
    <h1 class="text-gray-800 dark:text-gray-200">User Info</h1>
    <div v-if="this.dataStore.user.id" class="text-gray-800 dark:text-gray-200">
        <!-- <p>username: {{ this.dataStore.user.username }}</p>
        <p>userID: {{ this.dataStore.user.id }}</p> -->
        <p>User: {{ this.dataStore.user }}</p>
        <p>status: Logged in</p>
    </div>
    <div v-else>
        <p>status: Not logged in</p>
    </div>

    <hr>
</template>

<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {
    name: 'userInfo',
    data() {
        return {

        }
    },
    computed: {
        ...mapStores(useDataStore)
    },
    mounted() {

    }
}
</script>