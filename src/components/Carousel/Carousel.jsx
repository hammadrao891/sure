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

import "../../css/global.c12ee4b9163e7c1766c1.css"
import HomepageHeading from '../HomepageHeading/HomepageHeading.jsx';
import CarouselDescription from '../CarouselDescription/CarouselDescription.jsx';
import LearnMoreButton from '../LearnMoreButton/LearnMoreButton.jsx';
import SelfKnowledgeDescription from '../SelfKnowledegeDescription/SelfKnowledgeDescription.jsx';
import TrustedRelationshipsDescription from '../TrustedRelationshipsDescription/TrustedRelationshipsDescription.jsx';
import CoachingDescription from '../CoachingDescription/CoachingDescription.jsx';
import ScienceDescription from '../ScienceDescription/ScienceDescription.jsx';

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
                  
                 <HomepageHeading/>
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
                              
                            <SelfKnowledgeDescription/>
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
                              
                             <TrustedRelationshipsDescription/>
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
                              
                              <CoachingDescription/>
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
                              <ScienceDescription/>
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
                  
                 <CarouselDescription/>
                  <div class="buttons">
                    
                   <LearnMoreButton/>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default Carousel