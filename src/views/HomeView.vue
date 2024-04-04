<!-- <template>
  <div class="container">
  <div class="home display-2">
    <p> I am Inganathi Stemela,</p>
    </div>
    <div class="content">
    <h1 class="container display-1" id="body"></h1>
  <div class="image-container">
      <img src="https://i.postimg.cc/445P40Yf/IMG-20240222-WA0019-1.jpg" class="profile-image" alt="Profile Image">
    </div>
  </div>
  </div>
  <section>
    <a href="https://drive.google.com/file/d/1iEUwcB4YQJgR2gqh39FnlULG2TkssgXr/view?usp=sharing" class="card-link" style="color: black;">Download CV</a>
  </section>
  <br>
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
.container {
  display: flex;
  align-items: flex-start; 
  margin-top: 50px;
}

.home {
  margin-right: 20px; 
}

.content {
  display: flex;
  flex-direction: column;
}

.image-container {
  width: 50%;
  height: 80vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
}
.profile-image {
  width: auto;
  height: 100%; 
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid fuchsia;
  
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
  width: 100px;
  margin-left:18rem;
  margin-right:18rem;
  justify-content: center;
  padding: 0.75rem 1.5rem; 
  background-color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
  box-shadow: 4px 8px 0px black ; 
  margin-top: 5%;
}

.card-link:hover {
  background-color:  fuchsia;
}
</style>


  -->

 <template>
  <div class="home display-2">
    <div class="content">
      <p class="display-2">I am Inganathi Stemela,</p>
      <h1 class="lobster-text" id="body"></h1>
    </div>
    <div class="image-container">
      <img src="https://i.postimg.cc/QCfXpF7Q/IMG-20240403-WA0001.jpg" class="profile-image" alt="Profile Image">
    </div>
  </div>
  <section>
    <a href="https://drive.google.com/file/d/1iEUwcB4YQJgR2gqh39FnlULG2TkssgXr/view?usp=sharing" class="card-link" style="color: black; font-family: 'Courier New', Courier, monospace;">Download CV</a>
  </section>
  <br>
</template>

<script>
export default {
  mounted() {
    const textElement = document.getElementById('body');
    const originalText = "AN ASPIRING FULLSTACK WEB DEVELOPER";
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
.template {
  overflow-y: hidden;
}
.home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10%;
  margin-top: 0%;
  font-size: 2em;
  font-weight: bold;
}
.content {
  width: 50%;
  padding: 20px;
  margin-bottom: 8%;
  margin-right: 10%;
  font-family: 'Lobster', cursive;
}
#content {
  font-family: 'Lobster', cursive;
  font-size: 2em;
  font-weight: bold;
  color: black; 
}
.image-container {
  width: 50%;
  height: 80vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10%;
  margin-bottom: -1%;
}
.profile-image {
  width: 100%; 
  height: 100%; 
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid fuchsia; 
}

.card-text {
  font-size: 16px;
  font-weight: bold;
}
.card-link {
  font-weight: bold;
  display: flex;
  width: 100px;
  margin-left:10rem;
  margin-right:15rem;
  margin-top: -93px;
  justify-content: center;
  padding: 0.75rem 1.5rem; 
  background-color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
  box-shadow: 4px 8px 0px black ; 
}

.card-link:hover {
  background-color:  fuchsia;
}
</style>
