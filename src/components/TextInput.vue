<script>
// tailwind-elements initialization
import {
    Input,
    initTWE,
} from "tw-elements";

export default {
    name: 'TextInput',
    props: {
        'placeholderText': String
    },
    data() {
        return {

        }
    },
    mounted() {
        initTWE({ Input });
    }
}
</script>

<template>
    <div class="relative mb-3 inline-block" data-twe-input-wrapper-init>
        <input type="text"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputText" placeholder="Example label" />
        <label for="exampleFormControlInputText"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-800 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
            {{ placeholderText }}
        </label>
    </div>
</template>