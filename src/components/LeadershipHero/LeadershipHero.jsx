import gsap from 'gsap';
import '../../scss/pages/leadership.scss';
import { useEffect } from 'react';
import LeadershipHeading from '../LeadershipHeading/LeadershipHeading';
import LeadershipSubHeading from '../LeadershipSubHeading/LeadershipSubHeading';

function LeadershipHero()
{
  useEffect(() => {
    const path = document.querySelector('#svgg');
    gsap.set(path, { strokeDasharray: path.getTotalLength(), strokeDashoffset: path.getTotalLength() });
    gsap.to(path, { duration: 2, strokeDashoffset: 0 });
}, []);
    return(
        <>
              <section class="shared-hero">
          <div class="line-draw js-draw-path">
            <svg
              class="d-none d-md-block"
              viewBox="0 0 1440 293"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-12.5 230.5C110.5 -154 471.5 273.5 767 220.5C1062.5 167.5 1156.31 121.674 1129.5 89.4999C1084.5 35.4999 970.841 391.079 1224 264.5C1477.16 137.921 1398 1 1538.5 1"
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
                d="M0 78.6962C19.7297 81.2505 39.2327 81.3714 58.2541 77.9794C224.771 48.2853 277.634 22.6103 262.526 4.58445C237.168 -25.6699 173.12 173.549 315.777 102.631C340.668 90.257 359.859 77.7064 375 65.4178"
                stroke="#131316"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div class="decor">
            <img
              class="colors d-none d-md-block"
              src="img/leadership/ColorsHero.svg"
              alt=""
            />
            <img
              class="colors d-block d-md-none"
              src="img/leadership/ColorsHero@mobile.svg"
              alt=""
            />
            
          </div>
          <div class="container">
            <div class="hero-content">
              <LeadershipHeading/>
             <LeadershipSubHeading/>
            </div>
          </div>
          <svg class="d-none d-md-block" viewBox="0 0 1440 293" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="svgg" d="M-12.5 230.5C110.5 -154 471.5 273.5 767 220.5C1062.5 167.5 1156.31 121.674 1129.5 89.4999C1084.5 35.4999 970.841 391.079 1224 264.5C1477.16 137.921 1398 1 1538.5 1" stroke="#131316" stroke-width="2" stroke-linecap="round" style={{strokeDasharray: '2093.39',
        strokeDashoffset: '-0.00339316'}}></path>
            </svg>
        </section>
        </>
    )
}

export default LeadershipHero