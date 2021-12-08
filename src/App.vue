<template>
  <v-container>
    <Header/>
    <Card/>
    <Login/>
    <Experience/>
    <Footer/>
    <Coments/>
  </v-container>
</template>

<script>
import Header from './components/Header.vue';
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';
import Login from './components/Login.vue'
import Experience from './components/Experience.vue'
import Coments from './components/Coments.vue'

export default {
  name: 'App',

  components: {
    Header,
    Card,
    Footer,
    Login,
    Experience,
    Coments


  },

  data: () => ({

  }),
};
</script>

<style lang="scss" scoped>

</style>