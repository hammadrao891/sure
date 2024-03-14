function Testimonials({active,handleItemClick})
{
    return(
        <>
            <section class="shared-section section-testimonials">
              
              <div class="decor">
                
                <img
                  class="colors d-none d-md-block"
                  src="img/home/ColorsTestimonials.svg"
                  alt=""
                />
                <img
                  class="colors d-block d-md-none"
                  src="img/home/ColorsTestimonials@mobile.svg"
                  alt=""
                />
              </div>
              <div class="container">
                
                <div class="shared-heading text-center">
                  
                  <h2 class="heading heading-3">Customer Testimonials</h2>
                  <p class="paragraph paragraph-xxl">
                    Real stories from our valued customers and partners.
                  </p>
                </div>
              </div>
              <div class="customer-testimonials js-customer-testimonials" onClick={handleItemClick}>
                
                <div class={`customer-testimonials-item js-customer-testimonials-item ${active.one && 'active'}`} onClick={e=>handleItemClick(e,'one')}>
                  
                  <div class="customer-testimonial">
                    
                    <div class="hidden-info">
                      
                      <div class="name">Bill O'Brien, Ph.D.</div>
                    </div>
                    <div class="photo">
                      
                      <img
                        width="1024"
                        height="574"
                        src="img/home/BillO'Brien@1x.png"
                        srcset="img/home/BillO'Brien@1x.png, img/home/BillO'Brien@2x.png 2x"
                        alt="Bill O'Brien"
                      />
                    </div>
                    <div class="overlay">
                      
                      <div class="content">
                        
                        <h6 class="name">Bill O'Brien, Ph.D.</h6>
                        <p class="job">CEO, Mission Development Corp.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={`customer-testimonials-item js-customer-testimonials-item ${active.two && 'active'}`} onClick={(e)=>handleItemClick(e,'two')}>
                  
                  <div class="customer-testimonial">
                    
                    <div class="hidden-info">
                      
                      <div class="name">Jennifer Braun</div>
                    </div>
                    <div class="photo">
                      
                      <img
                        width="1024"
                        height="574"
                        src="img/home/JenniferBraun@1x.png"
                        srcset="img/home/JenniferBraun@1x.png, img/home/JenniferBraun@2x.png 2x"
                        alt="Bill O'Brien"
                      />
                    </div>
                    <div class="overlay">
                      
                      <div class="content">
                        
                        <h6 class="name">Jennifer Braun</h6>
                        <p class="job">
                          Director of Workforce & Organizational Development
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={`customer-testimonials-item js-customer-testimonials-item ${active.three && 'active'}`} onClick={(e)=>handleItemClick(e,'three')}>
                  
                  <div class="customer-testimonial">
                    
                    <div class="hidden-info">
                      
                      <div class="name">Inez Stewart, M.Ed.</div>
                    </div>
                    <div class="photo">
                      
                      <img
                        width="1024"
                        height="574"
                        src="img/home/InezStewart@1x.png"
                        srcset="img/home/InezStewart@1x.png, img/home/InezStewart@2x.png 2x"
                        alt="Inez Stewart, M.Ed."
                      />
                    </div>
                    <div class="overlay">
                      
                      <div class="content">
                        
                        <h6 class="name">Inez Stewart, M.Ed.</h6>
                        <p class="job">Chief Human Resources Officer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={`customer-testimonials-item js-customer-testimonials-item ${active.four && 'active'}`} onClick={e=>handleItemClick(e,'four')}>
                  
                  <div class="customer-testimonial">
                    
                    <div class="hidden-info">
                      
                      <div class="name">Lisa DeAngelis</div>
                    </div>
                    <div class="photo">
                      
                      <img
                        width="1024"
                        height="574"
                        src="img/home/LisaDeAngelis@1x.png"
                        srcset="img/home/LisaDeAngelis@1x.png, img/home/LisaDeAngelis@2x.png 2x"
                        alt="Lisa DeAngelis"
                      />
                    </div>
                    <div class="overlay">
                      
                      <div class="content">
                        
                        <h6 class="name">Lisa DeAngelis</h6>
                        <p class="job">CEO, Mission Development Corp.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={`customer-testimonials-item js-customer-testimonials-item ${active.five && 'active'}`} onClick={e=>handleItemClick(e,'five')}>
                  
                  <div class="customer-testimonial">
                    
                    <div class="hidden-info">
                      
                      <div class="name">Chris Newell</div>
                    </div>
                    <div class="photo">
                      
                      <img
                        width="1024"
                        height="574"
                        src="img/home/ChrisNewell@1x.png"
                        srcset="img/home/ChrisNewell@1x.png, img/home/ChrisNewell@2x.png 2x"
                        alt="Chris Newell"
                      />
                    </div>
                    <div class="overlay">
                      
                      <div class="content">
                        
                        <h6 class="name">Chris Newell</h6>
                        <p class="job">CEO, Mission Development Corp.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default Testimonials