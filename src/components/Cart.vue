<template>
    <div>
        <h1>Listado</h1>
        <Experience
            @LlevarCarrito="functionMaestra()"
        />
    </div>
</template>

<script>
import Experience from './Experience.vue'


    export default {
  components: { Experience },
        methods: {
            functionMaestra () {
                console.log('ejecutado en cart desde Experience')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>