<template>
    <div v-if="licenses.length" v-for="(license, index) in licenses" class="border-2 border-gray-500 m-3 p-5"
        :key="index">
        <p class="text-lg font-bold relative">{{ license.name }} license <span class="absolute right-0">${{
            license.price
                }}</span></p>
        <p class="mt-2 text-sm text-gray-500">Files:</p>
        <button
            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            type="button" data-twe-collapse-init data-twe-ripple-init data-twe-ripple-color="light"
            :data-twe-target="`#licenseCollapse-${index}`" aria-expanded="false"
            :aria-controls="`licenseCollapse-${index}`">
            Show/Hide files
        </button>

        <div class="!visible hidden" :id="`licenseCollapse-${index}`" data-twe-collapse-item>
            <p v-for="(file, nameIndex) in license.files" class="relative" :key="nameIndex">{{ file.name }} <span
                    class="absolute right-0">{{ file.extension }} /
                    {{ file.size }}</span></p>
        </div>
    </div>
</template>


<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

import {
    Collapse,
    Ripple,
    initTWE,
} from "tw-elements";

export default {
    name: 'Cart',
    props: {
        'product': Object,
    },
    computed: {
        ...mapStores(useDataStore),
        licenses() {
            /** The licenses are computed from the product object. They are
             * simply used to group the files based on each of the licenses
             * they have.
             * On their own, they don't have a price attribute. The price for an
             * individual license FOR A PARTICULAR PRODUCT is taken from the
             * product's license data.
             */
            if (!this.product.items)
                return []

            let licenses = []
            let licenseMap = new Map()

            // get a map of unique licenses from all product items
            for (let item of this.product.items) {
                for (let license of item.licenses) {
                    license.files = []
                    licenseMap.set(license.name, license)
                }
            }

            for (let license of [...licenseMap.values()]) {
                for (let item of this.product.items) {
                    let matchingLicense = item.licenses.filter(lic => lic.name == license.name)
                    if (matchingLicense.length) {
                        license.files.push(item.file)
                    }
                }
                // get the product's license_data and get the price from there
                let productLicense = this.product.license_data.find(
                    pLicence => pLicence.license == license.id)

                license.price = productLicense.price
                licenses.push(license)
            }

            this.licensesHaveBeenComputed = true
            return licenses
        }
    },
    data() {
        return {
            'licensesHaveBeenComputed': false
        }
    },
    methods: {
    },
    async mounted() {
        initTWE({ Collapse, Ripple });
    },
}
</script>
