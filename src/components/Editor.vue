<!-- this Editor is based on Tiptap -->

<template>
    <editor-content :editor="editor" />
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'

// tiptap extensions
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

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
            // register extensions
            extensions: [Document, Paragraph, Text],
            // place the cursor in the editor after initialization
            autofocus: true,
            // make the text editable (but that’s the default anyway)
            editable: true,
            // disable the loading of the default CSS (which is not much anyway)
            injectCSS: false,
            // set the initial content
            content: "<p>The Document extension is required. Though, you can write your own implementation, e. g. to give it custom name.</p>",
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