<template>
<div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center">
          <p class="lead">
            INGANATHI STEMELA's PORTFOLIO ©
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
    background-color: black;
    color: #fff;
    padding: 10px;
    height: 40px;
  }
</style>
