<template>
  <div class="home display-2">
    <p> I am Inganathi Stemela</p>
    <h1 class="container display-1" id="body"></h1>
  </div>
  <section>
    <a href="https://drive.google.com/file/d/1iEUwcB4YQJgR2gqh39FnlULG2TkssgXr/view?usp=sharing" class="card-link">Download CV</a>
  </section>
</template>
<script>
export default {
  mounted() {
    const textElement = document.getElementById('body');
    const originalText = "An aspiring web developer";
    let currentIndex = 0;

    function typeText() {
      if (currentIndex < originalText.length) {
        textElement.textContent += originalText.charAt(currentIndex);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }

    const typingInterval = setInterval(typeText, 100);
  },
};
</script>

<style scoped>
body {
  width: 100vw;
  height: 100vh;
  background-image: url('https://i.postimg.cc/PxfjZCs3/bgrd-img3.jpg');
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
}

.container {
  font-size: 2em;
  font-weight: bold;
}

.card-text {
  font-size: 16px;
  font-weight: bold;
}
.card-link {
  display: flex;
  margin-left:18rem;
  margin-right:18rem;
  justify-content: center;
  padding: 0.75rem 1.5rem; 
  background-color: rgb(178, 173, 173);
  color: #ffffff;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
  box-shadow: 4px 8px 0px rgb(110, 109, 109) ; 
  margin-top: 5%;
}

.card-link:hover {
  background-color:  #F3DEBA;
}
</style>


 
