<template>
    <div class="flex" style="overflow: hidden;" v-dragscroll.x="true" ref="scrollContainer">
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
            currentLeft: null,
            currentRight: null,
            totalElementWidths: 0,
            currentLeftIndex: 0,
            currentRightIndex: null,
            cursorStartPosition: null,
            cursorCurrentPosition: null,
            scrollDirection: ''
        };
    },
    methods: {
        updateScrollDirection() {
            if (this.scrollBeingDragged) {
                if (this.cursorCurrentPosition > this.cursorStartPosition)
                    this.scrollDirection = 'right'
                else if (this.cursorCurrentPosition < this.cursorStartPosition)
                    this.scrollDirection = 'left'
                else
                    this.scrollDirection = ''
            }
            else {
                this.scrollDirection = ''
            }
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

            Array.from(slotElements).forEach((el) => {

            });
        },
        leftmostToRightmost(gap) {
            /** make current leftmost element become the current rightmost 
             * via relative positioning
             * 
             * - gap: the gap (in pixels) between each element
            */
            const scrollContainer = this.$refs.scrollContainer;
            const slotElements = scrollContainer.children;
            let leftStyle = this.currentLeft.style.left == '' ? '0px' : this.currentLeft.style.left
            let leftStyleNumeric = parseFloat(leftStyle)
            leftStyleNumeric += this.totalElementWidths + (gap * slotElements.length)
            this.currentLeft.style.left = `${leftStyleNumeric}px`

            //now set the element after it as the new currentLeft
            if (this.currentLeftIndex < slotElements.length - 1)
                this.currentLeftIndex++
            else
                this.currentLeftIndex = 0

            this.currentLeft = slotElements[this.currentLeftIndex]
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
            this.currentLeft = slotElements[0];
            this.currentRight = Array.from(slotElements).slice(-1)[0];

            if (slotElements) {
                Array.from(slotElements).forEach((el) => {
                    this.totalElementWidths += el.getBoundingClientRect().width
                    this.currentRightIndex = slotElements.length - 1
                    observer.observe(el);
                });
            }


            scrollContainer.addEventListener('mousedown', ($event) => {
                this.scrollHeldByMouse = true;
                this.cursorStartPosition = $event.clientX;
            })

            window.addEventListener('mouseup', ($event) => {
                this.scrollHeldByMouse = false;
                this.scrollBeingDragged = false;
                this.cursorStartPosition = null
                this.cursorCurrentPosition = null
            })

            window.addEventListener('mousemove', ($event) => {
                this.cursorCurrentPosition = $event.clientX;

                // scroll is being dragged only if mousedown was made on it
                // before the current mouse movement
                this.scrollBeingDragged = this.scrollHeldByMouse;
                this.updateScrollDirection();

                // if (this.scrollBeingDragged)
                //     console.log(`Scroll direction: ${this.scrollDirection}`)
            })

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
                    }
                });
            }
        });


    },
};
</script>
  