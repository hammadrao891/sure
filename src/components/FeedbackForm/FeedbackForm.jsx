import React, { useEffect } from 'react'
import { customSelectFields, selectFieldsInteraction } from '../../js/pages/book-a-demo'
import { handleRevealOnScroll } from '../../js/functions'

const FeedbackForm = () => {
    useEffect(()=>{
        customSelectFields()
        selectFieldsInteraction()
        handleRevealOnScroll()
    })
  return (
    <div>
      <div class="form-column js-reveal-on-scroll js-reveal-batch">
                            <h3 class="title">How Can We Help?</h3>
                            <p class="paragraph">We are looking forward to hearing back from you.</p>
                            <form>
                                <div class="form-group">
                                    <label class="sr-only">Subject</label>
                                    <div class="form-select">
                                        <select class="form-control" data-placeholder="Leave feedback">
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
                                    <label>Your Email</label>
                                    <input type="email" class="form-control" placeholder="Enter your email" />
                                </div>
                                <div class="form-group">
                                    <label>Message</label>
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
    </div>
  )
}

export default FeedbackForm
