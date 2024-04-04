<template>
  <div class="container">
    <div class="box animated-border">
      <div class="section">
        <h1 class="heading">Who am I?</h1>
        <div class="content">
          <div class="image">
            <img src="https://i.postimg.cc/445P40Yf/IMG-20240222-WA0019-1.jpg" width="300px" height="300px" alt="">
          </div>
          <div class="text" id="about-me">
            <p>I am Inganathi Stemela, born and bred in Cape Town. I matriculated in 2021 at Sinenjongo High School. I then went to Life Choices Academy and got a certificate for full stack coding course from September 2023 till March 2024 to accomplish my longing interest of computers and technology. As a dedicated and driven individual, I am always eager to take on new challenges and refine my skills everyday. </p>
            <p><b>Date of Birth:</b> June 03, 2003</p>
          </div>
        </div>
      </div>
      <div class="section">
        <h1 class="heading">Hobbies</h1>
        <div class="content">
          <div class="text" id="hobbies">
            <p>Netball has been a lifelong passion for me since childhood. I fondly remember following my sister to the gym then came back and created my own ball using plastics so that I can have a ball to play with my peers, pretending to be a superstar around my peers. As I grew, my love for the game strengthened. While I never pursued it professionally, netball remains a cherished hobby, offering moments of joy and excitement, serving as an escape from the everyday grind. Whether playing with friends or watching major matches on TV, netball holds a special place in my heart.</p>   
          </div>
          <div class="image">
            <img src="https://i.postimg.cc/G2CdnSVZ/IMG-20220912-WA0021.jpg"  width="200px" height="200px" alt=""> 
          </div>
        </div>
      </div>
    </div>
  </div>
<br>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.animated-border {
  animation: border-animation 5s infinite alternate;
}

@keyframes border-animation {
  0% {
    border-width: 5px;
  }
  100% {
    border-width: 10px;
  }
}
.box {
  width: 1000px;
  background-color: white;
  border: 5px solid fuchsia;
  padding: 20px;
  border-radius: 10px;
}

.section {
  margin-bottom: 20px;
}

.heading {
  text-align: center;
  font-family: 'Lobster', cursive;
}

.content {
  display: flex;
}
.text {
  text-align: center;
  margin-top: 5%;
  font-style: italic;
}

.image {
  flex: 1;
  text-align: center;
}

#about-me {
  flex: 2;
  padding-left: 20px;
}
#hobbies {
  flex: 2;
  padding-right: 20px;
}
</style>


