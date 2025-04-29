<!-- for displaying 'Products' from the backend. A 'Resource' as shown in the
 frontend is actually a 'Product' in the backend -->
<template>
    <div class="page-container xs:mx-2 lg:mx-16 text-gray-800 dark:text-gray-200">
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
            <div v-if="productCategories" class="flex gap-x-2 gap-y-2 flex-wrap">
                <RouterLink class="text-gray-200 dark:text-gray-800" to="/resources"><v-btn>All</v-btn></RouterLink>
                <RouterLink v-for="(category, index) in productCategories" class="text-gray-200 dark:text-gray-800"
                    :key="index" :to="`/resources${category.path}`"><v-btn>
                        {{
                            category.name }}
                    </v-btn></RouterLink>
            </div>
            <div v-if="targetCategory" class="flex gap-x-2 gap-y-2 flex-wrap">
                <RouterLink v-for="(subcategory, index) in targetCategory.children"
                    class="text-gray-200 dark:text-gray-800" :key="index" :to="`/resources${subcategory.path}`"><v-btn>
                        {{
                            subcategory.name }}
                    </v-btn></RouterLink>
            </div>
        </header>
        <a v-if="this.dataStore.seller.id"
            class="p-3 mt-5 block text-center w-52 rounded-3xl mx-auto bg-gray-700 dark:bg-gray-300 text-gray-300 dark:text-gray-700 hover:bg-gray-500 dark:hover:bg-gray-400"
            href="/resources/upload" target="_blank">Sell Your Digital Assets</a>
        <button v-else-if="this.dataStore.user.id" @click="showSellerCreateForm = true"
            class="p-3 mt-5 block text-center w-52 rounded-3xl mx-auto bg-gray-700 dark:bg-gray-300 text-gray-300 dark:text-gray-700 hover:bg-gray-500 dark:hover:bg-gray-400">Create
            a seller profile</button>


        <!-- dialog to present seller create form -->
        <v-dialog v-model="showSellerCreateForm" max-width="400">
            <v-card title="Create Your Seller Profile" color="blue" text="">
                <div class="mx-10 grid grid-cols-[1fr_2fr]" action="">
                    <label for="alias">Seller Alias: </label>
                    <input type="text" id="alias" value="" placeholder="e.g blenderguru" name="" ref="aliasInput">
                    <label for="brandName">Brand Name: </label>
                    <input type="text" id="brandName" value="" placeholder="e.g Yan Sculpts" name=""
                        ref="brandNameInput">
                </div>
                <div class="flex flex-initial justify-center">
                    <v-card-actions>
                        <v-btn @click="() => { saveSellerProfile(); showSellerCreateForm = false }">Create</v-btn>
                    </v-card-actions>
                    <v-card-actions>
                        <v-btn @click="showSellerCreateForm = false">Cancel</v-btn>
                    </v-card-actions>
                </div>
            </v-card>
        </v-dialog>


        <main class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 mt-10 mb-96 gap-5">
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
            targetCategory: null,
            showSellerCreateForm: false
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
        async saveSellerProfile() {
            // for both creating or updating the seller profile of current user

            /**
             * if user has no seller profile, use the create endpoint as well 
             * as the POST method. Otherwise use the update endpoint and the 
             * PUT method.
             */
            let url;
            let requestMethod;
            if (!this.dataStore.seller.id) {
                url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/resources/sellers/`
                requestMethod = 'POST'
            }
            else {
                url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/resources/seller/`
                requestMethod = 'PUT'
            }

            const headers = {
                'X-CSRFToken': this.$cookies.get('csrftoken')
            }

            const formData = new FormData()
            formData.append('alias', this.$refs.aliasInput.value)
            formData.append('brand_name', this.$refs.brandNameInput.value)

            const requestOptions = {
                method: requestMethod,
                headers: headers,
                body: formData,
                credentials: 'include',
                redirect: 'follow'
            };

            fetch(url, requestOptions)
                .then(response => {
                    if (response.ok) {
                        // Case 1: Successful response (status 2xx)
                        return response.json(); // or response.text(), etc.
                    } else {
                        // Case 2: Response returned but with non-2xx status
                        throw new Error(`Server error: ${response.status}`);
                    }
                })
                .then(data => {
                    // Handle the successful data here
                    // console.log('Data received:', data);
                    this.dataStore.seller = data
                    alert("Seller profile saved")
                })
                .catch(error => {
                    // Case 3: Network failure or thrown error from above
                    console.error('Fetch error:', error.message);
                    this.errorMessage = error.message
                    alert("Failed to save profile. " + error.message)
                });
        }
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