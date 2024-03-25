import React, { useEffect } from 'react'

const Difference = () => {
    useEffect(()=>{
        // differenceGraphic()
        // tabsSection()
        // handleLottieAnimations()
        // handleRevealOnScroll()
        // handleSplitToLines()
        // tabsSection().then(r => {});
    })
  return (
    <div>
      <section className="shared-hero">
                <div className="decor">
                    <img
                        className="colors d-none d-md-block"
                        src="img/teams/ColorsHero.svg"
                        alt=""
                    />
                    <img
                        className="colors d-block d-md-none"
                        src="img/teams/ColorsHero@mobile.svg"
                        alt=""
                    />
                </div>
                <div className="container">
                    <div className="hero-content">
                        <span className="pretitle">Our Difference</span>
                        <h1 className="heading js-reveal-on-scroll js-split-to-lines"><span className="text-gradient">Personalized Solutions</span><br className="d-none d-md-block"/> in the Flow of Work</h1>
                    </div>
                    <div className="hero-media">
                        <div className="difference-graphic">
                            <div className="difference-graphic-inner">
                                <div className="difference-prism">
                                    <img
                                        className="colors d-none d-md-block"
                                        src="img/difference/ColorsPrism.svg"
                                        alt=""
                                    />
                                    <img
                                        className="colors d-block d-md-none"
                                        src="img/difference/ColorsPrism@mobile.svg"
                                        alt=""
                                    />
                                    <img
                                        className="prism"
                                        src="img/difference/Prism.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="difference-rings">
                                    <div className="ring"></div>
                                    <div className="ring"></div>
                                    <div className="ring"></div>
                                    <div className="ring"></div>
                                    <div className="ring"></div>
                                    <div className="ring"></div>
                                    <div className="ring"></div>
                                </div>
                                <div className="difference-points">
                                    <div className="point"></div>
                                    <div className="point"></div>
                                    <div className="point"></div>
                                </div>
                            </div>
                            <div className="difference-content">
                                <div className="difference-content-item">
                                    <img className="icon" src="img/difference/icons/Prism.svg" alt="" />
                                    <h6 className="title">Prism</h6>
                                    <p className="paragraph">Understand how you – and each team member – are uniquely wired to perform.</p>
                                </div>
                                <div className="difference-content-item">
                                    <img className="icon" src="img/difference/icons/SelfKnowledge.svg" alt="" />
                                    <h6 className="title">Self-knowledge</h6>
                                    <p className="paragraph">Reveal the “Story of You” (and your team members) across 54 key traits and attributes.</p>
                                </div>
                                <div className="difference-content-item">
                                    <img className="icon" src="img/difference/icons/Coaching.svg" alt="" />
                                    <h6 className="title">Coaching in the Flow of Work</h6>
                                    <p className="paragraph">Coach team members and successfully navigate any business challenge with the AI-driven My Coach.  </p>
                                </div>
                                <div className="difference-content-item">
                                    <img className="icon" src="img/difference/icons/Science.svg" alt="" />
                                    <h6 className="title">The Science of Successful Meetings</h6>
                                    <p className="paragraph">Meetings. Maximize 1-on-1 meetings with “How to Approach” and “What to Avoid” guidance.</p>
                                </div>
                                <div className="difference-content-item">
                                    <img src="img/difference/icons/PersonalizedDevelopment.svg" alt="" />
                                    <h6 className="title">Personalized Development</h6>
                                    <p className="paragraph">Deliver automated learning journeys mapped to Prism recommendations and featuring Harvard Business Publishing Content.</p>
                                </div>
                                <div className="difference-content-item">
                                    <img className="icon" src="img/difference/icons/RelationshipAdivsor.svg" alt="" />
                                    <h6 className="title">Relationship Advisor</h6>
                                    <p className="paragraph">Build trusted relationships, based on how each person is wired and guided by your organization’s values.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shared-section section-solutions scrollTrigger-scroller">
                <div className="decor">
                    <img
                        className="colors d-none d-md-block"
                        src="img/difference/ColorsSolutions.svg"
                        alt=""
                    />
                    <img
                        className="colors d-block d-md-none"
                        src="img/difference/ColorsSolutions@mobile.svg"
                        alt=""
                    />
                </div>
                <div className="container">
                    <div className="shared-heading">
                        <span className="pretitle js-reveal-on-scroll">Prism</span>
                        <h3 className="heading js-reveal-on-scroll js-split-to-lines">Solutions Powered by How You’re Wired</h3>
                        <p className="paragraph js-reveal-on-scroll js-split-to-lines">
                            At the heart of the SurePeople ecosystem is Prism® – a proprietary psychometric algorithm that measures 54 key traits and attributes, providing the richest, most nuanced understanding of how we and those around us are naturally wired.
                        </p>
                    </div>
                    <div className="tab-layout">
                        <nav className="tab-navigation js-reveal-on-scroll">
                            <ul className="tab-navigation-menu">
                                <li className="tab-navigation-item">
                                    <a href="#" className="tab-navigation-link">Personality</a>
                                </li>
                                <li className="tab-navigation-item">
                                    <a href="#" className="tab-navigation-link">Processing</a>
                                </li>
                                <li className="tab-navigation-item">
                                    <a href="#" className="tab-navigation-link">Decision Making</a>
                                </li>
                                <li className="tab-navigation-item">
                                    <a href="#" className="tab-navigation-link">Conflict Management</a>
                                </li>
                                <li className="tab-navigation-item">
                                    <a href="#" className="tab-navigation-link">Motivation</a>
                                </li>
                                <li className="tab-navigation-item">
                                    <a href="#" className="tab-navigation-link">Fundamental Needs</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="tab-container js-reveal-on-scroll">
                            <div className="tab-item">
                                <div className="layout">
                                    <div className="content">
                                        <h3 className="title">Personality</h3>
                                        <p className="paragraph">
                                            Our personalities often reflect how others perceive us. We might come off as being determined and powerful, analytical and precise, charismatic and versatile, dependable and amiable, or some combination of those traits. When faced  with challenges, we can even shift and leverage other traits. Simply put, the <span>Prism<sup>&reg;</sup></span> personality module tells you what makes you, you.
                                        </p>
                                    </div>
                                    <div className="media">
                                        <div className="lottie-tab-container">
                                            <div className="lottie-animation-container" data-animation-json="img/difference/lottie/07_01.json"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-item">
                                <div className="layout">
                                    <div className="content">
                                        <h3 className="title">Processing</h3>
                                        <p className="paragraph">
                                            Many of us process information in different ways. How we prefer to focus our energy, take in information, assess different situations, and deal with our outside environments make us unique. With <span>Prism<sup>&reg;</sup></span>, you will gain valuable insights  into how you process the world around you.
                                        </p>
                                    </div>
                                    <div className="media">
                                        <div className="lottie-tab-container">
                                            <div className="lottie-animation-container" data-animation-json="img/difference/lottie/07_02.json"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-item">
                                <div className="layout">
                                    <div className="content">
                                        <h3 className="title">Decision Making</h3>
                                        <p className="paragraph">
                                            We make big and small decisions every day. Some people prefer to examine all options, while others trust their gut and move quickly. We can also differ in how much we want to include others in the process. <span>Prism<sup>&reg;</sup></span> uncovers your preferences, allowing you to feel more confident in your choices.
                                        </p>
                                    </div>
                                    <div className="media">
                                        <div className="lottie-tab-container">
                                            <div id="lottie-decision-making-tab"></div>
                                            <div className="lottie-animation-container" data-animation-json="img/difference/lottie/07_03.json"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-item">
                                <div className="layout">
                                    <div className="content">
                                        <h3 className="title">Conflict Management</h3>
                                        <p className="paragraph">
                                            When individuals encounter conflict, they tend to respond with one of five styles. You might decide to put your foot down and defend your position, withdraw and pick another fight, sacrifice to make someone else happy, participate in a give-and-take approach, or work to ensure everyone wins. <span>Prism<sup>&reg;</sup></span> identifies your preferred styles for dealing with conflict.
                                        </p>
                                    </div>
                                    <div className="media">
                                        <div className="lottie-tab-container">
                                            <div className="lottie-animation-container" data-animation-json="img/difference/lottie/07_04.json"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-item">
                                <div className="layout">
                                    <div className="content">
                                        <h3 className="title">Motivation</h3>
                                        <p className="paragraph">
                                            What pushes you to get out of bed every morning? What causes you to go the extra mile at work, or prevents you from having that extra cookie at dinner? Our motivations serve as the driving forces behind our actions, as we strive  to achieve our goals. <span>Prism<sup>&reg;</sup></span> sheds light on 14 different motivations that influence our daily life.
                                        </p>
                                    </div>
                                    <div className="media">
                                        <div className="lottie-tab-container">
                                            <div className="lottie-animation-container" data-animation-json="img/difference/lottie/07_05.json"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-item">
                                <div className="layout">
                                    <div className="content">
                                        <h3 className="title">Fundamental Needs</h3>
                                        <p className="paragraph">
                                            There are three fundamental needs that guide and dictate our behaviors. We are in constant battle to find a balance between the desires to make a significant difference in the world, to achieve stability and security, and to gain mastery and control. <span>Prism<sup>&reg;</sup></span> will tell you which of the three is most dominant for you at any given time.
                                        </p>
                                    </div>
                                    <div className="media">
                                        <div className="lottie-tab-container">
                                            <div className="lottie-animation-container" data-animation-json="img/difference/lottie/07_06.json"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shared-section section-difference section-difference-1">
                <div className="decor">
                    <img
                        className="colors d-none d-md-block"
                        src="img/difference/ColorsBody1.svg"
                        alt=""
                    />
                    <img
                        className="colors d-block d-md-none"
                        src="img/difference/ColorsBody1@mobile.svg"
                        alt=""
                    />
                </div>
                <div className="container">
                    <div className="layout">
                        <div className="content">
                            <h3 className="title js-reveal-on-scroll js-split-to-lines">Speed-to-Impact</h3>
                            <p className="paragraph js-reveal-on-scroll js-split-to-lines">We’re about speed-to-impact and ROI. Our cloud-based solution is easy to implement, easy to administer, and easy for leaders and teams to use in the flow of work. Whether for a single leader and team, a business unit, or the entire enterprise, our flexible solution scales based on your needs.</p>
                        </div>
                        <div className="media js-reveal-on-scroll js-fade-in-up">
                            <div className="lottie-tab-container">
                                <img className="lottie-placeholder" src="img/difference/stack/SpeedToImpact.svg" alt="" />
                                <img className="highlights" src="img/difference/stack/Circle1.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shared-section section-difference section-difference-2">
                <div className="container">
                    <div className="layout">
                        <div className="content order-md-last">
                            <h3 className="title js-reveal-on-scroll js-split-to-lines">Trusted Partner</h3>
                            <p className="paragraph js-reveal-on-scroll js-split-to-lines">Our team is committed to delivering positive, measurable outcomes for all stakeholders – our valued team members, customers, partners, and investors – by operating through our values and standing true to our mission: To make people sure of themselves and organizations sure of their people.®</p>
                        </div>
                        <div className="media js-reveal-on-scroll js-fade-in-up">
                            <div className="lottie-tab-container">
                                <img className="lottie-placeholder" src="img/difference/stack/TrustedPartner.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shared-section section-difference section-difference-3">
                <div className="container">
                    <div className="layout">
                        <div className="content">
                            <h3 className="title js-reveal-on-scroll js-split-to-lines">Seamless Integration with Your Tech Stack</h3>
                            <p className="paragraph js-reveal-on-scroll js-split-to-lines">One of SurePeople’s key value propositions lies in the flexibility and interoperability of our solution. We understand the importance of seamlessly and securely integrating with other software systems and services in our customers' technology stack. With seamless integration to leading HCM suites and LXP/LMS solutions, we help increase end-user adoption, engagement, and satisfaction with your existing technology stack, so that you can drive higher ROI from your investments.</p>
                        </div>
                        <div className="media js-reveal-on-scroll js-fade-in-up">
                            <div className="lottie-tab-container">
                                <img className="lottie-placeholder" src="img/difference/stack/SeamlessIntegration.svg" alt="" />
                                <img className="highlights" src="img/difference/stack/Circle2.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shared-section section-difference section-difference-4">
                <div className="decor">
                    <img
                        className="colors d-none d-md-block"
                        src="img/difference/ColorsBody2.svg"
                        alt=""
                    />
                    <img
                        className="colors d-block d-md-none"
                        src="img/difference/ColorsBody2@mobile.svg"
                        alt=""
                    />
                </div>
                <div className="container">
                    <div className="layout">
                        <div className="content order-md-last">
                            <h3 className="title js-reveal-on-scroll js-split-to-lines">Scalable and Secure</h3>
                            <p className="paragraph js-reveal-on-scroll js-split-to-lines">We offer a cloud-based, highly secure, and scalable solution powered by AWS.</p>
                            <ul>
                                <li>Comprehensive, end-to-end security and compliance measures</li>
                                <li>All data is fully encrypted in flight and at rest</li>
                                <li>Highest standards for privacy and data security</li>
                                <li>Routine reviews & audits performed by independent security leaders</li>
                                <li>GDPR and CCPA compliant</li>
                            </ul>
                        </div>
                        <div className="media js-reveal-on-scroll js-fade-in-up">
                            <div className="lottie-tab-container">
                                <img className="lottie-placeholder" src="img/difference/stack/ScalableSecure.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shared-section section-cta">
                <div className="decor">
                    <img
                        className="colors d-none d-md-block"
                        src="img/teams/ColorsCTA2.svg"
                        alt=""
                    />
                    <img
                        className="colors d-block d-md-none"
                        src="img/teams/ColorsCTA2@mobile.svg"
                        alt=""
                    />
                </div>
                <img className="hexagon js-reveal-on-scroll js-fade-in" src="img/teams/Hexagon.svg" alt="" />
                <div className="container">
                    <div className="content">
                        <h3 className="heading js-reveal-on-scroll js-split-to-lines">Ready to Elevate Your Leadership and Achieve Extraordinary Team Results?</h3>
                        <div className="buttons js-reveal-on-scroll">
                            <a href="#" className="btn btn-lg btn-white">Buy Now</a>
                            <a href="#" className="btn btn-lg btn-outline-white">Contact Sales</a>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default Difference
