<template>
    <Modal :tag="'editWorkModal'">
        <!-- content inside editWork modal -->
        <form class="flex flex-col gap-5 mb-3 p-10 text-gray-800 dark:text-gray-200">
            <h3 class="text-gray-800 dark:text-gray-200">Edit Artwork</h3>

            <fieldset class="border-2 p-1 border-gray-800 dark:border-gray-200">
                <legend class="text-xs text-gray-800 dark:text-gray-200">Title</legend>
                <input class="outline-none w-full bg-transparent focus:outline-none" type="text" id="title"
                    placeholder="" :value="this.work.title" ref="title" />
            </fieldset>

            <div v-if="this.artCategories.length && this.artCategory && this.artCategory.id">
                <fieldset class="border-2 p-1 border-gray-800 dark:border-gray-200">
                    <legend class="text-xs">Categories</legend>
                    <input @click="this.$refs.categories.value = ''"
                        class="outline-none w-full bg-transparent focus:outline-none" :value="this.artCategory.name"
                        type="text" list="sub-topics" id="categories" placeholder="" ref="categories" />
                </fieldset>
                <datalist id="sub-topics">
                    <template v-for="(category, index) in this.artCategories">
                        <option :value="category.name"></option>
                    </template>
                </datalist>
            </div>

            <fieldset class="border-2 p-1 border-gray-800 dark:border-gray-200">
                <legend class="text-xs text-gray-800 dark:text-gray-200">Description</legend>
                <textarea class="outline-none w-full bg-transparent focus:outline-none" rows="3" columns="5"
                    placeholder="What's the cool idea behind this stuff?" ref="description">{{ this.work.description
                    }}</textarea>
            </fieldset>

            <fieldset class="border-2 p-1 border-gray-800 dark:border-gray-200">
                <legend class="text-xs text-gray-800 dark:text-gray-200">Tags</legend>
                <textarea class="outline-none w-full bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none"
                    rows="3" columns="5" placeholder="Tags (separated by commas)"
                    ref="tags">{{ this.work.tags }}</textarea>
            </fieldset>

            <RippleButton @click="submit" :buttonText="'Save changes'" type="button"
                class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-twe-ripple-init data-twe-ripple-color="light" data-twe-modal-dismiss />
        </form>
    </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue"

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {
    name: 'EditworkModal',
    components: {
        Modal
    },
    computed: {
        ...mapStores(useDataStore)
    },
    data() {
        return {
            "work": {},
            "artCategories": [],
            "artCategory": {}
        }
    },
    methods: {
        async getArtCategories() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/art-categories/`
            const categories = await fetch(url)
                .then(response => response.json())

            this.artCategories = categories
        },
        async submit() {
            /** first ensure that if category field was cleared and accidentally
             * left blank, it should be filled with existing category name
             */
            if (this.$refs.categories.value.trim() == '')
                this.$refs.categories.value = this.artCategory.name

            // proceed to process fields
            const title = this.$refs.title.value
            const artCategory = this.artCategories.find(
                category => category.name == this.$refs.categories.value)
            const artCategoryID = artCategory.id
            const tags = this.$refs.tags.value
            const description = this.$refs.description.value

            console.log("title: " + title)
            console.log("category ID: " + artCategoryID)
            console.log("tags: " + tags)

            const workID = this.work.id
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/artwork/${workID}/`

            const headers = {
                'Content-Type': 'application/json',
                'X-CSRFToken': this.$cookies.get('csrftoken')
            }

            const data = JSON.stringify({
                'title': title,
                'category': artCategoryID,
                'description': description,
                'tags': tags
            })

            const requestOptions = {
                method: 'PUT',
                headers: headers,
                body: data,
                credentials: 'include'
            };

            fetch(url, requestOptions)
                .then((response) => {
                    if (response.status < 300) {
                        // const workComponent = document.getElementById("work-" + workID)
                        // refresh page to update the UI after saving changes
                        this.$router.go()

                    }
                })
                .catch((error) => {
                    alert(`Failed to save changes. Perhaps your internet is disconnected.`)
                })
        }
    },
    mounted() {
        // add event listener for when this modal is shown
        const myModalEl = document.getElementById("editWorkModal");
        myModalEl.addEventListener("shown.twe.modal", (e) => {
            this.work = this.dataStore.artwork // 'work' renamed to 'artwork' in ArtDetail/dataStore
            this.artCategory = this.artCategories.find(
                category => category.id == this.work.category)
            console.log("EditworkModal initialized")
        });

        // add event listener for when this modal is dismissed
        myModalEl.addEventListener("hidden.twe.modal", (e) => {
            this.work = {}
            console.log("EditworkModal dismissed")
        });


        this.getArtCategories()
    }
}
</script>