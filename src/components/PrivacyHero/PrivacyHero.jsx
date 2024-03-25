import React, { useEffect } from 'react'
import {handleSplitToLines} from "../../js/functions"
const PrivacyHero = () => {
    
  useEffect(()=>{
    handleSplitToLines()
  },[])    

  return (
    <div class="container">
                    <div class="hero-content">
                        <span class="pretitle js-reveal-on-scroll js-split-to-lines">Privacy Policy</span>
                        <h1 class="heading js-reveal-on-scroll js-split-to-lines">
                             SurePeople cares about and is committed to protect the&nbsp;
                            <span class="highlight">
                                <svg class="js-draw-path" width="291" height="103" viewBox="0 0 291 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M227.256 1C249.557 9.18007 278.837 23.372 288.675 49.8441C298.729 76.8958 248.875 91.3642 229.636 95.2615C188.598 103.574 142.008 103.468 100.127 98.8827C79.6248 96.638 60.0344 94.8738 40.122 89.6889C24.6081 85.6495 20.8228 82.95 7.55806 72.8795C2.01247 66.8575 -0.585261 56.2572 2.01247 49.8441C10.1251 29.816 38.8124 22.9447 56.4566 19.9368C113.218 10.2599 168.673 12.7708 226.534 15.8519C243.993 16.7816 270.733 18.2533 289.05 22.2211" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                privacy
                            </span>
                            &nbsp;of its users.
                        </h1>
                        <p class="paragraph js-reveal-on-scroll js-split-to-lines">Last revised on November 12, 2020</p>
                    </div>
                </div>
  )
}

export default PrivacyHero
