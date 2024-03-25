import React, { useEffect } from 'react'
import { handleRevealCTA, handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const TeamsSection = () => {
    useEffect(()=>{
        handleRevealCTA()
        handleRevealOnScroll()
        handleSplitToLines()
      })
  return (
    <div>
      
      <section class="shared-section section-teams">
                <div class="container">
                    <div class="teams-layout teams-layout-1">
                        <div class="content">
                            <h3 class="title js-reveal-on-scroll js-split-to-lines">Unlock Extraordinary Leadership with the Power of Self-Knowledge</h3>
                            <p class="paragraph-teams js-reveal-on-scroll js-split-to-lines">Understand how you – and each team member – are uniquely wired across 54 key traits and attributes with Prism, our award-winning psychometric algorithm.</p>
                        </div>
                        <div class="media js-reveal-on-scroll js-fade-in-up">
                            <div class="decor">
                                <img 
                                    class="colors d-none d-md-block"
                                    src="img/teams/ColorsBody1.svg"
                                    alt=""
                                />
                            </div>
                            <div class="lottie-tab-container">
                                <img  class="lottie-placeholder" src="img/teams/stack/UnlockExtraordinary.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="teams-layout teams-layout-2">
                        <div class="decor">
                            <img 
                                class="colors d-none d-md-block"
                                src="img/teams/ColorsBody2.svg"
                                alt=""
                            />
                        </div>
                        <div class="content">
                            <h3 class="title js-reveal-on-scroll js-split-to-lines">The Prism “Portrait” is the Story of You (and Every Person on Your Team)</h3>
                            <p class="paragraph-teams js-reveal-on-scroll js-split-to-lines">Learn how your team performs under pressure, makes decisions, manages conflict, and processes information. Uncover motivators and fundamental needs that impact engagement, performance, and wellbeing. And harness Prism insights to adapt your personal leadership style, so you can become more agile, empathetic, and impactful in your role, based on the people you lead.</p>
                        </div>
                        <div class="media js-reveal-on-scroll js-fade-in-up">
                            <div class="lottie-tab-container">
{/* <!--                                <img  class="lottie-placeholder offset-5" src="img/teams/stack/ThePrism.svg" alt="" />--> */}
                                <img 
                                    width="460" height="460"
                                    class="lottie-placeholder offset-10"
                                    src="img/teams/stack/ThePrism@1x.png"
                                    srcset="img/teams/stack/ThePrism@1x.png 1x, img/teams/stack/ThePrism@2x.png 2x"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default TeamsSection
