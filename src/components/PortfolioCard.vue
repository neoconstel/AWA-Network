<template>
    <!-- card displaying an artist name, sample works and brief profile stats -->
    <div v-if="this.isMounted" class="bg-gray-700" style="aspect-ratio: 3/2;">
        <div class="grid grid-rows-2 grid-cols-2 gap-1"
            style="grid-template-rows: 10fr 15fr; grid-template-columns: 15fr 10fr;">
            <div class="bg-red-600 h-16">
                <img class="" style="height: 100%; width: 100%;" src="https://i.imgur.com/06RgauK.jpg"
                    :alt="portfolio.works[0].title">
            </div>
            <div class="bg-green-600 h-16">
                <img class="" style="height: 100%; width: 100%;" src="https://i.imgur.com/T1Bo0Gm.jpg"
                    :alt="portfolio.works[0].title">
            </div>
            <div class="bg-violet-600 h-24">
                <img class="" style="height: 100%; width: 100%;" src="https://i.imgur.com/snnOesr.jpg"
                    :alt="portfolio.works[0].title">
            </div>
            <div class="bg-cyan-600 h-24">
                <img class="" style="height: 100%; width: 100%;" src="https://i.imgur.com/VNuySlL.jpg"
                    :alt="portfolio.works[0].title">
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
            'isMounted': false
        }
    },
    methods: {

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