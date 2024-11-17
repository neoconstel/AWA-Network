<template>
    <div class="text-gray-800 dark:text-gray-200 mx-16 pb-40">
        <header v-if="this.articles.length">
            <div
                class="grid grid-cols-4 mt-4 gap-4 [&>*]:text-center text-lg font-medium [&>*]:py-5 [&>*]:bg-gray-300 [&>*]:dark:bg-gray-700">
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

            <SearchInput class="mt-5" :placeholderText="'Search Articles'" />

            <section class="grid mt-10 gap-x-5" style="grid-template-columns: 3fr 1fr;">
                <!-- highlighted article -->
                <ArticleCard class="h-full" :article="articles.slice(-1)[0]" :topToBottomRatio="3" />

                <section class="space-y-5">
                    <!-- follow-up highlights -->
                    <ArticleCard :article="articles.slice(-2)[0]" />
                    <ArticleCard :article="articles.slice(-3)[0]" />
                </section>
            </section>
        </header>

        <a v-if="this.dataStore.user.id && (this.dataStore.user.groups.includes('ArticleCreators') | this.dataStore.user.is_superuser)"
            class="p-3 mt-5 block text-center w-32 rounded-3xl mx-auto bg-gray-700 dark:bg-gray-300 text-gray-300 dark:text-gray-700"
            href="/magazine_editor" target="_blank">Create Article</a>


        <div v-if="this.articles.length" class="grid" style="grid-template-columns: 3fr 1fr;">
            <main class="mr-10">
                <section class="grid grid-cols-2 gap-x-10">
                    <!-- article gallery -->
                    <ArticleCard v-for="(article, index) in this.articles" class="mt-10" :article="article"
                        :key="index" />
                </section>
                <div>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </main>
            <aside>
                <p class="mt-10 text-center text-2xl font-light">Trending Articles</p>
                <div class="space-y-5">
                    <div v-for="(article, index) in this.articles.slice(3, 13)" :key="index" class="grid"
                        style="grid-template-columns: 1fr 3fr;">
                        <RouterLink :to="``"><img class="w-full h-full object-cover" :src="article.thumbnail_url"
                                alt=""></RouterLink>
                        <div class="text-sm ml-2">
                            <p>{{ article.categories }}</p>
                            <RouterLink :to="``">
                                <p>{{ article.title }}</p>
                            </RouterLink>
                        </div>
                    </div>
                </div>

            </aside>
        </div>
    </div>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue"
import ArticleCard from "@/components/ArticleCard.vue"

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {
    name: 'Magazine',
    components: {
        SearchInput,
        ArticleCard
    },
    data() {
        return {
            articles: [],
            trendingArticles: [],
            highlightedArticle: null,
            followUpHighlights: []
        }
    },
    computed: {
        ...mapStores(useDataStore),
    },
    methods: {
        async fetchArticles() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/magazine/articles/`

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    // console.log(data)
                    this.articles.splice(this.articles.length, 0, ...(data['results']))
                    console.log(this.articles)
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
    },
    mounted() {
        console.log('Magazine view mounted')

        this.fetchArticles()

        // TODO: fetch these from backend
        // this.trendingArticles = this.articles.slice(3, 13)
        // this.followUpHighlights = this.articles.slice(1, 3)
        // this.highlightedArticle = this.articles[0]


        this.$nextTick(() => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100)
        })
    }
}

</script>
