import React, { useEffect } from 'react'
import RequestADemo from '../RequestADemo/RequestADemo'
import ScheduleADemo from '../SceduleADemo/ScheduleADemo'

const BookADemoMain = () => {
    
    
  return (
    <div>
      <section class="shared-section pt-0">
                <div class="container">
                    <div class="body-layout">
                    <RequestADemo/>
                    <ScheduleADemo/>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default BookADemoMain
