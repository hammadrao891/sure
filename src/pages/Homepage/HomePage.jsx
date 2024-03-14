import React, { useEffect, useState } from "react";
import "./global.c12ee4b9163e7c1766c1.css";
// import "./index.5165d336f6d347ebc651.css";
import Swiper from "swiper";
import 'swiper/swiper-bundle.css';
import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import '../../scss/utilities/__effect-carousel.scss';
import '../../scss/pages/home.scss';

// Swiper
// import Swiper from 'swiper';
import EffectCarousel from '../../utils/effect-carousel.esm.js';
import {Thumbs, Autoplay, Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navigation from "../../components/Navigation/Navigation.js";

// GSAP
import {gsap} from 'gsap';
import Carousel from "../../components/Carousel/Carousel.jsx";
import Companies from "../../components/Companies/Companies.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import RecognitionElements from "../../components/RecognitionElements/RecognitionElements.jsx";
import Footer from "../../components/Footer/Footer.jsx";

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
        <Navigation/>
        <div id="page-wrapper">
          <main>
            <Carousel/>
            <Companies/>
            <Testimonials active={active} handleItemClick={handleItemClick}/>
            <RecognitionElements/>
          </main>
          <Footer/>
        </div>
      
    </>
  );
}

export default App;