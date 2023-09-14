<template>
    <!-- deleteProject modal -->
    <Modal :tag="'deleteProjectModal'">
        <!-- content inside deleteProject modal -->
        <div class="space-y-4 pb-10">
            <h3 v-if="this.dataStore.workType == 'projects'" class="text-center">Delete artwork: XYZ to trash?</h3>
            <img class="w-32 aspect-square object-cover mx-auto" src="https://i.imgur.com/40qCewV.jpg" alt="">
            <flex class="flex justify-center gap-10">
                <RippleButton class="w-24 inline" :buttonText="'Cancel'"></RippleButton>
                <RippleButton class="w-24 inline bg-red-600 hover:bg-red-700 text-yellow-300" :buttonText="'Delete'" />
            </flex>
        </div>
    </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue"

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {
    name: 'DeleteprojectModal',
    components: {
        Modal
    },
    computed: {
        ...mapStores(useDataStore)
    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
    }
}
</script>