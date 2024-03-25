import React, { useEffect } from 'react'
import { handleRevealCTA, handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const FeedbackHeading = () => {
    useEffect(()=>
    {
        handleRevealCTA()
        handleRevealOnScroll()
        handleSplitToLines()
    })
  return (
    <div>
      <h1 class="heading js-reveal-on-scroll js-split-to-lines">Feel free to drop us a line and give us your feedback</h1>
    </div>
  )
}

export default FeedbackHeading
