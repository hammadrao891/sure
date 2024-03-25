import React from 'react'
import FeedbackPreTitle from '../FeedbackPreTitle/FeedbackPreTitle'
import FeedbackHeading from '../FeedbackHeading/FeedbackHeading'

const FeedbackHero = () => {
  return (
    <div>
      <section class="shared-hero">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="img/feedback/ColorsHero.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="img/feedback/ColorsHero@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="hero-content">
                        <FeedbackPreTitle/>
                        <FeedbackHeading/>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default FeedbackHero
