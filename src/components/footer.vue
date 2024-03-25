<template>
    <!-- <div class="container-fluid">

<footer class="text-center text-lg-start text-white" style="background-color: #1c2331">
  <div
       class="text-center p-3"
       style="background-color: rgba(0, 0, 0, 0.2)"
       >
    INGANATHI STEMELA's PORTFOLIO © 2024
  </div>
</footer>

</div> -->
<div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center">
          <p class="lead">
            INGANATHI STEMELA's PORTFOLIO © 2024
            <span>{{ currYear }}</span>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default{
  name: "footerComp",
  data(){
    return{
      currYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.container-fluid {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
</style>
