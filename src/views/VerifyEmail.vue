<template>
    <h1>Email Verification</h1>
    <div v-if="this.success == true">
        <p>You have been verified, <span>{{ this.verified_user }}!</span></p>
        <p>You may <span class="text-cyan-500" data-twe-toggle="modal" data-twe-target="#loginModal">
                <a @click.prevent="" href="">login</a></span> now</p>
    </div>
    <p v-if="!this.success">Invalid or Expired Verification Token</p>
</template>

<script>

// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store

export default {
    name: 'verifyEmail',
    data() {
        return {
            'success': null,
            'verified_user': '',
        }
    },
    computed: {
        ...mapStores(useDataStore)
    },
    methods: {
        async verify() {
            const url = `${import.meta.env.VITE_BACKEND_DOMAIN}/auth/verify/`

            const headers = {
                'Content-Type': 'application/json'
            }

            const data = JSON.stringify({
                'x_access_token': this.$route.query.xtoken
            })

            const requestOptions = {
                method: 'POST',
                headers: headers,
                body: data,
                redirect: 'follow'
            }

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
                    if (this.success == true)
                        this.verified_user = data['verified_user']
                }
                )
                .catch(error => console.log('error', error))
        }
    },
    mounted() {
        this.dataStore.currentView = this.$options.name
        this.verify()
    }
}

</script>