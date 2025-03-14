<!-- for displaying 'Products' from the backend. A 'Resource' as shown in the
 frontend is actually a 'Product' in the backend -->
<template>
    <div class="page-container mx-16 text-gray-800 dark:text-gray-200">
        <header>
            <div class="grid grid-cols-2 gap-2">
                <RouterLink class="h-28 flex justify-center items-center bg-sky-600 text-gray-200" to="">
                    Digital
                    Products
                </RouterLink>
                <RouterLink class="line-through h-28 flex justify-center items-center bg-indigo-600 text-gray-200"
                    to="">Digital
                    Bundles (still in development)
                </RouterLink>
            </div>
            <div v-if="productCategories" class="flex gap-x-2">
                <RouterLink class="px-6 py-4 bg-gray-700 dark:bg-gray-300 text-gray-200 dark:text-gray-800"
                    to="/resources">ALL</RouterLink>
                <RouterLink v-for="(category, index) in productCategories"
                    class="px-6 py-4 bg-gray-700 dark:bg-gray-300 text-gray-200 dark:text-gray-800" :key="index"
                    :to="`/resources${category.path}`">{{
                        category.name }}</RouterLink>
            </div>
            <div v-if="targetCategory" class="flex gap-x-2">
                <RouterLink v-for="(subcategory, index) in targetCategory.children"
                    class="px-6 py-4 bg-gray-500 dark:bg-gray-400 text-gray-200 dark:text-gray-800" :key="index"
                    :to="`/resources${subcategory.path}`">{{
                        subcategory.name }}</RouterLink>
            </div>
        </header>
        <a v-if="this.dataStore.user.id && (this.dataStore.user.groups.includes('ArticleCreators') | this.dataStore.user.is_superuser)"
            class="p-3 mt-5 block text-center w-52 rounded-3xl mx-auto bg-gray-700 dark:bg-gray-300 text-gray-300 dark:text-gray-700"
            href="/resources/upload" target="_blank">Sell Your Digital Assets</a>
        <main class="grid grid-cols-5 mt-10 mb-96 gap-5">
            <ProductCard v-for="(product, index) in products" :product="product" :key="index" />
        </main>
    </div>
</template>


<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

import ProductCard from '@/components/ProductCard.vue';

export default {
    name: 'Resources',
    components: {
        ProductCard
    },
    data() {
        return {
            productCategories: [],
            products: [],
            window: window,
            targetCategory: null
        }
    },
    computed: {
        ...mapStores(useDataStore),
    },
    methods: {
        async fetchProducts() {
            let subcategoryParams = this.$route.params.paths
            let subcategoryPath = ''
            if (subcategoryParams.length)
                subcategoryPath = `${subcategoryParams.join('/')}/`

            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/resources/products/${subcategoryPath}`

            console.log("fetched product url:", url)
            console.log("subcategoryParams:", subcategoryParams)

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    this.products = []
                    this.products = data['results']
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
        async fetchProductCategories() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/resources/categories/`

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    this.productCategories = JSON.parse(data['product_categories'])
                    this.getTargetCategory()
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
        getTargetCategory() {
            /**the category returned is the category with the nested category path matching
             * the route parameters completely (e.g /resources/tutorials/brushes/artworks).
             * Any subcategories on the page will be based on its children
             * if it has any.
             */
            let routes = this.$route.params.paths // ['tutorials', 'brushes'] etc

            let categoryList = this.productCategories
            let target = null
            let route
            let routeSum = ""

            for (route of routes) {
                routeSum += `/${route}`

                target = categoryList.find(
                    cat => cat.path == routeSum)
                categoryList = target.children
            }
            this.targetCategory = target
        },
    },
    async mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100)
        })
    },
    watch: {
        '$route.params.paths': {
            immediate: true,
            handler(newVal) {
                this.fetchProductCategories()
                this.fetchProducts()
            }
        }
    },
}
</script>