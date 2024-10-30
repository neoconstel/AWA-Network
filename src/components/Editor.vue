<!-- this Editor is based on Tiptap -->

<template>
    <button class="bg-orange-600 text-gray-300 p-5 mr-2" @click="this.editor.chain().focus().toggleBold().run()">Toggle
        Bold</button>
    <button class="bg-orange-600 text-gray-300 p-5 mr-2" @click="this.editor.chain().focus().undo().run()">Undo</button>
    <button class="bg-orange-600 text-gray-300 p-5 mr-2" @click="this.editor.chain().focus().redo().run()">Redo</button>
    <hr class="my-5">

    <editor-content :editor="editor" class="element" />
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'

// tiptap extensions
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import History from '@tiptap/extension-history'

export default {
    components: {
        EditorContent,
    },

    data() {
        return {
            editor: null,
        }
    },

    watch: {
        modelValue(value) {
            // HTML
            const isSame = this.editor.getHTML() === value

            // JSON
            // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

            if (isSame) {
                return
            }

            this.editor.commands.setContent(value, false)
        },
    },

    mounted() {
        this.editor = new Editor({
            element: document.querySelector('.element'),
            // register extensions
            extensions: [Document, Paragraph, Text, Bold, History],
            // place the cursor in the editor after initialization
            autofocus: true,
            // make the text editable (but that’s the default anyway)
            editable: true,
            // disable the loading of the default CSS (which is not much anyway)
            injectCSS: false,
            // set the initial content
            content: "<p>The Document extension is required. Though, you can write your own implementation, e. g. to give it custom name. Now <b>BOLDLY</b> elaborate all these.</p>",
            onUpdate: () => {
                // HTML
                // this.$emit('update:modelValue', this.editor.getHTML())

                // JSON
                this.$emit('update:modelValue', this.editor.getJSON())
            },
        })

    },

    beforeUnmount() {
        this.editor.destroy()
    },
}
</script>

<style>
.tiptap {
    background-color: green;
    color: yellow;
}
</style>