import React from 'react'

const PartnersSolution = () => {
  return (
    <div>
      <section class="shared-section section-solutions">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="img/partners/ColorsSolutions.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="img/partners/ColorsSolutions@mobile.svg"
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
                                <img src="img/partners/icons/solutions-1.svg" alt="" />
                            </div>
                            <h6 class="title">Executive & Leader Onboarding</h6>
                            <p class="paragraph">Empower team leaders to align, develop, and optimize their teams.</p>
                        </div>
                        <div class="card js-reveal-on-scroll js-reveal-batch">
                            <div class="background"></div>
                            <div class="icon">
                                <img src="img/partners/icons/solutions-2.svg" alt="" />
                            </div>
                            <h6 class="title">Team Alignment & Optimization</h6>
                            <p class="paragraph">Accelerate speed-to-relationships and enrich cultural assimilation.</p>
                        </div>
                        <div class="card js-reveal-on-scroll js-reveal-batch">
                            <div class="background"></div>
                            <div class="icon">
                                <img src="img/partners/icons/solutions-3.svg" alt="" />
                            </div>
                            <h6 class="title">People Skills Development</h6>
                            <p class="paragraph">Improve the skills that most impact personal and professional life.</p>
                        </div>
                        <div class="card js-reveal-on-scroll js-reveal-batch">
                            <div class="background"></div>
                            <div class="icon">
                                <img src="img/partners/icons/solutions-4.svg" alt="" />
                            </div>
                            <h6 class="title">Change & Disruption Management</h6>
                            <p class="paragraph">Ensure successful mergers, acquisitions, and digital transformations.</p>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default PartnersSolution
