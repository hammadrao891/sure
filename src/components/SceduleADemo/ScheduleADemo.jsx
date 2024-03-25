import React, { useEffect } from 'react'
import ScheduleConsultationSVG from '../ScheduleConsultationSVG/ScheduleConsultationSVG'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'

const ScheduleADemo = () => {
    useEffect(()=>{
        handleRevealOnScroll()
        handleSplitToLines()
    })
  return (
    <div>
      
      <div class="content-column js-reveal-on-scroll js-reveal-batch">
                            <div class="content">
                                <h4 class="title">Schedule a<br /> Consultation</h4>
                                <p class="paragraph">Discover the power of SurePeople today</p>
                                <ScheduleConsultationSVG/>
                                <a href="#" class="btn btn-lg btn-block btn-primary">Schedule Now</a>
                            </div>
                        </div>
    </div>
  )
}

export default ScheduleADemo
