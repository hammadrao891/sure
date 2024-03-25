import React, { useEffect } from 'react'
import FeedbackForm from '../FeedbackForm/FeedbackForm'
import FeedbackContactInformation from '../FeedbackContactInformation/FeedbackContactInformation'

const FeedbackMain = () => {
    
  return (
    <div>
      <section class="shared-section pt-0">
                <div class="container">
                    <div class="body-layout">
                        <FeedbackForm/>
                      <FeedbackContactInformation/>
                      </div>
                </div>
            </section>
    </div>
  )
}

export default FeedbackMain
