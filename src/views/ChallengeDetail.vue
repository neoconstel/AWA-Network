<template>
    <div class="container text-gray-800 dark:text-gray-200 mx-16 mt-5">
        <h1>Challenge Detail {{ this.$route.params.id }}</h1>
    </div>
</template>

<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

// HTML sanitization
import DOMPurify from 'dompurify';

export default {
    name: 'ChallengeDetail',
    components: {

    },
    data() {
        return {
            htmlText: '',
            challenge: {}
        }
    },
    computed: {
        ...mapStores(useDataStore),
    },
    methods: {
        async fetchChallenge(id) {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/contest/${id}/`

            // reset the challenge object to clear any existing challenge data
            this.challenge = {}

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    // console.log(data)
                    this.challenge = data
                    this.htmlText = DOMPurify.sanitize(this.challenge.details)
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
