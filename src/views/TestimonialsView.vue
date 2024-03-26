<template>
  <h1 style="text-align: center;">My Testimonials</h1>
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
body {
  background-color: black;
}

.card {

  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  margin: 20px 30px;
  border: 5px solid black;
}

.card-img-top {
  height: 50%; 
  width: 80%; 
  margin: 0 0 0 8%;
  border: 2px solid black;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}



.card-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 500px) {
  .row {
    margin-left: 0;
    padding: 0;
  }

  .card {
    margin: 0;
    padding: 0;
  }

  .container {
    padding: 0;
  }
}
</style>
