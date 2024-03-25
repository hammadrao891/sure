import React, { useEffect } from 'react'
import { handleRevealCTA, handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const EnterpriseSection5 = () => {
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
        handleRevealCTA()
      })
  return (
    <div>
      <section class="shared-section section-enterprise section-enterprise-5">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="img/enterprise/ColorsBody5.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="img/enterprise/ColorsBody5@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="layout">
                        <div class="content">
                            <h3 class="title js-reveal-on-scroll js-split-to-lines">Harvard Business Publishing</h3>
                            <p class="paragraph-enterprise js-reveal-on-scroll js-split-to-lines">Enrich personalized development journeys with seamless access to more than 17,000 top-tier resources and learning programs from <strong>Harvard Business Publishing</strong>. Harness the collective wisdom of renowned authorities, Harvard academics, and industry thought leaders to support continuous learning and growth.</p>
                        </div>
                        <div class="media js-reveal-on-scroll js-fade-in-up">
                            <div class="lottie-tab-container">
                                <img class="lottie-placeholder" src="img/enterprise/stack/HarvardBusiness.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default EnterpriseSection5
