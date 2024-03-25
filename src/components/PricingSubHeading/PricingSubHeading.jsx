import React, { useEffect } from 'react'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const PricingSubHeading = () => {

    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
    })
    return (
    <div>
      <p class="paragraph paragraph-xxl js-reveal-on-scroll js-split-to-lines">Simple, flexible pricing to support high-performing teams. Request a free trial.</p>
    </div>
  )
}

export default PricingSubHeading
