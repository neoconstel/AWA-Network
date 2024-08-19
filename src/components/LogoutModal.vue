<template>
    <!-- logout modal -->
    <Modal :tag="'logoutModal'" ref="logoutModal">
        <!-- content inside logout modal -->
        <section class="">
            <div>
                <!-- <span data-twe-modal-dismiss="" class="absolute right-10"><a @click.prevent="" href=""><img
                            src="/static/icons/iconmonstr-x-mark-thin.svg" alt="dismiss_button"></a></span> -->
                <!-- Left column container with background-->
                <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between pb-10">
                    <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="w-full" alt="Sample image" />
                    </div>

                    <!-- Right column container -->
                    <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/8 xl:w-full">
                        <form @submit.prevent="submit">
                            <h3 class="my-3 text-gray-800 dark:text-gray-200">Are you sure you want to logout?</h3>
                            <!-- Logout button -->
                            <div class="text-center lg:text-left">
                                <button type="submit"
                                    class="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-twe-ripple-init data-twe-ripple-color="light">
                                    Yes, Logout
                                </button>
                            </div>
                        </form>
                        <p class="text-red-600 bg-yellow-300">
                            {{ this.errorMessage }}</p>
                    </div>
                </div>
            </div>
        </section>
    </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue"

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {
    name: 'LogoutModal',
    components: {
        Modal
    },
    data() {
        return {
            'success': null,
            'errorMessage': ''
        }
    },
    computed: {
        ...mapStores(useDataStore)
    },
    methods: {
        async submit() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/auth/logout/`

            const headers = {
                'Content-Type': 'application/json',
                'X-CSRFToken': this.$cookies.get('csrftoken')
            }

            const requestOptions = {
                method: 'POST',
                headers: headers,
                credentials: 'include',
                redirect: 'follow'
            };

            fetch(url, requestOptions)
                .then((response) => {
                    if (response.status.toString()[0] == '2')
                        this.success = true
                    else
                        this.success = false

                    return response.json()
                })
                .then((data) => {
                    console.log(data)
                    if (this.success == true) {

                        // clear user data
                        this.dataStore.user = {}

                        // dismiss logout modal automatically
                        this.$refs.logoutModal.close()

                        // // redirect or refresh
                        // if (this.$routwe.name == 'someRouteName')
                        //     // go to logout redirect path
                        //     this.$router.push('/')
                        // else
                        //     // refresh page
                        //     this.$router.go()
                    }
                    else {
                        this.errorMessage = data['error']
                    }
                }
                )
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        }
    },
    mounted() {
    }
}
</script>
