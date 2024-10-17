<template>
    <div class="text-gray-800 dark:text-gray-200">
        <header>
            <div
                class="grid grid-cols-4 mt-4 mx-16 gap-4 [&>*]:text-center text-lg font-medium [&>*]:py-5 [&>*]:bg-gray-300 [&>*]:dark:bg-gray-700">
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">Art Skills <span
                        class="block text-xs text-gray-500 dark:text-gray-400">Lean & improve</span></RouterLink>
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">Career <span
                        class="block text-xs text-gray-500 dark:text-gray-400">Guides, Jobs & more</span></RouterLink>
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">Inspiration <span
                        class="block text-xs text-gray-500 dark:text-gray-400">Discover inspiring talents</span>
                </RouterLink>
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">News <span
                        class="block text-xs text-gray-500 dark:text-gray-400">Industry news & updates</span>
                </RouterLink>
            </div>
            <SearchInput class="mt-5 mx-16" :placeholderText="'Search Articles'" />
        </header>
        <main>
        </main>
        <aside>

        </aside>
    </div>

</template>

<script>
import SearchInput from "@/components/SearchInput.vue"

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {
    name: 'Magazine',
    components: {
        SearchInput,
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapStores(useDataStore),
    },
    methods: {
    },
    mounted() {

        this.$nextTick(() => {
            setTimeout(() => {
                this.scrollToTop();
            }, 1000)

        })

    }
}

</script>
