<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="dark ">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <router-link to='/'>Home</router-link>
            <router-link to='/experiencia'>Experiencia</router-link>
            <router-link to='/educacion'>Educación</router-link>
            <router-link to='/skills'>Skills</router-link>
            <router-link to='/about'>Sobre mí</router-link>
            <!-- <b-nav-item href="#">Inicio</b-nav-item> -->
            <!-- <b-nav-item href="#">Experiencia</b-nav-item> -->
            <!-- <b-nav-item href="#">Educación</b-nav-item>
            <b-nav-item href="#">Skills</b-nav-item> -->
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
                <em>Ingresar</em>
            </template>
            <b-dropdown-item href="#">Soy Andrés</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>

    export default {
        name: 'Header',
    }
</script>

<style lang="scss" scoped>

</style>