import '../../scss/pages/leadership.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { loadLottie } from '../../utils/loadLottie';
import "../../css/about.371895986869b98cd083.css"
import { useEffect } from 'react';
function AboutLeadership()
{
  useEffect(() => {
  const handleLottieAnimations = async () => {
      const animationContainers = document.querySelectorAll('.lottie-animation-container');

      for (const container of animationContainers) {
          const jsonFile = container.getAttribute('data-animation-json');
          const animation = await loadLottie(jsonFile, container);

          if (animation) {
              ScrollTrigger.create({
                  trigger: container,
                  start: 'top center',
                  end: 'bottom center',
                  onEnter: () => animation.play(),
              });
          }
      }
  };

  const ourLeadership = () => {
    const graphicTrigger = document.querySelector('.our-leadership-graphic');
    const hexagon = document.querySelectorAll('.our-leadership-graphic .hexagon');
    const persons = document.querySelectorAll('.our-leadership-graphic .person');
    const tooltip = document.querySelector('.our-leadership-graphic .tooltip');

    gsap.set(gsap.utils.toArray(persons), {
        opacity: 0,
        scale: 0.75
    });

    gsap.set(tooltip, {
        opacity: 0
    });

    gsap.set(hexagon, {
        opacity: 0,
        scale: 0
    });

    const duration = 0.5;
    const ease = 'expo.out';

    // Create a GSAP timeline
    const tl = gsap.timeline({paused: true});

    tl.to(hexagon, {opacity: 1, scale: 1, duration: duration, ease: ease});

    tl.to(persons[0], {opacity: 1, scale: 1, duration: duration, ease: ease});

    tl.to(tooltip, {opacity: 1, duration: duration, ease: ease});

    for (let index = 1; index < 6; index++) {
        tl.to(persons[index], {opacity: 1, scale: 1, duration: duration, ease: ease}, `>-25%`);
    }

    // Use ScrollTrigger to trigger the animation when scrolling to the "technology-sphere-graphic" element
    ScrollTrigger.create({
        trigger: graphicTrigger,
        id: 'leadershipGraphic',
        start: 'top center', // Adjust the starting point as needed
        end: 'top center', // Adjust the starting point as needed
        animation: tl,
        // markers: true, // Display markers for debugging (you can remove this in production)
        toggleActions: 'play none none none', // Define toggle actions for the trigger
    });
};
const tooltip = () => {
  // Create the tooltip element and append it to body
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  gsap.set(tooltip, {
      opacity: 0
  });

  // Function to update tooltip position and content
  const updateTooltip = (e, content) => {
      tooltip.innerHTML = content;

      gsap.to(tooltip, {
          duration: 0.2,
          opacity: 1
      });

      // Ensure the tooltip does not exceed the screen width
      let tooltipWidth = tooltip.offsetWidth;
      let tooltipHeight = tooltip.offsetHeight;
      let posX = e.pageX + 20; // Offset cursor position for X
      let posY = e.pageY - window.scrollY + 20; // Offset cursor position for Y

      // Adjust if tooltip exceeds the window width
      if (posX + tooltipWidth > window.innerWidth - 30) {
          posX = window.innerWidth - tooltipWidth - 30;
      }
      // Adjust if tooltip exceeds the window height
      if (posY + tooltipHeight > window.innerHeight - 20) {
          posY = window.innerHeight - tooltipHeight - 20;
      }

      tooltip.style.left = posX + 'px';
      tooltip.style.top = posY + 'px';
  }

  // Function to hide tooltip
  const hideTooltip = () => {
      gsap.to(tooltip, {
          duration: 0.2,
          opacity: 0
      });
  }

  // Attach event listeners to elements with the tooltip-target class
  const targets = document.querySelectorAll('.js-tooltip');
  targets.forEach((target) => {
      target.addEventListener('mouseover', (e) => {
          const content = e.currentTarget.querySelector('.js-tooltip-content').innerHTML;
          updateTooltip(e, content);
      });

      target.addEventListener('mousemove', (e) => {
          updateTooltip(e, e.currentTarget.querySelector('.js-tooltip-content').innerHTML);
      });

      target.addEventListener('mouseout', hideTooltip);
  });
};

  handleLottieAnimations();
  ourLeadership();
  tooltip();
}, []);

    return(
        <>
           <section class="shared-section section-leadership pt-0 pb-0">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="img/about/ColorsLeadership.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="img/about/ColorsLeadership@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="grid-layout">
                        <div class="content">
                            <h3 class="heading js-reveal-on-scroll js-split-to-lines">Our Leadership</h3>
                            <p class="paragraph paragraph-xxl js-reveal-on-scroll js-split-to-lines">We bring together a diverse, experienced leadership team with deep domain expertise, all united by a shared commitment to unlocking human potential.</p>
                            <div class="buttons js-reveal-on-scroll">
                                <a href="leadership.html" class="btn btn-lg btn-primary">Meet the Team</a>
                            </div>
                        </div>
                        <div class="media">
                            <div class="our-leadership-graphic">
                                <img class="hexagon" src="img/about/Hexagon.svg" alt=""/>
{/* <!--                                <img class="tooltip" src="img/about/our-leadership/Tooltip.png" alt=""/>--> */}
                                <div class="person person-1 js-tooltip">
                                    <img src="img/about/our-leadership/1.png" alt="" />
                                    <div class="tooltip-content js-tooltip-content">
                                        <div class="name">Niko Drakoulis</div>
                                        <div class="position">Founder, CEO & Servant to All Stakeholders</div>
                                    </div>
                                </div>
                                <div class="person person-2 js-tooltip">
                                    <img src="img/about/our-leadership/2.png" alt="" />
                                    <div class="tooltip-content js-tooltip-content">
                                        <div class="name">Mariane Mac Kinnon</div>
                                        <div class="position">SVP, Client Success</div>
                                    </div>
                                </div>
                                <div class="person person-3 js-tooltip">
                                    <img src="img/about/our-leadership/3.png" alt="" />
                                    <div class="tooltip-content js-tooltip-content">
                                        <div class="name">Ambarish Chaudhari</div>
                                        <div class="position">SVP, Engineering</div>
                                    </div>
                                </div>
                                <div class="person person-4 js-tooltip">
                                    <img src="img/about/our-leadership/4.png" alt="" />
                                    <div class="tooltip-content js-tooltip-content">
                                        <div class="name">Paul Tsagaroulis, Ph.D.</div>
                                        <div class="position">Chief Science Officer</div>
                                    </div>
                                </div>
                                <div class="person person-5 js-tooltip">
                                    <img src="img/about/our-leadership/5.png" alt="" />
                                    <div class="tooltip-content js-tooltip-content">
                                        <div class="name">Adam Schneider</div>
                                        <div class="position">SVP, Content</div>
                                    </div>
                                </div>
                                <div class="person person-6 js-tooltip">
                                    <img src="img/about/our-leadership/6.png" alt="" />
                                    <div class="tooltip-content js-tooltip-content">
                                        <div class="name">Demetra Anagnostopoulos</div>
                                        <div class="position">Chief Success Officer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutLeadership