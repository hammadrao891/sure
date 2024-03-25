import React from 'react'
import ContactPreTitle from '../ContactPreTitle/ContactPreTitle'
import ContactHeading from '../ContactHeading/ContactHeading'
import ContactSubHeading from '../ContactSubHeading/ContactSubHeading'

const ContactHero = () => {
  return (
    <div>
      
      <section class="shared-hero">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="img/contact/ColorsHero.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="img/contact/ColorsHero@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="hero-content">
                      <ContactPreTitle/>
                      <ContactHeading/>
                      <ContactSubHeading/> 
                    </div>
                </div>
            </section>
    </div>
  )
}

export default ContactHero
