import React, { useEffect } from 'react'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const ContactHeading = () => {
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
    })
    return (
    <div>
        <h1 class="heading js-reveal-on-scroll js-split-to-lines">We’re here for you</h1>
    </div>
  )
}

export default ContactHeading
