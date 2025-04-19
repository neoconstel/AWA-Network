<template>
    <div class="text-gray-800 dark:text-gray-200 xs:mx-2 sm:mx-5 md:mx-10 lg:mx-16">
        <header class="mt-3">
            <span class="text-3xl font-bold mr-3">Store</span><span>{{ products.length }} items</span>
        </header>
        <main>
            <!--Tabs navigation-->
            <ul class="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0" role="tablist" data-twe-nav-ref>
                <li role="presentation">
                    <a href="#tabs-products"
                        class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                        data-twe-toggle="pill" data-twe-target="#tabs-products" data-twe-nav-active role="tab"
                        aria-controls="tabs-products" aria-selected="true">Products</a>
                </li>
                <li role="presentation">
                    <a href="#tabs-bundles"
                        class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                        data-twe-toggle="pill" data-twe-target="#tabs-bundles" role="tab" aria-controls="tabs-bundles"
                        aria-selected="false">Bundles</a>
                </li>
                <li role="presentation">
                    <a href="#tabs-sellerInfo"
                        class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                        data-twe-toggle="pill" data-twe-target="#tabs-sellerInfo" role="tab"
                        aria-controls="tabs-sellerInfo" aria-selected="false">Seller Information</a>
                </li>
            </ul>
            <div>
                <!--Tabs content-->
                <div class="mb-6">
                    <!-- tab 1 content (place content inside the div) -->
                    <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                        id="tabs-products" role="tabpanel" aria-labelledby="tabs-products-tab" data-twe-tab-active>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 mb-96 gap-5">
                            <ProductCard v-for="(product, index) in products" :product="product" :key="index" />
                        </div>
                    </div>
                    <!-- tab 2 content (place content inside the div) -->
                    <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                        id="tabs-bundles" role="tabpanel" aria-labelledby="tabs-bundles-tab">
                        Bundles content (still in development)
                    </div>
                    <!-- tab 3 content (place content inside the div) -->
                    <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                        id="tabs-sellerInfo" role="tabpanel" aria-labelledby="tabs-bundles-tab">
                        Seller info (will be updated soon)
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

// Tailwind Elements
import { Tab, initTWE, } from "tw-elements";

import ProductCard from '@/components/ProductCard.vue';

export default {
    name: 'SellerStore',
    components: {
        ProductCard
    },
    data() {
        return {
            products: []
        }
    },
    methods: {
        async fetchSellerProducts() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/resources/products/?seller=${this.$route.params.seller}`

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
        }
    },
    computed: {
        ...mapStores(useDataStore),
    },
    mounted() {
        initTWE({ Tab });

        this.$nextTick(() => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100)
        })
    },
    watch: {
        '$route.params.seller': {
            immediate: true,
            handler(newVal) {
                this.fetchSellerProducts()
            }
        }
    },
}

</script>