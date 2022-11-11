import React from 'react'
import "./style.css"
import "./responsive.css"
const Home = () => {
  return (
    <div>
    <header class="header">
    <a href="#" class="logo"><img src="/images/logo.png" alt="Main-Logo" /><span>EduLearn</span></a>
    <nav class="navbar">
      <ul class="nav-list">
        <li><a href="#home-section" class="nav-link home-link">Home</a></li>
        <li><a href="#about-section" class="nav-link about-link">About</a></li>
        <li><a href="#top-rated" class="nav-link home-link">Courses</a></li>
        <li><a href="#blog" class="nav-link portfolio-link">Blog</a></li>
        <li><a href="#contact-section" class="nav-link contact-link">Contact</a></li>
      </ul>
    </nav>

    <div class="icons" style={{color:"var(--white)"}}>
      <ion-icon name="list-outline" class="icon" id="menu-btn"></ion-icon>
      <ion-icon name="search-outline" class="icon" id="search-btn"></ion-icon>
      <ion-icon name="cart-outline" class="icon" id="cart-btn"></ion-icon>
      <ion-icon name="person-outline" class="icon" id="login-btn"></ion-icon>
    </div>

    <div class="search-form">
      <form action="">
        <input
          type="search"
          name=""
          id="search-box"
          placeholder="search here..."
        />
        <label for="search-box">
          <ion-icon name="search-outline"></ion-icon>
        </label>
      </form>
    </div>

    <div class="shopping-cart">
      <h2>No products in the cart.</h2>
  </div>

    <div class="login-form">
      <form action="">
        <h3>Login Now</h3>
        <input type="email" name="" placeholder="UserName" />
        <input type="password" name="" placeholder="Password" />
        <p>forgot your password? <a href="#">click here</a></p>
        <p>Don't have an account! <a href="#">create now</a></p>
        <input type="submit" value="Login Now" class="btn" />
      </form>
    </div>
  </header>
{/*Home Section*/}
  <section class="home-section section" id="home-section">
    <div class="container grid grid-two-col">
      <div class="home-data">
        <h1>A learning platform that helps you to learning faster</h1>
        <p>
          World-class training and development programs developed by top
          teachers
        </p>
        <a href="#top-rated" class="btn">Explore all Courses</a>
      </div>
      <div class="home-img">
        <img src="./images/home.png" alt="" class="home-pic" />
        <div class="img-bg"></div>
        <div class="img-bg-1"></div>
      </div>
    </div>
  </section>

 {/*about us section*/}
  <section class="about-section section" id="about-section">
    <div class="container grid grid-two-col">
      <div class="about-img grid grid-two-col">
        <div class="img-1">
          <img src="./images/about - 1.jpg" alt="" />
        </div>
        <div class="img-2">
          <img src="./images/about - 2.jpg" alt="" />
          <img src="./images/about - 3.jpeg" alt="" />
        </div>
      </div>
      <div class="about-data">
        <h2>
          Whether you want to learn or to share what you know you’ve come to
          the right place
        </h2>
        <p>
          World-class training and development programs developed by top
          teachers. Build skills with courses, certificates, and degrees
          online from world-class universities and companies.
        </p>
        <h3>
          <ion-icon name="checkmark-outline"></ion-icon>Get access to 4,000+
          of our top courses
        </h3>
        <h3>
          <ion-icon name="checkmark-outline"></ion-icon>Popular topics to
          learn now
        </h3>
        <h3>
          <ion-icon name="checkmark-outline"></ion-icon>Find the right
          instructor for you
        </h3>
        <a href=""><ion-icon name="play"></ion-icon>Play Now</a>
      </div>
    </div>
  </section>

 {/*top rated learning tutorials*/}
  <section class="top-rated section" id="top-rated">
    <h1 class="primary-heading">Top Rated Learning Tutorials</h1>
    <div class="container">
      <div class="top-btn">
        <div class="btn t-btn" data-btn-num="0">all</div>
        <div class="btn t-btn" data-btn-num="1">cooking</div>
        <div class="btn t-btn" data-btn-num="2">finance</div>
        <div class="btn t-btn" data-btn-num="3">health</div>
        <div class="btn t-btn" data-btn-num="4">lifestyle</div>
      </div>

      <div class="tutorials grid grid-four-col">
        {/* start*/}
        <div class="course t-btn--0 t-btn--1">
          <div class="cou-img">
            <img src="./images/top rated - 1.jpeg" alt="" />
          </div>
          <div class="cou-data">
            <div class="cou-top">
              <a href="#">Cooking</a>
              <p>Free</p>
            </div>
            <p href="#" class="top-heading">
              Absolute Beginners Cooking course
            </p>
            <div class="instructor">
              <img src="./images/profile - 1.jpg" alt="" />
              <p>Tim Burton</p>
            </div>
            <div class="review">
              <div class="user">
                <ion-icon name="person-outline"></ion-icon>
                <p>34</p>
              </div>
              <div class="user">
                <ion-icon name="book-outline"></ion-icon>
                <p>10</p>
              </div>
              <div class="stars">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half"></ion-icon>
              </div>
            </div>
          </div>
        </div>

        <div class="course t-btn--0 t-btn--2">
          <div class="cou-img">
            <img src="./images/top rated - 2.jpg" alt="" />
          </div>
          <div class="cou-data">
            <div class="cou-top">
              <a href="#">finance</a>
              <p>$20</p>
            </div>
            <p href="#" class="top-heading">Web Designing with Devon koss</p>
            <div class="instructor">
              <img src="./images/profile - 2.jpeg" alt="" />
              <p>Devon Koss</p>
            </div>
            <div class="review">
              <div class="user">
                <ion-icon name="person-outline"></ion-icon>
                <p>22</p>
              </div>
              <div class="user">
                <ion-icon name="book-outline"></ion-icon>
                <p>20</p>
              </div>
              <div class="stars">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
               <ion-icon name="star-half"></ion-icon> 
              </div>
            </div>
          </div>
        </div>
        
        <div class="course t-btn--0 t-btn--3">
          <div class="cou-img">
            <img src="./images/top rated - 3.jpeg" alt="" />
          </div>
          <div class="cou-data">
            <div class="cou-top">
              <a href="#">health</a>
              <p>$21</p>
            </div>
            <p href="#" class="top-heading">
              basic level youth health and cooking
            </p>
            <div class="instructor">
              <img src="./images/profile - 3.jpg" alt="" />
              <p>Fred Hyman</p>
            </div>
            <div class="review">
              <div class="user">
                <ion-icon name="person-outline"></ion-icon>
                <p>52</p>
              </div>
              <div class="user">
                <ion-icon name="book-outline"></ion-icon>
                <p>60</p>
              </div>
              <div class="stars">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half"></ion-icon>
              </div>
            </div>
          </div>
        </div>
       
        <div class="course t-btn--0 t-btn--4">
          <div class="cou-img">
            <img src="./images/top rated - 4.jpeg" alt="" />
          </div>
          <div class="cou-data">
            <div class="cou-top">
              <a href="#">lifestyle</a>
              <p>$30</p>
            </div>
            <p href="#" class="top-heading">
              drawing and painting course for children
            </p>
            <div class="instructor">
              <img src="./images/profile - 2.jpeg" alt="" />
              <p>Calvert Hart</p>
            </div>
            <div class="review">
              <div class="user">
                <ion-icon name="person-outline"></ion-icon>
                <p>29</p>
              </div>
              <div class="user">
                <ion-icon name="book-outline"></ion-icon>
                <p>56</p>
              </div>
              <div class="stars">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half"></ion-icon>
              </div>
            </div>
          </div>
        </div>
       
        <div class="course t-btn--0 t-btn--4">
          <div class="cou-img">
            <img src="./images/top rated - 5.jpeg" alt="" />
          </div>
          <div class="cou-data">
            <div class="cou-top">
              <a href="#">lifestyle</a>
              <p>$38</p>
            </div>
            <p href="#" class="top-heading">
              wordpress beginner to advanced course
            </p>
            <div class="instructor">
              <img src="./images/profile - 2.jpeg" alt="" />
              <p>Calvert Hart</p>
            </div>
            <div class="review">
              <div class="user">
                <ion-icon name="person-outline"></ion-icon>
                <p>29</p>
              </div>
              <div class="user">
                <ion-icon name="book-outline"></ion-icon>
                <p>56</p>
              </div>
              <div class="stars">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                
              </div>
            </div>
          </div>
        </div>
       
        <div class="course t-btn--0 t-btn--4">
          <div class="cou-img">
            <img src="./images/top rated - 6.jpeg" alt="" />
          </div>
          <div class="cou-data">
            <div class="cou-top">
              <a href="#">lifestyle</a>
              <p>$48</p>
            </div>
            <p href="#" class="top-heading">
              complete digital marketing course
            </p>
            <div class="instructor">
              <img src="./images/profile - 3.jpg" alt="" />
              <p>Rolf Dawson</p>
            </div>
            <div class="review">
              <div class="user">
                <ion-icon name="person-outline"></ion-icon>
                <p>29</p>
              </div>
              <div class="user">
                <ion-icon name="book-outline"></ion-icon>
                <p>56</p>
              </div>
              <div class="stars">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                
              </div>
            </div>
          </div>
        </div>
       
        <div class="course t-btn--0 t-btn--1">
          <div class="cou-img">
            <img src="./images/top rated - 7.jpeg" alt="" />
          </div>
          <div class="cou-data">
            <div class="cou-top">
              <a href="#">cooking</a>
              <p>$33</p>
            </div>
            <p href="#" class="top-heading">online healthy cooking course</p>
            <div class="instructor">
              <img src="./images/profile - 1.jpg" alt="" />
              <p>Bud Barker</p>
            </div>
            <div class="review">
              <div class="user">
                <ion-icon name="person-outline"></ion-icon>
                <p>19</p>
              </div>
              <div class="user">
                <ion-icon name="book-outline"></ion-icon>
                <p>26</p>
              </div>
              <div class="stars">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                
              </div>
            </div>
          </div>
        </div>
       
        <div class="course t-btn--0 t-btn--2">
          <div class="cou-img">
            <img src="./images/top rated - 8.jpg" alt="" />
          </div>
          <div class="cou-data">
            <div class="cou-top">
              <a href="#">finance</a>
              <p>$18</p>
            </div>
            <p href="#" class="top-heading">the ultimate app making course</p>
            <div class="instructor">
              <img src="./images/profile - 3.jpg" alt="" />
              <p>Bryant Floyd</p>
            </div>
            <div class="review">
              <div class="user">
                <ion-icon name="person-outline"></ion-icon>
                <p>12</p>
              </div>
              <div class="user">
                <ion-icon name="book-outline"></ion-icon>
                <p>26</p>
              </div>
              <div class="stars">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>

  {/* Category */}
  <section class="cat-section section" id="cat-section">
    <h1 class="primary-heading">Featured topics by category</h1>
    <div class="container grid grid-four-col">
      <div class="category">
        <img src="./images/Design.png" alt="" />
        <h3>Design</h3>
      </div>
      <div class="category">
        <img src="./images/chemistry.png" alt="" />
        <h3>chemistry</h3>
      </div>
      <div class="category">
        <img src="./images/technology.png" alt="" />
        <h3>technology</h3>
      </div>
      <div class="category">
        <img src="./images/medical.png" alt="" />
        <h3>medical</h3>
      </div>
      <div class="category">
        <img src="./images/math.png" alt="" />
        <h3>math</h3>
      </div>
      <div class="category">
        <img src="./images/food recepi.png" alt="" />
        <h3>food & recipe</h3>
      </div>
      <div class="category">
        <img src="./images/language.png" alt="" />
        <h3>language</h3>
      </div>
      <div class="category">
        <img src="./images/art-book.png" alt="" />
        <h3>art & book</h3>
      </div>
    </div>
  </section>

 {/* Details */}
  <section class="det-section section" id="det-section">
    <h1 class="primary-heading">
      Whether you want to learn ,<br />
      you've come to the right place
    </h1>
    <div class="container det grid grid-three-col">
      <div class="details">
        <img src="./images/f-icon-1.png" alt="" />
        <h2>155,000 video courses</h2>
        <p>
          Whether you want to learn or to share what you know, you've come to
          the right place.
        </p>
      </div>
      <div class="details">
        <img src="./images/f-icon-2.png" alt="" />
        <h2>Top industry instructors</h2>
        <p>
          Whether you want to learn or to share what you know, you've come to
          the right place.
        </p>
      </div>
      <div class="details">
        <img src="./images/f-icon-3.png" alt="" />
        <h2>lifetime access</h2>
        <p>
          Whether you want to learn or to share what you know, you've come to
          the right place.
        </p>
      </div>
    </div>
    <div class="container new-con grid grid-two-col">
      <div class="info in-1">
        <p>Become an instructor</p>
        <h2>Best Instructors from around the world</h2>
        <a href="#" class="btn">Start Teaching</a>
      </div>
      <div class="info in-2">
        <p>For Business</p>
        <h2>Get unlimited access to 6,000+ of courses</h2>
        <a href="#" class="btn">Try For Business</a>
      </div>
    </div>
  </section>

 {/* testimonials */}
  <section class="testimonial section" id="testimonial">
    <h1 class="primary-heading">What people say about us</h1>
    <div class="container">
     {/* Swiper */}
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide grid-two-col grid">
            <img src="./images/test - 1.jpg" alt="" />
            <div class="test-data">
              <h3>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Harum est ipsa illum recusandae. Doloribus corporis earum
                molestiae quia consequatur voluptatibus.
              </h3>
              <h2>James Smith</h2>
              <p>Student</p>
            </div>
          </div>
          <div class="swiper-slide grid-two-col grid">
            <img src="./images/test - 2.jpeg" alt="" />
            <div class="test-data">
              <h3>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Harum est ipsa illum recusandae. Doloribus corporis earum
                molestiae quia consequatur voluptatibus.
              </h3>
              <h2>James Smith</h2>
              <p>Student</p>
            </div>
          </div>
          <div class="swiper-slide grid-two-col grid">
            <img src="./images/test - 3.jpg" alt="" />
            <div class="test-data">
              <h3>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Harum est ipsa illum recusandae. Doloribus corporis earum
                molestiae quia consequatur voluptatibus.
              </h3>
              <h2>James Smith</h2>
              <p>Student</p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
   {/* Work Number Count Section  */}
    <div class="count-section section-work-data">
      <div class="container grid grid-four-col">
        <div>
          <h2 class="count-number" data-num="778">0+</h2>
          <p>Hours Of Learning</p>
        </div>
        <div>
          <h2 class="count-number" data-num="1300">0+</h2>
          <p>Enrolled Learners</p>
        </div>
        <div>
          <h2 class="count-number" data-num="658">0+</h2>
          <p>Online Instructors</p>
        </div>
        <div>
          <h2 class="count-number" data-num="500">0+</h2>
          <p>Satisfaction rate</p>
        </div>
      </div>
    </div>
  </section>

 {/* blog */}
  <section class="blog section" id="blog">
    <h1 class="primary-heading">Get from our news & article</h1>
    <div class="container grid grid-three-col">
      <div class="news">
        <img src="./images/news - 1.jpeg" alt="" />
        <div class="news-data">
          <div class="user-name">
            <div class="user">
              <ion-icon name="person-outline"></ion-icon>
              <p>Fred Hyman</p>
            </div>
            <div class="user">
              <ion-icon name="chatbox-outline"></ion-icon>
              <p>26 comments</p>
            </div>
          </div>
          <h2>thoughts for educators on school reopening</h2>
          <p>
            In order to write the perfect blog post, you need to break your
            content up into paragraphs....
          </p>
        </div>
      </div>
      <div class="news">
        <img src="./images/news - 2.jpeg" alt="" />
        <div class="news-data">
          <div class="user-name">
            <div class="user">
              <ion-icon name="person-outline"></ion-icon>
              <p>Fred Hyman</p>
            </div>
            <div class="user">
              <ion-icon name="chatbox-outline"></ion-icon>
              <p>62 comments</p>
            </div>
          </div>
          <h2>information about teacher certification</h2>
          <p>
            In order to write the perfect blog post, you need to break your
            content up into paragraphs....
          </p>
        </div>
      </div>
      <div class="news">
        <img src="./images/news - 3.jpeg" alt="" />
        <div class="news-data">
          <div class="user-name">
            <div class="user">
              <ion-icon name="person-outline"></ion-icon>
              <p>Fred Hyman</p>
            </div>
            <div class="user">
              <ion-icon name="chatbox-outline"></ion-icon>
              <p>21 comments</p>
            </div>
          </div>
          <h2>we are changing the way the world learns</h2>
          <p>
            In order to write the perfect blog post, you need to break your
            content up into paragraphs....
          </p>
        </div>
      </div>
    </div>

    <div class="container ads grid grid-two-col ">
        <div class="ad-data">
          <h2>Start for Business</h2>
          <p>Get unlimited access to 5,500+ of our top courses for your team</p>
          <a href="#" class="btn">start for business</a>
        </div>
        <div class="ad-img">
          <img src="./images/business.png" alt=""/>
        </div>
    </div>
  </section>

 {/* contact  */}
  <section class="contact-section section" id="contact-section">
      <h1 class="primary-heading">Get Support from our Team</h1>
      <div class="container boxes grid grid-three-col ">
          <div class="contact-box">
              <ion-icon name="call-outline"></ion-icon>
              <h2>Telephone</h2>
              <p>+987654321</p>
              <p>+987654321</p>
          </div>
          <div class="contact-box">
              <ion-icon name="mail-outline"></ion-icon>
              <h2>Our Mail</h2>
              <p>info@edulearn.com</p>
              <p>info@edulearn.com</p>
          </div>
          <div class="contact-box">
              <ion-icon name="location-outline"></ion-icon>
              <h2>Location</h2>
              <p>street no 01, near main road</p>
              <p>Maharashtra, India</p>
          </div>
      </div>
      
     
  </section>

 {/* footer */}
  <footer class="section footer">
      <div class="container grid grid-four-col">
          <div class="f-about">
              <a href="#" class="logo"><img src="/images/logo.png" alt="Main-Logo" /><span>EduLearn</span></a>
              <p>We support programs that create advancement for people</p>
              <div class="f-social-links">
                  <a href="https://www.instagram.com/?hl=en" target="_blank"><ion-icon class="icon" name="logo-instagram"></ion-icon></a>
                  <a href="https://www.facebook.com/" target="_blank"><ion-icon class="icon" name="logo-facebook"></ion-icon></a>
                  <a href="https://discord.com/" target="_blank"><ion-icon class="icon" name="logo-discord"></ion-icon></a>
              </div>
          </div>

          <div class="f-links">
              <h3>Links</h3>
              <ul>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#home-section">Home</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#about-section">About</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#top-rated">course</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#blog">blog</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#contact-section">Contact</a></li>
              </ul>
          </div>

          <div class="f-service">
              <h3>UseFul Links</h3>
              <ul>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#portfolio-section">Design</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#portfolio-section">chemistry</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#portfolio-section">technology</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#portfolio-section">medical</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#portfolio-section">Food & recipe</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#portfolio-section">language</a></li>
              </ul>
          </div>

          <div class="f-address"> 
              <h3>Have a Questions?</h3>
              <address>
                <div>
                  <p><span><ion-icon name="location-outline"></ion-icon></span> <a href="https://goo.gl/maps/egiuCAXr4Xpg5F3z8">Maharashtra, India</a> </p>
                </div>    
                <div>
                  <p><span><ion-icon name="call-outline"></ion-icon></span> <a href="tel:+91987654321"> +91 987654321 </a></p>
                </div>
                <div>
                  <p><span><ion-icon name="mail-outline"></ion-icon></span> <a href="mailto:info@nevillejarvis.com"> info@edulearn.com </a> </p>
                </div>
              </address>
            </div>

      </div>

          <div class="credits"> © Copyright 2022 Yogesh Dhande All rights reserved.</div>
          <div class="scrollTop-style">
              <ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>
          </div>
  </footer>

    
    
    
    
    </div>
  )
}

export default Home