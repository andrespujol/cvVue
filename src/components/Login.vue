<template>
    <section>
        <h2>Iniciar sesión</h2>
        <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show" action='/'>
            <b-form-group
                id="input-group-1"
                label="Mail:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                show="false"
                placeholder="Enter email"
                required
                ></b-form-input>
            </b-form-group>
            <b-form @submit.stop.prevent>
                <label for="text-password">Password</label>
                <b-form-input type="password" id="text-password" aria-describedby="password-help-block"
                placeholder="Enter password"></b-form-input>
                <b-form-text id="password-help-block">
                </b-form-text>
            </b-form>




            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
            </b-card>
        </div>
    </section>

</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        form: {
        //   email: '',
        },

        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        // this.form.email = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
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
    .loginTitle {
        text-align: center;
    }
</style>