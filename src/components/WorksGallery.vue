<template>
    <div class="grid grid-cols-5 gap-x-4 gap-y-4 px-4 py-14 pb-16 place-content-start" ref="galleryContainer">

        <!-- works from multiple users (some works can have same user) -->
        <div v-for="(work, index) in works.slice(this.startIndex, this.stopIndex)" :key="index">
            <!-- single work sample -->
            <WorkSample :work=work :workType="galleryType" :showDelete="showDelete" :infoBgCol="infoBgCol" />
        </div>
    </div>
</template>

<script>
import WorkSample from "@/components/WorkSample.vue"

export default {
    name: 'WorksGallery',
    components: {
        WorkSample
    },
    props: {
        'works': Object,
        'infiniteScroll': Boolean,  // override maxWorks and add to works infinitely
        'maxWorks': Number,   // max works length beyond which this gallery instance stops adding to it when further scrolling is done
        'startIndex': Number, // index (inclusive) of works array to start from in this gallery instance
        'stopIndex': Number,   // index (exclusive) of works array for this gallery instance to stop
        'infoBgCol': String,       // background color of the info panel for each workSample instance in this gallery
        'galleryType': String, // gallery type ("projects" or "likes"). Helps distinguish for each work instance when carrying out CRUD operations such as DELETE from the UI
        'showDelete': false // specifies if the DELETE button for each work instance should be shown
    },
    data() {
        return {

        }
    },
    methods: {
        onBottomReached() {
            /**this should be called when the bottom part enters the screen,
             * signifying all the works have been scrolled across and more
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
                    (galleryBottomReached && this.works.length < this.maxWorks)
                    || (galleryBottomReached && this.infiniteScroll == true)
                ) {
                    // console.log('gallery bottom reached')
                    console.log(`${this.works.length}/max ${this.maxWorks} -- ${galleryBounds.bottom} < ${window.innerHeight} = ${galleryBounds.bottom < window.innerHeight} and top: ${galleryBounds.top}`)
                    this.onBottomReached()
                }
            })
        });
    }
}
</script>

<style scoped>
/* @media (max-width: 320px) {
    .gallery-container {
        grid-template-columns: repeat(5, minmax(0, 1fr));
        row-gap: 16rem;
    }
} */
</style>