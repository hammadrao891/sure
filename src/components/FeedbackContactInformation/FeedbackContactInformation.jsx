import React, { useEffect } from 'react'
import { handleRevealOnScroll } from '../../js/functions'

const FeedbackContactInformation = () => {
    useEffect(()=>
    {
        handleRevealOnScroll()
    })
  return (
    <div>
        <div class="content-column js-reveal-on-scroll js-reveal-batch">
                            <div class="content">
                                <div class="info-img">
                                    <img src="img/support/info.svg" alt="" />
                                </div>
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
                                </div>
                            </div>
                        </div>
                    
    </div>
  )
}

export default FeedbackContactInformation
