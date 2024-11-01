<template>
    <div v-if="editor">
        <section class="editor-buttons sticky top-24 text-center z-10">
            <button class="bg-orange-600 text-gray-300 p-5 mr-2"
                @click="this.editor.chain().focus().toggleBold().run()">Toggle
                Bold</button>
            <button class="bg-orange-600 text-gray-300 p-5 mr-2"
                @click="this.editor.chain().focus().undo().run()">Undo</button>
            <button class="bg-orange-600 text-gray-300 p-5 mr-2"
                @click="this.editor.chain().focus().redo().run()">Redo</button>
            <button class="bg-orange-600 text-gray-300 p-5 mr-2"
                @click="this.editor.chain().focus().setParagraph().run()">Paragraph</button>
            <button class="bg-orange-600 text-gray-300 p-5 mr-2"
                @click="this.editor.commands.setHorizontalRule()">Horizontal
                Rule</button>
            <button class="bg-orange-600 text-gray-300 p-5 mr-2"
                @click="this.editor.chain().focus().setImage({ title: 'image testing', src: 'https://magazine.artstation.com/wp-content/uploads/2024/09/TWW_ArtBlast_Thumbnail-1280-x-720.jpg?resize=1024,576', alt: '' }).run()">Image</button>
            <!-- <button class="bg-orange-600 text-gray-300 p-5 mr-2" @click="">Browse Image</button> -->
            <form enctype="multipart/form-data">
                <input @change="onSelectImage" type="file" accept="image/*" ref="imageInput">
            </form>
        </section>

        <hr class="my-5">

        <EditorContent :editor="editor" class="bg-gray-300 mb-32 relative top-10" />
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

export default {
    name: 'MagazineEditor',
    components: {
        Editor,
        EditorContent
    },
    data() {
        return {
            editor: null,
        }
    },
    methods: {
        initializeTiptapEditor() {
            this.editor = new Editor({
                // register extensions
                extensions: [StarterKit, Image.configure({
                    HTMLAttributes: {
                        class: 'w-52 py-3 mx-auto',
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
                content: "",
                onUpdate: () => {
                    // HTML
                    // this.$emit('update:modelValue', this.editor.getHTML())

                    // JSON
                    this.$emit('update:modelValue', this.editor.getJSON())
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
