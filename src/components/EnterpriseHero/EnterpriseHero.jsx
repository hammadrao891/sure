import React, { useEffect } from 'react'
import EnterprisePretitle from '../EnterprisePretitle/EnterprisePretitle'
import EnterpriseHeading from '../EnterpriseHeading/EnterpriseHeading'
import EnterpriseCarousel from '../EnterpriseCarousel/EnterpriseCarousel'
import {handleRevealCTA,handleRevealOnScroll,handleSplitToLines} from "../../js/functions"
const EnterpriseHero = () => {
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
        handleRevealCTA()
      })
  return (
    <div>
      
      <section class="shared-hero">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="img/teams/ColorsHero.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="img/teams/ColorsHero@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="">
                    <div class="hero-content">
                        <EnterprisePretitle/>
                        <EnterpriseHeading/>    
                    </div>
                    <EnterpriseCarousel/>
                </div>
            </section>
    </div>
  )
}

export default EnterpriseHero
