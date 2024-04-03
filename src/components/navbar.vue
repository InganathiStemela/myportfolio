<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid" style="background-color:fuchsia;">
      <router-link to="/" style="border: 1px solid black;">
        <img class="img-fluid" src="https://i.postimg.cc/xCy7kKmr/s.png" width="50px" height="50px" alt="logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact>
              |Home|
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">
              |About|
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resume" class="nav-link">
              |Education|
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">
              |Projects|
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonials" class="nav-link">
              |Testimonials|
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">
              |Contact|
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
</template>
<script>
   export default {
       name: 'navbar',
   }
</script>
<style  scoped>
@media only screen and (max-width: 600px) {
}


</style>

