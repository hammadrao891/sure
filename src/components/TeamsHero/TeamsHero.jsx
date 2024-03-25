import React from 'react'
import TeamsCarousel from '../TeamsCarousel/TeamsCarousel'
import TeamsHeading from '../TeamsHeading/TeamsHeading'
import TeamsSubHeading from '../TeamsSubHeading/TeamsSubHeading'
import TeamHeroButton from '../TeamHeroButton/TeamHeroButton'

const TeamsHero = () => {
  return (
    <div>
      
      
      <section class="shared-hero" >
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
                <div class="" >
                    <div class="hero-content">
                      <TeamsHeading/>
                        <TeamsSubHeading/>
                        <TeamHeroButton/>
                    </div>
                   <TeamsCarousel/>
                </div>
            </section>
    </div>
  )
}

export default TeamsHero
