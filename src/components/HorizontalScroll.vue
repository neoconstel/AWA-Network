<template>
    <div class="flex" style="overflow: hidden;" v-dragscroll.x="true" ref="scrollContainer">
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    name: "HorizontalScroll",
    props: {
        "gap": Number
    },
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
        leftmostToRightmost() {
            /** make current leftmost element become the current rightmost 
             * via relative positioning
            */
            const scrollContainer = this.$refs.scrollContainer;
            const slotElements = scrollContainer.children;
            let leftStyle = this.currentLeft.style.left == '' ? '0px' : this.currentLeft.style.left
            let leftStyleNumeric = parseFloat(leftStyle)
            leftStyleNumeric += this.totalElementWidths + (this.gap * slotElements.length)
            this.currentLeft.style.left = `${leftStyleNumeric}px`

            // currentLeft will become currentRight in the next step, so set currentRight now
            this.currentRight = this.currentLeft

            //now set the element after it as the new currentLeft
            if (this.currentLeftIndex < slotElements.length - 1)
                this.currentLeftIndex++
            else
                this.currentLeftIndex = 0

            this.currentLeft = slotElements[this.currentLeftIndex]
        }, rightmostToLeftmost() {
            /** make current rightmost element become the current leftmost 
             * via relative positioning
            */
            const scrollContainer = this.$refs.scrollContainer;
            const slotElements = scrollContainer.children;
            let leftStyle = this.currentRight.style.left == '' ? '0px' : this.currentRight.style.left
            let leftStyleNumeric = parseFloat(leftStyle)
            leftStyleNumeric -= this.totalElementWidths + (this.gap * slotElements.length)
            this.currentRight.style.left = `${leftStyleNumeric}px`

            // currentRight will become currentLeft in the next step, so set currentLeft now
            this.currentLeft = this.currentRight

            //now set the new currentRight
            if (this.currentRightIndex > 0)
                this.currentRightIndex--
            else
                this.currentRightIndex = slotElements.length - 1

            this.currentRight = slotElements[this.currentRightIndex]
        },
        elementOnscreen(el) {
            const bounds = el.getBoundingClientRect()
            return (bounds.right > 0) && (bounds.bottom > 0) && (bounds.left < window.innerWidth) && (bounds.top < window.innerHeight)
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

            // window.addEventListener('mousemove', ($event) => {
            //     this.cursorCurrentPosition = $event.clientX;

            //     // scroll is being dragged only if mousedown was made on it
            //     // before the current mouse movement
            //     this.scrollBeingDragged = this.scrollHeldByMouse;
            //     this.updateScrollDirection();

            //     // if (this.scrollBeingDragged)
            //     //     console.log(`Scroll direction: ${this.scrollDirection}`)

            //     // if currentRight has 'fully' entered in
            //     if (this.currentRight.getBoundingClientRect().right < window.innerWidth) {
            //         // console.log('end of right')

            //         // if scrolling left AND currentLeft is off-screen
            //         if (this.scrollDirection == 'left' && !this.elementOnscreen(this.currentLeft)) {
            //             this.leftmostToRightmost(this.gap)
            //         }
            //     }
            //     else {
            //         // console.log('inside current right')
            //     }
            // })

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
  