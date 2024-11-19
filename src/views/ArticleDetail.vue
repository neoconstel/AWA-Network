<template>
    <div v-if="this.article.id && this.htmlText" class="text-gray-800 dark:text-gray-200 mx-16 pb-40">
        <header>
            <div
                class="grid grid-cols-4 mt-4 gap-4 [&>*]:text-center text-lg font-medium [&>*]:py-2 [&>*]:bg-gray-300 [&>*]:dark:bg-gray-700">
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">Art Skills</RouterLink>
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">Career</RouterLink>
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">Inspiration</RouterLink>
                <RouterLink :to="``" class="hover:bg-gray-400 dark:hover:bg-gray-600">News</RouterLink>
            </div>
        </header>
        <div class="" style="grid-template-columns: 3fr 1fr;">
            <!-- if an <aside> is needed, just add a 'grid' class to the
                container div above -->
            <main class="mr-10">
                <!-- style scoped dynamic html with deep selectors applied -->
                <div v-html="htmlText" id="html-container"></div>
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

// HTML sanitization
import DOMPurify from 'dompurify';

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
                .then(htmlText => this.htmlText = DOMPurify.sanitize(htmlText))
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
    },
    mounted() {
        this.fetchArticle(this.$route.params.id)

        this.$nextTick(() => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100)
        })
    },
    watch: {
        // stuffs that should be re-fetched or re-executed if something changes

        '$route.params.id': {
            immediate: false,
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

<style scoped>
/* style dynamic html with vue deep selector */

:deep(#html-container h1),
:deep(#html-container h2),
:deep(#html-container h3),
:deep(#html-container h4),
:deep(#html-container h5),
:deep(#html-container h6) {
    text-align: center;
    margin-top: 20px;
}

:deep(#html-container p) {
    text-align: center;
}

:deep(#html-container img) {
    margin: 0 auto;
}
</style>