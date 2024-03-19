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