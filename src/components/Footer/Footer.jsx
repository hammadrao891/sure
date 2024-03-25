import gsap from "gsap";
import { useEffect } from "react"

function Footer()
{
  useEffect(()=>{
    const customDropdown = () => {
      const dropdowns = document.querySelectorAll('.js-dropdown');
  
      const onClick = (dropdown) => {
          const toggler = dropdown.firstElementChild;
  
          toggler.addEventListener('click', (e) => toggleDropdown(e));
      };
  
      const toggleDropdown = (e) => {
          const toggler = e.currentTarget;
          const dropdown = toggler.closest('.js-dropdown');
          const dropdownMenu = toggler.nextElementSibling;
  
          // open clicked dropdown
          if (dropdown.classList.contains('open')) {
              dropdown.classList.remove('open');
              toggler.classList.remove('active');
  
              gsap.to(dropdownMenu, {
                  duration: 0.2,
                  opacity: 0,
                  y: -8,
                  ease: 'power2.out',
                  onComplete: () => {
                      gsap.set(dropdownMenu, {
                          clearProps: 'all'
                      });
                  }
              });
          } else {
              dropdown.classList.add('open');
              toggler.classList.add('active');
  
              gsap.set(dropdownMenu, {
                  display: 'block',
                  opacity: 0,
                  y: -8
              });
  
              gsap.to(dropdownMenu, {
                  duration: 0.2,
                  opacity: 1,
                  y: 0,
                  ease: 'power2.out'
              });
          }
  
          // close previously opened dropdowns
          dropdowns.forEach((target) => {
              if (target !== e.currentTarget.parentNode) {
                  if (target.classList.contains('open')) {
                      target.classList.remove('open');
                      target.firstElementChild.classList.remove('active');
  
                      gsap.to(target.querySelector('.dropdown-menu'), {
                          duration: 0.2,
                          opacity: 0,
                          y: -8,
                          ease: 'power2.out',
                          onComplete: () => {
                              gsap.set(target.querySelector('.dropdown-menu'), {
                                  clearProps: 'all'
                              });
                          }
                      });
                  }
              }
          });
      };
  
      dropdowns.forEach((dropdown) => onClick(dropdown));
      document.addEventListener('click', (e) => {
          dropdowns.forEach((dropdown) => {
              if (dropdown.classList.contains('open')) {
                  const isClickInside = dropdown.contains(e.target);
  
                  if (!isClickInside) {
                      dropdown.classList.remove('open');
                      dropdown.firstElementChild.classList.remove('active');
  
                      gsap.to(dropdown.querySelector('.dropdown-menu'), {
                          duration: 0.2,
                          opacity: 0,
                          y: -8,
                          ease: 'power2.out',
                          onComplete: () => {
                              gsap.set(dropdown.querySelector('.dropdown-menu'), {
                                  clearProps: 'all'
                              });
                          }
                      });
                  }
              }
          });
      });
  };
  
customDropdown()  
    const languageSelector = () => {
      const elements = document.querySelectorAll('.js-language-selector');
  
      const onClick = (dropdown) => {
          const targets = dropdown.querySelector('.dropdown-list').children;
  
          Array.from(targets).forEach((target) => {
              target.addEventListener('click', (e) => updateToggler(e, dropdown));
          });
      };
  
      const checkActive = (e) => {
          const targets = e.querySelector('.dropdown-list').children;
  
          Array.from(targets).forEach((target) => {
              if (target.classList.contains('active')) {
                  const toggler = e.firstElementChild;
  
                  if (document.querySelector('.navbar-header').contains(target)) {
                      const regExp = /\(([^)]+)\)/;
                      const matches = regExp.exec(target.innerHTML);
  
                      toggler.innerHTML = matches[1];
                  } else {
                      toggler.innerHTML = target.innerHTML;
                  }
              }
          });
      };
  
      const updateToggler = (e, dropdown) => {
          const toggler = dropdown.firstElementChild;
          const target = e.currentTarget;
          const dropdownMenu = toggler.nextElementSibling;
  
          target.classList.add('active');
  
          if (document.querySelector('.navbar-header').contains(target)) {
              const regExp = /\(([^)]+)\)/;
              const matches = regExp.exec(target.innerHTML);
  
              toggler.innerHTML = matches[1];
          } else {
              toggler.innerHTML = target.innerHTML;
          }
  
          // remove active class from siblings
          Array.from(target.parentNode.children).forEach((toggler) => {
              if (toggler !== e.currentTarget) {
                  if (toggler.classList.contains('active')) {
                      toggler.classList.remove('active');
                  }
              }
          });
  
          // close dropdown
          if (dropdown.classList.contains('open')) {
              dropdown.classList.remove('open');
              toggler.classList.remove('active');
  
              gsap.to(dropdownMenu, {
                  duration: 0.2,
                  opacity: 0,
                  y: -8,
                  ease: 'power2.out',
                  onComplete: () => {
                      gsap.set(dropdownMenu, {
                          clearProps: 'all'
                      });
                  }
              });
          }
      };
  
      elements.forEach((element) => checkActive(element));
      elements.forEach((element) => onClick(element));
  };
languageSelector()  
  })
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
                            <a href="/" class="footer-brand">
                                <img src="img/logo.svg" alt="SurePeople" />
                            </a>
                            <ul class="footer-social">
                                <li><a href="https://www.facebook.com/SurePeopleSocial/" target="_blank"><img src="img/icons/facebook.svg" alt="Facebook" /></a></li>
                                <li><a href="https://www.linkedin.com/company/surepeople/" target="_blank"><img src="img/icons/linkedin.svg" alt="LinkedIn" /></a></li>
                                <li><a href="https://twitter.com/SurePeople/" target="_blank"><img src="img/icons/x.svg" alt="X" /></a></li>
                                <li><a href="https://www.youtube.com/c/SurePeople/" target="_blank"><img src="img/icons/youtube.svg" alt="YouTube" /></a></li>
                            </ul>
                        </div>
                        <div class="column">
                            <div class="footer-language d-none d-md-flex">
                                <div class="label">Language</div>
                                <div class="dropdown js-dropdown js-language-selector">
                                    <div class="dropdown-toggler js-dropdown-toggler">English</div>
                                    <div class="dropdown-menu">
                                        <ul class="dropdown-list">
                                            <li class="dropdown-list-item active">English</li>
                                            <li class="dropdown-list-item">Spanish</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-stores">
                                <a href="#">
                                    <img src="img/icons/app-store.svg" alt="Download on the App Store" />
                                </a>
                                <a href="#">
                                    <img src="img/icons/google-play.svg" alt="Get it on Google Play" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <h6 class="footer-title">Company</h6>
                        <ul class="footer-links">
                            <li><a href="about">About</a></li>
                            <li><a href="leadership">Leadership</a></li>
                            <li><a href="difference">Our Difference</a></li>
                            <li><a href="https://www.surepeople.com/community/">Evolve Blog</a></li>
                        </ul>
                    </div>
                    <div class="column">
                        <h6 class="footer-title">Sales</h6>
                        <ul class="footer-links">
                            <li><a href="contact">Contact Sales</a></li>
                            <li><a href="pricing">Plans & Pricing</a></li>
                            <li><a href="partners">Let's Partner</a></li>
                            <li><a href="book-a-demo">Request a Demo</a></li>
                        </ul>
                    </div>
                    <div class="column">
                        <h6 class="footer-title">Support</h6>
                        <ul class="footer-links">
                            <li><a href="get-started">Getting Started</a></li>
                            <li><a href="support">Support Center</a></li>
                            <li><a href="feedback">Feedback</a></li>
                            <li><a href="#">Mobile App Downloads</a></li>
                            <li><a href="trust-center">Trust Center</a></li>
                        </ul>
                    </div>
                    <div class="footer-bottom">
                        <div class="footer-copyright">
                            <p class="paragraph">Copyright&copy; 2024 SurePeopIe, Inc. All Rights Reserved.</p>
                        </div>
                        <ul class="footer-links-small">
                            <li><a href="privacy">Privacy</a></li>
                            <li><a href="#">User Agreement</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer