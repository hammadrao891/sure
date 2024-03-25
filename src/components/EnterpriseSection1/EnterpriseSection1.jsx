import React, { useEffect } from 'react'
import { handleRevealCTA, handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const EnterpriseSection1 = () => {
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
        handleRevealCTA()
      })
  return (
    <div>
      <section class="shared-section section-enterprise section-enterprise-1">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="img/enterprise/ColorsBody1.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="img/enterprise/ColorsBody1@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="layout">
                        <div class="content">
                            <h3 class="title js-reveal-on-scroll js-split-to-lines">Unlock the Potential of Every Leader</h3>
                            <p class="paragraph-enterprise js-reveal-on-scroll js-split-to-lines">Understand how you – and each team member – are uniquely wired across 54 key traits and attributes with Prism, our award-winning psychometric algorithm.</p>
                            <p class="paragraph-enterprise js-reveal-on-scroll js-split-to-lines">Prism’s science-driven insights accelerate leaders’ and team members’ self-knowledge and understanding of each other; foster trusted, productive relationships that drive performance; and help leaders navigate and provide team coaching around any business challenge they face – when they need it most, in the flow of work.</p>
                        </div>
                        <div class="media js-reveal-on-scroll js-fade-in-up">
                            <div class="lottie-tab-container">
                                <img class="lottie-placeholder" src="img/enterprise/stack/UnlockPotential.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default EnterpriseSection1
