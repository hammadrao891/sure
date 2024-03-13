import React, { useEffect, useState } from "react";
import "./global.c12ee4b9163e7c1766c1.css";
import "./index.5165d336f6d347ebc651.css";
import Swiper from "swiper";
import 'swiper/swiper-bundle.css';
import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import '../scss/utilities/__effect-carousel.scss';
import '../scss/pages/home.scss';

// Swiper
// import Swiper from 'swiper';
import EffectCarousel from '../utils/effect-carousel.esm.js';
import {Thumbs, Autoplay, Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// GSAP
import {gsap} from 'gsap';

function App() {
  const [active,setActive] = useState({one:true,two:false,three:false,four:false,five:false})
    let animationFrames = []; // Define animationFrames array here

    useEffect(() => {
      const heroCarousel = () => {
        Swiper.use([Thumbs]);
    
        const swiperThumbsContainer = document.querySelector('.swiper-carousel-pagination');
        const swiperMainContainer = document.querySelector('.swiper-carousel');
    
        if (swiperMainContainer) {
            // Store a reference for the animation frame request
            let animationFrameRequest = [];
    
            function updateProgressBars(activeIndex, duration) {
                const progressBars = swiperThumbsContainer.querySelectorAll('.progress-bar');
    
                progressBars.forEach((bar, index) => {
                    // Cancel the ongoing animation for this bar
                    if (animationFrameRequest[index]) {
                        cancelAnimationFrame(animationFrameRequest[index]);
                    }
    
                    bar.style.transform = 'scaleX(0)';
    
                    if (index === activeIndex) {
                        animateProgressBar(bar, duration, index);
                    }
                });
            }
    
            function animateProgressBar(progressBar, duration, index) {
                let startTime;
                let step = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    let elapsed = timestamp - startTime;
                    let progress = Math.min(elapsed / duration, 1);
    
                    progressBar.style.transform = `scaleX(${progress})`;
    
                    if (elapsed < duration) {
                        animationFrameRequest[index] = requestAnimationFrame(step);
                    }
                };
                animationFrameRequest[index] = requestAnimationFrame(step);
            }
    
            let swiperThumbs = new Swiper(swiperThumbsContainer, {
                spaceBetween: 10,
                slidesPerView: 'auto',
                watchSlidesProgress: true,
            });
    
            const swiperMain = new Swiper(swiperMainContainer, {
                modules: [EffectCarousel, Autoplay, Pagination],
                slidesPerView: 'auto',
                noSwipingClass: swiperMainContainer.className,
                init: false,
                loop: true,
                autoplay: {
                    delay: 6000,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                },
                effect: 'carousel',
                carouselEffect: {
                    sideSlides: 1,
                },
                thumbs: {
                    swiper: swiperThumbs,
                },
                pagination: {
                    el: swiperMainContainer.parentNode.querySelector('.swiper-pagination'),
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="${className}">
                                    <svg width="20" height="20">
                                        <circle class="bg" r="7" cx="10" cy="10" fill="none"></circle>
                                        <circle class="progress" r="7" cx="10" cy="10" fill="none"></circle>
                                    </svg>
                                </span>`;
                    },
                },
                breakpoints: {
                    0: {
                        initialSlide: 0,
                    },
                    768: {
                        initialSlide: 0,
                    }
                },
                on: {
                    init: (swiper) => {
                        const activeSlide = swiper.slides[swiper.activeIndex];
                        const activeCaption = activeSlide.querySelector('.caption');
    
                        Array.from(swiper.slides).forEach((slide) => {
                            gsap.set(slide.querySelector('.caption'), {
                                opacity: 0,
                                scale: 0.75
                            });
                        });
    
                        gsap.to(activeCaption, {
                            duration: .2,
                            opacity: 1,
                            scale: 1
                        });
    
                        let realIndex = swiper.realIndex;
                        updateProgressBars(realIndex, swiper.params.autoplay.delay || 5000);
                    },
                    slideChange: (swiper) => {
                        const activeSlide = swiper.slides[swiper.activeIndex];
                        const activeCaption = activeSlide.querySelector('.caption');
    
                        Array.from(swiper.slides).forEach((slide) => {
                            if (activeCaption !== slide.querySelector('.caption')) {
                                gsap.to(slide.querySelector('.caption'), {
                                    duration: .2,
                                    opacity: 0,
                                    scale: 0.75
                                });
                            }
                        });
                    },
                    slideChangeTransitionStart: (swiper) => {
                        let realIndex = swiper.realIndex;
                        updateProgressBars(realIndex, swiper.params.autoplay.delay || 5000);
                    },
                    slideChangeTransitionEnd: (swiper) => {
                        const activeSlide = swiper.slides[swiper.activeIndex];
                        const activeCaption = activeSlide.querySelector('.caption');
    
                        gsap.to(activeCaption, {
                            duration: .2,
                            opacity: 1,
                            scale: 1
                        });
                    }
                }
            });
    
            // swiperMain.on('init', (e) => {
            //     e.slideNext();
            // });
    
            swiperMain.init();
        }
    };
        const customerTestimonials = () => {
            // Function to update padding based on the active element
            function updatePadding() {
                const children = document.querySelectorAll('.js-customer-testimonials-item');
                const activeElement = document.querySelector('.js-customer-testimonials-item.active');
        
                if (!activeElement) return;
        
                if (window.innerWidth > 1023) {
        
                    let padding = 0;
        
                    children.forEach((child) => {
                        child.classList.remove('prev');
                        child.classList.remove('next');
                    });
        
                    let currentElement = activeElement.previousElementSibling;
                    if (currentElement) {
                        currentElement.classList.add('prev');
                    }
                    while (currentElement) {
                        padding += 48;
                        gsap.killTweensOf(currentElement);
                        gsap.to(currentElement, {
                            duration: 0.6,
                            paddingTop: padding + 'px',
                            paddingBottom: padding + 'px',
                        });
                        currentElement = currentElement.previousElementSibling;
                    }
        
                    gsap.set(activeElement, {paddingTop: '', paddingBottom: ''});
        
                    padding = 0;
                    currentElement = activeElement.nextElementSibling;
                    if (currentElement) {
                        currentElement.classList.add('next');
                    }
                    while (currentElement) {
                        padding += 48;
                        gsap.killTweensOf(currentElement);
                        gsap.to(currentElement, {
                            duration: 0.6,
                            paddingTop: padding + 'px',
                            paddingBottom: padding + 'px',
                        });
                        currentElement = currentElement.nextElementSibling;
                    }
                } else {
                    children.forEach((child) => {
                        gsap.set(child, {paddingTop: '', paddingBottom: ''});
                    });
                }
            }
        }
        
        const swiperCustomerTestimonials = () => {
            const customerTestimonials = document.querySelector('.js-customer-testimonials');
        
            let swiper;
        
            const createBaseMarkup = () => {
                const swiperDiv = document.createElement('div');
                const swiperWrapperDiv = document.createElement('div');
                const swiperNavigationDiv = document.createElement('div');
                const swiperNavigationPrevDiv = document.createElement('div');
                const swiperNavigationNextDiv = document.createElement('div');
        
                swiperDiv.classList.add('swiper-testimonials');
                swiperWrapperDiv.classList.add('swiper-wrapper');
                swiperNavigationDiv.classList.add('swiper-navigation');
                swiperNavigationPrevDiv.classList.add('swiper-btn', 'swiper-btn-prev');
                swiperNavigationNextDiv.classList.add('swiper-btn', 'swiper-btn-next');
        
                swiperDiv.append(swiperWrapperDiv);
                swiperNavigationDiv.append(swiperNavigationPrevDiv, swiperNavigationNextDiv);
        
                Array.from(customerTestimonials.children).forEach((testimonial) => {
                    const swiperSlideDiv = document.createElement('div');
        
                    swiperSlideDiv.classList.add('swiper-slide');
        
                    swiperSlideDiv.append(testimonial.children[0].cloneNode(true));
        
                    swiperSlideDiv.querySelector('.hidden-info').remove();
        
                    swiperWrapperDiv.append(swiperSlideDiv);
                });
        
                customerTestimonials.parentNode.insertBefore(swiperDiv, customerTestimonials.nextSibling);
                swiperWrapperDiv.parentNode.insertBefore(swiperNavigationDiv, swiperWrapperDiv.nextSibling);
            };
        }        
        heroCarousel();
        customerTestimonials();
        swiperCustomerTestimonials();
        
    }, []);
    const handleItemClick = (event,card) => {
      if (card === "one")
      {
        setActive({one:true,two:false,three:false,four:false,five:false})
      }
      else if (card === "two")
      {
        setActive({one:false,two:true,three:false,four:false,five:false})
      }
      else if (card === "three")
      {
        setActive({one:false,two:false,three:true,four:false,five:false})
      }
      else if (card === "four")
      {
        setActive({one:false,two:false,three:false,four:true,five:false})
      }
      else if (card === "five")
      {
        setActive({one:false,two:false,three:false,four:false,five:true})
      }
      const element = event.currentTarget;

      const classList = element.classList;
      classList.remove('active');
      element.classList.add('active');
      updatePadding();
      updateClickListeners();
  };
  // Initial setup
  updatePadding();
  updateClickListeners();

  // Update padding on window resize
  window.addEventListener('resize', updatePadding);
// };
function updatePadding() {
  const children = document.querySelectorAll('.js-customer-testimonials-item');
  const activeElement = document.querySelector('.js-customer-testimonials-item.active');

  if (!activeElement) return;

  if (window.innerWidth > 1023) {

      let padding = 0;

      children.forEach((child) => {
          child.classList.remove('prev');
          child.classList.remove('next');
      });

      let currentElement = activeElement.previousElementSibling;
      if (currentElement) {
          currentElement.classList.add('prev');
      }
      while (currentElement) {
          padding += 48;
          gsap.killTweensOf(currentElement);
          gsap.to(currentElement, {
              duration: 0.6,
              paddingTop: padding + 'px',
              paddingBottom: padding + 'px',
          });
          currentElement = currentElement.previousElementSibling;
      }

      gsap.set(activeElement, {paddingTop: '', paddingBottom: ''});

      padding = 0;
      currentElement = activeElement.nextElementSibling;
      if (currentElement) {
          currentElement.classList.add('next');
      }
      while (currentElement) {
          padding += 48;
          gsap.killTweensOf(currentElement);
          gsap.to(currentElement, {
              duration: 0.6,
              paddingTop: padding + 'px',
              paddingBottom: padding + 'px',
          });
          currentElement = currentElement.nextElementSibling;
      }
  } else {
      children.forEach((child) => {
          gsap.set(child, {paddingTop: '', paddingBottom: ''});
      });
  }
}
  // Function to add click listeners to non-active items
  function updateClickListeners() {
    const activeEls = document.querySelectorAll('.js-customer-testimonials-item');
    const notActiveEls = document.querySelectorAll('.js-customer-testimonials-item:not(.active)');

    // First, remove click listeners from all items
    activeEls.forEach(item => {
        item.removeEventListener('click', handleItemClick);
    });

    // Then, add click listeners only to non-active items
    notActiveEls.forEach(item => {
        if (window.innerWidth > 1023) {
            item.addEventListener('click', handleItemClick);
        } else {
            item.removeEventListener('click', handleItemClick);
        }
    });
}

    
  return (
    <>
        
        <header>
          
          <nav class="navbar">
            
            <div class="container">
              
              <div class="navbar-header">
                
                <a href="index.html" class="navbar-brand">
                  
                  <img src="img/logo.svg" alt="SurePeople" />
                </a>
                <div class="dropdown js-dropdown js-language-selector">
                  
                  <div class="dropdown-toggler js-dropdown-toggler">
                    English
                  </div>
                  <div class="dropdown-menu">
                    
                    <ul class="dropdown-list">
                      
                      <li class="dropdown-list-item active">
                        English (EN)
                      </li>
                      <li class="dropdown-list-item">Spanish (SP)</li>
                    </ul>
                  </div>
                </div>
                <button type="button" class="navbar-menu-toggler">
                  
                  <span></span> <span></span> <span></span>
                </button>
              </div>
              <div class="navbar-menu">
                
                <div class="decor">
                  
                  <img src="img/ColorsMenu.svg" alt="" />
                </div>
                <ul class="navbar-nav">
                  
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Team Leaders
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Enterprise Solution
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Plans & Pricing
                    </a>
                  </li>
                </ul>
                <div class="navbar-menu-mobile">
                  
                  <ul class="navbar-nav-mobile">
                    
                    <li class="nav-item">
                      
                      <a href="#" class="nav-link js-collapse-menu">
                        Company
                      </a>
                      <div class="collapse-menu js-collapse-menu">
                        
                        <ul class="collapse-menu-list">
                          
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Research
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Team Collaboration
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Portfolio Insights
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Data Integration
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              ESG Research
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Active Ownership
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      
                      <a href="#" class="nav-link js-collapse-menu">
                        Sales
                      </a>
                      <div class="collapse-menu js-collapse-menu">
                        
                        <ul class="collapse-menu-list">
                          
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Research
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Team Collaboration
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Portfolio Insights
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Data Integration
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              ESG Research
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Active Ownership
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Support
                      </a>
                    </li>
                  </ul>
                  <ul class="navbar-nav-buttons">
                    
                    <li class="nav-item">
                      <a href="#" class="btn btn-primary">
                        Login
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="btn btn-blue">
                        Try It Free
                      </a>
                    </li>
                  </ul>
                  <ul class="navbar-nav-social">
                    
                    <li class="nav-item">
                      <a href="#">
                        <img src="img/icons/facebook-2.svg" alt="Facebook" />
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#">
                        <img src="img/icons/linkedin-2.svg" alt="LinkedIn" />
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#">
                        <img src="img/icons/x-2.svg" alt="X" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="navbar-actions">
                
                <ul class="navbar-nav">
                  
                  <li class="nav-item">
                    <a href="#" class="btn btn-primary">
                      Login
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="btn btn-blue">
                      Try It Free
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div id="page-wrapper">
          
          <main>
            
            <section class="shared-hero">
              
              <div class="decor">
                
                <img
                  class="colors d-none d-md-block"
                  src="img/home/ColorsHero.svg"
                  alt=""
                />
                <img
                  class="colors d-block d-md-none"
                  src="img/home/ColorsHero@mobile.svg"
                  alt=""
                />
              </div>
              <div class="container">
                
                <div class="hero-content">
                  
                  <h1 class="heading js-reveal-on-scroll js-split-to-lines">
                    Empowering Leaders
                    <br /> to Achieve Extraordinary
                    <br /> Team Results
                  </h1>
                </div>
                <div class="hero-carousel-module">
                  
                  <div class="decor">
                    
                    <img class="shape" src="img/home/Hexagon.svg" alt="" />
                    <img class="colors" src="img/home/Colors.svg" alt="" />
                  </div>
                  <div class="swiper-carousel-pagination">
                    
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        
                        <div class="swiper-carousel-pagination-bullet">
                          
                          Self-Knowledge <div class="progress-bar"></div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        
                        <div class="swiper-carousel-pagination-bullet">
                          
                          Relationships <div class="progress-bar"></div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        
                        <div class="swiper-carousel-pagination-bullet">
                          
                          Coaching <div class="progress-bar"></div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        
                        <div class="swiper-carousel-pagination-bullet">
                          
                          Meetings <div class="progress-bar"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-carousel">
                    
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        
                        <div class="carousel-slide">
                          
                          <div class="image">
                            <img
                              width="350"
                              height="760"
                              src="img/home/Prism@1x.png"
                              srcset="img/home/Prism@1x.png, img/home/Prism@2x.png 2x"
                              alt="Prism"
                            />
                          </div>
                          <div class="caption">
                            
                            <div class="icon">
                              
                              <img src="img/home/AI.svg" alt="" />
                            </div>
                            <div class="text">
                              
                              <h6 class="title">
                                Self-Knowledge, the Key to Extraordinary
                                Leadership
                              </h6>
                              <p class="paragraph">
                                Understand how you – and each team member – are
                                uniquely wired to perform under pressure, make
                                decisions, and manage conflict.
                              </p>
                            </div>
                            <a href="#" class="action">
                              
                              <img src="img/home/Arrow.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        
                        <div class="carousel-slide">
                          
                          <div class="image">
                            
                            <img
                              width="350"
                              height="760"
                              src="img/home/Advisor@1x.png"
                              srcset="img/home/Advisor@1x.png, img/home/Advisor@2x.png 2x"
                              alt="Advisor"
                            />
                          </div>
                          <div class="caption">
                            
                            <div class="icon">
                              
                              <img src="img/home/AI.svg" alt="" />
                            </div>
                            <div class="text">
                              
                              <h6 class="title">
                                Trusted Relationships Drive High-Performance
                              </h6>
                              <p class="paragraph">
                                Get science-driven advice based on how each
                                person is uniquely wired, so you can build and
                                sustain trusted, productive relationships that
                                drive performance.
                              </p>
                            </div>
                            <a href="#" class="action">
                              
                              <img src="img/home/Arrow.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        
                        <div class="carousel-slide">
                          
                          <div class="image">
                            
                            <img
                              width="350"
                              height="760"
                              src="img/home/Coaching@1x.png"
                              srcset="img/home/Coaching@1x.png, img/home/Coaching@2x.png 2x"
                              alt="Coaching"
                            />
                          </div>
                          <div class="caption">
                            
                            <div class="icon">
                              
                              <img src="img/home/AI.svg" alt="" />
                            </div>
                            <div class="text">
                              
                              <h6 class="title">
                                Coaching Empowers Extraordinary Leaders
                              </h6>
                              <p class="paragraph">
                                Empower your leadership with 'My Coach.' Get
                                actionable advice for team coaching in any
                                situation, tailored to individual strengths and
                                dynamics.
                              </p>
                            </div>
                            <a href="#" class="action">
                              
                              <img src="img/home/Arrow.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        
                        <div class="carousel-slide">
                          
                          <div class="image">
                            
                            <img
                              width="350"
                              height="760"
                              src="img/home/Meeting@1x.png"
                              srcset="img/home/Meeting@1x.png, img/home/Meeting@2x.png 2x"
                              alt="Meetings"
                            />
                          </div>
                          <div class="caption">
                            
                            <div class="icon">
                              
                              <img src="img/home/AI.svg" alt="" />
                            </div>
                            <div class="text">
                              
                              <h6 class="title">
                                The Science Behind Successful Meetings
                              </h6>
                              <p class="paragraph">
                                Leverage science-driven guidance about “How to
                                Approach” and “What to Avoid,” during 1-on-1
                                meetings, based on how you and a team member are
                                wired.
                              </p>
                            </div>
                            <a href="#" class="action">
                              
                              <img src="img/home/Arrow.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
                <div class="hero-content d-none d-md-block">
                  
                  <p class="paragraph js-reveal-on-scroll js-split-to-lines">
                    Managing teams has never been more difficult. We empower
                    leaders to align, develop, and optimize their teams for
                    performance in the flow of work, when they need it most.
                  </p>
                  <div class="buttons">
                    
                    <a href="#" class="btn btn-lg btn-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section class="shared-section pt-0">
              
              <div class="container">
                
                <div class="trusted-by-section">
                  
                  <h6 class="title">Trusted by Top Leaders</h6>
                  <p class="paragraph">in Business, Healthcare, and Sport</p>
                </div>
              </div>
              <div class="trusted-organizations-logos">
                
                <div class="marquee-track">
                  
                  <div class="marquee-collection">
                    
                    <div class="item">
                      
                      <img
                        src="img/logos/Sirtex.svg"
                        width="106"
                        height="40"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/Stratus.svg"
                        width="106"
                        height="45"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/UniversityMassachusettsBoston.svg"
                        width="50"
                        height="66"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/TexasRangers.svg"
                        width="80"
                        height="80"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/iRobot.svg"
                        width="116"
                        height="28"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/Vertex.svg"
                        width="84"
                        height="45"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/CarilionClinic.svg"
                        width="259"
                        height="38"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/H.svg"
                        width="72"
                        height="51"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/MountSinai.svg"
                        width="52"
                        height="64"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/EverSource.svg"
                        width="182"
                        height="22"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/uHealth.svg"
                        width="120"
                        height="40"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/TJX.svg"
                        width="65"
                        height="38"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="marquee-collection">
                    
                    <div class="item">
                      
                      <img
                        src="img/logos/Sirtex.svg"
                        width="106"
                        height="40"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/Stratus.svg"
                        width="106"
                        height="45"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/UniversityMassachusettsBoston.svg"
                        width="50"
                        height="66"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/TexasRangers.svg"
                        width="80"
                        height="80"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/iRobot.svg"
                        width="116"
                        height="28"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/Vertex.svg"
                        width="84"
                        height="45"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/CarilionClinic.svg"
                        width="259"
                        height="38"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/H.svg"
                        width="72"
                        height="51"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/MountSinai.svg"
                        width="52"
                        height="64"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/EverSource.svg"
                        width="182"
                        height="22"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/uHealth.svg"
                        width="120"
                        height="40"
                        alt=""
                      />
                    </div>
                    <div class="item">
                      
                      <img
                        src="img/logos/TJX.svg"
                        width="65"
                        height="38"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="shared-section section-testimonials">
              
              <div class="decor">
                
                <img
                  class="colors d-none d-md-block"
                  src="img/home/ColorsTestimonials.svg"
                  alt=""
                />
                <img
                  class="colors d-block d-md-none"
                  src="img/home/ColorsTestimonials@mobile.svg"
                  alt=""
                />
              </div>
              <div class="container">
                
                <div class="shared-heading text-center">
                  
                  <h2 class="heading heading-3">Customer Testimonials</h2>
                  <p class="paragraph paragraph-xxl">
                    Real stories from our valued customers and partners.
                  </p>
                </div>
              </div>
              <div class="customer-testimonials js-customer-testimonials" onClick={handleItemClick}>
                
                <div class={`customer-testimonials-item js-customer-testimonials-item ${active.one && 'active'}`} onClick={e=>handleItemClick(e,'one')}>
                  
                  <div class="customer-testimonial">
                    
                    <div class="hidden-info">
                      
                      <div class="name">Bill O'Brien, Ph.D.</div>
                    </div>
                    <div class="photo">
                      
                      <img
                        width="1024"
                        height="574"
                        src="img/home/BillO'Brien@1x.png"
                        srcset="img/home/BillO'Brien@1x.png, img/home/BillO'Brien@2x.png 2x"
                        alt="Bill O'Brien"
                      />
                    </div>
                    <div class="overlay">
                      
                      <div class="content">
                        
                        <h6 class="name">Bill O'Brien, Ph.D.</h6>
                        <p class="job">CEO, Mission Development Corp.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={`customer-testimonials-item js-customer-testimonials-item ${active.two && 'active'}`} onClick={(e)=>handleItemClick(e,'two')}>
                  
                  <div class="customer-testimonial">
                    
                    <div class="hidden-info">
                      
                      <div class="name">Jennifer Braun</div>
                    </div>
                    <div class="photo">
                      
                      <img
                        width="1024"
                        height="574"
                        src="img/home/JenniferBraun@1x.png"
                        srcset="img/home/JenniferBraun@1x.png, img/home/JenniferBraun@2x.png 2x"
                        alt="Bill O'Brien"
                      />
                    </div>
                    <div class="overlay">
                      
                      <div class="content">
                        
                        <h6 class="name">Jennifer Braun</h6>
                        <p class="job">
                          Director of Workforce & Organizational Development
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={`customer-testimonials-item js-customer-testimonials-item ${active.three && 'active'}`} onClick={(e)=>handleItemClick(e,'three')}>
                  
                  <div class="customer-testimonial">
                    
                    <div class="hidden-info">
                      
                      <div class="name">Inez Stewart, M.Ed.</div>
                    </div>
                    <div class="photo">
                      
                      <img
                        width="1024"
                        height="574"
                        src="img/home/InezStewart@1x.png"
                        srcset="img/home/InezStewart@1x.png, img/home/InezStewart@2x.png 2x"
                        alt="Inez Stewart, M.Ed."
                      />
                    </div>
                    <div class="overlay">
                      
                      <div class="content">
                        
                        <h6 class="name">Inez Stewart, M.Ed.</h6>
                        <p class="job">Chief Human Resources Officer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={`customer-testimonials-item js-customer-testimonials-item ${active.four && 'active'}`} onClick={e=>handleItemClick(e,'four')}>
                  
                  <div class="customer-testimonial">
                    
                    <div class="hidden-info">
                      
                      <div class="name">Lisa DeAngelis</div>
                    </div>
                    <div class="photo">
                      
                      <img
                        width="1024"
                        height="574"
                        src="img/home/LisaDeAngelis@1x.png"
                        srcset="img/home/LisaDeAngelis@1x.png, img/home/LisaDeAngelis@2x.png 2x"
                        alt="Lisa DeAngelis"
                      />
                    </div>
                    <div class="overlay">
                      
                      <div class="content">
                        
                        <h6 class="name">Lisa DeAngelis</h6>
                        <p class="job">CEO, Mission Development Corp.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={`customer-testimonials-item js-customer-testimonials-item ${active.five && 'active'}`} onClick={e=>handleItemClick(e,'five')}>
                  
                  <div class="customer-testimonial">
                    
                    <div class="hidden-info">
                      
                      <div class="name">Chris Newell</div>
                    </div>
                    <div class="photo">
                      
                      <img
                        width="1024"
                        height="574"
                        src="img/home/ChrisNewell@1x.png"
                        srcset="img/home/ChrisNewell@1x.png, img/home/ChrisNewell@2x.png 2x"
                        alt="Chris Newell"
                      />
                    </div>
                    <div class="overlay">
                      
                      <div class="content">
                        
                        <h6 class="name">Chris Newell</h6>
                        <p class="job">CEO, Mission Development Corp.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="shared-section pb-0">
              
              <div class="container">
                
                <div class="awards-section">
                  
                  <div class="shared-heading text-center">
                    
                    <h2 class="heading">
                      Recognized for Innovation and Impact
                    </h2>
                  </div>
                  <div class="grid">
                    
                    <div class="item">
                      
                      <div class="icon">
                        
                        <img
                          width="118"
                          height="84"
                          src="img/home/award-1@1x.png"
                          srcset="img/home/award-1@1x.png, img/home/award-1@2x.png 2x"
                          alt=""
                        />
                      </div>
                      <div class="text">
                        
                        <p class="paragraph">
                          
                          Talent Management Platform
                          <br /> Unique Learning Technology
                          <br /> Assessment & Survey Technology
                        </p>
                      </div>
                    </div>
                    <div class="item">
                      
                      <div class="icon">
                        
                        <img
                          width="79"
                          height="84"
                          src="img/home/award-2@1x.png"
                          srcset="img/home/award-2@1x.png, img/home/award-2@2x.png 2x"
                          alt=""
                        />
                      </div>
                      <div class="text">
                        
                        <p class="paragraph">
                          
                          Assessment and Evaluation
                        </p>
                      </div>
                    </div>
                    <div class="item">
                      
                      <div class="icon">
                        
                        <img
                          width="119"
                          height="84"
                          src="img/home/award-3@1x.png"
                          srcset="img/home/award-3@1x.png, img/home/award-3@2x.png 2x"
                          alt=""
                        />
                      </div>
                      <div class="text">
                        
                        <p class="paragraph">
                          
                          Employee Engagement Technology Assessment & Survey
                          Technology Technology Innovation for the Remote
                          Workforce
                        </p>
                      </div>
                    </div>
                    <div class="item">
                      
                      <div class="icon">
                        
                        <img
                          width="208"
                          height="84"
                          src="img/home/award-4.svg"
                          alt=""
                        />
                      </div>
                      <div class="text">
                        
                        <p class="paragraph">
                          
                          Leadership Development Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer>
            
            <div class="decor">
              
              <img
                class="colors d-none d-md-block"
                src="img/ColorsFooter.svg"
                alt=""
              />
              <img
                class="colors d-block d-md-none"
                src="img/ColorsFooter@mobile.svg"
                alt=""
              />
            </div>
            <div class="container">
              
              <div class="footer-layout">
                
                <div class="footer-top">
                  
                  <div class="column">
                    
                    <a href="index.html" class="footer-brand">
                      
                      <img src="img/logo.svg" alt="SurePeople" />
                    </a>
                    <ul class="footer-social">
                      
                      <li>
                        <a href="#">
                          <img src="img/icons/facebook.svg" alt="Facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="img/icons/linkedin.svg" alt="LinkedIn" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="img/icons/x.svg" alt="X" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="img/icons/youtube.svg" alt="YouTube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="column">
                    
                    <div class="footer-language d-none d-md-flex">
                      
                      <div class="label">Language</div>
                      <div class="dropdown js-dropdown js-language-selector">
                        
                        <div class="dropdown-toggler js-dropdown-toggler">
                          English
                        </div>
                        <div class="dropdown-menu">
                          
                          <ul class="dropdown-list">
                            
                            <li class="dropdown-list-item active">
                              English
                            </li>
                            <li class="dropdown-list-item">French</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="footer-stores">
                      
                      <a href="#">
                        
                        <img
                          src="img/icons/app-store.svg"
                          alt="Download on the App Store"
                        />
                      </a>
                      <a href="#">
                        
                        <img
                          src="img/icons/google-play.svg"
                          alt="Get it on Google Play"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="column">
                  
                  <h6 class="footer-title">Company</h6>
                  <ul class="footer-links">
                    
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Leadership</a>
                    </li>
                    <li>
                      <a href="#">Our Difference</a>
                    </li>
                    <li>
                      <a href="#">Evolve Blog</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                  </ul>
                </div>
                <div class="column">
                  
                  <h6 class="footer-title">Sales</h6>
                  <ul class="footer-links">
                    
                    <li>
                      <a href="#">Contact Sales</a>
                    </li>
                    <li>
                      <a href="#">Plans & Pricing</a>
                    </li>
                    <li>
                      <a href="#">Let's Partner</a>
                    </li>
                    <li>
                      <a href="#">Request a Demo</a>
                    </li>
                  </ul>
                </div>
                <div class="column">
                  
                  <h6 class="footer-title">Support</h6>
                  <ul class="footer-links">
                    
                    <li>
                      <a href="#">Getting Started</a>
                    </li>
                    <li>
                      <a href="#">Support Center</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
                    </li>
                    <li>
                      <a href="#">Mobile App Downloads</a>
                    </li>
                    <li>
                      <a href="#">Trust Center</a>
                    </li>
                  </ul>
                </div>
                <div class="footer-bottom">
                  
                  <div class="footer-copyright">
                    
                    <p class="paragraph">
                      Copyright&copy; 2024 SurePeopIe, Inc. All Rights Reserved.
                    </p>
                  </div>
                  <ul class="footer-links-small">
                    
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">User Agreement</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      
    </>
  );
}

export default App;
