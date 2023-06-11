<template>
    <div class="flex" style="overflow: hidden;" v-dragscroll.x="true" ref="scrollContainer"
        @mousedown="this.scrollHeldByMouse = true"
        @mouseup="this.scrollHeldByMouse = false; this.scrollBeingDragged = false;" @mousemove="updateScrollingState">
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    name: "HorizontalScroll",
    data() {
        return {
            scrollHeldByMouse: false,
            scrollBeingDragged: false,
        };
    },
    methods: {
        updateScrollingState() {
            this.scrollBeingDragged = this.scrollHeldByMouse;
        }
    },
    mounted() {

        /**
         * create intersection observer
         */
        const observer = new IntersectionObserver((entries) => {
            if (this.scrollBeingDragged) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // do something when the element enters the viewport
                        console.log(`${entry.target.textContent} element entered viewport`);
                    } else {
                        // do something when the element leaves the viewport
                        console.log(`${entry.target.textContent} element left viewport`);
                    }
                });
            }
        });


        /**
         * $nextTick -- function called when the DOM has updated. Pass in a
         * callback function controlling what should happen in that moment.
         */
        this.$nextTick(() => {
            /**
             * use $refs instead of querySelector for selecting elements. This
             * is because they're VirtualDom elements, not regular DOM elements.
             */
            const slotElements = this.$refs.scrollContainer.children;
            if (slotElements) {
                Array.from(slotElements).forEach((el) => {
                    observer.observe(el);
                });
            }
        });
    },
};
</script>
  