import React, { useEffect } from 'react'
import { handleLottieAnimations } from '../../js/pages/trust-center'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const TrustCenterMain = () => {
    
    useEffect(()=>{
        handleLottieAnimations()
        handleRevealOnScroll()
        handleSplitToLines()
    })
  return (
    <div>
       <section class="shared-section section-body pt-0">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="img/trust-center/ColorsBody.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="img/trust-center/ColorsBody@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="layout">
                        <div class="content">
                            <h3 class="heading">We put your security and privacy first</h3>
                            <p class="paragraph">Our commitment is to ensure the highest standards of security, compliance, and privacy for our clients and their data. Experience peace of mind with SurePeople's Trust Center.</p>
                            <ul class="check-list">
                                <li>You control your data.</li>
                                <li>We're transparent about where data is located and how it's used.</li>
                                <li>We secure data at rest and in transit.</li>
                                <li>We strive for compliance to global data privacy laws.</li>
                                <li>We defend your data.</li>
                                <li>We are in the business of understanding people, not selling your data.</li>
                                <li>We monitor our platform 24/7.</li>
                            </ul>
                            <a href="#" class="button-link">
                                Learn more about SurePeople Privacy
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#131316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                        <div class="media">
                            <div class="lottie-animation-container" data-animation-json="img/about/lottie/head_b.json"></div>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default TrustCenterMain
