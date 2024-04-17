<template>
  <div class="body">
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
    <a href="https://drive.google.com/file/d/1iEUwcB4YQJgR2gqh39FnlULG2TkssgXr/view?usp=sharing" class="card-link" style="color: black; font-family: 'Lobster', cursive;">Download CV</a>
  </section>
  </div>
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

    setTimeout(() => {
      const button = document.querySelector('.card-link');
      button.classList.add('show');
    }, 2000);
  },
};
</script>

<style scoped>
.body{
  background-image: url(https://i.postimg.cc/D0t9GJ8B/white-design-1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}
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
  animation: colorChange 2s infinite alternate;
}

@keyframes colorChange {
  0% {
    color: black; 
  }
  100% {
    color: fuchsia;
  }
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
  animation: spin 3s linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg); 
  }
  to {
    transform: rotate(360deg); 
  }
}

.card-text {
  font-size: 16px;
  font-weight: bold;
}
.card-link {
  font-weight: bold;
  display: flex;
  width: 150px;
  margin-left:12rem;
  margin-right:15rem;
  margin-top: -93px;
  justify-content: center;
  padding: 0.75rem 1.5rem; 
  background-color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: transform 0.5s ease-out;
  transform: translateX(-100%);
  box-shadow: 4px 8px 0px black ; 
}
.card-link:hover {
  background-color:  fuchsia;
}
.card-link.show {
  transform: translateX(0);
}
@media (max-width: 767px) {
  .home {
    font-size: 1.5em;
  }
  .content {
    width: 90%;
  }
  .image-container {
    width: 90%;
  }
}
</style>
