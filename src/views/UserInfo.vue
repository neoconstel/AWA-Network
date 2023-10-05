<template>
    <h1>User Info</h1>
    <div>
        <p>username: {{ this.username }}</p>
        <p>userID: {{ this.userID }}</p>
        <p>status: {{ this.status }}</p>
    </div>
    <hr>
</template>

<script>
export default {
    name: 'userInfo',
    data() {
        return {
            'success': null,
            'username': '',
            'userID': '',
            'status': 'anonymous'
        }
    },
    mounted() {
        const url = "http://127.0.0.1:8000/auth/user_info/"

        const headers = {
            'Content-Type': 'application/json'
        }

        const requestOptions = {
            method: 'GET',
            headers: headers,
            credentials: 'include',
            redirect: 'follow'
        };

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
                if (this.success == true) {
                    this.username = data['username']
                    this.userID = data['userID']
                    this.status = data['status']
                }
            }
            )
            .catch((error) => {
                console.log('error', error)
            })
    }
}
</script>