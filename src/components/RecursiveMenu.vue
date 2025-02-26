<!-- This menu (built on top of an accordion component) fits the width of its container -->
<template>
    <div id="accordionComponent">
        <div v-for="(category, index) in this.categories"
            class="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark"
            :key="index">
            <template v-if="category.children.length">
                <b class="accordion-header mb-0 text-lg" :id="`depth${depth}-heading${index}`">
                    <button @click="selectCategory(category)"
                        class="relative top-7 left-4 z-10 hover:bg-cyan-500 dark:hover:bg-cyan-500 p-3 rounded-b-md">{{
                            category.name }}</button>

                    <button
                        class="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                        type="button" data-twe-collapse-init data-twe-collapse-collapsed
                        :data-twe-target="`#depth${depth}-collapse${index}`" aria-expanded="false"
                        :aria-controls="`depth${depth}-collapse${index}`">

                        <span
                            class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                </b>
                <div :id="`depth${depth}-collapse${index}`" class="!visible hidden" data-twe-collapse-item
                    :aria-labelledby="`depth${depth}-heading${index}`">
                    <!-- to allow for the accordion to close when another accordion
                     is opened, add back this code in this div in which this comment
                     is placed:
                        data-twe-parent="#accordionComponent" -->
                    <div class="px-5 py-4">
                        <!-- by listening to the select-category event and also
                         calling the selectCategory method which emits the same
                         event, we're passing the event upwards from the
                         deepest child in the menu till it gets to the main
                         parent component holding the top-level menu -->
                        <RecursiveMenu @select-category="selectCategory" :categories="category.children"
                            :depth="this.depth + 1" />
                    </div>
                </div>
            </template>
            <template v-else>
                <div>
                    <button @click="selectCategory(category)"
                        class="data-[twe-collapse-collapsed] group relative flex items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                        type="button" data-twe-collapse-init data-twe-collapse-collapsed
                        :data-twe-target="`#depth${depth}-collapse${index}`" aria-expanded="false"
                        :aria-controls="`depth${depth}-collapse${index}`"><span @click="selectCategory(category)"
                            class="hover:bg-cyan-500 dark:hover:bg-cyan-500 p-3 rounded-b-md">{{
                                category.name }}</span></button>
                </div>
            </template>
        </div>
    </div>
</template>

<script>

// Initialization for ES Users
import { Collapse, initTWE } from "tw-elements";

const RecursiveMenu = () => import("@/components/RecursiveMenu.vue")

export default {
    name: 'RecursiveMenu',
    components: {
        RecursiveMenu,
    },
    props: {
        categories: Object,
        depth: Number
    },
    data() {
        return {

        }
    },
    mounted() {
        initTWE({ Collapse });
    },
    methods: {
        selectCategory(category) {
            /**this emit is going to be sent from the deepest child, upwards
             * through the entire nested menu till the top menu emits to the
             * main parent component in which the top menu is. The extra
             * argument(s) is/are passed into whatever method is bound to the
             * event listener (e.g @select-category=console.log will print
             * the args)
             */
            this.$emit('select-category', category)
        }
    },
    emits: ['select-category']
}

</script>