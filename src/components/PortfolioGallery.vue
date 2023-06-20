<template>
    <div class="grid grid-cols-5 gap-x-3 gap-y-14 px-4 py-14 bg-gray-900">

        <!-- user portfolio -->
        <div v-for="(portfolio, index) in portfolios" :key="index" class="bg-gray-300 h-44 ">
            <!-- works by this user -->
            <PortfolioCard :portfolio=portfolio />
        </div>
    </div>
</template>

<script>
import PortfolioCard from "@/components/PortfolioCard.vue"

export default {
    name: 'PortfolioGallery',
    components: {
        PortfolioCard
    },
    props: {
        'portfolios': Object
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>