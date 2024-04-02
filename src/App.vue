<template>

  <main class="container-fluid">

    <navbar/>
    <router-view/>
    <Footer/>
    <spinner/>

  </main>
  
</template>

<script>

import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
import HomeView from './views/HomeView.vue';
import Spinner from './components/spinner.vue'

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
