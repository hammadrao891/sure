import '../../scss/pages/leadership.scss';
import { gsap } from 'gsap';
import lottie from 'lottie-web';
import Hexagon from "../../img/leadership/lottie/05_hexagon.json"
import Navigation from "../../components/Navigation/Navigation"
import Footer from "../../components/Footer/Footer"
import { useEffect } from 'react';
import LeadershipMain from '../../components/LeadershipMain/LeadershipMain';
function Leadership (){
    
    
return(
    <>
    <Navigation/>
    <div id="page-wrapper">
    <LeadershipMain/>
     <Footer/>
    </div>
    </>
)
}
export default Leadership