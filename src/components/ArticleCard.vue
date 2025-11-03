<template>
    <div v-if="article" class="">
        <RouterLink class="" :to="`/article/${article.id}/`"><img class="aspect-video object-cover w-full"
                :src="this.rawThumbnail ? article.raw_thumbnail_url : article.thumbnail_url" alt="">
        </RouterLink>
        <div class="grid grid-rows-3 px-3 max-h-24 bg-yellow-500 dark:bg-yellow-700">
            <p class="overflow-hidden whitespace-nowrap text-ellipsis">{{ article.categories.split(',').join(' ') }}
            </p>
            <RouterLink class="overflow-hidden whitespace-nowrap text-ellipsis" :to="`/article/${article.id}/`">
                <h3 class="overflow-hidden whitespace-nowrap text-ellipsis">{{ article.title }}</h3>
            </RouterLink>
            <p class="overflow-hidden whitespace-nowrap text-ellipsis">By AWA Team</p>
        </div>
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
        rawThumbnail: {
            type: Boolean,
            default: false
        } // if true, original thumbnail image is used instead of the compressed one
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
