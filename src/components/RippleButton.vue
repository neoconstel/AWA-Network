<script>
// tailwind-elements initialization
import {
    Ripple,
    initTWE,
} from "tw-elements";

export default {
    name: 'RippleButton',
    props: {
        'buttonText': String
    },
    computed: {

    },
    data() {
        return {

        }
    },
    mounted() {
        initTWE({ Ripple });
    }
}
</script>

<template>
    <button type="button" data-te-ripple-init data-te-ripple-color="light"
        class="inline-block rounded h-10 bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        {{ buttonText }}
    </button>
</template>