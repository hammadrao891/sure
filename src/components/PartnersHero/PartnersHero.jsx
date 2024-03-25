import React from 'react'
import PartnersPretitle from '../PartnersPretittle/PartnersPretitle'
import PartnersHeading from '../PartnersHeading/PartnersHeading'
import { handleSplitToLines } from '../../js/functions'
import gsap from 'gsap'
import { useEffect } from 'react'

const PartnersHero = () => {
    
  useEffect(() => {
    const path = document.querySelector('#svgg');
    gsap.set(path, { strokeDasharray: path.getTotalLength(), strokeDashoffset: path.getTotalLength() });
    gsap.to(path, { duration: 2, strokeDashoffset: 0 });
}, []);
    // handleSplitToLines()
  return (
    <div>
      
      <section class="shared-hero">
                <div class="line-draw js-draw-path">
                    <svg class="d-none d-md-block" viewBox="0 0 1467 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-78 132.155C-64 104.488 -16.8 49.5547 60 51.1547C156 53.1547 154 61.0506 272 95.1547C445 145.155 492 158.155 585 76.1547C606 51.1547 569.5 16.2336 548 24.1547C529 31.1547 538.5 79.1547 601 82.1547C641 82.1547 655 79.1547 726 31.1547C797 -16.8453 912.64 5.11478 944 12.1547C968.5 17.6547 1154 72.7157 1201 76.1547C1242 79.1547 1379 67.1547 1467 12.1547" stroke="black" stroke-width="2"/>
                    </svg>
                    <svg class="d-block d-md-none" viewBox="0 0 375 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 126.629C24.989 117.713 49.3048 101.456 78 76.1547C99 51.1547 62.5 16.2336 41 24.1547C22 31.1547 31.5 79.1547 94 82.1547C134 82.1547 148 79.1547 219 31.1547C264.008 0.7265 326.956 -1.58785 375 2.58886" stroke="black" stroke-width="2"/>
                    </svg>
                </div>
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="img/teams/ColorsHero.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="img/teams/ColorsHero@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="hero-content">
                        <PartnersPretitle/>
                        <PartnersHeading/>
                      </div>
                </div>
                <div class="scroll-down">
                    <a href="#" class="scroll-down-button"><img src="img/icons/arrow-narrow-down.svg" alt="" /></a>
                </div>
                <svg class="d-none d-md-block" style={{width:"100%",opacity:1}} viewBox="0 0 1467 137" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id='svgg' d="M-78 132.155C-64 104.488 -16.8 49.5547 60 51.1547C156 53.1547 154 61.0506 272 95.1547C445 145.155 492 158.155 585 76.1547C606 51.1547 569.5 16.2336 548 24.1547C529 31.1547 538.5 79.1547 601 82.1547C641 82.1547 655 79.1547 726 31.1547C797 -16.8453 912.64 5.11478 944 12.1547C968.5 17.6547 1154 72.7157 1201 76.1547C1242 79.1547 1379 67.1547 1467 12.1547" stroke="black" stroke-width="2" style={{strokeDashArray: 1806.5,strokeDashOffset: -0.00286919}}></path> </svg>
            </section>
    </div>
  )
}

export default PartnersHero
