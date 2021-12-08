<template>
  <div>
    <Header/>
    <Card/>
    <Login/>
    <Experience/>
    <Footer/>
    <Cart/>
    <Coments/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';
import Login from './components/Login.vue'
import Experience from './components/Experience.vue'
import Coments from './components/Coments.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'App',

  components: {
    Header,
    Card,
    Footer,
    Login,
    Experience,
    Coments,
    Cart


  },

  data: () => ({

  }),
};
</script>

<style lang="scss" scoped>

</style>