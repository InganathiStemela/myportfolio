<!-- <template>
  <div>
    <br>
    <div class="container-fluid">
      <h1 class="title">Who am I?</h1>
      <br>
  <div class="image">
    <img src="https://i.postimg.cc/445P40Yf/IMG-20240222-WA0019-1.jpg" width="180px" height="180px" alt="My Image">
  </div>
  <div class="about">
    <p>I am a student at Life Choices Coding Academy, I am respectful and loving. I'm a punctual, a hard worker and a determined person, i love challenging activities. I'm a dependable, committed individual that is adamant about doing well at work and finding the most independent solution to difficulties. My greatest asset is that I'm a people person who likes to meet new people and get to know them. I manage to find some common ground with everyone, even if it takes some ingenuity. I'm a motivated, industrious person who doesn't back down from a task. I consider myself to be an honest and straightforward individual that strives for fairness in whatever I do and doesn't think it's acceptable to deceive others.
    </p>
  </div>
</div>
<br>
  <div class="container-fluid">
    <h1 class="title">Hobbies</h1>
    <br>
    <div class="image">
        <img src="https://i.postimg.cc/G2CdnSVZ/IMG-20220912-WA0021.jpg" width="200px" height="200px" alt="My Image">
      </div>
  
  <div class="about">
        <p>
         Netball has been a lifelong passion for me since childhood. I fondly remember following my sister to the gym then came back and created my own ball using plastics so that I can have a ball to play with my peers, pretending to be a superstar around my peers. As I grew, my love for the game strengthened. While I never pursued it professionally, netball remains a cherished hobby, offering moments of joy and excitement, serving as an escape from the everyday grind. Whether playing with friends or watching major matches on TV, netball holds a special place in my heart.
        </p>
      
  </div>
  </div>
  <br>
  </div>
</template>
<style  scoped >
.container-fluid {
  border: 5px solid black; 
  padding: 20px;
}

.title {
  text-align: center; 
  border-bottom: 5px solid black;
  display: inline-block; 
  margin-bottom: 20%;
  margin-top: 20%;
margin: 0 0 0 33%;
}
.image{
  margin: 0 0 0 33%;
}
.about p {
  font-style: italic; 
  justify-content: center;
}
</style> -->

<template>
  <div class="container">
    <div class="box">
      <div class="image">
        <h1 class="heading">Who am I?</h1>
        <img src="https://i.postimg.cc/445P40Yf/IMG-20240222-WA0019-1.jpg" width="400px" height="400px" alt="">
      </div>
      <div class="text" id="about-me">
        <p><b>Introduction:</b> I am Inganathi Stemela, born and breed in Cape Town. I matriculated in 2021 at Sinenjongo High School.</p>
        <p><b>Date of Birth:</b> June 03, 2003</p>
        <p><b>Subjects:</b>Life Sciences,
                           Physical Sciences,
                          Computer Application Technology,
                          Mathematics,
                          English(FAL),
                          IsiXhosa(Home language)</p>    
      </div>
    </div>
    <div class="box">
      <div class="image">
        <h1 class="heading">Hobbies?</h1>
      </div>
      <div class="text" id="about-me">
        <p>
         Netball has been a lifelong passion for me since childhood. I fondly remember following my sister to the gym then came back and created my own ball using plastics so that I can have a ball to play with my peers, pretending to be a superstar around my peers. As I grew, my love for the game strengthened. While I never pursued it professionally, netball remains a cherished hobby, offering moments of joy and excitement, serving as an escape from the everyday grind. Whether playing with friends or watching major matches on TV, netball holds a special place in my heart.
        </p>   
    <img src="https://i.postimg.cc/G2CdnSVZ/IMG-20220912-WA0021.jpg" width="400px" height="400px" alt=""> 
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  display: flex;
  align-items: center;
  padding: 20px;
  border: 2px solid fuchsia;
  border-radius: 10px;
}
.heading{
  color: black;
  }
.image {
  text-align: center;
}
.text {
  margin-left: 20px;
  color: black; 
}
</style>

