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
        },
        cyclicScroll() {
            /**
             * this allows elements which go out from one side of the screen to
             * reappear in a continuous fashion from the opposite side of the 
             * screen.
             */
        },
        shiftRight() {
            const scrollContainer = this.$refs.scrollContainer;
            const slotElements = scrollContainer.children;
            // const firstChild = scrollContainer.firstChild;
            // let firstChildWidth = firstChild.style.width;
            // let firstChildHeight = firstChild.style.height;
            Array.from(slotElements).forEach((el) => {
                let leftPos = el.style.left == '' ? '0px' : el.style.left;
                el.style.left = `${parseInt(leftPos) + el.clientWidth}px`;
            });
            console.log('shifted right')
        }
    },
    mounted() {
        /**
         * $nextTick -- function called when the DOM has updated. Pass in a
         * callback function controlling what should happen in that moment.
         */
        this.$nextTick(() => {
            /**
             * use $refs instead of querySelector for selecting elements. This
             * is because they're VirtualDom elements, not regular DOM elements.
             */
            const scrollContainer = this.$refs.scrollContainer;
            const slotElements = scrollContainer.children;
            if (slotElements) {
                // scrollContainer.appendChild(scrollContainer.children[0])
                Array.from(slotElements).forEach((el) => {
                    observer.observe(el);
                    // el.style.left = `${el.clientWidth}px`;
                });
            }
        });


        /**
         * create intersection observer
         */
        const observer = new IntersectionObserver((entries) => {
            const scrollContainer = this.$refs.scrollContainer;

            if (this.scrollBeingDragged) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // do something when the element enters the viewport
                        console.log(`${entry.target.textContent} element entered viewport`);
                    } else {
                        // do something when the element leaves the viewport
                        console.log(`${entry.target.textContent} element left viewport`);
                        this.shiftRight()
                        entry.target.parentElement.appendChild(entry.target);
                    }
                });
            }
        });


    },
};
</script>
  