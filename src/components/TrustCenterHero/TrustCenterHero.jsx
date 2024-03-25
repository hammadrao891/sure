import React, { useEffect } from 'react'
import { handleLottieAnimations } from '../../js/pages/trust-center'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const TrustCenterHero = () => {
    
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
    })
  return (
    
    <section class="shared-hero">
    <div class="decor">
        <img
            class="colors d-none d-md-block"
            src="img/trust-center/ColorsHero.svg"
            alt=""
        />
        <img
            class="colors d-block d-md-none"
            src="img/trust-center/ColorsHero@mobile.svg"
            alt=""
        />
    </div>
    <div class="container">
        <div class="hero-content">
            <span class="pretitle js-reveal-on-scroll">Trust Center</span>
            <h1 class="heading js-reveal-on-scroll js-split-to-lines">Empowerment Begins<br class="d-none d-md-block"/> With &nbsp;
                <span class="highlight">
                    <svg class="js-draw-path" width="269" height="101" viewBox="0 0 269 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M188.545 1C207.03 9.01809 231.301 22.929 239.455 48.8769C247.789 75.393 206.465 89.5748 190.517 93.3949C156.501 101.543 117.882 101.439 83.167 96.9445C66.1724 94.7442 49.9339 93.0149 33.4284 87.9327C20.5689 83.9733 17.4312 81.3272 6.436 71.4562C1.83924 65.5534 -0.31403 55.163 1.83924 48.8769C8.56383 29.2454 32.3428 22.5102 46.9682 19.5618C94.0182 10.0765 139.985 12.5377 187.946 15.5579C202.418 16.4691 224.583 17.9116 239.766 21.8009C254.387 25.5466 253.091 24.2002 268 30.9494" stroke="#131316" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    Trust
                </span>
            </h1>
            <p class="paragraph js-reveal-on-scroll js-split-to-lines">At SurePeople, we understand the importance of trust in every interaction</p>
        </div>
    </div>
</section>
  )
}

export default TrustCenterHero
