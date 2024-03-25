import React from 'react'
import PricingPreTitle from '../PricingPreTitle/PricingPreTitle'
import PricingHeading from '../PricingHeading/PricingHeading'
import PricingSubHeading from '../PricingSubHeading/PricingSubHeading'

const PricingHero = () => {
  return (
    <div>
       <section class="shared-hero">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="~img/leadership/ColorsHero.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="~img/leadership/ColorsHero@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="hero-content">
                       <PricingPreTitle/>
                        <PricingHeading/>
                        <PricingSubHeading/>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default PricingHero
