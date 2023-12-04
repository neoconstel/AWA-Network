<template>
    <Modal :tag="'editWorkModal'">
        <!-- content inside editWork modal -->
        <form class="flex flex-col gap-5 mb-3 p-10 text-gray-700">
            <h3 class="">Edit Artwork</h3>

            <fieldset class="border-2 p-1">
                <legend class="text-xs">Title</legend>
                <input class="outline-none w-full focus:outline-none" type="text" id="title" placeholder=""
                    :value="this.work.title" />
            </fieldset>

            <div>
                <fieldset class="border-2 p-1">
                    <legend class="text-xs">Categories</legend>
                    <input class="outline-none w-full focus:outline-none" type="text" list="sub-topics" id="categories"
                        placeholder="" value="Character Art" />
                </fieldset>
                <datalist id="sub-topics">
                    <option value="Character Art"></option>
                    <option value="Buildings"></option>
                    <option value="Worlds"></option>
                    <option value="Objects"></option>
                </datalist>
            </div>

            <fieldset class="border-2 p-1">
                <legend class="text-xs">Tags</legend>
                <textarea class="outline-none w-full focus:outline-none" rows="5" columns="5"
                    placeholder="">Modelling, 3D printing, VR</textarea>
            </fieldset>

            <RippleButton :buttonText="'Save changes'" type="button"
                class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init data-te-ripple-color="light" data-te-modal-dismiss />
        </form>
    </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue"

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {
    name: 'EditworkModal',
    components: {
        Modal
    },
    computed: {
        ...mapStores(useDataStore)
    },
    data() {
        return {
            "work": {}
        }
    },
    methods: {

    },
    mounted() {
        // add event listener for when this modal is shown
        const myModalEl = document.getElementById("editWorkModal");
        myModalEl.addEventListener("shown.te.modal", (e) => {
            this.work = this.dataStore.work
            console.log("EditworkModal initialized")
        });

        // add event listener for when this modal is dismissed
        myModalEl.addEventListener("hidden.te.modal", (e) => {
            this.work = {}
            console.log("EditworkModal dismissed")
        });
    }
}
</script>