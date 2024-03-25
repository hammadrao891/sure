import React, { useEffect } from 'react'
import { handleRevealOnScroll } from '../../js/functions'

const PartnersPretitle = () => {
    useEffect(()=>{
        handleRevealOnScroll()
    },[])
  return (
    <div>
      <span class="pretitle js-reveal-on-scroll">Partnership</span>
    </div>
  )
}

export default PartnersPretitle
