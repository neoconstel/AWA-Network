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
            <div v-for="(file, nameIndex) in license.files" class="grid gap-x-4 outline-dotted outline-1"
                style="grid-template-columns: 5fr 3fr;" :key="nameIndex">
                <p class="ml-2" style="word-wrap: break-word; overflow-wrap: break-word; min-width: 0">{{ file.name }}
                </p>
                <p style="word-wrap: break-word; overflow-wrap: break-word; min-width: 0"><span
                        class="bg-cyan-500 px-2 rounded-md text-gray-100">{{ file.extension }} / {{
                            file.size }}</span></p>
            </div>
        </div>
        <v-btn v-if="license.added" class="mt-5" block variant="outlined">
            Added to Library
        </v-btn>
        <v-btn v-else-if="license.price > 0" class="mt-5" block variant="outlined">
            <svg class="fill-gray-800 dark:fill-gray-200" width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd" clip-rule="evenodd">
                <path
                    d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm14-16.5l-.743 2h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195zm-12 4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z" />
            </svg>
            Add to cart
        </v-btn>
        <v-btn v-else @click="libraryAdd(product, license)" class="mt-5" block variant="outlined">
            <svg class="fill-gray-800 dark:fill-gray-200" width="24" height="24" clip-rule="evenodd" fill-rule="evenodd"
                stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                    fill-rule="nonzero" />
            </svg>
            Add to library
        </v-btn>
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
        },
    },
    data() {
        return {
            'licensesHaveBeenComputed': false,
        }
    },
    methods: {
        async libraryAdd(product, license) {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/resources/product/library/add/`

            const headers = {
                'Content-Type': 'application/json'
            }

            const data = JSON.stringify({
                "product_id": product.id,
                "license_id": license.id
            });

            const requestOptions = {
                method: 'POST',
                headers: headers,
                body: data,
                redirect: 'follow'
            };

            fetch(url, requestOptions)
                .then(response => response.json())
                .then((data) => {
                    license.added = true
                    console.log(data)
                })
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
        async updateLicenseOwnership() {
            /** gets the product licenses owned by this user, and updates the
             * licenses accordingly to indicate if user has ownership
             */

            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/resources/product/library/list/?product_id=${this.product.id}`

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    let ownedLicenses = data

                    /** update licenses to indicate if user has added them
                     * to library
                     */
                    let addedLicensesIDs = ownedLicenses.map(x => x.id)
                    this.licenses.forEach((license) => {
                        if (addedLicensesIDs.includes(license.id))
                            license.added = true
                    });

                    // console.log(data)
                })
                .catch((error) => {
                    this.errorMessage = error
                    console.log('error', error)
                })
        },
    },
    async mounted() {
        initTWE({ Collapse, Ripple });

        this.updateLicenseOwnership()
    },
}
</script>
