import React, { useEffect } from 'react'
import { handleRevealCTA, handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const TryPrism = () => {
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
        handleRevealCTA()
      })
  return (
    <div>
      <section class="shared-section">
                <div class="container">
                    <div class="call-to-action">
                        <div class="decor js-reveal-on-scroll js-scale-in">
                            <img 
                                class="colors d-none d-md-block"
                                src="img/teams/ColorsCTA.svg"
                                alt=""
                            />
                            <img 
                                class="colors d-block d-md-none"
                                src="img/teams/ColorsCTA@mobile.svg"
                                alt=""
                            />
                        </div>
                        <div class="content">
                            <h3 class="heading js-reveal-on-scroll js-split-to-lines">Ready to unlock<br/> extraordinary leadership?</h3>
                            <div class="buttons js-reveal-on-scroll">
                                <a href="#" class="btn btn-lg btn-primary">Try Prism Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default TryPrism
