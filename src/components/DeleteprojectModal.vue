<template>
    <!-- deleteProject modal -->
    <Modal :tag="'deleteProjectModal'">
        <!-- content inside deleteProject modal -->
        <div class="space-y-4 p-10">
            <h3 class="text-center">Delete artwork:
                <b>"{{ this.dataStore.work.title }}"</b> to trash?
            </h3>
            <img class="w-32 aspect-square object-cover mx-auto" :src="this.dataStore.work.thumbnail" alt="">
            <flex class="flex justify-center gap-10">
                <RippleButton data-te-modal-dismiss class="w-24 inline" :buttonText="'Cancel'"></RippleButton>
                <RippleButton data-te-modal-dismiss class="w-24 inline bg-red-600 hover:bg-red-700 text-yellow-300"
                    :buttonText="'Delete'" />
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