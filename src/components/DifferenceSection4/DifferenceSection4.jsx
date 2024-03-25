import React from 'react'

const DifferenceSection4 = () => {
  return (
    <div>
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
                        <div className="content-difference order-md-last">
                            <h3 className="title-difference js-reveal-on-scroll js-split-to-lines">Scalable and Secure</h3>
                            <p className="paragraph-difference js-reveal-on-scroll js-split-to-lines">We offer a cloud-based, highly secure, and scalable solution powered by AWS.</p>
                            <ul>
                                <li>Comprehensive, end-to-end security and compliance measures</li>
                                <li>All data is fully encrypted in flight and at rest</li>
                                <li>Highest standards for privacy and data security</li>
                                <li>Routine reviews & audits performed by independent security leaders</li>
                                <li>GDPR and CCPA compliant</li>
                            </ul>
                        </div>
                        <div className="media js-reveal-on-scroll js-fade-in-up">
                            <div className="lottie-tab-container-difference">
                                <img className="lottie-placeholder" src="img/difference/stack/ScalableSecure.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default DifferenceSection4
