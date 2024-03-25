import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <div class="form-column order-xs-first order-md-last">
                            <form class="form-contact">
                                <div class="form-row">
                                    <div class="form-group">
                                        <label>First Name</label>
                                        <input type="text" class="form-control" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label>Last Name</label>
                                        <input type="text" class="form-control" placeholder="" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label>Company</label>
                                    <input type="text" class="form-control" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label>Message</label>
                                    <textarea class="form-control" placeholder="" rows="7"></textarea>
                                </div>
                                <div class="form-row form-footer align-items-sm-center">
                                    <div class="form-group mb-0">
                                        <p class="form-note">We care about your data in our <a href="#">privacy policy</a>.</p>
                                    </div>
                                    <div class="form-group mb-0">
                                        <button type="submit" class="btn btn-lg btn-block btn-primary">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
    </div>
  )
}

export default ContactForm
