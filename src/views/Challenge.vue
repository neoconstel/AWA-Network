<template>
    <div class="page-container mx-16 mt-10 mb-24 text-gray-800 dark:text-gray-200">
        <header>
            <h1>AWA 3D Art Contests</h1>
            <p class="mt-2">Test your strengths in one of our competitive art contests.</p>
            <div class="h-1 bg-gray-500 my-5 mb-10"></div>
        </header>
        <main>
            <section class="contests-grid grid grid-cols-4">
                <template v-for="(contest, index) in contests" :key="index">
                    <ContestCard :contest="contest" />
                </template>
            </section>
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