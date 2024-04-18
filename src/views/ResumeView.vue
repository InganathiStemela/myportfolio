<template>
  <div class="body">
  <div class="container">
  <section class="education">
    <h2>Education/Work Experience</h2>
    <div class="timeline">
      <div v-for="Education in Educations" :key="Education.id" class="timeline-item">
        <div class="timeline-content">
          <h3>{{ Education.course}}</h3>
          <p>{{ Education.institution}}</p>
          <p>{{ Education.description }}</p>
          <p>{{ Education.duration }}</p>
        </div>
      </div>
    </div>
    </section>
</div>
  <section class="skills">
    <h2>Skills</h2>
    <br>
    <div class="container-fluid">
      <div v-for="Skill in skills" :key="Skill.id" class="card" :data-imgURL="Skill.imgURL" :style="{ '--imgURL': 'url(' + Skill.imgURL + ')' }">
        <div class="card-body">
          <img :src="Skill.imgURL" alt="Skill Image" class="card-image">
          <h1 class="card-text">{{ Skill.name }}</h1>
          <h6 class="card-text">{{Skill.description}}</h6>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  computed: {
    Educations() {
      return this.$store.state.Educations;
    },
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducations");
    this.$store.dispatch("fetchSkills");
  },
};
</script>

<style scoped>
.body {
  background-color: fuchsia;
  padding: 20px;
}

.education, .skills {
  margin-bottom: 40px;
}

.education h2, .skills h2 {
  color: black;
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: bold;
  font-family: 'Lobster', cursive;
  text-align: center;
}

.timeline-item {
  position: relative;
  padding-bottom: 30px;
  margin-bottom: 30px;
}

.timeline-content {
  width: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 5px solid black;
  transition: box-shadow 0.3s ease;
}

.timeline-content h3 {
  color: black;
  font-size: 18px;
  margin-bottom: 20px;
}

.timeline-content p {
  color: black;
  font-size: 16px;
  margin-bottom: 10px;
  font-style: italic;
}

.timeline-item:hover {
  box-shadow: 0 0 10px black; 
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color:white;
  border: 3px solid black;
  border-radius: 5px;
  padding: 20px;
  flex: 1 1 calc(33.33% - 20px);
  box-shadow: 0 4px 8px black; 
  transition: box-shadow 0.3s ease; 
  font-family: 'Courier New', Courier, monospace;
}

.card-image {
  width: 100px; 
  height: 100px; 
  object-fit: cover; 
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
}
.card:hover::after {
  content: ""; 
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  background-image: var(--imgURL);
}
@media (max-width: 767px) {
  .education h2, .skills h2 {
    font-size: 24px;
  }
  .timeline-content {
    padding: 15px;
  }
  .card {
    flex: 1 1 calc(50% - 20px);
    margin-bottom: 20px;
  }
}
@media (max-width: 480px) {
  .card {
    flex: 1 1 calc(100% - 20px);
  }
}
</style>






