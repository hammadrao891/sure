import React, { useEffect } from 'react'
import { handleRevealCTA, handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const TeamsSection2 = () => {
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
        handleRevealCTA()
      })
  return (
    <div>
        <section class="shared-section section-teams">
                <div class="container">
                    <div class="teams-layout teams-layout-3">
                        <div class="content">
                            <h3 class="title js-reveal-on-scroll js-split-to-lines">Unlock Extraordinary Leadership with the Power of Self-Knowledge</h3>
                            <p class="paragraph-teams js-reveal-on-scroll js-split-to-lines">Learn how two team members are similar or different with Relationship Advisor. Select any team member and immediately receive science-driven insights and advice to improve collaboration, based on how each person is uniquely wired.</p>
                        </div>
                        <div class="media js-reveal-on-scroll js-fade-in-up">
                            <div class="lottie-tab-container">
                                <img  class="lottie-placeholder" src="img/teams/stack/BuildStrong.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="teams-layout teams-layout-4">
                        <div class="content">
                            <h3 class="title js-reveal-on-scroll js-split-to-lines">Achieve Speed-to-Relationship.</h3>
                            <p class="paragraph-teams js-reveal-on-scroll js-split-to-lines">Relationship Advisor empowers new and existing team members to accelerate trusted relationships, while improving communication, reducing conflict, and increasing productive collaboration.</p>
                            <div class="buttons">
                                <a href="#" class="btn btn-primary">Subscribe Now</a>
                            </div>
                        </div>
                        <div class="media js-reveal-on-scroll js-fade-in-up">
                            <div class="decor">
                                <img 
                                    class="colors d-none d-md-block"
                                    src="img/teams/ColorsBody3.svg"
                                    alt=""
                                />
                            </div>
                            <div class="lottie-tab-container">
                                <img  class="lottie-placeholder offset-15" src="img/teams/stack/AchieveSpeed.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="teams-layout teams-layout-5">
                        <div class="content">
                            <h3 class="title js-reveal-on-scroll js-split-to-lines">Leverage Powerful AI-driven Coaching in the Flow of Work</h3>
                            <p class="paragraph-teams js-reveal-on-scroll js-split-to-lines">Use “My Coach” to personalize your leadership for impact. My Coach delivers actionable advice to successfully navigate any challenge and coach individual team members, based on how you and your team members are wired.</p>
                            <p class="paragraph-teams js-reveal-on-scroll js-split-to-lines">From managing difficult conversions to giving performance feedback, and from improving team dynamics to fostering psychological safety, My Coach delivers AI-driven guidance in the flow of work – when you need it most as a leader.</p>
                            <div class="buttons js-reveal-on-scroll">
                                <a href="#" class="btn btn-primary">Subscribe Now</a>
                            </div>
                        </div>
                        <div class="media js-reveal-on-scroll js-fade-in-up">
                            <div class="decor">
                                <img 
                                    class="colors d-none d-md-block"
                                    src="img/teams/ColorsBody4.svg"
                                    alt=""
                                />
                            </div>
                            <div class="lottie-tab-container">
                                <img  class="lottie-placeholder" src="img/teams/stack/LeveragePower.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="teams-layout teams-layout-6">
                        <div class="content">
                            <h3 class="title js-reveal-on-scroll js-split-to-lines">Maximize the Success of Every Meeting </h3>
                            <p class="paragraph-teams js-reveal-on-scroll js-split-to-lines">Leverage science-driven meeting tips before every 1-on-1 meeting. Get advice about “How to Approach” and “What to Avoid,” based on each team members’ Prism Portrait. Integrate personalized Meeting Tips with your calendar to maximize the success of every meeting and conversation.</p>
                            <div class="buttons js-reveal-on-scroll">
                                <a href="#" class="btn btn-primary">Subscribe Now</a>
                            </div>
                        </div>
                        <div class="media js-reveal-on-scroll js-fade-in-up">
                            <div class="lottie-tab-container">
                                <img  class="lottie-placeholder" src="img/teams/stack/MaximizeSpeed.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="teams-layout teams-layout-7">
                        <div class="content">
                            <h3 class="title js-reveal-on-scroll js-split-to-lines">Empower Your Team with Personalized Development</h3>
                            <p class="paragraph-teams js-reveal-on-scroll js-split-to-lines">Provide every member on your team with a fully automated, science-driven development journey, personalized based on how they’re wired.</p>
                            <p class="paragraph-teams js-reveal-on-scroll js-split-to-lines">Empower your team members to increase their self-awareness, master high-impact people skills such as emotional, relational and team intelligence, and grow their own leadership capabilities.</p>
                        </div>
                        <div class="media js-reveal-on-scroll js-fade-in-up">
                            <div class="decor">
                                <img 
                                    class="colors d-none d-md-block"
                                    src="img/teams/ColorsBody5.svg"
                                    alt=""
                                />
                            </div>
                            <div class="lottie-tab-container">
                                <img  class="lottie-placeholder" src="img/teams/stack/EmpowerYourTeam.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="teams-layout teams-layout-8">
                        <div class="content">
                            <h3 class="title js-reveal-on-scroll js-split-to-lines">Prism + Harvard Business Publishing</h3>
                            <p class="paragraph-teams js-reveal-on-scroll js-split-to-lines">Enrich your team’s personalized development journeys with seamless access to more than 17,000 top-tier resources and learning programs from Harvard Business Publishing. Harness the collective wisdom of renowned authorities, Harvard academics, and industry thought leaders to support continuous learning and growth.</p>
                        </div>
                        <div class="media js-reveal-on-scroll js-fade-in-up">
                            <div class="decor">
                                <img 
                                    class="colors d-none d-md-block"
                                    src="img/teams/ColorsBody6.svg"
                                    alt=""
                                />
                            </div>
                            <div class="lottie-tab-container">
                                <img  class="lottie-placeholder" src="img/teams/stack/Harvard.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default TeamsSection2
