import React, { useEffect } from 'react'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const PricingHeading = () => {
    
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
    })
  return (
    <div>
      <h1 class="heading js-reveal-on-scroll js-split-to-lines">The <span class="text-gradient">perfect plan</span> for your<br class="d-none d-md-block"/> leaders and organizations</h1>
    </div>
  )
}

export default PricingHeading
