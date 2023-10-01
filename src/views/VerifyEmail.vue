<template>
    <h1>Email Verification</h1>
</template>

<script>

export default {
    name: 'verifyEmail',
    data() {
        return {

        }
    },
    methods: {
        async verify() {
            const url = `http://127.0.0.1:8000/auth/verify/`

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
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error))
        }
    },
    mounted() {
        this.verify()
    }
}

</script>