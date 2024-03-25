import React from 'react'

const DifferenceCTA = () => {
  return (
    <div>
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
                        <h3 className="heading-difference js-reveal-on-scroll js-split-to-lines">Ready to Elevate Your Leadership and Achieve Extraordinary Team Results?</h3>
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

export default DifferenceCTA
