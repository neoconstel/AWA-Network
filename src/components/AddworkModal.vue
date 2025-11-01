<template>
    <Modal :tag="'addWorkModal'" ref="addworkModal">
        <!-- content inside addWork modal -->
        <form class="flex flex-col gap-5 mb-3 p-10">
            <h3 class="text-gray-700 dark:text-gray-300">Upload new Artwork</h3>

            <input
                class="relative text-gray-800 dark:text-gray-200 m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-gray-800 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-gray-800 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="text" id="title" placeholder="Title" ref="title" />

            <div v-if="this.artCategories.length">
                <!-- <input class="text-gray-800 dark:text-gray-200  outline-gray-300 outline-none outline-2" type="text"
                    list="sub-topics" id="categories" placeholder="Category" ref="categories" />
                <datalist id="sub-topics">
                    <template v-for="category in this.artCategories">
                        <option :value="category.name"></option>
                    </template>
</datalist> -->

                <v-autocomplete v-model="selectedCategoryName" class="text-gray-800 dark:text-gray-200" clearable
                    label="Category" id="categories" ref="categories"
                    :items="this.artCategories.map(option => option.name)"></v-autocomplete>
            </div>


            <textarea class="text-gray-800 dark:text-gray-200 outline-gray-300 outline-none outline-2" rows="3"
                columns="5" placeholder="Describe the cool idea behind this stuff" ref="description"></textarea>

            <textarea class="text-gray-800 dark:text-gray-200 outline-gray-300 outline-none outline-2" rows="3"
                columns="5" placeholder="Tags (separated by commas)" ref="tags"></textarea>

            <input
                class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-gray-800 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-gray-800 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-gray-800 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file" id="formFile" accept="image/*" ref="fileInput" />

            <RippleButton @click="submit" :buttonText="'Upload'" type="button"
                class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-twe-ripple-init data-twe-ripple-color="light" />
        </form>
        <p class="text-red-600 bg-yellow-300">
            {{ this.errorMessage }}</p>
    </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue"

export default {
    name: 'AddworkModal',
    components: {
        Modal
    },
    data() {
        return {
            'artCategories': [],
            'errorMessage': '',
            'selectedCategoryName': null
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
            const title = this.$refs.title.value
            // const artCategory = this.artCategories.find(
            //     category => category.name == this.$refs.categories.value) // depreciated (using v-autocomplete now)
            const artCategory = this.artCategories.find(category => category.name == this.selectedCategoryName)
            const artCategoryID = artCategory.id
            const description = this.$refs.description.value
            const tags = this.$refs.tags.value
            const file = this.$refs.fileInput.files[0]

            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/artworks/`

            const headers = {
                'X-CSRFToken': this.$cookies.get('csrftoken')
            }

            const formData = new FormData()
            formData.append('title', title)
            formData.append('category', artCategoryID)
            formData.append('description', description)
            formData.append('tags', tags)
            formData.append('file_type', 'image') // TODO: set this from the form
            formData.append('file', file)


            const requestOptions = {
                method: 'POST',
                headers: headers,
                body: formData,
                credentials: 'include',
                redirect: 'follow'
            };

            fetch(url, requestOptions)
                .then((response) => {
                    if (response.status < 300) {
                        // clear form inputs on successful submission
                        this.$refs.title.value = ""
                        this.$refs.categories.value = ""
                        this.$refs.description.value = ""
                        this.$refs.tags.value = ""
                        this.$refs.fileInput.value = ""


                        setTimeout(() => {
                            alert("New artwork uploaded successfully")
                        }, 1500)
                        this.$refs.addworkModal.close()
                    }
                    else
                        this.errorMessage = 'fill in the fields and try again'
                })
                .catch(error => this.errorMessage = error)
        }
    },
    mounted() {
        this.getArtCategories()
    }
}
</script>