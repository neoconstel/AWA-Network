<template>
    <div class="grid grid-cols-5 gap-x-3 gap-y-14 px-4 py-14 bg-gray-900" ref="galleryContainer">

        <!-- user portfolio -->
        <div v-for="(portfolio, index) in portfolios.slice(this.startIndex, this.stopIndex)" :key="index"
            class="bg-gray-300 h-44">
            <!-- works by this user -->
            <PortfolioCard :portfolio=portfolio />
        </div>
    </div>
</template>

<script>
import PortfolioCard from "@/components/PortfolioCard.vue"

export default {
    name: 'PortfolioGallery',
    components: {
        PortfolioCard
    },
    props: {
        'portfolios': Object,
        'infiniteScroll': Boolean,  // override maxPortfolios and add to portfolios infinitely
        'maxPortfolios': Number,   // max portfolios length beyond which this gallery instance stops adding to it when further scrolling is done
        'startIndex': Number,
        'stopIndex': Number
    },
    data() {
        return {

        }
    },
    methods: {
        onBottomReached() {
            /**this should be called when the bottom part enters the screen,
             * signifying all the portfolios have been scrolled across and more
             * need to be loaded to the infinite gallery.
             */
            this.$emit("bottom-reached");
        }
    },
    mounted() {

        this.$nextTick(() => {

            /**
             * use $refs instead of querySelector for selecting elements. This
             * is because they're VirtualDom elements, not regular DOM elements.
             */
            const galleryContainer = this.$refs.galleryContainer;

            window.addEventListener('scroll', () => {
                const galleryBounds = galleryContainer.getBoundingClientRect();
                const bottomOffset = 400
                let galleryBottomReached = galleryBounds.bottom - bottomOffset < window.innerHeight

                if (
                    (galleryBottomReached && this.portfolios.length < this.maxPortfolios)
                    || (galleryBottomReached && this.infiniteScroll == true)
                ) {
                    // console.log('gallery bottom reached')
                    console.log(`${this.portfolios.length}/max ${this.maxPortfolios} -- ${galleryBounds.bottom} < ${window.innerHeight} = ${galleryBounds.bottom < window.innerHeight} and top: ${galleryBounds.top}`)
                    this.onBottomReached()
                }
            })
        });
    }
}
</script>