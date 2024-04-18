<template>
  <div class="footer-container">
<div class="container-fluid d-flex justify-content-center align-items-center">
      <div class="row">
        <div class="col-12 text-center">
          <p class="lead">
            designed by I.Stemela ©
            <span>{{ currYear }}</span>
          </p>
        </div>
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
.footer-container {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.container-fluid {
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px 0;
  height: 50px;
}

@media (max-width: 767px) {
  .footer-container {
    position: static;
  }
  
  .container-fluid {
    position: static;
    width: 100%;
    height: auto;
  }
}
</style>
