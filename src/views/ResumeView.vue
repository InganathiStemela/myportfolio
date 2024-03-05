<template>
  <div class="container">
  <section class="education">
    <h2 class="m-5">Education</h2>
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
    <div class="container">
      <div v-for="Skill in skills" :key="Skill.id" class="card">
        <div class="card-body">
          <h1 class="card-text">{{ Skill.name }}</h1>
          <h6 class="card-text">{{Skill.description}}</h6>
        </div>
      </div>
    </div>
  </section>

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
.timeline-item {
  position: relative;
  padding-bottom: 30px;
  margin-bottom: 30px;
}

.timeline-content {
  width: 600px;
  margin-left: 40px;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 5px;
}

.timeline-content h3 {
  color: #333;
  font-size: 18px;
  margin-bottom: 20px;
}

.timeline-content p {
  color: #555;
  font-size: 16px;
  margin-bottom: 10px;
}

.education {
  margin-bottom: 40px;
}

.education h2 {
  color: hsl(0, 0%, 20%);
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
}
.experience h2 {
  color: #333;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
}

.skills {
  margin-bottom: 40px;
}

.skills h2 {
  color: #333;
  font-size: 30px;
  margin-bottom: 20px;
  margin: 0 0 0 30%;
  font-weight: bold;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  width: 80%;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color:#f1f1f1;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 0 0 calc(33.33% - 20px);
  
}

.card-img-top {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}


</style>






