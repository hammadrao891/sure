import React from 'react'

const GetStartedForm = () => {
  return (
    <div>
      
      <section class="shared-section pt-0 pb-0">
                <div class="container">
                    <div class="get-started-section">
                        <div class="get-started-section-container">
                            <h4 class="heading">Sign up</h4>
                            <p class="paragraph">Fill out the form below to start your free trial.</p>
                            <form>
                                <div class="form-group">
                                    <label>Full Name</label>
                                    <input type="text" class="form-control" placeholder="Enter your full name" />
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" placeholder="Enter your email" />
                                </div>
                                <div class="form-group">
                                    <label>Company Name</label>
                                    <input type="text" class="form-control" placeholder="Enter your company name" />
                                </div>
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" placeholder="Enter title" />
                                </div>
                                <div class="form-row align-items-sm-center mt-4">
                                    <div class="form-group mb-0">
                                        <p class="form-note">We care about your data in our <a href="#">privacy policy</a>.</p>
                                    </div>
                                    <div class="form-group mb-0">
                                        <button type="submit" class="btn btn-lg btn-block btn-primary">Start Free Trial</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default GetStartedForm
