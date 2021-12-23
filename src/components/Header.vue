<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="dark ">
        <b-navbar-brand href="/"><img src="../assets/logo.png" class="logo" alt="logo Andrés Pujol"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <router-link to='/' class="linksMenu">Home</router-link>
            <router-link to='/experiencia' class="linksMenu">Experiencia</router-link>
            <router-link to='/educacion' class="linksMenu">Educación</router-link>
            <router-link to='/skills' class="linksMenu">Skills</router-link>
            <router-link to='/about' class="linksMenu">Sobre mí</router-link>
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

<style  scoped>
    .navbar-brand {
        width: 40%;
    }
    .logo {
        width: 70%;
    }
    .linksMenu {
        text-decoration: none;
        color: white;
    }
</style>