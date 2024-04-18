<template>
    <h1 style="text-align: center;  font-family: 'Lobster', cursive;">My Projects</h1>
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
    background-color: black;
  }
  
  .card-img-top {
    height: 120px;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 1px solid black;
  }
  
  .card-body {
    padding: 1rem;
  }
  
  .card-title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: white;
    font-family: 'Courier New', Courier, monospace;
  }
  
  .btn-primary {
    color: black;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    text-decoration: none;
    margin: 7px;
    border-radius: 0.25rem;
    background-color: fuchsia;
    transition: background-color 0.3s;
    font-style: italic;
  }

  .btn-primary:hover {
    background-color: black; 
    color: fuchsia;
    border: 2px solid fuchsia;
}

  .content {
    width: 90%;
  }
  .image-container {
    width: 90%;
  }
  @media (max-width: 767px) {
  .card {
    width: 90%;
  }
}
  </style>
  
