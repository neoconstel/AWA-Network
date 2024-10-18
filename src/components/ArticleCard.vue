<template>
    <div class="grid" :style="layout">
        <div class="bg-pink-500">image</div>
        <div class="bg-yellow-500">info</div>
    </div>

</template>

<script>

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {

    name: 'ArticleCard',
    props: {
        'article': Object,
        'topToBottomRatio': Number,
    },
    computed: {
        ...mapStores(useDataStore),
        layout() {
            if (this.topToBottomRatio == null)
                return "grid-template-rows: 2fr 1fr;"
            else
                return `grid-template-rows: ${this.topToBottomRatio}fr 1fr;`
        }
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
