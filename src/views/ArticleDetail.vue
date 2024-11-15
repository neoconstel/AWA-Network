<template>
    <div v-if="this.article.id" class="text-gray-800 dark:text-gray-200 mx-16 pb-40">
        <header>
            <div
                class="grid grid-cols-4 mt-4 gap-4 [&>*]:text-center text-lg font-medium [&>*]:py-2 [&>*]:bg-gray-300 [&>*]:dark:bg-gray-700">
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">Art Skills</RouterLink>
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">Career</RouterLink>
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">Inspiration</RouterLink>
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">News</RouterLink>
            </div>
        </header>
        <div class="grid" style="grid-template-columns: 3fr 1fr;">
            <main class="mr-10">
            </main>
            <aside>
            </aside>
        </div>
    </div>

</template>

<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {
    name: 'ArticleDetail',
    components: {

    },
    data() {
        return {
            article: {},
            htmlText: ''
        }
    },
    computed: {
        ...mapStores(useDataStore),
    },
    methods: {
        async fetchArticle(id) {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/magazine/article/${id}/`

            // reset the article object to clear any existing article data
            this.article = {}

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    // console.log(data)
                    this.article = data

                    let html_url = this.article.html_url
                    return fetch(html_url)
                })
                .then(response => response.text())
                .then(htmlText => this.htmlText = htmlText)
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

                this.fetchArticle(this.$route.params.id)
            }
        }
    }
}

</script>
