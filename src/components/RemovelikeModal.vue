<template>
    <!-- removeLike modal -->
    <Modal :tag="'removeLikeModal'">
        <!-- content inside removeLike modal -->
        <div v-if="this.work.id" class="space-y-4 p-10">
            <h3 class="text-center text-gray-800 dark:text-gray-200">Unlike artwork:
                <b>"{{ this.work.title }}"</b>?
            </h3>
            <img class="w-32 aspect-square object-cover mx-auto" :src="this.work.file_url" alt="">
            <flex class="flex justify-center gap-10">
                <RippleButton data-twe-modal-dismiss class="w-24 inline" :buttonText="'Cancel'"></RippleButton>
                <RippleButton @click="removeLike" data-twe-modal-dismiss
                    class="w-24 inline bg-red-600 hover:bg-red-700 text-yellow-300" :buttonText="'Unlike'" />
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
    name: 'RemovelikeModal',
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
        removeLike() {
            const workID = this.work.id
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api//react/remove/like/artwork/${workID}/`

            const headers = {
                'Content-Type': 'application/json',
                'X-CSRFToken': this.$cookies.get('csrftoken')
            }

            const requestOptions = {
                method: 'POST',
                headers: headers,
                credentials: 'include'
            };

            fetch(url, requestOptions)
                .then((response) => {
                    if (response.status < 300) {
                        // Remove the related work component if on screen
                        const workComponent = document.getElementById("work-" + workID)
                        if (workComponent)
                            workComponent.parentElement.remove()
                        // else we are be in work detail view, so go to home
                        else
                            this.$router.push('/')
                    }
                })
                .catch((error) => {
                    alert(`Failed to unlike artwork. Perhaps your internet is disconnected.`)
                })
        }
    },
    mounted() {
        // add event listener for when this modal is shown
        const myModalEl = document.getElementById("removeLikeModal");
        myModalEl.addEventListener("shown.twe.modal", (e) => {
            this.work = this.dataStore.work
            console.log("RemovelikeModal initialized")
        });

        // add event listener for when this modal is dismissed
        myModalEl.addEventListener("hidden.twe.modal", (e) => {
            this.work = {}
            console.log("RemovelikeModal dismissed")
        });
    }
}
</script>
