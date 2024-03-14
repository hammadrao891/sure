function Footer()
{
    return(
        <>
            <footer>
            
            <div class="decor">
              
              <img
                class="colors d-none d-md-block"
                src="img/ColorsFooter.svg"
                alt=""
              />
              <img
                class="colors d-block d-md-none"
                src="img/ColorsFooter@mobile.svg"
                alt=""
              />
            </div>
            <div class="container">
              
              <div class="footer-layout">
                
                <div class="footer-top">
                  
                  <div class="column">
                    
                    <a href="index.html" class="footer-brand">
                      
                      <img src="img/logo.svg" alt="SurePeople" />
                    </a>
                    <ul class="footer-social">
                      
                      <li>
                        <a href="#">
                          <img src="img/icons/facebook.svg" alt="Facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="img/icons/linkedin.svg" alt="LinkedIn" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="img/icons/x.svg" alt="X" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="img/icons/youtube.svg" alt="YouTube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="column">
                    
                    <div class="footer-language d-none d-md-flex">
                      
                      <div class="label">Language</div>
                      <div class="dropdown js-dropdown js-language-selector">
                        
                        <div class="dropdown-toggler js-dropdown-toggler">
                          English
                        </div>
                        <div class="dropdown-menu">
                          
                          <ul class="dropdown-list">
                            
                            <li class="dropdown-list-item active">
                              English
                            </li>
                            <li class="dropdown-list-item">French</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="footer-stores">
                      
                      <a href="#">
                        
                        <img
                          src="img/icons/app-store.svg"
                          alt="Download on the App Store"
                        />
                      </a>
                      <a href="#">
                        
                        <img
                          src="img/icons/google-play.svg"
                          alt="Get it on Google Play"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="column">
                  
                  <h6 class="footer-title">Company</h6>
                  <ul class="footer-links">
                    
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Leadership</a>
                    </li>
                    <li>
                      <a href="#">Our Difference</a>
                    </li>
                    <li>
                      <a href="#">Evolve Blog</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                  </ul>
                </div>
                <div class="column">
                  
                  <h6 class="footer-title">Sales</h6>
                  <ul class="footer-links">
                    
                    <li>
                      <a href="#">Contact Sales</a>
                    </li>
                    <li>
                      <a href="#">Plans & Pricing</a>
                    </li>
                    <li>
                      <a href="#">Let's Partner</a>
                    </li>
                    <li>
                      <a href="#">Request a Demo</a>
                    </li>
                  </ul>
                </div>
                <div class="column">
                  
                  <h6 class="footer-title">Support</h6>
                  <ul class="footer-links">
                    
                    <li>
                      <a href="#">Getting Started</a>
                    </li>
                    <li>
                      <a href="#">Support Center</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
                    </li>
                    <li>
                      <a href="#">Mobile App Downloads</a>
                    </li>
                    <li>
                      <a href="#">Trust Center</a>
                    </li>
                  </ul>
                </div>
                <div class="footer-bottom">
                  
                  <div class="footer-copyright">
                    
                    <p class="paragraph">
                      Copyright&copy; 2024 SurePeopIe, Inc. All Rights Reserved.
                    </p>
                  </div>
                  <ul class="footer-links-small">
                    
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">User Agreement</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </>
    )
}

export default Footer