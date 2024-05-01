<template>
    <div class="bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-200 inline-block pt-4 pb-3 text-center">
        <img class="w-14 h-14 rounded-full mx-auto" src="https://i.imgur.com/40qCewV.jpg" alt="">
        <h3 class="text-cyan-700 dark:text-cyan-500 hover:text-pink-700 dark:hover:text-gray-100">{{ this.name }}</h3>
        <p class="mb-2 text-sm">{{ this.bio }}</p>
        <div class="grid grid-cols-4 px-2 gap-x-2">
            <img class="aspect-square object-cover" src="https://i.imgur.com/40qCewV.jpg" alt="">
            <img class="aspect-square object-cover" src="https://i.imgur.com/40qCewV.jpg" alt="">
            <img class="aspect-square object-cover" src="https://i.imgur.com/40qCewV.jpg" alt="">
            <img class="aspect-square object-cover" src="https://i.imgur.com/40qCewV.jpg" alt="">
        </div>
    </div>
</template>
<script>

export default {

    name: 'ArtistCard',
    props: {
        'name': String,
        'bio': String
    },
    computed: {

    },
    data() {
        return {

        }
    },
    mounted() {

    }

}

</script>
