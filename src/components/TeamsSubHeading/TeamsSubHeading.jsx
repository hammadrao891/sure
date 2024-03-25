import React, { useEffect } from 'react'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const TeamsSubHeading = () => {
  useEffect(()=>{
    handleRevealOnScroll()
    handleSplitToLines()
  })
  return (
    <div>
      <p class="paragraph-teams paragraph-teams-xxl js-reveal-on-scroll js-split-to-lines">In the Flow of Work, When You Need It Most</p>
                        
    </div>
  )
}

export default TeamsSubHeading
