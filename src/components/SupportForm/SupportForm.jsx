import React from 'react'

const SupportForm = () => {
  return (
    <div>
    <section class="shared-section pt-0">
      <div class="container">
                    <div class="body-layout">
                        <div class="form-column js-reveal-on-scroll js-reveal-batch">
                            <h3 class="title">What do you need help with?</h3>
                            <p class="paragraph">Please fill out the form and we’ll be in touch as soon as possible.</p>
                            <form>
                                <div class="form-group">
                                    <label class="sr-only">Subject</label>
                                    <div class="form-select">
                                        <select class="form-control" data-placeholder="Please select one">
                                            <option>I can't access my account</option>
                                            <option>I have a feature request.</option>
                                            <option>I need help with a platform tool.</option>
                                            <option>I think something is broken.</option>
                                            <option>I forgot my login username.</option>
                                            <option>My link has expired.</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Company Name</label>
                                    <input type="text" class="form-control" placeholder="Enter company name" />
                                </div>
                                <div class="form-group">
                                    <label>Company Email</label>
                                    <input type="email" class="form-control" placeholder="Enter company email" />
                                </div>
                                <div class="form-group">
                                    <label>What’s your question or issue?</label>
                                    <textarea class="form-control" placeholder="" rows="4"></textarea>
                                </div>
                                <div class="form-row align-items-sm-center">
                                    <div class="form-group mb-0">
                                        <p class="form-note">We care about your data in our <a href="#">privacy policy</a>.</p>
                                    </div>
                                    <div class="form-group mb-0">
                                        <button type="submit" class="btn btn-lg btn-block btn-primary">Send Support Request</button>
                                    </div>
                                </div>
                            </form>
                        </div>
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
                </div>
                </section>
    </div>
  )
}

export default SupportForm
