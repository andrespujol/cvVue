<template>
    <b-container fluid>
        <b-row class="my-1" v-for="type in types" :key="type">
        <b-col sm="3">
            <label :for="`type-${type}`"><code>{{ type }}</code>:</label>
        </b-col>
        <b-col sm="9">
            <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
        </b-col>
        </b-row>
        <b-button type="submit" variant="primary" class="btnLogin">Entrar</b-button>
    </b-container>

</template>

<script>
    export default {
    name: 'Login',
    data() {
        return {
            types: [
                'email',
                'password',
            ]
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
    },

    }
}
</script>

<style scoped>
    .btnLogin {
        width: 30%;
        margin: 5%;
        margin-left: 35%;
    }
</style>