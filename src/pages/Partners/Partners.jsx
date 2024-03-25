import React, { useEffect } from 'react'
import CookieNotice from '../../components/CookieNotice/CookieNotice'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import "../../scss/pages/partners.scss"
// import { handleLottieAnimations, tabsSection } from '../../js/pages/partners'

const Partners = () => {
    useEffect(()=>{
        // handleLottieAnimations()
        // tabsSection()
    })
  return (
    <div>
      <CookieNotice/>
      <Navigation/>
      <div id="page-wrapper">
        <main>
            <section class="shared-hero">
                <div class="line-draw js-draw-path">
                    <svg class="d-none d-md-block" viewBox="0 0 1467 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-78 132.155C-64 104.488 -16.8 49.5547 60 51.1547C156 53.1547 154 61.0506 272 95.1547C445 145.155 492 158.155 585 76.1547C606 51.1547 569.5 16.2336 548 24.1547C529 31.1547 538.5 79.1547 601 82.1547C641 82.1547 655 79.1547 726 31.1547C797 -16.8453 912.64 5.11478 944 12.1547C968.5 17.6547 1154 72.7157 1201 76.1547C1242 79.1547 1379 67.1547 1467 12.1547" stroke="black" stroke-width="2"/>
                    </svg>
                    <svg class="d-block d-md-none" viewBox="0 0 375 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 126.629C24.989 117.713 49.3048 101.456 78 76.1547C99 51.1547 62.5 16.2336 41 24.1547C22 31.1547 31.5 79.1547 94 82.1547C134 82.1547 148 79.1547 219 31.1547C264.008 0.7265 326.956 -1.58785 375 2.58886" stroke="black" stroke-width="2"/>
                    </svg>
                </div>
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="~img/teams/ColorsHero.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="~img/teams/ColorsHero@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="hero-content">
                        <span class="pretitle js-reveal-on-scroll">Partnership</span>
                        <h1 class="heading js-reveal-on-scroll js-split-to-lines">Our partner program<br class="d-none d-md-block"/> enables, supports and<br class="d-none d-md-block"/>
                            <span class="highlight">
                                <svg class="js-draw-path" width="328" height="119" viewBox="0 0 328 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M229.987 1C252.557 10.4759 282.191 26.9161 292.148 57.5818C302.323 88.9189 251.867 105.679 232.395 110.194C190.863 119.824 143.71 119.7 101.324 114.389C80.5738 111.789 60.747 109.745 40.5942 103.739C24.8931 99.0593 21.0621 95.9322 7.63722 84.2664C2.02469 77.2904 -0.604396 65.0108 2.02469 57.5818C10.2352 34.3809 39.2688 26.4211 57.126 22.9367C114.573 11.7268 170.697 14.6355 229.256 18.2047C246.926 19.2817 273.989 20.9865 292.527 25.5829C310.378 30.0096 308.797 28.4185 327 36.3947" stroke="#131316" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                grows
                            </span>
                            your business.
                        </h1>
                    </div>
                </div>
                <div class="scroll-down">
                    <a href="#" class="scroll-down-button"><img src="~img/icons/arrow-narrow-down.svg" alt="" /></a>
                </div>
            </section>

            <section class="shared-section section-opportunities scrollTrigger-scroller">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="~img/partners/ColorsOpportunities.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="~img/partners/ColorsOpportunities@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="shared-heading text-center d-none d-md-block">
                        <h3 class="heading js-reveal-on-scroll js-split-to-lines">Partnership Opportunities</h3>
                    </div>
                    <div class="tab-layout">
                        <nav class="tab-navigation js-reveal-on-scroll">
                            <ul class="tab-navigation-menu">
                                <li class="tab-navigation-item">
                                    <a href="#" class="tab-navigation-link">Learning SOlutions</a>
                                </li>
                                <li class="tab-navigation-item">
                                    <a href="#" class="tab-navigation-link">Coaching solutions</a>
                                </li>
                                <li class="tab-navigation-item">
                                    <a href="#" class="tab-navigation-link">Consulting</a>
                                </li>
                                <li class="tab-navigation-item">
                                    <a href="#" class="tab-navigation-link">Resell & Integration</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="tab-container js-reveal-on-scroll">
                            <div class="tab-item">
                                <div class="layout">
                                    <div class="content">
                                        <span class="category"><span class="no">1</span> Opportunity</span>
                                        <h4 class="title">LMS, LXP and HCM Technologies</h4>
                                        <p class="paragraph">Seamlessly integrate our patented platform to enhance your LMS, LXP, HCM suite or work tech offering. Our Prism® algorithm helps differentiate your solution, while increasing end-users’ adoption, engagement and satisfaction.</p>
                                    </div>
                                    <div class="media">
                                        <div class="lottie-tab-container">
                                            <div class="lottie-animation-container" data-animation-json="~img/partners/lottie/01_PC.json"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item">
                                <div class="layout">
                                    <div class="content">
                                        <span class="category"><span class="no">2</span> Opportunity</span>
                                        <h4 class="title">Business Consultants, Executive Coaches & Trainers</h4>
                                        <p class="paragraph">Our science-driven solutions increase your influence, client impact and revenues. Options for growing new business include leveraging our platform in your consulting, coaching or training work; getting certified on our Prism ® algorithm; and/or, introducing our solutions to your clients to participate in partner referral fees. Certified Prism ® coaches are granted continuing education credits by the International Coaches Federation (ICF) and promoted throughout the SurePeople ecosystem.</p>
                                    </div>
                                    <div class="media">
                                        <div class="lottie-tab-container">
                                            <div class="lottie-animation-container" data-animation-json="~img/partners/lottie/02_woman.json"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item">
                                <div class="layout">
                                    <div class="content">
                                        <span class="category"><span class="no">3</span> Opportunity</span>
                                        <h4 class="title">Consulting Firms</h4>
                                        <p class="paragraph">Whether HR tech, M&A, or digital transformation, all successful change begins and ends with people. Our solutions uniquely empower distributed or hybrid teams in any stage of their formation or development. Learn how we can help your consulting firm build higher-performing teams, optimize client engagements and increase client impact with the Platform.</p>
                                    </div>
                                    <div class="media">
                                        <div class="lottie-tab-container">
                                            <div class="lottie-animation-container" data-animation-json="~img/partners/lottie/03_people.json"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item">
                                <div class="layout">
                                    <div class="content">
                                        <span class="category"><span class="no">4</span> Opportunity</span>
                                        <h4 class="title">Value-Added Resellers (VARs) & System Integrators</h4>
                                        <p class="paragraph">We partner with select channel distributors and system integrators on a sell-through or sell-with basis. We offer your sales and implementation teams proven solutions powered by SurePeople. Contact us to learn how we can help you grow profitable sales.</p>
                                    </div>
                                    <div class="media">
                                        <div class="lottie-tab-container">
                                            <div class="lottie-animation-container" data-animation-json="~img/partners/lottie/04_lines.json"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="shared-section section-solutions">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="~img/partners/ColorsSolutions.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="~img/partners/ColorsSolutions@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="shared-heading text-center">
                        <h3 class="heading js-reveal-on-scroll js-split-to-lines">Have a specific need? We have a solution</h3>
                        <p class="paragraph paragraph-xxl js-reveal-on-scroll js-split-to-lines">Our values represent the deeply held ideals and behaviors that we share at SurePeople to positively impact our employees, customers and partners.</p>
                    </div>
                    <div class="solutions-grid">
                        <div class="card js-reveal-on-scroll js-reveal-batch">
                            <div class="background"></div>
                            <div class="icon">
                                <img src="~img/partners/icons/solutions-1.svg" alt="" />
                            </div>
                            <h6 class="title">Executive & Leader Onboarding</h6>
                            <p class="paragraph">Empower team leaders to align, develop, and optimize their teams.</p>
                        </div>
                        <div class="card js-reveal-on-scroll js-reveal-batch">
                            <div class="background"></div>
                            <div class="icon">
                                <img src="~img/partners/icons/solutions-2.svg" alt="" />
                            </div>
                            <h6 class="title">Team Alignment & Optimization</h6>
                            <p class="paragraph">Accelerate speed-to-relationships and enrich cultural assimilation.</p>
                        </div>
                        <div class="card js-reveal-on-scroll js-reveal-batch">
                            <div class="background"></div>
                            <div class="icon">
                                <img src="~img/partners/icons/solutions-3.svg" alt="" />
                            </div>
                            <h6 class="title">People Skills Development</h6>
                            <p class="paragraph">Improve the skills that most impact personal and professional life.</p>
                        </div>
                        <div class="card js-reveal-on-scroll js-reveal-batch">
                            <div class="background"></div>
                            <div class="icon">
                                <img src="~img/partners/icons/solutions-4.svg" alt="" />
                            </div>
                            <h6 class="title">Change & Disruption Management</h6>
                            <p class="paragraph">Ensure successful mergers, acquisitions, and digital transformations.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="shared-section section-cta">
                <div class="decor js-reveal-cta">
                    <img
                        class="colors d-none d-md-block"
                        src="~img/partners/ColorsCTA.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="~img/partners/ColorsCTA@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="cta-layout">
                        <div class="hexagon js-reveal-cta">
                            <img src="~img/partners/HexagonCTA.svg" alt="" />
                        </div>
                        <div class="content">
                            <span class="pre js-reveal-on-scroll js-split-to-lines">Partner with us</span>
                            <h3 class="heading js-reveal-on-scroll js-split-to-lines">Interested in becoming a partner?</h3>
                            <p class="paragraph js-reveal-on-scroll js-split-to-lines">Explore partnership opportunities today!</p>
                            <div class="buttons">
                                <div class="line-draw js-draw-path">
                                    <svg width="131" height="226" viewBox="0 0 131 226" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M130.5 1C119.354 1.67267 95.4417 15.5297 88.957 65.5766M88.957 65.5766C82.4722 115.623 97.5695 117.036 104.156 112.495C110.742 105.937 105.979 89.7928 88.957 65.5766ZM88.957 65.5766C77.9801 47.7508 48.9338 17.4468 20.5629 38.8378C-14.9006 65.5766 7.39075 115.018 13.9768 126.117C20.5629 137.216 59.5728 190.189 124.927 216.928M124.927 216.928L111.755 182.117M124.927 216.928L84.9039 225" stroke="#FAFAFA" stroke-width="2" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <a href="#" class="btn btn-lg btn-white js-reveal-on-scroll">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>


      <Footer/>
      </div>
    </div>
  )
}

export default Partners
