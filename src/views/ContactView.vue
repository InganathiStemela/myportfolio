<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-u7n9b/uDZ8aQX6Gp7jpFVogqddmFU2e9cIBWhkVoCsfH6t/kY9e0Ixmhp4i6AzN" crossorigin="anonymous">
 <section class="contact-page-section">
  <div class="container">
      <div class="sec-title">
          <div class="title">Contact Us</div>
            <h2>Let's Get in Touch.</h2>
        </div>
        <div class="inner-container">
          <div class="row clearfix">
                <div class="form-column col-md-8 col-sm-12 col-xs-12">
                  <div class="inner-column">
                        <div class="contact-form">
                          <form action="https://formspree.io/f/xdoqoqjz" class="contact-form" method="post">
                                <div class="row clearfix">
                                    <div class="form-group col-md-6 col-sm-6 co-xs-12">
                                        <input type="text" name="name" value="" placeholder="Name" required>
                                    </div>
                                    <div class="form-group col-md-6 col-sm-6 co-xs-12">
                                        <input type="email" name="email" value="" placeholder="Email" required>
                                    </div>
                                    <div class="form-group col-md-6 col-sm-6 co-xs-12">
                                        <input type="text" name="subject" value="" placeholder="Subject" required>
                                    </div>
                                    <div class="form-group col-md-6 col-sm-6 co-xs-12">
                                        <input type="text" name="phone" value="" placeholder="Phone" required>
                                    </div>
                                    <div class="form-group col-md-12 col-sm-12 co-xs-12">
                                        <textarea name="message" placeholder="Message"></textarea>
                                    </div>
                                    <div class="form-group col-md-12 col-sm-12 co-xs-12">
                                        <button type="submit" class="theme-btn btn-style-one">Send Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>                
                    </div>
                </div>
                
                <div class="info-column col-md-4 col-sm-12 col-xs-12">
                  <div class="inner-column">
                      <h2>Contact Info</h2>
                        <ul class="list-info">
                          <li><i class="fas fa-globe"></i>31566 Cosmos Str, Dunoon, Milnerton, Cape Town, Western Cape, 7441</li>
                            <li><i class="far fa-envelope"></i>inganathistemela13@gmail.com</li>
                            <li><i class="fas fa-phone"></i>27-810-891-443 <br> 27-671-877-320</li>
                        </ul>
                        <ul class="social-icon-four">
                            <li class="follow">Follow on: </li>
                            <li><a href="https://www.facebook.com/inganathi.stemela/"><i class="fa-brands fa-facebook"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/inganathi-stemela-5624362b6/"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/InganathiStemela"><i class="fa-brands fa-github"></i></a></li>
                          </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</section>
</template>

<style>
.container{
  margin-top: -90px;
}
li,ul{
  list-style:none;
  padding:0;
  margin:0;
}
.sec-title{
  position:relative;
  padding-bottom:40px
}
.sec-title .title{
  position:relative;
  color:fuchsia;
  font-size:18px;
  font-weight:700;
  padding-right:50px;
  margin-bottom:15px;
  display:inline-block;
  text-transform:capitalize;
  font-family: 'Lobster', cursive;
}
.sec-title .title:before{
  position:absolute;
  content:'';
  right:0;
  bottom:7px;
  width:40px;
  height:1px;
  background-color:white
}
.sec-title h2{
  position:relative;
  color:black;
  font-size:36px;
  font-weight:700;
  line-height:1.5em;
  display:block;
  font-family: 'Courier New', Courier, monospace;
}
.sec-title.light h2{
  color:black
}
.contact-page-section{
  position:relative;
  padding-top:110px;
  padding-bottom: 110px;
}
.contact-page-section .inner-container{
  position:relative;
  z-index:1;
  background-color:fuchsia;
  box-shadow:0 0 15px 5px black
}
.contact-page-section .form-column{
  position:relative;
  padding:0 0 0 15px
}
.contact-page-section .form-column .inner-column{
  position:relative;
  padding:60px 45px 30px;
  background-color:white
}
.contact-page-section .info-column{
  position:relative
}
.contact-page-section .info-column .inner-column{
  position:relative;
  padding:60px 35px
}
.contact-page-section .info-column h2{
  position:relative;
  color:black;
  font-size:30px;
  font-weight:700;
  line-height:1.4em;
  margin-bottom:45px;
  font-family: 'Lobster', cursive;
}
.contact-page-section .info-column .list-info{
  position:relative;
  margin-bottom:60px
}
.contact-page-section .info-column .list-info li{
  position:relative;
  margin-bottom:25px;
  font-size:18px;
  color:black;
  line-height:1.8em;
  padding-left:45px;
  font-family: 'Lobster', cursive;
}
.contact-page-section .info-column .list-info li:last-child{
  margin-bottom:0
}
.contact-page-section .info-column .list-info li i{
  position:absolute;
  left:0;
  top:8px;
  color:black;
  font-size:30px
}
.contact-form{
  position:relative
}
.contact-form .form-group{
  position:relative;
  margin-bottom:20px
}
.contact-form input[type=text],.contact-form input[type=email],.contact-form textarea{
  position:relative;
  display:block;
  width:100%;
  height:60px;
  color:black;
  font-size:14px;
  line-height:38px;
  padding:10px 30px;
  border:2px solid black;
  background-color:white;
  transition:all .3s ease;
  -ms-transition:all .3s ease;
  -webkit-transition:all .3s ease;
  font-style: italic;
}
.contact-form input[type=text]:focus,.contact-form input[type=email]:focus,.contact-form textarea:focus{
  border-color:fuchsia
}
.contact-form textarea{
  height:250px;
  resize:none
}
.contact-form .theme-btn{
  font-size:16px;
  font-weight:700;
  margin-top:10px;
  text-transform:capitalize;
  padding:16px 39px;
  font-family:Arimo,sans-serif;
  background:fuchsia;
  display:inline-block;
  position:relative;
  line-height:24px;
  cursor:pointer;
  color:black;
  font-family: 'Courier New', Courier, monospace;
}
.contact-form .theme-btn:hover{
  color:fuchsia;;
  background-color: black;
}
.contact-form input.error,.contact-form select.error,.contact-form textarea.error{
  border-color:red!important
}
.contact-form label.error{
  display:block;
  line-height:24px;
  padding:5px 0 0;
  margin:0;
  text-transform:uppercase;
  font-size:12px;
  color:red;
  font-weight:500
}
.social-icon-four{
  position:relative
}
.social-icon-four li{
  position:relative;
  margin-right:18px;
  display:inline-block
}
.social-icon-four li.follow{
  color:black;
  font-weight:600;
  font-size:24px;
  display:block;
  margin-bottom:20px
}
.social-icon-four li a{
  position:relative;
  font-size:20px;
  color:black;
  -webkit-transition:all .3s ease;
  -ms-transition:all .3s ease;
  -o-transition:all .3s ease;
  -moz-transition:all .3s ease;
  transition:all .3s ease
}
.social-icon-four li a:hover{
  color:black
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