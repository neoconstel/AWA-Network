<template>
    <section v-if="editor" class="mx-16">
        <div class="categories text-center mt-4">
            <h3 class="block text-center text-gray-700 dark:text-gray-200">Categories</h3>
            <!-- class bindings applied to category buttons below -->
            <button v-for="(value, key, index) in categories" @click="this.categories[key] = !this.categories[key]"
                class="inline-block rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 motion-reduce:transition-none dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                :class="{
                    'bg-neutral-300 dark:bg-neutral-700  text-neutral-700 dark:text-neutral-300': !this.categories[key],
                    'bg-neutral-800 dark:bg-neutral-200  text-neutral-50 dark:text-neutral-900  hover:bg-neutral-700 dark:hover:bg-neutral-400  focus:bg-neutral-700 dark:focus:bg-neutral-300  active:bg-neutral-900 dark:active:bg-neutral-100  dark:shadow-black/30 ': this.categories[key]
                }" type="button" :key="index">{{ key }}</button>
        </div>

        <div class="editor-buttons sticky top-24 text-center z-10 space-x-1 mt-10">
            <h3 class="block text-center text-gray-700 dark:text-gray-200">Editor</h3>
            <button @click="this.editor.commands.toggleHeading({ level: 1 })"
                class="inline-block rounded-full bg-neutral-800 dark:bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 dark:text-neutral-900 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 dark:hover:bg-neutral-400 hover:shadow-dark-2 focus:bg-neutral-700 dark:focus:bg-neutral-300 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:active:bg-neutral-100 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="button">Heading</button>
            <button @click="this.editor.commands.toggleHeading({ level: 2 })"
                class="inline-block rounded-full bg-neutral-800 dark:bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 dark:text-neutral-900 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 dark:hover:bg-neutral-400 hover:shadow-dark-2 focus:bg-neutral-700 dark:focus:bg-neutral-300 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:active:bg-neutral-100 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="button">H2</button>
            <button @click="this.editor.commands.toggleHeading({ level: 3 })"
                class="inline-block rounded-full bg-neutral-800 dark:bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 dark:text-neutral-900 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 dark:hover:bg-neutral-400 hover:shadow-dark-2 focus:bg-neutral-700 dark:focus:bg-neutral-300 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:active:bg-neutral-100 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="button">H3</button>
            <button
                class="inline-block rounded-full bg-neutral-800 dark:bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 dark:text-neutral-900 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 dark:hover:bg-neutral-400 hover:shadow-dark-2 focus:bg-neutral-700 dark:focus:bg-neutral-300 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:active:bg-neutral-100 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                @click="this.editor.chain().focus().toggleBold().run()">B</button>
            <button
                class="w-16 inline-block rounded-full bg-neutral-800 dark:bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 dark:text-neutral-900 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 dark:hover:bg-neutral-400 hover:shadow-dark-2 focus:bg-neutral-700 dark:focus:bg-neutral-300 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:active:bg-neutral-100 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                @click="this.editor.chain().focus().undo().run()"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M5.82843 6.99955L8.36396 9.53509L6.94975 10.9493L2 5.99955L6.94975 1.0498L8.36396 2.46402L5.82843 4.99955H13C17.4183 4.99955 21 8.58127 21 12.9996C21 17.4178 17.4183 20.9996 13 20.9996H4V18.9996H13C16.3137 18.9996 19 16.3133 19 12.9996C19 9.68584 16.3137 6.99955 13 6.99955H5.82843Z">
                    </path>
                </svg></button>
            <button
                class="w-16 inline-block rounded-full bg-neutral-800 dark:bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 dark:text-neutral-900 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 dark:hover:bg-neutral-400 hover:shadow-dark-2 focus:bg-neutral-700 dark:focus:bg-neutral-300 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:active:bg-neutral-100 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                @click="this.editor.chain().focus().redo().run()"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M18.1716 6.99955H11C7.68629 6.99955 5 9.68584 5 12.9996C5 16.3133 7.68629 18.9996 11 18.9996H20V20.9996H11C6.58172 20.9996 3 17.4178 3 12.9996C3 8.58127 6.58172 4.99955 11 4.99955H18.1716L15.636 2.46402L17.0503 1.0498L22 5.99955L17.0503 10.9493L15.636 9.53509L18.1716 6.99955Z">
                    </path>
                </svg></button>
            <button
                class="inline-block rounded-full bg-neutral-800 dark:bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 dark:text-neutral-900 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 dark:hover:bg-neutral-400 hover:shadow-dark-2 focus:bg-neutral-700 dark:focus:bg-neutral-300 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:active:bg-neutral-100 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                @click="this.editor.chain().focus().setParagraph().run()">Paragraph</button>
            <button
                class="inline-block rounded-full bg-neutral-800 dark:bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 dark:text-neutral-900 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 dark:hover:bg-neutral-400 hover:shadow-dark-2 focus:bg-neutral-700 dark:focus:bg-neutral-300 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:active:bg-neutral-100 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                @click="this.editor.commands.setHorizontalRule()">Horizontal
                Rule</button>
            <!-- <button
                class="inline-block rounded-full bg-neutral-800 dark:bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 dark:text-neutral-900 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 dark:hover:bg-neutral-400 hover:shadow-dark-2 focus:bg-neutral-700 dark:focus:bg-neutral-300 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:active:bg-neutral-100 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                @click="this.editor.chain().focus().setImage({ title: 'image testing', src: 'https://magazine.artstation.com/wp-content/uploads/2024/09/TWW_ArtBlast_Thumbnail-1280-x-720.jpg?resize=1024,576', alt: '' }).run()">Image</button> -->
            <label for="image"
                class="w-16 inline-block rounded-full bg-neutral-800 dark:bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 dark:text-neutral-900 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 dark:hover:bg-neutral-400 hover:shadow-dark-2 focus:bg-neutral-700 dark:focus:bg-neutral-300 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:active:bg-neutral-100 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"><svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z">
                    </path>
                </svg></label>

            <input class="hidden" @change="onSelectImage" type="file" id="image" accept="image/*" ref="imageInput">

        </div>

        <hr class="my-5">

        <EditorContent :editor="editor"
            class="bg-gray-300 text-gray-800 dark:bg-gray-400 dark:text-gray-200 relative top-10 text-center mb-12" />

        <div class="text-center">
            <input
                class="outline-double outline-2 outline-gray-500 w-1/3 my-5 bg-transparent px-1 text-gray-800 dark:text-gray-200 py-1"
                type="text" placeholder="Tags" ref="tags">
        </div>

        <button @click="submit"
            class="bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800 rounded-full py-3 px-14 mx-auto block mb-5">Submit</button>
    </section>

    <h2 class="dark:text-gray-200">Editor content as HTML and JSON</h2>
    <div class="output pb-40 dark:text-gray-200">
        {{ contentHTML }}
        <br><br><br>
        {{ contentJSON }}
        <br>
        <hr>
        <br>
        <h2>Raw HTML without CSS</h2>
        {{ this.rawHTML }}
    </div>

</template>

<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

// tiptap
import { Editor, EditorContent } from '@tiptap/vue-3'
// tiptap extensions
import StarterKit from '@tiptap/starter-kit' // Document, Paragraph, Text, etc
import Image from '@tiptap/extension-image'
import Paragraph from '@tiptap/extension-paragraph'

// HTML utility
import { generateJSON } from '@tiptap/core'
import { generateHTML } from '@tiptap/core'
import { categories } from '@vueuse/core/metadata.cjs';

export default {
    name: 'MagazineEditor',
    components: {
        Editor,
        EditorContent
    },
    data() {
        return {
            editor: null,
            categories: {
                'Art Skills': false,
                'Career': false,
                'Inspiration': false,
                'News': false,
                'Ads': false,
                'Challenges': false,
                'Updates': false
            },
            contentHTML: "",
            contentJSON: "",
            rawHTML: "", // No CSS
        }
    },
    watch: {
        'contentJSON': {
            immediate: false,
            handler(newVal) {
                // generate pure HTML
                this.rawHTML = generateHTML(newVal, [
                    StarterKit.configure({
                        paragraph: false,
                    }),
                    Image,
                    Paragraph,
                ])
            }
        }
    },
    methods: {
        initializeTiptapEditor() {
            this.editor = new Editor({
                // register extensions
                extensions: [
                    StarterKit.configure({
                        paragraph: false,
                    }),
                    Image.configure({
                        HTMLAttributes: {
                            class: 'w-52 mx-auto',
                        },
                    }),
                    Paragraph.configure({
                        HTMLAttributes: {
                            class: 'px-10 py-2',
                        },
                    })
                ],
                // place the cursor in the editor after initialization
                autofocus: true,
                // make the text editable (but that’s the default anyway)
                editable: true,
                // disable the loading of the default CSS (which is not much anyway)
                injectCSS: false,
                // set the initial content
                content: ``,
                onUpdate: () => {
                    // HTML
                    this.contentHTML = this.editor.getHTML()

                    // JSON
                    this.contentJSON = this.editor.getJSON()
                },
            })
        },
        async onSelectImage() {
            if (this.$refs.imageInput.files.length == 0)
                return

            // get the File object from the file input
            const imageFile = this.$refs.imageInput.files[0]
            // generate blobUrl from the file object, for use as src
            const blobUrl = URL.createObjectURL(imageFile)
            // add image in tiptap editor, using blobUrl as its src
            this.editor.chain().focus().setImage({
                title: imageFile.name,
                src: blobUrl,
                alt: imageFile.name
            }).run()

            // reset file input
            this.$refs.imageInput.value = null
        },
        async submit() {
            // get the text inside the first H1 element
            const title = this.contentJSON['content'].filter(
                element => element.type == 'heading' && element.attrs.level == 1)[0]
                .content[0].text

            const tags = this.$refs.tags.value
            const categories = Object.entries(this.categories)
                .filter(([key, value]) => value == true)
                .map(arr => arr[0])
                .join()

            // get the raw html without any css
            const html = this.rawHTML


            // NEW IMAGE UPLOADS

            // currently this is for only img elements
            const blobElements = this.contentJSON.content.filter(
                element => element.type == 'image'
                    && element.attrs.src.startsWith('blob:'))

            // an array to map file data entries of the form: {blobUrl:file}
            const fileMappings = []

            // NEVER USE FOREACH (or any other higher-order function) with
            // ASYNC/AWAIT! Use for..of with ASYNC/AWAIT instead!
            for (let element of blobElements) {
                let url = element.attrs.src
                let title = element.attrs.title
                let file = await fetch(url)
                    .then(response => response.blob())
                    .then((blobObject) => {
                        let fileObject = new File([blobObject], title, {
                            type: blobObject.type,
                        });
                        return fileObject
                    })
                fileMappings.push({
                    [url]: file
                })
            }


            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/magazine/articles/`

            const headers = {
                'X-CSRFToken': this.$cookies.get('csrftoken')
            }

            const formData = new FormData()
            formData.append('title', title)
            formData.append('tags', tags)
            formData.append('categories', categories)
            formData.append('html', html)

            // add file mappings each of form: [blobUrl, file]
            for (let mapping of fileMappings) {
                let blobUrl = Object.keys(mapping)[0]
                let file = Object.values(mapping)[0]
                formData.append(blobUrl, file)
            }

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
                        setTimeout(() => {
                            alert("Article uploaded successfully")
                        }, 1500)
                    }
                    else
                        ;
                })
                .catch(error => this.errorMessage = error)
        }
    },
    computed: {
        ...mapStores(useDataStore),
    },
    mounted() {
        // editor
        this.initializeTiptapEditor()


    },
    beforeUnmount() {
        this.editor.destroy()
    },
}

</script>
