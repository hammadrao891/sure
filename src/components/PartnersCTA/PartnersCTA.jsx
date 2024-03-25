import gsap from 'gsap';
import React, { useEffect } from 'react'

const PartnersCTA = () => {
    
  useEffect(() => {
    const path = document.querySelector('#svgg');
    gsap.set(path, { strokeDasharray: path.getTotalLength(), strokeDashoffset: path.getTotalLength() });
    gsap.to(path, { duration: 2, strokeDashoffset: 0 });
}, []);
  return (
    <div>
      
      <section class="shared-section section-cta">
                <div class="decor js-reveal-cta">
                    <img
                        class="colors d-none d-md-block"
                        src="img/partners/ColorsCTA.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="img/partners/ColorsCTA@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="cta-layout">
                        <div class="hexagon js-reveal-cta">
                            <img src="img/partners/HexagonCTA.svg" alt="" />
                        </div>
                        <div class="content">
                            <span class="pre js-reveal-on-scroll js-split-to-lines">Partner with us</span>
                            <h3 class="heading js-reveal-on-scroll js-split-to-lines">Interested in becoming a partner?</h3>
                            <p class="paragraph js-reveal-on-scroll js-split-to-lines">Explore partnership opportunities today!</p>
                            <div class="buttons">
                            <div class="line-draw js-draw-path" style={{opacity: 1}}> <svg width="131" height="226" viewBox="0 0 131 226" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id='svgg' d="M130.5 1C119.354 1.67267 95.4417 15.5297 88.957 65.5766M88.957 65.5766C82.4722 115.623 97.5695 117.036 104.156 112.495C110.742 105.937 105.979 89.7928 88.957 65.5766ZM88.957 65.5766C77.9801 47.7508 48.9338 17.4468 20.5629 38.8378C-14.9006 65.5766 7.39075 115.018 13.9768 126.117C20.5629 137.216 59.5728 190.189 124.927 216.928M124.927 216.928L111.755 182.117M124.927 216.928L84.9039 225" stroke="#FAFAFA" stroke-width="2" stroke-linejoin="round" style={{strokeDashArray: 595.965, strokeDashOffset: -0.000908436}}></path> </svg> </div>
                                <a href="#" className="btn btn-lg btn-white js-reveal-on-scroll contact" >Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default PartnersCTA
