import React from 'react'

const DifferenceSection1 = () => {
  return (
    <div>
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
                            <div className="lottie-tab-container-difference">
                                <img className="lottie-placeholder" src="img/difference/stack/SpeedToImpact.svg" alt="" />
                                <img className="highlights" src="img/difference/stack/Circle1.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default DifferenceSection1
