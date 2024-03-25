import React, { useEffect } from 'react'
import { handleRevealCTA, handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const EnterpriseSection3 = () => {
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
        handleRevealCTA()
      })
  return (
    <div>
      <section class="shared-section section-enterprise section-enterprise-3">
                <div class="container">
                    <div class="layout">
                        <div class="content">
                            <h3 class="title js-reveal-on-scroll js-split-to-lines">Fast-track New Employees’ Time-to-Impact</h3>
                            <p class="paragraph-enterprise js-reveal-on-scroll js-split-to-lines">Set up every new leader and employee for success from day one with our onboarding capability. Enrich cultural assimilation, accelerate trusted, productive relationships, and increase leadership effectiveness to fast-track new employees’ time-to-impact.</p>
                            <p class="paragraph-enterprise js-reveal-on-scroll js-split-to-lines">The Team Leader solution reduces the risk of turnover, disengagement, and performance issues that can cost your organization millions of dollars.</p>
                        </div>
                        <div class="media js-reveal-on-scroll js-fade-in-up">
                            <div class="lottie-tab-container">
                                <img class="lottie-placeholder offset-10" src="img/enterprise/stack/FastTrack.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default EnterpriseSection3
