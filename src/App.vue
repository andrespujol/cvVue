<template>
  <v-container>
    <Header/>
    <Card/>
    <Experience/>
    <Footer/>
  </v-container>
</template>

<script>
import Header from './components/Header.vue';
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';
import Experience from './components/Experience.vue';

export default {
  name: 'App',

  components: {
    Header,
    Card,
    Footer,
    Experience,

  },

  data: () => ({

  }),
};
</script>

<style lang="scss" scoped>

</style>