import React, { useEffect } from 'react'
import { handleRevealOnScroll } from '../../js/functions'

const TeamHeroButton = () => {
  useEffect(()=>{
    handleRevealOnScroll()
  })
  return (
    <div>
      <div class="buttons js-reveal-on-scroll">
                            <a href="pricing" class="btn btn-lg btn-primary">Subscribe Now</a>
                        </div>
    </div>
  )
}

export default TeamHeroButton
