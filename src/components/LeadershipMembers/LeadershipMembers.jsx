import { gsap } from 'gsap';
import lottie from 'lottie-web';
import Hexagon from "../../img/leadership/lottie/05_hexagon.json"
import { useEffect,useRef } from 'react';
// import '../../scss/pages/leadership.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Member1 from '../Member1/Member1';
import Member2 from '../Member2/Member2';
import Member3 from '../Member3/Member3';
import Member4 from '../Member4/Member4';
import Member5 from '../Member5/Member5';
import Member6 from '../Member6/Member6';
import Member8 from '../Member8/Member8';
import Member9 from '../Member9/Member9';
import Member10 from '../Member10/Member10';
import Member11 from '../Member11/Member11';
import Member12 from '../Member12/Member12';
import Member7 from '../Member7/Member7';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);

function LeadershipMembers()
{
  const ref = useRef([]);
    ref.current = [];
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
    handleSplitToLines()
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
  useEffect(() => {
    const teamModal = () => {
        const trigger = document.querySelectorAll('.js-member-modal');
        const body = document.body;
    
        let tl,
            modal,
            modalClose,
            modalContent,
            lottieHexagon,
            modalHexagon;
    
        const setModalContent = (element) => {
            // create lottie hexagon div
            modalHexagon = document.createElement('div');
            modalHexagon.classList.add('modal-lottie');
    
            lottieHexagon = lottie.loadAnimation({
                container: modalHexagon,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: Hexagon,
                rendererSettings: {
                    scaleMode: 'noScale', clearCanvas: false, progressiveLoad: true, hideOnTransparent: true
                },
            });
    
            // create master modal div
            modal = document.createElement('div');
            modal.classList.add('f-modal');
    
            // create modal divs
            modalClose = document.createElement('div');
            const modalContent = document.createElement('div');
            const memberLayout = document.createElement('div');
    
            // add classes to modal divs
            modalClose.classList.add('f-modal-close');
            modalContent.classList.add('f-modal-content');
            memberLayout.classList.add('member-layout');
    
            // assemble modal divs
            modal.append(modalContent);
            memberLayout.append(modalClose);
            modalContent.append(memberLayout);
    
            // create member layout divs
            const memberLayoutPhoto = document.createElement('div');
            const memberLayoutContent = document.createElement('div');
            const memberLayoutScrollable = document.createElement('div');
    
            // add classes to member layout divs
            memberLayoutPhoto.classList.add('photo');
            memberLayoutContent.classList.add('content');
            memberLayoutScrollable.classList.add('scrollable');
            memberLayoutScrollable.classList.add('js-scrollable');
    
            // set content from the target element
            memberLayoutPhoto.innerHTML = `
            ${element.querySelector('.photo').innerHTML}
            `;
            memberLayoutScrollable.innerHTML = `
            <div class="copy">
                <div class="content">
                    ${element.querySelector('.name').outerHTML}
                    ${element.querySelector('.job').outerHTML}
                    <div class="buttons">
                        <a href="#" class="btn btn-link">
                            View LinkedIn
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17.3076L17 7.30762M17 7.30762H7M17 7.30762V17.3076" stroke="#131316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                    ${element.querySelector('.description').outerHTML}
                </div>
            </div>
            `;
    
            lottieHexagon.addEventListener('DOMLoaded', () => {
                memberLayoutPhoto.append(modalHexagon);
            });
    
            // assemble member layout
            memberLayout.append(memberLayoutPhoto);
            memberLayout.append(memberLayoutContent);
            memberLayoutContent.append(memberLayoutScrollable);
    
            document.body.append(modal); // append modal to body
    
            // animate opening modal
            openModal(element);
        };
    

        const openModal = (element) => {
            tl = gsap.timeline({reversed: true, pause: true});
            modalContent = modal.querySelector('.f-modal-content');

            modal.classList.add('open');

            tl.set(modalContent, {
                scale: 0.95,
                opacity: 0
            });

            tl.to(modal, {
                duration: 0.2,
                opacity: 1,
                onStart: () => {
                    body.classList.add('overflow-hidden');
                },
                onReverseComplete: () => {
                    body.classList.remove('overflow-hidden');
                    modal.classList.remove('open');
                    modal.remove();
                    // modalHexagon.style.display                   
                    // modalHexagon.destroy();
                }
            }, '<+0.1').to(modalContent, {
                duration: 0.2,
                opacity: 1,
                scale: 1
            });

            tl.play();
        };

        // bind on click
        trigger.forEach(element => {
            element.addEventListener('click', e => {
                e.preventDefault();
                setModalContent(element);
            });
        });

        // close menu when clicking outside
        document.addEventListener('click', (e) => {
            
            if (modal && modal.contains(e.target) && !modalContent.contains(e.target)) {
                tl.reverse();
                body.classList.remove('overflow-hidden');
                    modal.classList.remove('open');
                    modal.remove();
            }

            if (modalClose && modalClose.contains(e.target)) {
                tl.reverse();
                body.classList.remove('overflow-hidden');
                    modal.classList.remove('open');
                    modal.remove();
            }
            
        });
    };

    teamModal();

    return () => {
        // Cleanup code here if needed
    };
}, []);

    useEffect(() => {
      ref.current.forEach((el) => {
        gsap.fromTo(el, { autoAlpha: 0 }, {
            autoAlpha: 1, left: 0,
            duration: 0.2, scrollTrigger: {
                trigger: el,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        })
    })
    }, [])
    const addtoRefs = (el) => {
      if (el && !ref.current.includes(el)) {
          ref.current.push(el);
      }
  }
    return(
        <>
        <section class="shared-section section-team pb-0" >
          <div class="decor">
            <img
              class="colors d-none d-md-block"
              src="img/leadership/ColorsBody.svg"
              alt=""
            />
            <img
              class="colors d-block d-md-none"
              src="img/leadership/ColorsBody@mobile.svg"
              alt=""
            />
          </div>
          <div class="container">
            <div class="shared-heading text-center">
              <h3 class="heading js-reveal-on-scroll js-split-to-lines" >
                The team's skill sets vary.<br />
                <span class="big text-gradient"
                  >The principles, values, passion, and grit do not.</span
                >
              </h3>
            </div>
            <div class="team-grid " >
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch" 
                              >
               <Member1/>
               </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch" 
              >
                <Member2/>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch"  
              >
                <Member3/>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch" 
              >
              <Member4/>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch" 
              >
               <Member5/>
               </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch" 
              >
              <Member6/>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch" 
              >
<Member7/>
                </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch" 
              >
               <Member8/>
               </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch" 
              >
               <Member9/>
               </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch" 
              >
                <Member10/>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch" 
              >
              <Member11/>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch" 
              >
                <Member12/>
              </div>
            </div>
          </div>
          </section>
        </>
    )
}

export default LeadershipMembers