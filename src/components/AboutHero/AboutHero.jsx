import gsap from "gsap";
import { useEffect } from "react";
import AboutHeroHeading from "../AboutHeroHeading/AboutHeroHeading";
import PlayVideoButton from "../PlayVideoButton/PlayVideoButton";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

function AboutHero()
{
  useEffect(() => {
    const path = document.querySelector('#svgg');
    gsap.set(path, { strokeDasharray: path.getTotalLength(), strokeDashoffset: path.getTotalLength() });
    gsap.to(path, { duration: 2, strokeDashoffset: 0 });
}, []);
gsap.registerPlugin(ScrollTrigger);
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
useEffect(()=>{
  
  const handleRevealOnScroll = () => {
  
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
  },[]) 
    return(
        <>
            <section class="shared-hero js-reveal-on-scroll">
          <div class="line-draw js-draw-path">
            <svg
              class="d-none d-md-block"
              viewBox="0 0 1440 482"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.17462 481C-7.49167 468.41 34.4021 427.736 41.5665 420.638C195.948 267.693 520.651 400.998 707.047 399.85C729.982 399.708 756.813 397.634 776.502 384.07C791.41 373.8 782.924 343.788 774.654 332.224C728.63 267.869 719.982 369.417 846.264 353.138C947.189 353.138 951.347 87.0108 1050.13 226.779C1181.18 412.197 1236.47 45.3321 1321.79 6.62053C1358.26 -9.92716 1407.51 12.19 1440 45.2334"
                stroke="#131316"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <svg
              class="d-block d-md-none"
              width="375"
              height="119"
              viewBox="0 0 375 119"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M375 29.8708C373.325 27.8072 371.628 25.5813 369.907 23.1868C315.026 -53.1685 312.716 92.2172 256.647 92.2172C186.49 101.11 191.295 45.6344 216.864 80.7918C221.458 87.1088 226.172 103.505 217.89 109.115C206.952 116.525 192.046 117.658 179.304 117.736C130.59 118.031 64.8721 102.071 0 93.783"
                stroke="#131316"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div class="decor">
            <img
              class="colors d-none d-md-block"
              src="img/about/ColorsHero.svg"
              alt=""
              
            />
            <img
              class="colors d-block d-md-none"
              src="img/about/ColorsHero@mobile.svg"
              alt=""
            />
          </div>
          <div class="line-draw js-draw-path" style={{opacity: 1,width:"100%"}}> <svg class="d-none d-md-block" viewBox="0 0 1440 482" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="svgg" d="M1.17462 481C-7.49167 468.41 34.4021 427.736 41.5665 420.638C195.948 267.693 520.651 400.998 707.047 399.85C729.982 399.708 756.813 397.634 776.502 384.07C791.41 373.8 782.924 343.788 774.654 332.224C728.63 267.869 719.982 369.417 846.264 353.138C947.189 353.138 951.347 87.0108 1050.13 226.779C1181.18 412.197 1236.47 45.3321 1321.79 6.62053C1358.26 -9.92716 1407.51 12.19 1440 45.2334" stroke="#131316" stroke-width="2" stroke-linecap="round" style={{strokeDashArray: 1929.13, strokeDashOffset: -0.00306396}}></path> </svg> <svg class="d-block d-md-none" width="375" height="119" viewBox="0 0 375 119" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M375 29.8708C373.325 27.8072 371.628 25.5813 369.907 23.1868C315.026 -53.1685 312.716 92.2172 256.647 92.2172C186.49 101.11 191.295 45.6344 216.864 80.7918C221.458 87.1088 226.172 103.505 217.89 109.115C206.952 116.525 192.046 117.658 179.304 117.736C130.59 118.031 64.8721 102.071 0 93.783" stroke="#131316" stroke-width="2" stroke-linecap="round" style={{strokeDashArray: 517.89, strokeDashOffset: -0.0082487}}></path> </svg> </div>
          <div class="container" >
            <div class="hero-content">
              <AboutHeroHeading/>
              <div class="buttons js-reveal-on-scroll">
                <PlayVideoButton/>
              </div>
             
              
            </div>
          </div>
        </section>
        <section class="shared-section section-mission-stack pt-0">
          <div class="decor">
            <img
              class="colors d-none d-md-block"
              src="img/about/ColorsMission.svg"
              alt=""
            />
            <img
              class="colors d-block d-md-none"
              src="img/about/ColorsMission@mobile.svg"
              alt=""
            />
          </div>
          <div class="container">
            <div class="our-mission-stack">
              <div class="row">
                <div class="content">
                  <h3 class="heading js-reveal-on-scroll js-split-to-lines">
                    SurePeople is a technology innovator dedicated to unlocking
                    human potential.
                  </h3>
                  <p class="paragraph js-reveal-on-scroll js-split-to-lines">
                    We are committed to delivering positive, measurable outcomes
                    for all stakeholders – our valued team members, customers,
                    partners, and investors – by operating through our values
                    and standing true to our mission: To make people sure of
                    themselves and organizations sure of their people®.
                  </p>
                </div>
                <div class="media">
                  <div
                    class="lottie-animation-container"
                    data-animation-json="img/about/lottie/head_b.json"
                  ></div>
                </div>
              </div>
              <div class="row">
                <div class="content">
                  <h3 class="heading js-reveal-on-scroll js-split-to-lines">
                    Make people sure of themselves
                  </h3>
                  <p class="paragraph js-reveal-on-scroll js-split-to-lines">
                    At the heart of our patented technology is the Prism®
                    psychometric algorithm, revealing 54 traits and attributes
                    across Personality (Primary & Under Pressure), Processing,
                    Decision Making, Conflict Management, Motivation, and
                    Fundamental Needs. Grounded in three decades of psychometric
                    research and enhanced by advanced Artificial Intelligence
                    (AI) and Machine Learning (ML), Prism® provides profound
                    insights into human behavior and psychology.
                  </p>
                  <p class="paragraph js-reveal-on-scroll js-split-to-lines">
                    Our purpose? To make people sure of themselves. By equipping
                    them with unparalleled self-knowledge, advanced people
                    skills, and digital tools and coaching, we enhance personal
                    and professional relationships, enabling individuals to
                    navigate life’s challenges with confidence and grace.
                  </p>
                </div>
                <div class="media">
                  <div
                    class="lottie-animation-container"
                    data-animation-json="img/about/lottie/woman_b.json"
                  ></div>
                </div>
              </div>
              <div class="row">
                <div class="content">
                  <h3 class="heading js-reveal-on-scroll js-split-to-lines">
                    Make organizations sure of their people
                  </h3>
                  <p class="paragraph js-reveal-on-scroll js-split-to-lines">
                    SurePeople isn't just about individual growth. We understand
                    that for organizations to thrive, they need to be confident
                    not only in their strategies – but also in the people
                    executing them. Our patented platform fosters a
                    people-centric culture, emphasizing alignment, effective
                    onboarding, people skill enhancement, and agile change
                    management.
                  </p>
                  <p class="paragraph js-reveal-on-scroll js-split-to-lines">
                    Our purpose? To make organizations sure of their people. In
                    a dynamic world, SurePeople ensures that organizations are
                    not merely reacting to change, but leading with conviction,
                    grounded in the unwavering trust they have in their people
                    and teams.
                  </p>
                </div>
                <div class="media">
                  <div
                    class="lottie-animation-container"
                    data-animation-json="img/about/lottie/01_flower.json"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        </>
    )
}
export default AboutHero