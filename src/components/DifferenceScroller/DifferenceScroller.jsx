import React from 'react'
import PersonalityTab from '../PersonalityTab/PersonalityTab'
import ProcessingTab from '../ProcessingTab/ProcessingTab'
import DecisionMakingTab from '../DecisionMakingTab/DecisionMakingTab'
import ConflictManagementTab from '../ConflictManagementTab/ConflictManagementTab'
import MotivationTab from '../MotivationTab/MotivationTab'
import FundamentalNeedsTab from '../FundamentalNeedsTab/FundamentalNeedsTab'

const DifferenceScroller = () => {
  return (
    <div>
      <section className="shared-section section-solutions-difference scrollTrigger-scroller">
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
                    <div className="shared-heading-difference">
                        <span className="pretitle js-reveal-on-scroll">Prism</span>
                        <h3 className="heading-difference js-reveal-on-scroll js-split-to-lines">Solutions Powered by How You’re Wired</h3>
                        <p className="paragraph-difference js-reveal-on-scroll js-split-to-lines">
                            At the heart of the SurePeople ecosystem is Prism® – a proprietary psychometric algorithm that measures 54 key traits and attributes, providing the richest, most nuanced understanding of how we and those around us are naturally wired.
                        </p>
                    </div>
                    <div className="tab-layout">
                        <nav className="tab-navigation js-reveal-on-scroll">
                            <ul className="tab-navigation-menu">
                                <li className="tab-navigation-item">
                                    <a href="#" className="tab-navigation-link-difference">Personality</a>
                                </li>
                                <li className="tab-navigation-item">
                                    <a href="#" className="tab-navigation-link-difference">Processing</a>
                                </li>
                                <li className="tab-navigation-item">
                                    <a href="#" className="tab-navigation-link-difference">Decision Making</a>
                                </li>
                                <li className="tab-navigation-item">
                                    <a href="#" className="tab-navigation-link-difference">Conflict Management</a>
                                </li>
                                <li className="tab-navigation-item">
                                    <a href="#" className="tab-navigation-link-difference">Motivation</a>
                                </li>
                                <li className="tab-navigation-item">
                                    <a href="#" className="tab-navigation-link-difference">Fundamental Needs</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="tab-container js-reveal-on-scroll">
                            <PersonalityTab/>
                            <ProcessingTab/>
                            <DecisionMakingTab/>
                            <ConflictManagementTab/>
                            <MotivationTab/>
                            <FundamentalNeedsTab/>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default DifferenceScroller
