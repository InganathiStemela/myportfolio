<template>

    <h1 style="text-align: center;">My Projects</h1>
    <br>
      <div class="projects">
          <div v-for="Project in Projects" :key="Project.id" class="card" style="width: 27rem;">
              <img :src=" Project.imgUrl" class="card-img-top" :alt="Project.name">
              <div class="card-body">
                <h5 class="card-title">{{Project.name}}</h5>
                <a :href="Project.github" target="_blank"  class="btn btn-primary">github</a>
                <a :href="Project.vercel" target="_blank" class="btn btn-primary">vercel</a>
              </div>
            </div>
      </div>
  <br>
  </template>
  
  <script>
       export default {
    computed: {
      Projects() {
        return this.$store.state.Projects
      },
    },
    mounted() {
      this.$store.dispatch('fetchProjects');
    },
  };
  </script>
  
  <style scoped>
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .card {
    width: 16rem;
    height: 16rem;
    border: 4px solid black;
    border-radius: 10px;
  }
  
  .card-img-top {
    height: 120px;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  
  .card-body {
    padding: 1rem;
  }
  
  .card-title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .btn-primary {
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    text-decoration: none;
    margin: 7px;
    border-radius: 0.25rem;
  }
  </style>
  
