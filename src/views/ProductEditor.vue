<template>
    <div class="text-gray-800 dark:text-gray-200 mx-16 pb-40">
        <h1 class="text-center mt-5">UPLOAD A DIGITAL PRODUCT</h1>
        <div class="border-gray-500" style="border-top-width: 1px;"></div>
        <h2 CLASS="mt-5 text-center">Product Title</h2>
        <p class="text-center mb-10"><input v-model="title"
                class="w-1/2 bg-transparent px-2 border border-gray-800 dark:border-gray-200 text-center" type="text">
        </p>

        <template v-if="this.productCategories.length > 0">
            <h2 v-if="!this.selectedCategory" class="text-center">Select a product category</h2>
            <div v-else class="text-center">
                <h2>Selected Category:</h2>
                <b>{{ this.selectedCategory.path.slice(1).replaceAll('/', ' -> ') }}</b>
            </div>
            <RecursiveMenu @select-category="setCategory" :categories="this.productCategories" :depth="1" />
        </template>

        <h2 CLASS="mt-10 text-center">Product Description</h2>
        <div class="editor-buttons sticky top-24 text-center z-10 space-x-1 mt-5">
            <!-- <h3 class="block text-center text-gray-700 dark:text-gray-200">Editor</h3> -->
            <!-- <button @click="this.editor.commands.toggleHeading({ level: 1 })"
                class="inline-block rounded-full bg-neutral-800 dark:bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 dark:text-neutral-900 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 dark:hover:bg-neutral-400 hover:shadow-dark-2 focus:bg-neutral-700 dark:focus:bg-neutral-300 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:active:bg-neutral-100 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="button">Heading</button> -->
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
            <!-- <label for="image"
                class="w-16 inline-block rounded-full bg-neutral-800 dark:bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 dark:text-neutral-900 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 dark:hover:bg-neutral-400 hover:shadow-dark-2 focus:bg-neutral-700 dark:focus:bg-neutral-300 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:active:bg-neutral-100 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"><svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z">
                    </path>
                </svg></label>

            <input class="hidden" @change="onSelectImage" type="file" id="image" accept="image/*" ref="imageInput"> -->

        </div>
        <div class="border border-gray-800 dark:border-gray-200">
            <EditorContent :editor="editor" />
        </div>

        <h2 CLASS="mt-5 text-center">Sample Images</h2>
        <div id="filepond" class="mb-48">
            <!-- name MUST be "filepond" for it to be detected by django-drf-filepond -->
            <!-- tag is a custom property and can only be accessed from the component instance using the $attrs attribute -->
            <!-- instead of binding the handleProcessFile method directly to the @processfile event via
              its method name, it is expanded into its inline function form so that a custom argument
              can be passed into it (which is important to process files based on which filepond component
              it is [if there are multiple], as specified by the 'ref' argument). So the third argument
              in handleProcessFile MUST always be the same as the filepond component's ref. -->
            <ThumbnailPond name="filepond" ref="thumbnailPond" class-name="my-pond" label-idle="Add sample images"
                allow-multiple="true" :allowFileTypeValidation="true" accepted-file-types="image/*"
                @files="filepondDefaultFiles" @:init="handleFilePondInit" :server="filepondServerConfig"
                :chunkUploads="true" :chunkSize="1000000" :instantUpload="false"
                @initfile="(file) => handleInitFile(file, 'thumbnailPond')"
                @processfile="(error, file) => handleProcessFile(error, file, 'thumbnailPond')"
                @removefile="(error, file) => handleRemoveFile(error, file, 'thumbnailPond')"
                @processfilestart="handleProcessFileStart" @processfilerevert="handleProcessFileRevert"
                @processfileabort="handleProcessFileAbort" tag="thumbnail" />


            <h2 CLASS="mt-5 text-center">Product Files</h2>
            <FilePond name="filepond" ref="filePond" class-name="my-pond" label-idle="Add product files"
                allow-multiple="true" :allowFileTypeValidation="false" accepted-file-types="[]"
                @files="filepondDefaultFiles" @:init="handleFilePondInit" :server="filepondServerConfig"
                :chunkUploads="true" :chunkSize="1000000" :instantUpload="false"
                @initfile="(file) => handleInitFile(file, 'filePond')"
                @processfile="(error, file) => handleProcessFile(error, file, 'filePond')"
                @removefile="(error, file) => handleRemoveFile(error, file, 'filePond')"
                @processfilestart="handleProcessFileStart" @processfilerevert="handleProcessFileRevert"
                @processfileabort="handleProcessFileAbort" tag="productFile" />

            <h2 v-if="Object.keys(this.productFiles).length" class="text-center">File Licenses</h2>
            <template v-for="(fileData, fileID, index) in this.productFiles" :key="index">
                <div class="mb-5">
                    <!-- Tailwind-Element dropdown for selecting file licenses -->
                    <div class="relative mr-10" data-twe-dropdown-ref>
                        <button
                            class="flex items-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            type="button" id="dropdownMenuButton1" data-twe-dropdown-toggle-ref aria-expanded="false"
                            data-twe-ripple-init data-twe-ripple-color="light">
                            {{ fileData.file.filename }}
                            <span class="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                        <ul class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                            aria-labelledby="dropdownMenuButton1" data-twe-dropdown-menu-ref>
                            <li v-for="(license, index) in this.licenses" :key="index">
                                <a @click="() => { if (!fileData.licenses.includes(license)) fileData.licenses.push(license) }"
                                    class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                    href="JavaScript:void(0)" data-twe-dropdown-item-ref>{{ license.name }} license</a>
                            </li>
                        </ul>
                    </div>
                    <div v-for="(license, index) in fileData.licenses" :key="index"
                        class="mr-3 inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 motion-reduce:transition-none dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                        data-twe-ripple-init>
                        {{ license.name }} <button @click="fileData.licenses.splice(index, 1)"
                            class="relative left-2 text-lg font-thin">X</button>
                    </div>
                </div>
            </template>
            <h2 class="text-center">License Pricing</h2>
            <div class="grid grid-cols-2 mt-5 max-w-96 border-2 border-gray-500 mx-auto">
                <label class="border border-gray-500 mb-3" for="">License Name</label>
                <label class="border border-gray-500 mb-3" for="">Price ($)</label>
                <template v-for="(license, index) in this.selectedLicenses" :key="index">
                    <p>{{ license.name }} license</p>
                    <input v-if="license.free" class="border border-gray-500 dark:text-gray-200 px-1" type="number"
                        value="0" disabled>
                    <input
                        @change="license.price = $event.target.value; console.log('changed to value: ', $event.target.value)"
                        v-else class="border border-gray-500 dark:text-gray-800 px-1" placeholder="price ($)"
                        type="number">
                </template>
            </div>

            <h2 class="text-center mt-10">Preview</h2>
            <div v-for="(license, index) in this.selectedLicenses" :key="index" class="mt-5 border border-gray-500">
                <p><b>{{ license.name }} license (${{ license.price ? license.price : 0 }})</b></p>
                <p class="mt-3"><b>Files:</b></p>
                <template v-for="(fileData, index) in Object.values(this.productFiles)" :key="index">
                    <p v-if="fileData.licenses.includes(license)" class="space-x-3">
                        <span>{{ fileData.file.filename }}</span>
                        <span>({{ fileData.file.fileType }})</span>
                        <span v-if="fileData.file.fileSize < 1000">({{ fileData.file.fileSize }} bytes)</span>
                        <span v-else-if="fileData.file.fileSize < 1000000">({{ fileData.file.fileSize / 1000 }}
                            kb)</span>
                        <span v-else-if="fileData.file.fileSize < 1000000000">({{ fileData.file.fileSize / 1000000
                            }}
                            mb)</span>
                        <span v-else="fileData.file.fileSize < 1000000000000">({{ fileData.file.fileSize /
                            1000000000
                            }} gb)</span>
                    </p>
                </template>
            </div>

            <!-- <button class="p-4 bg-gray-500 text-gray-100" @click="uploadHandler">Upload All</button> -->
        </div>

        <button @click="submit"
            class="bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800 rounded-full py-3 px-14 mx-auto block mb-28">Submit</button>
    </div>
</template>

<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store


// tiptap
import { Editor, EditorContent } from '@tiptap/vue-3'
// tiptap HTML utility
import { generateJSON } from '@tiptap/core'
import { generateHTML } from '@tiptap/core'
// tiptap extensions
import StarterKit from '@tiptap/starter-kit' // Document, Paragraph, Text, etc
import Image from '@tiptap/extension-image'
import Paragraph from '@tiptap/extension-paragraph'


// FilePond
import vueFilePond from 'vue-filepond';
// Filepond plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';
import FilePondPluginVideoPreview from 'filepond-plugin-video-preview/dist/filepond-plugin-video-preview.esm.js';
// Filepond stylesthis.
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
// Create FilePond component(s)
const ThumbnailPond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);
const FilePond = vueFilePond(FilePondPluginFileValidateType);


import RecursiveMenu from '@/components/RecursiveMenu.vue';

// Tailwind Elements
import {
    Dropdown,
    Ripple,
    initTWE,
} from "tw-elements";

export default {
    name: 'ProductEditor',
    components: {
        Editor,
        EditorContent,
        ThumbnailPond,
        FilePond,

        RecursiveMenu
    },
    data() {
        return {
            title: "",
            productCategories: [],
            licenses: [],
            selectedCategory: null,

            // tiptap
            editor: null,
            contentHTML: "",
            contentJSON: "",
            rawHTML: "", // No CSS

            // filepond
            filepondDefaultFiles: [

            ],
            filepondServerConfig: {
                // url: 'http://localhost:8000',
                process: {
                    url: '/fp/process/',
                    method: 'POST',
                    withCredentials: true,
                    headers: {},
                    timeout: 7000,
                    onload: null,
                    onerror: null,
                    ondata: null,
                },
                patch: {
                    url: '/fp/patch/',
                    method: 'PATCH',
                    withCredentials: true,
                    headers: {},
                    timeout: 7000,
                    onload: null,
                    onerror: null,
                    ondata: null,
                },
                revert: {
                    url: '/fp/revert/',
                    method: 'DELETE',
                    withCredentials: true,
                    headers: {},
                    timeout: 7000,
                    onload: null,
                    onerror: null,
                    ondata: null,
                },
                fetch: '/fp/fetch/',
                load: '/fp/load/',
                restore: '/fp/restore/',
            },
            productFiles: {
                /** initial placeholder to allow TWE to properly initialize 
                 * the file licenses drowdown. It is later reset to {} in mounted() */
                'fileID': {
                    'file': Object,
                    'tag': null,
                    'licenses': []
                }
            }
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
        async submit() {
            // EDITOR VALIDATION

            // check if product description is empty
            if (this.contentJSON['content'] == undefined) {
                alert("You must add a product description!")
                return
            }

            // get the raw html without any css
            const html = this.rawHTML

            alert('Title: ' + this.title + '\nContent: ' + html)

            return


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
        },
        async fetchProductCategories() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/resources/categories/`

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    this.productCategories = JSON.parse(data['product_categories'])
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
        setCategory(category) {
            this.selectedCategory = category
        },
        async fetchLicenses() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/resources/licenses/`

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    this.licenses = data
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },


        // tiptap
        initializeTiptapEditor() {
            this.editor = new Editor({
                // register extensions
                extensions: [
                    StarterKit.configure({
                        paragraph: false,
                    }),
                    Image.configure({
                        HTMLAttributes: {
                            class: 'mx-auto',
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

        // filepond
        handleFilePondInit: function () {
            console.log('FilePond has initialized');

            // example of instance method call on pond reference
            this.$refs.pond.getFiles();
        },
        handleInitFile(file, ref) {
            // execute these immediately file is selected

            const filepondElement = this.$refs[ref]
            const fileTag = filepondElement.$attrs.tag

            if (fileTag == 'productFile') {
                this.productFiles[file.id] = {
                    /** include as much information (filename etc) of the file 
                     * as would be needed, as I found issues while trying to 
                     * later update the file variable in this.productFiles
                     */
                    'file': {
                        'id': file.id,
                        'filename': file.filename,
                        'fileType': file.fileType,
                        'fileSize': file.fileSize,
                        'fileExtension': file.fileExtension
                    },
                    'tag': fileTag,
                    'licenses': []
                }
            }
            console.clear()
            console.log("file:")
            console.log(file)
            console.log(file.file)
        },
        handleProcessFile(error, file, ref) {
            // execute these after file upload (ref is a custom arg)

            if (error) {
                console.error("File upload error:", error);
                return;
            }

            // get the filepond element via its ref
            const filepondElement = this.$refs[ref]
            const fileTag = filepondElement.$attrs.tag

            // Access the server's response containing the file ID
            console.log("Temporary Uploaded file ID:", file.id);
            console.log("Temporary Uploaded file server ID:", file.serverId);
            console.log("Temporary Uploaded file tag:", filepondElement.$attrs.tag);
            console.log("File name:", file.filename)
            console.log("ref: ", ref)

            if (fileTag == 'productFile') {
                this.productFiles[file.id]['file'] = file
            }
        },
        handleProcessFileStart(file) {
            // execute at beginning of file upload

            console.log("Started uploading file with ID:", file.id);
        },
        handleProcessFileRevert(file) {
            // execute when user deletes uploaded temporary file from server

            console.log(`Reverted temporary upload with ID: ${file.id} and serverID: ${file.serverId}`);
        },
        handleProcessFileAbort(file) {
            // execute when user interrupts the file upload

            console.log("Aborted upload with file ID:", file.id);
        },
        handleRemoveFile(error, file, ref) {
            // execute when user removes the file from selection
            const filepondElement = this.$refs[ref]
            const fileTag = filepondElement.$attrs.tag

            if (fileTag == 'productFile') {
                delete this.productFiles[file.id]
            }
        },
        uploadHandler() {
            // this method causes all un-uploaded files to be uploaded
            this.$refs.thumbnailPond.processFiles().then((files) => {
                // files have been processed
                console.log("Uploaded all files. Files:")
                console.log(files)
            });
        }
    },
    computed: {
        ...mapStores(useDataStore),
        selectedLicenses() {
            /** returns an array of unique licenses of all the selected products */
            let combinedSelectedLicenses = []
            Object.values(this.productFiles).forEach(
                (fileData) => {
                    combinedSelectedLicenses.push(...fileData.licenses)
                }
            )
            let uniqueSelectedLicenses = new Set(combinedSelectedLicenses)
            return Array.from(uniqueSelectedLicenses)
        },
        // selectedLicensesWithFiles() {
        //     /** returns an array of unique licenses of all the selected products,
        //      * each with the files bearing the license
        //      */
        //     return this.selectedLicenses
        // }
    },
    mounted() {
        initTWE({ Dropdown, Ripple });

        /** reset back to empty after initializing TWE. This is because certain
         * UI (file licences drowdown) fails to initialize if productFiles is {} initially, so the
         * workaround was to put an initial value in it and then reset the 
         * productFiles object after initializing TWE.
         */
        this.productFiles = {}

        // editor
        this.initializeTiptapEditor()

        this.fetchProductCategories()
        this.fetchLicenses()
    },
    beforeUnmount() {
        this.editor.destroy()
    },
}

</script>