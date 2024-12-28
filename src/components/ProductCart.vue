<template>
    <div v-if="licenses.length" v-for="(license, index) in licenses" :key="index">
        <h3>{{ license.name }} license</h3>
        <p>Files:</p>
        <p v-for="(file, nameIndex) in license.files" :key="nameIndex">{{ file }}</p>
    </div>
</template>


<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {
    name: 'Cart',
    props: {
        'product': Object,
    },
    computed: {
        ...mapStores(useDataStore),
        licenses() {
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
                licenses.push(license)
            }


            return licenses
        }
    },
    data() {
        return {

        }
    },
    methods: {
    },
    async mounted() {

    },
}
</script>
