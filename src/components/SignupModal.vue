<template>
    <!-- signup modal -->
    <Modal :tag="'signupModal'" ref="signupModal">
        <!-- content inside signup modal -->
        <section>
            <div>
                <!-- <span data-twe-modal-dismiss="" class="absolute right-10"><a @click.prevent="" href=""><img
                            src="/static/icons/iconmonstr-x-mark-thin.svg" alt="dismiss_button"></a></span> -->
                <!-- Left column container with background-->
                <div
                    class="text-gray-800 dark:text-gray-200 g-6 flex h-full flex-wrap items-center justify-center lg:justify-between pb-10">
                    <!-- <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="w-full" alt="Sample image" />
                    </div> -->

                    <!-- Right column container -->
                    <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/8 xl:w-full">
                        <form>
                            <!--Sign up section-->
                            <div class="flex flex-row items-center justify-center lg:justify-start">
                                <!-- <p class="mb-0 mr-4 text-lg text-gray-800 dark:text-gray-200">Sign up with</p> -->

                                <!-- Facebook -->
                                <button type="button" data-twe-ripple-init data-twe-ripple-color="light"
                                    class="inlne-block mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-3.5 w-3.5"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </button>

                                <!-- Twitter -->
                                <button type="button" data-twe-ripple-init data-twe-ripple-color="light"
                                    class="inlne-block mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-3.5 w-3.5"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </button>

                                <!-- Linkedin -->
                                <button type="button" data-twe-ripple-init data-twe-ripple-color="light"
                                    class="inlne-block mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-3.5 w-3.5"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </button>
                            </div>

                            <!-- Separator between social media sign in and email/password sign in -->
                            <div
                                class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p class="mx-4 mb-0 text-center font-semibold text-gray-800 dark:text-gray-200">
                                    Or
                                </p>
                            </div>

                            <!-- Email input -->
                            <div class="relative mb-6" data-twe-input-wrapper-init>
                                <input v-model="email" type="text"
                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:outline-gray-400 dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput2" placeholder="Email address" />
                                <label for="exampleFormControlInput2"
                                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.7rem] peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">Email
                                    address
                                </label>
                            </div>

                            <!-- Username input -->
                            <div class="relative mb-6" data-twe-input-wrapper-init>
                                <input v-model="username" type="text"
                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:outline-gray-400 dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput2B" placeholder="Username" />
                                <label for="exampleFormControlInput2B"
                                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.7rem] peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">Username
                                </label>
                            </div>

                            <div class="grid grid-cols-2 gap-x-5">
                                <!-- First name -->
                                <div class="relative mb-6" data-twe-input-wrapper-init>
                                    <input v-model="firstName" type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:outline-gray-400 dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput2BC" placeholder="First Name" />
                                    <label for="exampleFormControlInput2BC"
                                        class="-translate-y-[1.7rem] pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">First
                                        Name
                                    </label>
                                </div>

                                <!-- Last name -->
                                <div class="relative mb-6" data-twe-input-wrapper-init>
                                    <input v-model="lastName" type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:outline-gray-400 dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput2BD" placeholder="Last Name" />
                                    <label for="exampleFormControlInput2BD"
                                        class="-translate-y-[1.7rem] pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">Last
                                        Name
                                    </label>
                                </div>
                            </div>

                            <!-- Password input -->
                            <div class="relative mb-6" data-twe-input-wrapper-init>
                                <input v-model="password1" ref="password1" type="password"
                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:outline-gray-400 dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                    id="signupFormControlInput" placeholder="Password" />
                                <a @click.prevent="togglePassword(1)" href="">
                                    <svg name="eye-icon-on" v-if="!password1Reveal"
                                        class="inline h-5 absolute right-1 top-1/3 fill-gray-800 dark:fill-gray-200"
                                        clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                                        stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"
                                            fill-rule="nonzero" />
                                    </svg>
                                </a>
                                <a @click.prevent="togglePassword(1)" href="">
                                    <svg name="eye-icon-off" fill="green" g v-if="password1Reveal"
                                        class="inline h-5 absolute right-1 top-1/3 fill-gray-800 dark:fill-gray-200"
                                        width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                        clip-rule="evenodd">
                                        <path
                                            d="M8.137 15.147c-.71-.857-1.146-1.947-1.146-3.147 0-2.76 2.241-5 5-5 1.201 0 2.291.435 3.148 1.145l1.897-1.897c-1.441-.738-3.122-1.248-5.035-1.248-6.115 0-10.025 5.355-10.842 6.584.529.834 2.379 3.527 5.113 5.428l1.865-1.865zm6.294-6.294c-.673-.53-1.515-.853-2.44-.853-2.207 0-4 1.792-4 4 0 .923.324 1.765.854 2.439l5.586-5.586zm7.56-6.146l-19.292 19.293-.708-.707 3.548-3.548c-2.298-1.612-4.234-3.885-5.548-6.169 2.418-4.103 6.943-7.576 12.01-7.576 2.065 0 4.021.566 5.782 1.501l3.501-3.501.707.707zm-2.465 3.879l-.734.734c2.236 1.619 3.628 3.604 4.061 4.274-.739 1.303-4.546 7.406-10.852 7.406-1.425 0-2.749-.368-3.951-.938l-.748.748c1.475.742 3.057 1.19 4.699 1.19 5.274 0 9.758-4.006 11.999-8.436-1.087-1.891-2.63-3.637-4.474-4.978zm-3.535 5.414c0-.554-.113-1.082-.317-1.562l.734-.734c.361.69.583 1.464.583 2.296 0 2.759-2.24 5-5 5-.832 0-1.604-.223-2.295-.583l.734-.735c.48.204 1.007.318 1.561.318 2.208 0 4-1.792 4-4z" />
                                    </svg>
                                </a>
                                <label for="signupFormControlInput"
                                    class="-translate-y-[1.7rem] pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">Password
                                </label>
                            </div>

                            <!-- Confirm Password input -->
                            <div class="relative mb-6" data-twe-input-wrapper-init>
                                <input v-model="password2" ref="password2" type="password"
                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:outline-gray-400 dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                    id="signupFormControlInput2" placeholder="Confirm Password" />
                                <a @click.prevent="togglePassword(2)" href="">
                                    <svg name="eye-icon-on" v-if="!password2Reveal"
                                        class="inline h-5 absolute right-1 top-1/3 fill-gray-800 dark:fill-gray-200"
                                        clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                                        stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"
                                            fill-rule="nonzero" />
                                    </svg>
                                </a>
                                <a @click.prevent="togglePassword(2)" href="">
                                    <svg name="eye-icon-off" fill="green" g v-if="password2Reveal"
                                        class="inline h-5 absolute right-1 top-1/3 fill-gray-800 dark:fill-gray-200"
                                        width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                        clip-rule="evenodd">
                                        <path
                                            d="M8.137 15.147c-.71-.857-1.146-1.947-1.146-3.147 0-2.76 2.241-5 5-5 1.201 0 2.291.435 3.148 1.145l1.897-1.897c-1.441-.738-3.122-1.248-5.035-1.248-6.115 0-10.025 5.355-10.842 6.584.529.834 2.379 3.527 5.113 5.428l1.865-1.865zm6.294-6.294c-.673-.53-1.515-.853-2.44-.853-2.207 0-4 1.792-4 4 0 .923.324 1.765.854 2.439l5.586-5.586zm7.56-6.146l-19.292 19.293-.708-.707 3.548-3.548c-2.298-1.612-4.234-3.885-5.548-6.169 2.418-4.103 6.943-7.576 12.01-7.576 2.065 0 4.021.566 5.782 1.501l3.501-3.501.707.707zm-2.465 3.879l-.734.734c2.236 1.619 3.628 3.604 4.061 4.274-.739 1.303-4.546 7.406-10.852 7.406-1.425 0-2.749-.368-3.951-.938l-.748.748c1.475.742 3.057 1.19 4.699 1.19 5.274 0 9.758-4.006 11.999-8.436-1.087-1.891-2.63-3.637-4.474-4.978zm-3.535 5.414c0-.554-.113-1.082-.317-1.562l.734-.734c.361.69.583 1.464.583 2.296 0 2.759-2.24 5-5 5-.832 0-1.604-.223-2.295-.583l.734-.735c.48.204 1.007.318 1.561.318 2.208 0 4-1.792 4-4z" />
                                    </svg>
                                </a>
                                <label for="signupFormControlInput2"
                                    class="-translate-y-[1.7rem] pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">Confirm
                                    Password
                                </label>
                            </div>

                            <!-- Signup button -->
                            <div class="text-center lg:text-left">
                                <button @click.prevent="submit" type="submit"
                                    class="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-twe-ripple-init data-twe-ripple-color="light">
                                    Signup
                                </button>

                                <!-- Login link -->
                                <p class="mb-0 mt-2 pt-1 text-sm font-semibold text-gray-800 dark:text-gray-300">
                                    Already have an account?
                                    <span data-twe-modal-dismiss>
                                        <a data-twe-toggle="modal" data-twe-target="#loginModal" href="#!"
                                            class="text-pink-800 dark:text-cyan-300 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">Login</a>
                                    </span>
                                </p>
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

export default {
    name: 'SignupModal',
    components: {
        Modal
    },
    data() {
        return {
            'password1Reveal': false,
            'password2Reveal': false,
            'email': '',
            'username': '',
            'firstName': '',
            'lastName': '',
            'password1': '',
            'password2': '',
            'success': null,
            'errorMessage': ''
        }
    },
    methods: {
        togglePassword(n) {
            let passwordField

            if (n == 1) {
                passwordField = this.$refs.password1
                this.password1Reveal = !this.password1Reveal
            }
            else if (n == 2) {
                passwordField = this.$refs.password2
                this.password2Reveal = !this.password2Reveal
            }

            if (passwordField.getAttribute('type') == 'password')
                passwordField.setAttribute('type', 'text')
            else
                passwordField.setAttribute('type', 'password')
        },
        async submit() {
            const headers = {
                'Content-Type': 'application/json'
            }

            const data = JSON.stringify({
                "email": this.email,
                "username": this.username,
                "first_name": this.firstName,
                "last_name": this.lastName,
                "password": this.password1,
                "password2": this.password2
            });

            const requestOptions = {
                method: 'POST',
                headers: headers,
                body: data,
                redirect: 'follow'
            };

            fetch(`${import.meta.env.VITE_BACKEND_DOMAIN}/auth/register/`, requestOptions)
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
                        // dismiss login modal automatically
                        this.$refs.signupModal.close()

                        setTimeout(() => {
                            alert("Registration Successful. Check your email for "
                                + "a verification link to activate your account.")
                        }, 2000)

                        // refresh page
                        // this.$router.go()
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