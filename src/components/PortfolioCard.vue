<template>
    <!-- card displaying an artist name, sample works and brief profile stats -->
    <div v-if="this.isMounted" class="bg-gray-700" style="aspect-ratio: 3/2;">
        <div :class="layoutClass" :style="layoutStyle">
            <!-- works in this portfolio -->
            <!-- the orders of the thumbnailIndex 0,1,2,3 determine the sequential filling of the quadrants -->
            <!-- getSeededRandomThumbnailIndex(0/1/2) returns a random number which can be 1/2/3-->
            <!-- NOTE that first quadrant uses a fixed thumbnailIndex (0), while others use a seededRandomIndex -->
            <div :class="['bg-red-600', firstWorkHeight]">
                <img class="" style="height: 100%; width: 100%;" :src="getThumbnailAtIndex(0)"
                    :alt="portfolio.works[0].title">
            </div>
            <div :class="['bg-green-600 h-16', hiddenIfSingleLayout]">
                <img v-if="this.portfolio.works.length > getSeededRandomThumbnailIndex(2)" class=""
                    style="height: 100%; width: 100%;" :src="getThumbnailAtIndex(getSeededRandomThumbnailIndex(2))"
                    :alt="''">
            </div>
            <div :class="['bg-violet-600 h-24', hiddenIfSingleLayout]">
                <img v-if="this.portfolio.works.length > getSeededRandomThumbnailIndex(1)" class=""
                    style="height: 100%; width: 100%;" :src="getThumbnailAtIndex(getSeededRandomThumbnailIndex(1))"
                    :alt="''">
            </div>
            <div :class="['bg-cyan-600 h-24', hiddenIfSingleLayout]">
                <img v-if="this.portfolio.works.length > getSeededRandomThumbnailIndex(0)" class=""
                    style="height: 100%; width: 100%;" :src="getThumbnailAtIndex(getSeededRandomThumbnailIndex(0))"
                    :alt="''">
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
    name: 'PortfolioCard',
    props: {
        'portfolio': Object // an array
    },
    data() {
        return {
            'isMounted': false,
            'randomSeed': Math.floor(Math.random() * 10)
        }
    },
    methods: {
        getThumbnailAtIndex(index) {
            if (this.portfolio.works.length > index)
                return this.portfolio.works[index].thumbnail
            else
                return ""
        },
        getSeededRandomThumbnailIndex(index) {
            const indexArray = [1, 2, 3]
            for (let i = 0; i < this.randomSeed; i++) {
                indexArray.splice(0, 0, indexArray.pop())
            }
            return indexArray[index]
        }
    },
    computed: {
        layoutClass() {
            if (this.portfolio.works.length > 1)
                return 'grid grid-rows-2 grid-cols-2 gap-1'
            else
                return 'grid grid-rows-1 grid-cols-1 gap-1'
        },
        layoutStyle() {
            if (this.portfolio.works.length > 1)
                return { 'grid-template-rows': '10fr 15fr', 'grid-template-columns': '15fr 10fr' }
            else
                return { 'grid-template-rows': '1fr', 'grid-template-columns': '1fr' }
        },
        firstWorkHeight() {
            if (this.portfolio.works.length > 1)
                return 'h-16'
            else
                return 'h-40'
        },
        hiddenIfSingleLayout() {
            if (this.portfolio.works.length > 1)
                return ''
            else
                return 'hidden'
        }
    },
    mounted() {

        /**
         * only enable the isMounted variable when mounted. By this
         * time, the data (from the parent) necessary to display this component 
         * should have been oaded. The isMounted variable is then used with v-if 
         * to display the contents of this component.
         */
        this.isMounted = true;
    }
}
</script>