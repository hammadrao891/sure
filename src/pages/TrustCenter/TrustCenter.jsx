import React, { useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import CookieNotice from '../../components/CookieNotice/CookieNotice'
import Footer from '../../components/Footer/Footer'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'
import "../../scss/pages/trust-center.scss"
import { handleLottieAnimations } from '../../js/pages/trust-center'
import TrustCenterHero from '../../components/TrustCenterHero/TrustCenterHero'
import TrustCenterMain from '../../components/TrustCenterMain/TrustCenterMain'
import AdditionalResources from '../../components/AdditionalResources/AdditionalResources'

const TrustCenter = () => {
  return (
    <div>
        <TrustCenterHero/>
        <TrustCenterMain/>
        <AdditionalResources/>
    </div>
  )
}

export default TrustCenter
