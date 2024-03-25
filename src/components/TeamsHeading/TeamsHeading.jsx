import React, { useEffect } from 'react'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const TeamsHeading = () => {
  useEffect(()=>{
    handleRevealOnScroll()
    handleSplitToLines()
  })
  return (
    <div>
        <h1 class="heading js-reveal-on-scroll js-split-to-lines"><span class="text-gradient">Empower Your Team</span> to Drive Extraordinary Results</h1>
                
    </div>
  )
}

export default TeamsHeading
