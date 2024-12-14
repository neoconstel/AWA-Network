<template>
    <div class="mx-16 text-gray-800 dark:text-gray-200">
        <header></header>
        <div>
            <main>
                Product title: {{ product.title }}
            </main>
            <section class="cart"></section>
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
    name: 'ProductDetail',
    components: {

    },
    data() {
        return {
            product: {}
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
                })
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