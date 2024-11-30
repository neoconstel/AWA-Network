<template>
    <div v-if="products.length > 0" class="page-container mx-16">
        <header>
            <div class="grid grid-cols-2 gap-2">
                <RouterLink class="h-28 flex justify-center items-center bg-yellow-100" to="">Digital Products
                </RouterLink>
                <RouterLink class="h-28 flex justify-center items-center" to="">Digital Bundles</RouterLink>
            </div>
            <div class="flex gap-x-2">
                <RouterLink v-for="(category, index) in productCategories" class="px-6 py-8 bg-cyan-200" :key="index"
                    :to="`/resources${category.path}`">{{
                        category.name }}</RouterLink>
            </div>
            <div v-if="this.targetCategory" class="flex gap-x-2">
                <RouterLink v-for="(subcategory, index) in targetCategory.children" class="px-6 py-8 bg-pink-400"
                    :key="index" :to="`/resources${subcategory.path}`">{{
                        subcategory.name }}</RouterLink>
            </div>
        </header>
        <main>
            <!-- {{ $route.params.paths }} -->
        </main>
    </div>
</template>


<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {
    name: 'Resources',
    components: {

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
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/resources/products/`

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    // console.log(data)
                    this.products.splice(this.products.length, 0, ...(data['results']))
                    // console.log("products", this.products)
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
            /**the category returned is the category corresponding to the last
             * category in the route parameter (e.g /resources/tutorials/brushes/artworks).
             * Any subcategories on the page will be based on its children
             * if it has any.
             */
            let routes = this.$route.params.paths // ['tutorials', 'brushes'] etc

            // create deep copy
            let categoryList = JSON.parse(JSON.stringify(this.productCategories))
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