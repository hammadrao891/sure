import { useEffect } from 'react';
import '../../scss/pages/home.scss';
import '../../scss/utilities/__effect-carousel.scss'
import {gsap} from 'gsap';
import EffectCarousel from '../../utils/effect-carousel.esm.js';
import {Thumbs, Autoplay, Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from "swiper";
// import '../../scss/app.scss';
// import '../../scss/main.scss';
import "../../css/global.c12ee4b9163e7c1766c1.css"

function Carousel ()
{
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
  
          swiperMain.on('init', (e) => {
              e.slideNext();
          });
  
          swiperMain.init();
      }
  };
      
      
      heroCarousel();
      
  }, []);
    return(
        <>
            
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
        </>
    )
}

export default Carousel