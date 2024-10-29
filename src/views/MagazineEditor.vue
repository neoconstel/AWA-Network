<template>
    <div>
        <editor v-model="content" />

        <div class="output-group">
            <label>Content</label>
            <code>{{ content }}</code>
        </div>
    </div>
</template>

<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store


// tiptap
import Editor from '@/components/Editor.vue'

export default {
    name: 'MagazineEditor',
    components: {
        Editor
    },
    data() {
        return {
            content: '<p>A Vue.js wrapper component for Tiptap to use <code>v-model</code>.</p>',
        }
    },
    computed: {
        ...mapStores(useDataStore),
    },
    methods: {
    },
    mounted() {

    }
}

</script>
