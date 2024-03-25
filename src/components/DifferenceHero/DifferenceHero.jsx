import React from 'react'
import DifferencePretitle from '../DifferencePretitle/DifferencePretitle'
import DifferenceHeading from '../DifferenceHeading/DifferenceHeading'
import DifferenceHeroMedia from '../DifferenceHeroMedia/DifferenceHeroMedia'

const DifferenceHero = () => {
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
                       <DifferencePretitle/>
                        <DifferenceHeading/>
                    </div>
                    <DifferenceHeroMedia/>
                </div>
            </section>
    </div>
  )
}

export default DifferenceHero
