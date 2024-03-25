import React, { useEffect } from 'react'
import { heroCarousel } from '../../js/pages/enterprise'
import EnterpriseHero from '../../components/EnterpriseHero/EnterpriseHero'
import EnterpriseVideo from '../../components/EnterpriseVideo/EnterpriseVideo'
import EnterpriseSection1 from '../../components/EnterpriseSection1/EnterpriseSection1'
import EnterpriseSection2 from '../../components/EnterpriseSection2/EnterpriseSection2'
import EnterpriseSection3 from '../../components/EnterpriseSection3/EnterpriseSection3'
import EnterpriseSection4 from '../../components/EnterpriseSection4/EnterpriseSection4'
import EnterpriseSection5 from '../../components/EnterpriseSection5/EnterpriseSection5'
import EnterpriseSectionCTA from '../../components/EnterpriseSectionCTA/EnterpriseSectionCTA'

const Enterprise = () => {
    
  return (
    <div>
        <EnterpriseHero/>
            <EnterpriseVideo/>
            <EnterpriseSection1/>
            <EnterpriseSection2/>
            <EnterpriseSection3/>
            <EnterpriseSection4/>
            <EnterpriseSection5/>
            <EnterpriseSectionCTA/>
                </div>
  )
}

export default Enterprise
