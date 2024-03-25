import React, { useEffect } from 'react'
import { customSelectFields, selectFieldsInteraction } from '../../js/pages/book-a-demo'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const RequestADemo = () => {
    useEffect(()=>{
        customSelectFields()
        selectFieldsInteraction()
        handleRevealOnScroll()
        handleSplitToLines()
    })
  return (
    <div>
          <div class="form-column js-reveal-on-scroll js-reveal-batch">
                            <h3 class="title">Request a Demo</h3>
                            <p class="paragraph">Discover the power of SurePeople today</p>
                            <form>
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
                                    <label>Title</label>
                                    <input type="text" class="form-control" placeholder="" />
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

export default RequestADemo
