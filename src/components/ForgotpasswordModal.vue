<template>
    <!-- forgotPassword modal -->
    <Modal :tag="'forgotPasswordModal'">
        <!-- content inside forgotPassword modal -->
        <section>
            <div>
                <!-- <span data-te-modal-dismiss="" class="absolute right-10"><a @click.prevent="" href=""><img
                            src="/static/icons/iconmonstr-x-mark-thin.svg" alt="dismiss_button"></a></span> -->
                <!-- Left column container with background-->
                <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between pb-10">
                    <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="w-full" alt="Sample image" />
                    </div>

                    <!-- Right column container -->
                    <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/8 xl:w-full">
                        <form>
                            <!--Sign in section-->
                            <div class="flex flex-row items-center justify-center lg:justify-start">
                                <p class="mb-0 mr-4 text-lg">Forgot Password</p>


                            </div>

                            <!-- Separator -->
                            <div
                                class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p class="mx-4 mb-0 text-center font-semibold dark:text-white">
                                    Account Recovery Form
                                </p>
                            </div>

                            <!-- Email input -->
                            <div class="relative mb-6" data-te-input-wrapper-init>
                                <input v-model="email" type="text"
                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput2" placeholder="Email address" />
                                <label for="exampleFormControlInput2"
                                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Email
                                    address
                                </label>
                            </div>

                            <!-- submit button -->
                            <div class="text-center lg:text-left">
                                <button @click.prevent="submit" type="submit"
                                    class="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init data-te-ripple-color="light">
                                    Request Password Reset
                                </button>

                                <!-- Login link -->
                                <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
                                    Rembered your password?
                                    <span data-te-modal-dismiss>
                                        <a data-te-toggle="modal" data-te-target="#loginModal" href="#!"
                                            class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">Login</a>
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue"

export default {
    name: 'forgotPasswordModal',
    components: {
        Modal
    },
    data() {
        return {
            'email': ''
        }
    },
    methods: {
        async submit() {
            const headers = {
                'Content-Type': 'application/json'
            }

            const data = JSON.stringify({
                "email": this.email
            });

            let requestOptions = {
                method: 'POST',
                headers: headers,
                body: data,
                redirect: 'follow'
            };

            fetch("http://127.0.0.1:8000/auth/forgot_password/", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
    },
    mounted() {
    }
}
</script>