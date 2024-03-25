import React, { useEffect } from 'react'
import { handleLottieAnimations } from '../../js/pages/trust-center'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'
import ResourceTransparency from '../ResourceTransparency/ResourceTransparency'
import ResourceSecurity from '../ResourceSecurity/ResourceSecurity'
import ResourceControl from '../ResourceControl/ResourceControl'

const AdditionalResources = () => {
   
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
    },[]) 
  return (
       
    <section class="shared-section section-resources pt-0">
    <div class="decor">
        <img
            class="colors d-none d-md-block"
            src="img/trust-center/ColorsResources.svg"
            alt=""
        />
        <img
            class="colors d-block d-md-none"
            src="img/trust-center/ColorsResources@mobile.svg"
            alt=""
        />
    </div>
    <div class="container">
        <div class="shared-heading text-center">
            <h3 class="heading js-reveal-on-scroll js-split-to-lines">Additional Resources</h3>
            <p class="paragraph js-reveal-on-scroll js-split-to-lines">Our values represent the deeply held ideals and behaviors that we share at SurePeople to positively impact our employees, customers and partners.</p>
        </div>
        <div class="grid">
            <ResourceTransparency/>
            <ResourceSecurity/>
            <ResourceControl/>
        </div>
    </div>
</section>
  )
}

export default AdditionalResources
