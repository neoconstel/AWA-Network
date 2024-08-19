<!-- This modal component, by default, is structured to display a title, bodyText,
and two buttons captioned with a confirmText and a cancelText accordingly. All
that is needed is to provide these values via binding and they will be received
as props by the component and displayed.


Besides the default structure however, custom html can be placed inside the
component's tags and it would be received as slot content and displayed instead
of the default structure. The confirm and cancel buttons would still show unless
there is no confirmText and/or cancelText value passed in via binding.


The modal must be hooked up to a triggering element (e.g button) via its 'tag' prop, for example:
    <Modal :tag="'loginModal'">

and then the triggering element must have this in its tag:
    data-te-toggle="modal" data-te-target="#loginModal"
-->

<template>
    <div data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        :id="this.tag" tabindex="-1" :aria-labelledby="this.tag + 'Label'" aria-hidden="true">
        <div data-te-modal-dialog-ref
            class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
            <div
                class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pt-10 px-10 pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-gray-100 bg-clip-padding text-current shadow-lg outline-none dark:bg-gray-900">
                <button ref="closeBtn" type="button"
                    class="absolute top-10 right-10 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    data-te-modal-dismiss aria-label="Close">
                    <svg name="X-close-icon" class="fill-gray-800 dark:fill-gray-200" width="24" height="24"
                        xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path
                            d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
                    </svg>
                </button>
                <slot>
                    <div
                        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                        <!--Modal title-->
                        <h5 class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                            id="this.tag+'Label'">
                            {{ this.title }}
                        </h5>
                        <!--Close button-->
                        <!-- <button type="button"
                            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                            data-te-modal-dismiss aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button> -->
                    </div>
                    <!--Modal body-->
                    <div class="relative flex-auto p-4" data-te-modal-body-ref>
                        {{ this.bodyText }}
                    </div>
                </slot>
                <!--Modal footer-->
                <div v-if="this.confirmText && this.cancelText"
                    class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <button type="button"
                        class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                        data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                        {{ this.cancelText }}
                    </button>
                    <button type="button"
                        class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init data-te-ripple-color="light">
                        {{ this.confirmText }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    Modal,
    Ripple,
    initTWE,
} from "tw-elements";

export default {
    name: 'Modal',
    components: {

    },
    props: {
        'tag': String,   // tag which the trigger (e.g a button) uses to identify its target (the modal meant for it)
        'title': String, // title of modal if the default modal in the slot is used
        'bodyText': String, // text in the body of the modal
        'confirmText': String, // text on confirm button
        'cancelText': String // text on cancel button
    },
    data() {
        return {

        }
    },
    methods: {
        close() {
            this.$refs.closeBtn.click()
        }
    },
    computed: {

    },
    mounted() {
        initTWE({ Modal, Ripple });
    }
}
</script>