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
    position: fixed;
  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: black;
  color: white;
  text-align: center;
  padding: 0;
  }
</style>
