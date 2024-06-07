<template>
    <div class="bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-200 inline-block pt-4 pb-3 text-center">
        <img class="w-14 h-14 rounded-full mx-auto" :src="profileImage" alt="profile_pic">
        <RouterLink class="text-cyan-700 dark:text-cyan-500 hover:text-pink-700 dark:hover:text-gray-100"
            :to="`/artistPortfolio/${this.artist.user.username}/`">{{ this.artist.user.name }}
        </RouterLink>
        <p class="mb-2 text-sm">{{ this.artist.bio }}</p>
        <div v-if="this.artPlaceholder" class="grid grid-cols-4 px-2 gap-x-2">
            <template v-for="(n, index) in 4" :key="index">
                <RouterLink v-if="this.works.length > index" :to="`/artwork/${this.works[index].id}`"><img
                        class="aspect-square object-cover" :src="this.works[index].file_url" alt=""></RouterLink>
                <img v-else class="aspect-square object-cover" :src="this.artPlaceholder.image_url"
                    :alt="this.artPlaceholder.caption">
            </template>
        </div>
    </div>
</template>
<script>


// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {

    name: 'ArtistCard',
    props: {
        'artist': Object,
        'artPlaceholder': Object
    },
    computed: {
        ...mapStores(useDataStore),
        profileImage() {
            if (this.artist.user.profile_image)
                return this.artist.user.profile_image
            else
                return this.dataStore.siteConfigs.default_profile_image_url
        }
    },
    data() {
        return {
            'works': []
        }
    },
    methods: {
        async fetchWorks() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/artworks/?page_size=50&search=${this.artist.user.username}&filter=artist`

            const headers = {
                'Content-Type': 'application/json',
                'X-CSRFToken': this.$cookies.get('csrftoken')
            }

            const requestOptions = {
                method: 'GET',
                headers: headers,
                credentials: 'include',
                redirect: 'follow'
            };

            fetch(url, requestOptions)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    // console.log(data['results'])
                    this.works.splice(this.works.length, 0, ...(data['results']))
                    console.log(this.works)
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
    },
    async mounted() {
        this.fetchWorks()
    },


}

</script>
