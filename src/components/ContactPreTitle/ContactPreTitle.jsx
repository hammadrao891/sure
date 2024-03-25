import React, { useEffect } from 'react'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const ContactPreTitle = () => {
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
    })

  return (
    <div>
        <span class="pretitle js-reveal-on-scroll js-split-to-lines">Contact Us</span>
    </div>
  )
}

export default ContactPreTitle
