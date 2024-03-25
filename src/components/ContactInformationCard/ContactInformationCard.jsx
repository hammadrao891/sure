import React from 'react'

const ContactInformationCard = () => {
  return (
    <div>
        <div class="content-column">
                            <div class="content">
                                <h4 class="title">Contact information</h4>
                                <p class="paragraph">Contact us for any inquiries, feedback, or assistance.</p>
                                <div class="info">
                                    <p class="paragraph">Contacts</p>
                                    <ul class="info-list">
                                        <li>
                                            <img src="img/contact/icons/tel-1.svg" alt="" />
                                            <a href="tel:855-755-SURE (7873)">855-755-SURE (7873)</a>
                                        </li>
                                        <li>
                                            <img src="img/contact/icons/tel-2.svg" alt="" />
                                            <a href="tel:+1 312-800-1990">+1 312-800-1990</a> <small>(international)</small>
                                        </li>
                                        <li>
                                            <img src="img/contact/icons/mail.svg" alt="" />
                                            <a href="mailto:support@surepeople.com">support@surepeople.com</a>
                                        </li>
                                    </ul>
                                    <p class="paragraph">Social</p>
                                    <ul class="social-list">
                                        <li>
                                            <a href="#"><img src="img/contact/icons/instagram.svg" alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="img/contact/icons/youtube.svg" alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="img/contact/icons/x.svg" alt="" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      
    </div>
  )
}

export default ContactInformationCard
