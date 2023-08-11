<template>
    <!-- card displaying an artist name, sample works and brief profile stats -->
    <div v-if="this.isMounted" class="bg-gray-700" style="aspect-ratio: 3/2;">
        <div class="grid grid-rows-1 grid-cols-1 gap-1" style="grid-template-rows: 1fr, grid-template-columns: 1fr">
            <!-- sample work (just one) from this portfolio -->
            <div class="bg-red-600, h-40">
                <img class="" style="height: 100%; width: 100%;" :src="getThumbnailAtIndex(randomIndex)"
                    :alt="portfolio.works[randomIndex].title">
            </div>
        </div>
        <div class="text-gray-200">
            <p class="text-center"><b>{{ portfolio.user }}</b></p>
            <div class="text-center grid grid-cols-3">

                <p>
                    <img class="h-5 inline mr-1" src="/icons/iconmonstr-eye-lined.svg" alt="">
                    <span class="text-xs">{{ portfolio.views }}</span>
                </p>
                <p>
                    <img class="h-5 inline mr-1" src="/icons/iconmonstr-thumb-10.svg" alt="">
                    <span class="text-xs">{{ portfolio.likes }}</span>
                </p>
                <p>
                    <img class="h-5 inline mr-1" src="/icons/iconmonstr-speech-bubble-thin.svg" alt="">
                    <span class="text-xs">{{ portfolio.comments }}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PortfolioQuadcard',
    props: {
        'portfolio': Object // an array
    },
    data() {
        return {
            'isMounted': false,
            'randomIndex': Math.floor(Math.random() * this.portfolio.works.length)
        }
    },
    methods: {
        getThumbnailAtIndex(index) {
            if (this.portfolio.works.length > index)
                return this.portfolio.works[index].thumbnail
            else
                return ""
        }
    },
    computed: {

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