<template>
    <div class="page-container mx-16">
        <header>
            <div class="grid grid-cols-2 gap-2">
                <RouterLink class="h-28 flex justify-center items-center bg-yellow-100" to="">Digital Products
                </RouterLink>
                <RouterLink class="h-28 flex justify-center items-center bg-orange-50" to="">Digital Bundles
                </RouterLink>
            </div>
            <div v-if="productCategories" class="flex gap-x-2">
                <RouterLink class="px-6 py-8 bg-cyan-200" to="/resources">ALL</RouterLink>
                <RouterLink v-for="(category, index) in productCategories" class="px-6 py-8 bg-cyan-200" :key="index"
                    :to="`/resources${category.path}`">{{
                        category.name }}</RouterLink>
            </div>
            <div v-if="targetCategory" class="flex gap-x-2">
                <RouterLink v-for="(subcategory, index) in targetCategory.children" class="px-6 py-8 bg-pink-400"
                    :key="index" :to="`/resources${subcategory.path}`">{{
                        subcategory.name }}</RouterLink>
            </div>
        </header>
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
import { RouterLink } from 'vue-router';

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