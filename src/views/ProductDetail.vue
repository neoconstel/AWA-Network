<template>
    <div v-if="product.id" class="mx-16 text-gray-800 dark:text-gray-200">
        <header></header>
        <div>
            <header>
                <p class="mt-10 text-gray-600 dark:text-gray-400">
                    <RouterLink class="hover:text-cyan-500" to="/Resources">Resources</RouterLink> / <RouterLink
                        class="hover:text-cyan-500" :to="`/resources/${product.category.root.toLowerCase()}`">{{
                            product.category.root }}
                    </RouterLink> / {{ product.title
                    }}
                </p>
                <h1 class="mt-5">{{ product.title }}</h1>
                <img class="w-6 aspect-square rounded-full float-left mr-3"
                    src="https://cdn.pixabay.com/photo/2024/07/13/08/02/penguin-8891658_1280.jpg" alt="">
                <p>By <RouterLink :to="`/resources/store/${product.seller.alias}`" class="text-cyan-500">{{
                    product.seller.brand_name }}</RouterLink> in
                    <RouterLink :to="`/resources/${product.category.root.toLowerCase()}`" class="text-cyan-500">{{
                        product.category.root
                    }}</RouterLink>
                </p>
            </header>
            <div class="grid mt-5" style="grid-template-columns: 2fr 1fr; grid-template-areas: 'main cart';">
                <main class="mt-10" style="grid-area: main;">
                    <img class="w-full aspect-video object-cover"
                        :src="activeSrc ? activeSrc : product.thumbnail_images[0]" alt="">

                    <div v-if="product.thumbnail_images.length > 1"
                        class="flex flex-row mt-5 gap-x-2 overflow-x-scroll">
                        <img @click="handleThumbnailClick"
                            class="active-thumbnail h-28 aspect-video object-cover border-green-500 border-solid border-4"
                            :src="product.thumbnail_images[0]" alt="">
                        <img @click="handleThumbnailClick" v-for="(src, index) in product.thumbnail_images.slice(1)"
                            class="h-28 aspect-video object-cover border-green-500 border-none border-4" :src="src"
                            alt="" key="index">
                    </div>
                    <article class="product-description">
                        <!-- style scoped dynamic html with deep selectors applied -->
                        <div v-html="product.description" id="html-container"></div>
                    </article>
                </main>
                <section class="cart-section" style="grid-area: cart;">
                    <ProductCart :product="product" />
                </section>
            </div>
            <aside class="mt-28 mb-72">
                <h3>More by {{ product.seller.brand_name }}</h3>
                <div v-if="sellerProducts.length && sellerProducts.length > 1" class="grid grid-cols-5 gap-5">
                    <ProductCard v-for="(product_, index) in sellerProducts" :product="product_" :key="index" />
                </div>
            </aside>
        </div>
    </div>
</template>

<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

import ProductCard from '@/components/ProductCard.vue';
import ProductCart from '@/components/ProductCart.vue';

// HTML sanitization
import DOMPurify from 'dompurify';

export default {
    name: 'ProductDetail',
    components: {
        ProductCard,
        ProductCart
    },
    data() {
        return {
            product: {},
            activeSrc: "",
            sellerProducts: []
        }
    },
    computed: {
        ...mapStores(useDataStore),
    },
    methods: {
        async fetchProduct() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/resources/product/${this.$route.params.id}/`

            // reset the product object to clear any existing article data
            this.product = {}

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    // console.log(data)
                    this.product = data
                    this.fetchSellerProducts(this.product.seller.alias)
                })
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
        handleThumbnailClick(event) {
            let activeThumbnail = document.querySelector(".active-thumbnail")
            activeThumbnail.classList.remove("border-solid")
            activeThumbnail.classList.add("border-none")
            activeThumbnail.classList.remove("active-thumbnail")

            event.target.classList.remove("border-none")
            event.target.classList.add("border-solid")
            event.target.classList.add("active-thumbnail")
            this.activeSrc = event.target.src
        },
        async fetchSellerProducts(sellerAlias) {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/resources/products/?seller=${sellerAlias}`

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    this.sellerProducts = []
                    this.sellerProducts = data['results']
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
    },
    mounted() {
        this.fetchProduct()

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

                this.fetchProduct()
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