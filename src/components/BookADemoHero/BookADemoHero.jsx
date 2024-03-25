import React, { useEffect } from 'react'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const BookADemoHero = () => {
    
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
    })
  return (
    <div>
                  <section class="shared-hero">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="img/book-a-demo/ColorsHero.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="img/book-a-demo/ColorsHero@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="hero-content">
                        <span class="pretitle">Are you ready to create a people-centric culture?</span>
                        <h1 class="heading js-reveal-on-scroll js-split-to-lines">Experience the&nbsp;
                            <span class="highlight">
                                <svg class="js-draw-path" width="275" height="120" viewBox="0 0 275 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M192.759 1C211.66 10.5569 236.476 27.1376 244.814 58.0654C253.335 89.6704 211.082 106.574 194.776 111.127C159.995 120.839 120.508 120.715 85.0134 115.358C67.637 112.735 51.0335 110.674 34.1571 104.617C21.0086 99.8974 17.8005 96.7436 6.55816 84.9781C1.8581 77.9424 -0.343559 65.5579 1.8581 58.0654C8.7338 34.6662 33.0472 26.6384 48.0012 23.1242C96.1085 11.8185 143.109 14.752 192.147 18.3518C206.944 19.4379 229.608 21.1573 245.131 25.793C260.081 30.2575 258.756 28.6528 274 36.6972" stroke="#131316" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                Power
                            </span>
                            &nbsp;of the SurePeople Platform
                        </h1>
                        <p class="paragraph js-reveal-on-scroll js-split-to-lines">Let's connect. Schedule your free consultation using our calendar.</p>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default BookADemoHero
