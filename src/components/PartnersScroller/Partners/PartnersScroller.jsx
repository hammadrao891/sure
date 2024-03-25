import React from 'react'

const PartnersScroller = () => {
    
  return (
    <div>
      
      <section class="shared-section section-opportunities scrollTrigger-scroller">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="img/partners/ColorsOpportunities.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="img/partners/ColorsOpportunities@mobile.svg"
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
                                    <a href="#" class="tab-navigation-link">Learning Solutions</a>
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
                                            <div class="lottie-animation-container" data-animation-json="img/partners/lottie/01_PC.json"></div>
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
                                            <div class="lottie-animation-container" data-animation-json="img/partners/lottie/02_woman.json"></div>
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
                                            <div class="lottie-animation-container" data-animation-json="img/partners/lottie/03_people.json"></div>
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
                                            <div class="lottie-animation-container" data-animation-json="img/partners/lottie/04_lines.json"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default PartnersScroller
