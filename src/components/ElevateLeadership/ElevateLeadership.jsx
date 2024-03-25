import React, { useEffect } from 'react'
import { handleRevealCTA, handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const ElevateLeadership = () => {
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
        handleRevealCTA()
    })
  return (
    <div>
            <section class="shared-section section-cta">
                <div class="decor">
                    <img 
                        class="colors d-none d-md-block"
                        src="img/teams/ColorsCTA2.svg"
                        alt=""
                    />
                    <img 
                        class="colors d-block d-md-none"
                        src="img/teams/ColorsCTA2@mobile.svg"
                        alt=""
                    />
                </div>
                <img  class="hexagon js-reveal-on-scroll js-fade-in" src="img/teams/Hexagon.svg" alt="" />
                <div class="container">
                    <div class="content">
                        <h3 class="heading js-reveal-on-scroll js-split-to-lines">Ready to Elevate Your Leadership and Achieve Extraordinary Team Results?</h3>
                        <div class="buttons js-reveal-on-scroll">
                            <a href="pricing" class="btn btn-lg btn-white">Buy Now</a>
                            <a href="contact" class="btn btn-lg btn-outline-white">Contact Sales</a>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default ElevateLeadership
