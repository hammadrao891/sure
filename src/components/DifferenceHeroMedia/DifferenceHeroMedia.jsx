import React from 'react'

const DifferenceHeroMedia = () => {
  return (
    <div>
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
  )
}

export default DifferenceHeroMedia
