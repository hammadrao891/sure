import React, { useEffect } from 'react'
import { handleRevealCTA, handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const EnterpriseSection2 = () => {
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
        handleRevealCTA()
      })
  return (
    <div>
      <section class="shared-section section-enterprise section-enterprise-2">
                <div class="container">
                    <div class="layout">
                        <div class="content order-md-last">
                            <h3 class="title js-reveal-on-scroll js-split-to-lines">Incorporate Organizational Values in the Flow of Work   </h3>
                            <p class="paragraph-enterprise js-reveal-on-scroll js-split-to-lines">By incorporating your organization's mission, values, principles, and code of conduct into the Prism algorithm and the Team Leader solution, we ensure that these fundamental elements are not just theoretical concepts but are actively lived out and practiced by every leader and team member in their daily activities.</p>
                        </div>
                        <div class="media js-reveal-on-scroll js-fade-in-up">
                            <div class="lottie-tab-container">
                                <img class="lottie-placeholder offset-10" src="img/enterprise/stack/Incorporate.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default EnterpriseSection2
