import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import SplitType from "split-type";

function HomepageHeading (){
    const drawSVGPath = (element) => {
        // Assuming 'element' is a single SVG path element
        element.closest('.js-draw-path').style.opacity = '1';
    
        const length = element.getTotalLength();
        element.style.strokeDasharray = length;
        element.style.strokeDashoffset = length;
    
        const animationDuration = 2000;
    
        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }
    
        function animate(time) {
            if (!startTime) {
                startTime = time;
            }
    
            let elapsedTime = time - startTime;
            let progress = elapsedTime / animationDuration;
            progress = easeInOutCubic(progress);
    
            element.style.strokeDashoffset = length * (1 - progress);
    
            if (elapsedTime < animationDuration) {
                requestAnimationFrame(animate);
            }
        }
    
        let startTime = null;
        requestAnimationFrame(animate);
    };
    
    // Set up Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is in view, draw the path
                drawSVGPath(entry.target);
                // Optional: Unobserve the element after drawing it
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Optional: Configure the observer to your needs, e.g., the threshold of visibility for triggering
        root: null, // null means it observes changes in the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element is visible
    });
    
    // Observe each .js-draw-path path element
    document.querySelectorAll('.js-draw-path path').forEach(path => {
        observer.observe(path);
    });
    
    useEffect(()=>{
        const handleSplitToLines = () => {
            gsap.registerPlugin(ScrollTrigger);
        
            const splitToLines = document.querySelectorAll('.js-split-to-lines');
        
            let results = [];
        
            const initialSplit = () => {
                splitToLines.forEach((element) => {
                    // results = SplitType.create(element);
                    results.push(new SplitType(element, {
                        types: 'lines'
                    }));
                });
            };
        
            const animateIn = (batch) => {
                gsap.to(batch, {
                    opacity: 1,
                    yPercent: 0,
                    stagger: 0.1,
                    onComplete: () => {
                        batch.forEach((batchEl) => {
                            // Check if the current element or any of its children have the class 'highlight'
                            const highlightEl = batchEl.querySelector('.highlight');
        
                            if (!highlightEl) { return; }
                            drawSVGPath(highlightEl.querySelector('path'));
                        });
                    }
                });
            };
        
            const animateOut = (batch) => {
                gsap.to(batch, {
                    opacity: 0,
                    yPercent: 25,
                    stagger: 0.1,
                });
            };
        
            const createLinesScrollTrigger = () => {
                results.forEach((result, i) => {
                    if (!result.elements[0].classList.contains('js-reveal-batch')) {
                        result.lines.forEach((line) => {
                            let r = getComputedStyle(document.querySelector(':root'));
                            let globalPaddingY = parseInt(r.getPropertyValue('--sectionPaddingY'));
        
                            const offset = globalPaddingY * 0.5;
                            const threshold = 60;
        
                            gsap.set(line, {
                                'will-change': 'transform, opacity',
                                opacity: 0,
                                yPercent: (25 / 100 * line.offsetHeight) > threshold ? '' : 25,
                                y: (25 / 100 * line.offsetHeight) > threshold ? threshold : '',
                            });
        
                            const batchElements = result.lines;
        
                            ScrollTrigger.batch(batchElements, {
                                id: 'reveal-lines-on-scroll',
                                start: () => `top bottom-=${offset}`,
                                end: () => `bottom top+=${offset}`,
                                invalidateOnRefresh: true,
                                onEnter: (batch) => animateIn(batch),
                                // onLeaveBack: (batch) => animateOut(batch)
                            });
                        });
                    }
                });
            };
        
            const handleResize = () => {
                // Store the window width
                let windowWidth = window.innerWidth;
        
                // Initial update
                bindResize();
        
                // Resize Event
                window.addEventListener('resize', () => {
                    // Check window width has actually changed, and it's not just iOS triggering a resize event on scroll
                    if (window.innerWidth !== windowWidth) {
                        // Update the window width for next time
                        windowWidth = window.innerWidth;
                        // Do stuff here
                        bindResize();
                    }
                    // Otherwise do nothing
                });
            };
        
            const bindResize = () => {
                results.forEach((result) => {
                    result.split(null);
                });
        
                // Kill ScrollTrigger and reinitialize it
                ScrollTrigger.getById('reveal-lines-on-scroll').kill();
                createLinesScrollTrigger();
            };
        
            setTimeout(() => {
                // Initialize ScrollTrigger
                initialSplit();
                createLinesScrollTrigger();
        
                // Attach a listener for window resize
                handleResize();
            }, 50);
        };
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
        handleSplitToLines()
        }) 
    return(
        <>
             <h1 class="heading js-reveal-on-scroll js-split-to-lines">
                    Empowering Leaders
                    <br /> to Achieve Extraordinary
                    <br /> Team Results
                  </h1>
        </>
    )
}

export default HomepageHeading;