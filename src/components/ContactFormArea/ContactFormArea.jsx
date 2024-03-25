import React from 'react'
import ContactInformationCard from '../ContactInformationCard/ContactInformationCard'
import ContactForm from '../ContactForm/ContactForm'

const ContactFormArea = () => {
  return (
    <div>
      
      <section class="shared-section pt-0">
                <div class="container">
                    <div class="contact-layout">
                      <ContactInformationCard/>
                      <ContactForm/>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default ContactFormArea
