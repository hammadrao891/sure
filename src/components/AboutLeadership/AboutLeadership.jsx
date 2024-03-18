import '../../scss/pages/leadership.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { loadLottie } from '../../utils/loadLottie';
import "../../css/about.ee492bde6caa65c5d775.css"
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
      const tl = gsap.timeline({ paused: true });
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

      tl.to(hexagon, { opacity: 1, scale: 1, duration: duration, ease: ease });

      tl.to(persons[0], { opacity: 1, scale: 1, duration: duration, ease: ease });

      tl.to(tooltip, { opacity: 1, duration: duration, ease: ease });

      for (let index = 1; index < 6; index++) {
          tl.to(persons[index], { opacity: 1, scale: 1, duration: duration, ease: ease }, `>-25%`);
      }

      ScrollTrigger.create({
          trigger: '.our-leadership-graphic',
          id: 'leadershipGraphic',
          start: 'top center',
          end: 'top center',
          animation: tl,
          toggleActions: 'play none none none',
      });
  };

  const tooltip = () => {
      const updateTooltip = (e, content) => {
          // Update tooltip position and content
      };

      const hideTooltip = () => {
          // Hide tooltip
      };

      const targets = document.querySelectorAll('.js-tooltip');
      targets.forEach((target) => {
          // Attach event listeners
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
                <h3 class="heading js-reveal-on-scroll js-split-to-lines">
                  Our Leadership
                </h3>
                <p
                  class="paragraph paragraph-xxl js-reveal-on-scroll js-split-to-lines"
                >
                  We bring together a diverse, experienced leadership team with
                  deep domain expertise, all united by a shared commitment to
                  unlocking human potential.
                </p>
                <div class="buttons js-reveal-on-scroll">
                  <a href="#" class="btn btn-lg btn-primary">Meet the Team</a>
                </div>
              </div>
              <div class="media">
                <div class="our-leadership-graphic">
                  <img class="hexagon" src="img/about/Hexagon.svg" alt="" />
                  <img
                    class="tooltip"
                    src="img/about/our-leadership/Tooltip.png"
                    alt=""
                  />
                  <img
                    class="person person-1"
                    src="img/about/our-leadership/1.png"
                    alt=""
                  />
                  <img
                    class="person person-2"
                    src="img/about/our-leadership/2.png"
                    alt=""
                  />
                  <img
                    class="person person-3"
                    src="img/about/our-leadership/3.png"
                    alt=""
                  />
                  <img
                    class="person person-4"
                    src="img/about/our-leadership/4.png"
                    alt=""
                  />
                  <img
                    class="person person-5"
                    src="img/about/our-leadership/5.png"
                    alt=""
                  />
                  <img
                    class="person person-6"
                    src="img/about/our-leadership/6.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default AboutLeadership