<template>
    <div class="">
        contest card ({{ contest.title }})
    </div>
</template>
<script>


// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {

    name: 'ContestCard',
    props: {
        'contest': Object,
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
