import React, { useEffect } from 'react'
import { handleRevealOnScroll, handleSplitToLines } from '../../js/functions'
import gsap from 'gsap'

const PartnersHeading = () => {
    useEffect(()=>{
        handleRevealOnScroll()
        // handleSplitToLines()
    },[])
    
  return (
    <div>
      <h1 class="heading js-reveal-on-scroll js-split-to-lines">Our partner program<br class="d-none d-md-block"/> enables, supports and&nbsp;<br class="d-none d-md-block"/>
                            <span class="highlight">
                                <svg class="js-draw-path" width="328" height="119" viewBox="0 0 328 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M229.987 1C252.557 10.4759 282.191 26.9161 292.148 57.5818C302.323 88.9189 251.867 105.679 232.395 110.194C190.863 119.824 143.71 119.7 101.324 114.389C80.5738 111.789 60.747 109.745 40.5942 103.739C24.8931 99.0593 21.0621 95.9322 7.63722 84.2664C2.02469 77.2904 -0.604396 65.0108 2.02469 57.5818C10.2352 34.3809 39.2688 26.4211 57.126 22.9367C114.573 11.7268 170.697 14.6355 229.256 18.2047C246.926 19.2817 273.989 20.9865 292.527 25.5829C310.378 30.0096 308.797 28.4185 327 36.3947" stroke="#131316" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                grows
                            </span>
                            &nbsp;your business.
                        </h1>
                        

    </div>
  )
}

export default PartnersHeading
