<template>

  <main class="container-fluid">

    <Navbar/>
    <router-view/>
    <Footer/>
    <Spinner/>

  </main>
  
</template>

<script>

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import HomeView from './views/HomeView.vue';
import Spinner from './components/Spinner.vue'

export default{
  components:{
    Navbar,
    Footer,
    HomeView,
    Spinner
  }
}
</script>

<style src="@/assets/CSS/style.css">

</style>
