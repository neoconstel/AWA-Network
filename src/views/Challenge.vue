<template>
    <div class="page-container mx-16 mt-4 mb-24 text-gray-800 dark:text-gray-200">
        <header>
            <div
                class="grid grid-cols-4 gap-4 [&>*]:text-center text-lg font-medium [&>*]:py-5 [&>*]:bg-gray-300 [&>*]:dark:bg-gray-700">
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">Winners <span
                        class="block text-xs text-gray-500 dark:text-gray-400">Trending winners</span></RouterLink>
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">Topic <span
                        class="block text-xs text-gray-500 dark:text-gray-400">Topic summary</span></RouterLink>
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">Other topic<span
                        class="block text-xs text-gray-500 dark:text-gray-400">Topic summary</span>
                </RouterLink>
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">Announcements <span
                        class="block text-xs text-gray-500 dark:text-gray-400">Contest updates</span>
                </RouterLink>
            </div>

            <h1 class="mt-4">Competition</h1>
            <p class="mt-2">Test your strengths in one of our competitive art contests.</p>
            <div class="h-1 bg-gray-500 my-5 mb-10"></div>
        </header>
        <a v-if="this.dataStore.user.id && (this.dataStore.user.groups.includes('ContestCreators') | this.dataStore.user.is_superuser)"
            class="p-3 mt-5 block text-center w-40 rounded-3xl mx-auto bg-gray-700 dark:bg-gray-300 text-gray-300 dark:text-gray-700"
            href="/contest_editor" target="_blank">Create Contest</a>
        <main>
            <!-- UNCOMMENT BELOW CODE TO SHOW CHALLENGES FETCHED FROM SERVER -->
            <!-- <section class="contests-grid grid grid-cols-4 gap-4 mt-10">
                <template v-for="(contest, index) in contests" :key="index">
                    <ContestCard :contest="contest" />
                </template>
</section> -->


            <!-- temporary code block until time to show challenges -->
            <div class="page-container mx-16 text-gray-800 dark:text-gray-200">
                <p class="text-lg font-bold text-center mt-10">No challenges at the moment</p>
            </div>
        </main>
    </div>
</template>


<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

import ContestCard from "@/components/ContestCard.vue";

export default {
    name: 'Challenge',
    components: {
        ContestCard
    },
    data() {
        return {
            "contests": []
        }
    },
    computed: {
        ...mapStores(useDataStore)
    },
    methods: {
        async fetchContests() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/contests/`

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    // console.log(data)
                    this.contests.splice(this.contests.length, 0, ...(data['results']))
                    console.log(this.contests)
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
    },
    async mounted() {
        console.log('Contests view mounted')

        this.fetchContests()

        this.$nextTick(() => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100)
        })

    }
}
</script>