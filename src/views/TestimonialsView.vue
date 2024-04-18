<template>
  <div class="body">
  <h1 style="text-align: center;  font-family: 'Lobster', cursive;">My References</h1>
    <br>
  <div class="container" style="margin-top: 20px; margin-bottom: 20px;">
    <div class="row">
      <div class="card p-2" v-for="Testimonial in Testimonials" :key="Testimonial.id" style="width: 20rem;">
        <img :src="Testimonial.image" class="card-img-top" alt="Testimonial Image">
        <div class="card-body">
          <h5 class="card-title">{{ Testimonial.name }}</h5>
          <p class="card-text">{{ Testimonial.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    Testimonials() {
      return this.$store.state.Testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped>
.body {
  background-color: black;
  padding: 20px;
}
h1 {
  color: white;
  text-align: center;
  font-family: 'Lobster', cursive;
  margin-top: 20px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-right: -10px; /* Adjust the right margin */
}
.card {
  width: calc(33.33% - 20px);
  margin: 10px;
  border: 5px solid fuchsia;
  border-radius: 10px;
  transition: transform 0.8s;
}
.card:hover {
  transform: translateY(-10px);
}
.card-img-top {
  width: 100%;
  height: auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.card-body {
  padding: 1rem;
}
.card-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}
.card-text {
  font-style: italic;
}

@media (max-width: 991px) {
  .card {
    width: calc(50% - 20px);
  }
}

@media (max-width: 767px) {
  .card {
    width: calc(100% - 20px);
  }
}
</style>
