import React, { useEffect } from 'react'
import { handleRevealCTA, handleRevealOnScroll } from '../../js/functions'

const TestimonialHeading = () => {
  
    useEffect(()=>{
  
        handleRevealCTA()
        handleRevealOnScroll()
        
        }) 

  return (
    <div class="container">
                    <div class="shared-heading text-center">
                        <h2 class="heading heading-3 js-reveal-on-scroll js-split-to-lines">Customer Testimonials</h2>
                        <p class="paragraph paragraph-xxl js-reveal-on-scroll js-split-to-lines">Real stories from our valued customers and partners.</p>
                    </div>
                </div>
  )
}

export default TestimonialHeading
