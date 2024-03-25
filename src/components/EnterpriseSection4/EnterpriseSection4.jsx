import React, { useEffect } from 'react'
import { handleRevealCTA, handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const EnterpriseSection4 = () => {
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
        handleRevealCTA()
      })
  return (
    <div>
       <section class="shared-section section-enterprise section-enterprise-4">
                <div class="container">
                    <div class="layout">
                        <div class="content order-md-last">
                            <h3 class="title js-reveal-on-scroll js-split-to-lines">Deliver Personalized People Skills Development – at Scale</h3>
                            <p class="paragraph-enterprise js-reveal-on-scroll js-split-to-lines">Provide leaders and their team members with a fully automated, science-driven development journey, personalized based on how each person is wired. Our solution empowers team members to increase self-awareness, master high-impact people skills, including emotional, relational and team intelligence, and grow their leadership capabilities.</p>
                        </div>
                        <div class="media js-reveal-on-scroll js-fade-in-up">
                            <div class="lottie-tab-container">
                                <img class="lottie-placeholder offset-5" src="img/enterprise/stack/DeliverPersonalized.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default EnterpriseSection4
