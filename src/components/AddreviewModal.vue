<template>
    <Modal :tag="'addReviewModal'" ref="addreviewModal">
        <!-- content inside addReview modal -->
        <form class="flex flex-col gap-5 mb-3 p-10 text-gray-700 dark:text-gray-300" enctype="multipart/form-data">
            <h3 class="text-gray-700 dark:text-gray-300">Upload new Review</h3>

            <input
                class="relative outline outline-gray-300 outline-2 dark:text-gray-200 m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-gray-800 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-gray-800 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:shadow-te-primary dark:border-neutral-600 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="text" id="title" placeholder="Title" ref="title" />

            <div v-if="this.artCategories.length">
                <input @click="this.$refs.categories.value = ''" class="outline outline-gray-300 outline-2" type="text"
                    list="sub-topics" id="categories" placeholder="Category" ref="categories" />
                <datalist id="sub-topics">
                    <template v-for="category in this.artCategories">
                        <option :value="category.name"></option>
                    </template>
                </datalist>
            </div>

            <textarea class="outline outline-gray-300 outline-2" rows="3" columns="5" placeholder="Review text"
                ref="content"></textarea>

            <p>Rating: {{ this.rating }}</p>

            <input v-model="this.rating" class="w-full" type="range" id="rating-slider" min="0" max="5" step="0.5"
                value="0" name="temp" list="values" />
            <datalist id="values" class="flex flex-row justify-between w-full">
                <option v-for="i in 11" :value="(i - 1) / 2" :label="(i - 1) / 2" :key="i"></option>
            </datalist>

            <textarea class="outline outline-gray-300 outline-2" rows="3" columns="5"
                placeholder="Tags (separated by commas)" ref="tags"></textarea>

            <label for="formFile1" class="text-gray-700 dark:text-gray-300 outline outline-1 p-0.5">{{
                captionMediaLabel
            }}</label>

            <input @change="onSelectCaptionMedia"
                class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-gray-800 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-gray-800 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-gray-800 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                style="display: none" type="file" id="formFile1" accept="image/*" ref="fileInput" />

            <label for="formFile2" class="text-gray-700 dark:text-gray-300 outline outline-1 p-0.5">{{
                bodyMediaLabel
            }}</label>

            <input @change="onSelectBodyMedia"
                class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-gray-800 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-gray-800 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-gray-800 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                style="display: none" type="file" id="formFile2" accept="image/*,video/*" ref="fileInput2" />

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
    name: 'AddreviewModal',
    components: {
        Modal
    },
    data() {
        return {
            'artCategories': [],
            'errorMessage': '',
            'captionMediaLabel': '',
            'bodyMediaLabel': '',
            'defaultCaptionMediaLabel': 'Select Caption Image*',
            'defaultBodyMediaLabel': 'Select Body Image/Video (optional)',
            'rating': 0
        }
    },
    computed: {
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
            const artCategory = this.artCategories.find(
                category => category.name == this.$refs.categories.value)
            const artCategoryID = artCategory.id
            const content = this.$refs.content.value
            const tags = this.$refs.tags.value
            const captionMediaFile = this.$refs.fileInput.files[0]
            let bodyMediaFile = null
            if (this.$refs.fileInput2.files.length > 0)
                bodyMediaFile = this.$refs.fileInput2.files[0]

            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/reviews/`

            const headers = {
                'X-CSRFToken': this.$cookies.get('csrftoken')
            }

            const formData = new FormData()
            formData.append('title', title)
            formData.append('category', artCategoryID)
            formData.append('content', content)
            formData.append('tags', tags)
            formData.append('rating', this.rating)

            // assign the media file types based on the file extensions
            let caption_file_type = ""
            let body_file_type = ""
            const imageExtensions = ['jpg', 'jpeg', 'png', 'bmp']
            const videoExtensions = ['mp4', 'mov', 'avi']

            const caption_file_extension = captionMediaFile.name.split('.').slice('-1')[0]
            console.log(`Caption file extension: ${caption_file_extension}`)
            if (imageExtensions.includes(caption_file_extension))
                caption_file_type = 'image'
            else if (videoExtensions.includes(caption_file_extension))
                caption_file_type = 'video'

            if (bodyMediaFile) {
                const body_file_extension = bodyMediaFile.name.split('.').slice('-1')[0]
                console.log(`Body file extension: ${body_file_extension}`)
                if (imageExtensions.includes(body_file_extension))
                    body_file_type = 'image'
                else if (videoExtensions.includes(body_file_extension))
                    body_file_type = 'video'
                else
                    body_file_type = null
            }

            // console.log(`Caption file type: ${caption_file_type}`)
            // console.log(`Body file type: ${body_file_type}`)
            // console.log(imageExtensions)
            // console.log(caption_file_extension)
            // console.log(imageExtensions.includes(caption_file_extension))

            // append the files and file types            
            formData.append('caption_file_type', caption_file_type)
            formData.append('caption_file', captionMediaFile)

            formData.append('body_file_type', body_file_type)
            if (bodyMediaFile)
                formData.append('body_file', bodyMediaFile)


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
                        /** clear form inputs after successful submission
                         * 
                         * (form.clear() could be used by selecting any child
                         * of the form and doing <child.form.clear()>, and this
                         * would make things straightforward. However, it would
                         * also clear any event listners that could have been
                         * attached to the form) */
                        this.$refs.title.value = ""
                        this.$refs.categories.value = null
                        this.$refs.content.value = ""
                        this.$refs.tags.value = ""
                        this.$refs.fileInput = null
                        this.$refs.fileInput2 = null
                        this.captionMediaLabel = this.defaultCaptionMediaLabel
                        this.bodyMediaLabel = this.defaultBodyMediaLabel

                        setTimeout(() => {
                            alert("Review uploaded successfully")
                        }, 1500)
                        this.$refs.addreviewModal.close()
                    }
                    else
                        this.errorMessage = 'fill in the fields and try again'
                })
                .catch(error => this.errorMessage = error)
        },
        onSelectCaptionMedia() {
            let captionMediaFile = null
            if (this.$refs.fileInput != undefined && this.$refs.fileInput.files.length > 0) {
                captionMediaFile = this.$refs.fileInput.files[0]
                this.captionMediaLabel = captionMediaFile.name
            }
            else
                this.captionMediaLabel = this.defaultCaptionMediaLabel
        },
        onSelectBodyMedia() {
            let bodyMediaFile = null
            if (this.$refs.fileInput2.files.length > 0) {
                bodyMediaFile = this.$refs.fileInput2.files[0]
                this.bodyMediaLabel = bodyMediaFile.name
            }
            else
                this.bodyMediaLabel = this.defaultBodyMediaLabel
        }
    },
    mounted() {
        this.captionMediaLabel = this.defaultCaptionMediaLabel
        this.bodyMediaLabel = this.defaultBodyMediaLabel
        this.getArtCategories()
    }
}
</script>