<!-- A working example of vue-filepond in Vue3. Used side by side with the 
 django-drf-filepond package at the django backend -->

<template>
    <div id="filepond" class="mb-48">
        <!-- name MUST be "filepond" for it to be detected by django-drf-filepond -->
        <!-- tag is a custom property and can only be accessed from the component instance using the $attrs attribute -->
        <!-- FileMetadata usage is only possible by the FilePondPluginFileMetadata plugin
         WARNING: FileMetadata causes uploads to fail when chunkUploads=true and filesize >= chunkSize, and
         for this reason I have chosen NOT to use it, but use a custom property with $attrs -->
        <file-pond name="filepond" ref="pond" class-name="my-pond" label-idle="Drop files here..." allow-multiple="true"
            :allowFileTypeValidation="true" accepted-file-types="image/*, video/*" v-bind:files="filepondDefaultFiles"
            @:init="handleFilePondInit" :server="filepondServerConfig" :chunkUploads="true" :chunkSize="1000000"
            :instantUpload="false" @processfile="handleProcessFile" @processfilestart="handleProcessFileStart"
            @processfilerevert="handleProcessFileRevert" @processfileabort="handleProcessFileAbort" tag="thumbnail" />

        <button class="p-4 bg-gray-500 text-gray-100" @click="uploadHandler">Upload All</button>
    </div>
</template>

<script>
// Import FilePond (for creating a FilePond component)
import vueFilePond from 'vue-filepond';

// Import plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';
import FilePondPluginVideoPreview from 'filepond-plugin-video-preview/dist/filepond-plugin-video-preview.esm.js';
import FilePondPluginFileMetadata from 'filepond-plugin-file-metadata';

// Import styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Create FilePond component
const FilePond = vueFilePond(FilePondPluginFileValidateType);

export default {
    name: 'filepond',
    data: function () {
        return {
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
            }
        };
    },
    methods: {
        handleFilePondInit: function () {
            console.log('FilePond has initialized');

            // example of instance method call on pond reference
            this.$refs.pond.getFiles();
        },
        handleProcessFile(error, file) {
            // execute these after file upload

            if (error) {
                console.error("File upload error:", error);
                return;
            }
            const filepondElement = this.$refs.pond

            // Access the server's response containing the file ID
            console.log("Temporary Uploaded file ID:", file.id);
            console.log("Temporary Uploaded file server ID:", file.serverId);
            console.log("Temporary Uploaded file tag:", filepondElement.$attrs.tag);
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
        uploadHandler() {
            // this method causes all un-uploaded files to be uploaded
            this.$refs.pond.processFiles().then((files) => {
                // files have been processed
                console.log("Uploaded all files. Files:")
                console.log(files)
            });
        }
    },
    components: {
        FilePond,
    },
    mounted() {

    }
};
</script>