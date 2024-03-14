import '../../scss/pages/about.scss';
import { gsap } from 'gsap';
import Navigation from "../../components/Navigation/Navigation"
import Footer from "../../components/Footer/Footer"
import { ScrollTrigger } from 'gsap//ScrollTrigger';
import { loadLottie } from '../../utils/loadLottie';
import '../../scss/pages/about.scss';
import { useEffect } from 'react';
import AboutMain from '../../components/AboutMain/AboutMain';
function About (){
  useEffect(() => {
    const handleLottieAnimations = async () => {
        const animationContainers = document.querySelectorAll('.lottie-animation-container');

        for (const container of animationContainers) {
            const jsonFile = container.getAttribute('data-animation-json');
            const animation = await loadLottie(jsonFile, container);

            if (animation) {
                // ScrollTrigger.create({
                //     trigger: container,
                //     start: 'top center',
                //     end: 'bottom center',
                //     onEnter: () => animation.play(),
                // });
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

        const tl = gsap.timeline({ paused: true });

        tl.to(hexagon, { opacity: 1, scale: 1, duration: duration, ease: ease });
        tl.to(persons[0], { opacity: 1, scale: 1, duration: duration, ease: ease });
        tl.to(tooltip, { opacity: 1, duration: duration, ease: ease });

        for (let index = 1; index < 6; index++) {
            tl.to(persons[index], { opacity: 1, scale: 1, duration: duration, ease: ease }, `>-25%`);
        }

    };

    handleLottieAnimations();
    ourLeadership();
}, []);
    return(
        <>
           <Navigation/>
          <div id="page-wrapper">
          <AboutMain/>
          <Footer/>
          </div>
        </>
    )
}
export default About;