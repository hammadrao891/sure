import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react'

const LeadershipSubHeading = () => {
  
  useEffect(()=>{
  
    const handleRevealOnScroll = () => {
      gsap.registerPlugin(ScrollTrigger);
    
      const elementToReveal = document.querySelectorAll('.js-reveal-on-scroll');
      const staggerDuration = 0.1;
    
      const animateIn = (batch) => {
          gsap.to(batch, {
              opacity: 1,
              yPercent: 0,
              stagger: staggerDuration,
          });
      };
    
      const animateOut = (batch) => {
          gsap.to(batch, {
              opacity: 0,
              yPercent: 25,
              stagger: staggerDuration,
          });
      };
    
      elementToReveal.forEach((element, i) => {
          if (element.classList.contains('js-reveal-batch')) {
              let r = getComputedStyle(document.querySelector(':root'));
              let globalPaddingY = parseInt(r.getPropertyValue('--sectionPaddingY'));
    
              gsap.set(element, {
                  'will-change': 'transform, opacity',
                  opacity: 0,
                  yPercent: 15,
              });
    
              const batchElements = element.parentNode.querySelectorAll('.js-reveal-batch');
    
              ScrollTrigger.batch(batchElements, {
                  id: 'reveal-batch-on-scroll',
                  start: () => `top bottom-=${globalPaddingY * 0.5}`,
                  end: () => `bottom top+=${globalPaddingY * 0.5}`,
                  invalidateOnRefresh: true,
                  onEnter: (batch) => animateIn(batch),
                  // onLeave: (batch) => animateOut(batch),
                  // onEnterBack: (batch) => animateIn(batch),
                  // onLeaveBack: (batch) => animateOut(batch)
              });
          } else {
              if (!element.classList.contains('js-split-to-lines')) {
                  let r = getComputedStyle(document.querySelector(':root'));
                  let globalPaddingY = parseInt(r.getPropertyValue('--sectionPaddingY'));
    
                  const tl = gsap.timeline({paused: true});
                  const threshold = 60;
    
                  if (element.classList.contains('js-fade-in')) {
                      gsap.set(element, {
                          'will-change': 'transform, opacity',
                          opacity: 0,
                      });
    
                      tl.to(element, {
                          opacity: 1,
                      });
                  } else if (element.classList.contains('js-scale-in')) {
                      gsap.set(element, {
                          'will-change': 'transform, opacity',
                          opacity: 0,
                          scale: 0
                      });
    
                      tl.to(element, {
                          opacity: 1,
                          scale: 1,
                      });
                  } else {
                      gsap.set(element, {
                          'will-change': 'transform, opacity',
                          opacity: 0,
                          yPercent: (25 / 100 * element.offsetHeight) > threshold ? '' : 25,
                          y: (25 / 100 * element.offsetHeight) > threshold ? threshold : '',
                      });
    
                      tl.to(element, {
                          opacity: 1,
                          yPercent: 0,
                          y: 0,
                      });
                  }
    
                  tl.progress(1);
    
                  ScrollTrigger.create({
                      trigger: element,
                      id: 'reveal-singles-on-scroll',
                      start: () => `top bottom-=${globalPaddingY * 0.5}`,
                      end: () => `bottom top+=${globalPaddingY * 0.5}`,
                      animation: tl,
                      toggleActions: 'play none none reverse',
                      invalidateOnRefresh: true,
                  });
              }
          }
      });
    };
    
    const handleRevealCTA = () => {
      gsap.registerPlugin(ScrollTrigger);
    
      const elementToReveal = document.querySelectorAll('.js-reveal-cta');
      const staggerDuration = 0.4;
    
      const animateIn = (batch) => {
          gsap.to(batch, {
              opacity: 1,
              stagger: staggerDuration,
          });
      };
    
      elementToReveal.forEach((element, i) => {
          let r = getComputedStyle(document.querySelector(':root'));
          let globalPaddingY = parseInt(r.getPropertyValue('--sectionPaddingY'));
    
          gsap.set(element, {
              'will-change': 'transform, opacity',
              opacity: 0,
          });
    
          ScrollTrigger.batch(elementToReveal, {
              start: () => `top top`,
              end: () => `top top`,
              invalidateOnRefresh: true,
              onEnter: (batch) => animateIn(batch),
          });
      });
    };
    
    handleRevealCTA()
    handleRevealOnScroll()
    }) 
  return (
    <div>
       <p
                class="paragraph paragraph-xxl js-reveal-on-scroll js-split-to-lines"
              >
                All united by a shared commitment to unlocking human potential.
              </p>
    </div>
  )
}

export default LeadershipSubHeading
