import React, { useEffect } from 'react'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const PricingPreTitle = () => {
    
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
    })
  return (
    <div>
       <span class="pretitle js-reveal-on-scroll">Pricing</span>
    </div>
  )
}

export default PricingPreTitle
