<template>
    <div class="page-container text-gray-800 dark:text-gray-200 mx-16 mt-5 mb-24">
        <header>
            <RouterLink :to="``">
                <div v-if="topBanner" class="relative text-center bg-blue-300 dark:bg-blue-600">
                    <p class="font-bold text-lg">Example other contest – $5550 In Prizes – Ends March 31st</p>
                    <button class="absolute right-1 top-1 outline outline-1 rounded-2xl px-1"
                        @click="topBanner = false">close x</button>
                    <p>&gt&gtclick for contest rules and prizes&lt&lt</p>
                </div>
            </RouterLink>

            <img class="mt-10" :src="`${contest.thumbnail_image}`" alt="">
            <h1 class="mt-10">{{ contest.title }}</h1>
            <p class="font-bold">{{ this.methodsStore.formatDate(contest.start_date, includeWeekday = false) }} - {{
                this.methodsStore.formatDate(contest.end_date, includeWeekday = false) }} : Prizes Worth ${{
                    contest.reward
                }}
            </p>
        </header>

        <main class="mt-16">
            <h2>Contest Details</h2>
            <div class="h-1 bg-gray-500 mt-2 mb-10"></div>
            <article v-html="contest.details" id="html-container"></article>
        </main>
    </div>
</template>

<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store
import useMethodsStore from '@/stores/functions'; // convention: use<storeID>Store

// HTML sanitization
import DOMPurify from 'dompurify';

export default {
    name: 'ChallengeDetail',
    components: {

    },
    data() {
        return {
            htmlText: '',
            contest: {},
            topBanner: true
        }
    },
    computed: {
        ...mapStores(useDataStore, useMethodsStore),
    },
    methods: {
        async fetchChallenge(id) {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/contest/${id}/`

            // reset the challenge object to clear any existing challenge data
            this.contest = {}

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    // console.log(data)
                    this.contest = data
                    this.contest.details = DOMPurify.sanitize(this.contest.details)
                })
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100)
        })
    },
    watch: {
        // stuffs that should be re-fetched or re-executed if something changes

        '$route.params.id': {
            immediate: true,
            handler(newVal) {
                // scroll to top
                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 100)

                this.fetchChallenge(this.$route.params.id)
            }
        }
    }
}
</script>


<style scoped>
/* style dynamic html with vue deep selector */

:deep(#html-container h1),
:deep(#html-container h2),
:deep(#html-container h3),
:deep(#html-container h4),
:deep(#html-container h5),
:deep(#html-container h6) {
    margin-top: 10px;
}

:deep(#html-container p) {
    margin-bottom: 5px;
}

:deep(#html-container img) {}

:deep(#html-container) {
    padding-left: 50px;
}
</style>
