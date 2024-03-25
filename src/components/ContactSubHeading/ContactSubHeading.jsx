import React, { useEffect } from 'react'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const ContactSubHeading = () => {
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
    })
  return (
    <div>
       <p class="paragraph js-reveal-on-scroll js-split-to-lines">All united by a shared commitment to unlocking human potential.</p>
    </div>
  )
}

export default ContactSubHeading
