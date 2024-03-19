import gsap from "gsap";
import { useEffect } from "react"


function Navigation()
{
  const togglers = document.querySelectorAll('.js-collapse-menu');
  
  // useEffect(()=>{
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
  // })
  useEffect(()=>{
    
    const mobileNavigation = () => {
      let mobileToggler = document.querySelector('.navbar-menu-toggler'),
          mobileMenu = document.querySelector('.navbar-menu'),
          body = document.body;
  
      const toggleMenu = () => {
          if (!mobileMenu.classList.contains('menu-open')) {
              animateIn(mobileMenu);
          } else {
              animateOut(mobileMenu);
          }
      };
  
      const animateIn = (menu) => {
          body.classList.add('menu-is-open');
          mobileMenu.classList.add('menu-open');
  
          gsap.set(mobileMenu, {
              height: window.innerHeight + 'px',
              yPercent: -100,
          });
  
          gsap.to(menu, {
              duration: 0.6,
              yPercent: 0,
              ease: 'expo.out',
          });
      };
  
      const animateOut = (menu) => {
          body.classList.remove('menu-is-open');
  
          gsap.to(menu, {
              duration: 0.6,
              yPercent: -100,
              ease: 'expo.out',
              onComplete: () => {
                  gsap.set(mobileMenu, {
                      clearProps: 'height'
                  });
  
                  mobileMenu.classList.remove('menu-open');
              }
          });
      };
  
      const handleResize = () => {
          if (mobileMenu.classList.contains('menu-open')) {
              body.classList.remove('menu-is-open');
              mobileMenu.classList.remove('menu-open');
              gsap.set(mobileMenu, {
                  clearProps: 'height'
              });
          }
      };
  
      handleResize();
      window.addEventListener('resize', handleResize, false);
      mobileToggler.addEventListener('click', toggleMenu, false);
  };

  const mobileCollapseMenu = () => {
      const togglers = document.querySelectorAll('.js-collapse-menu');
  
      const onClick = (e) => {
          e.preventDefault();
  
          const parent = e.target.parentNode;
          const dropdown = e.target.nextElementSibling;
  
          // open clicked dropdown
          if (parent.classList.contains('active')) {
              parent.classList.remove('active');
  
              gsap.to(dropdown, {
                  duration: 0.2,
                  height: 0,
                  ease: 'power2.out',
                  onComplete: () => {
                      gsap.set(dropdown, {
                          clearProps: 'all'
                      });
                  }
              });
          } else {
              parent.classList.add('active');
  
              gsap.to(dropdown, {
                  duration: 0.2,
                  height: dropdown.scrollHeight,
                  ease: 'power2.out',
              });
          }
  
          // close previously opened dropdowns
          togglers.forEach((toggler) => {
              if (toggler !== e.target) {
                  const parent = toggler.parentNode;
                  const dropdown = toggler.nextElementSibling;
  
                  if (dropdown && parent.classList.contains('active')) {
                      parent.classList.remove('active');
  
                      gsap.to(dropdown, {
                          duration: 0.2,
                          height: 0,
                          ease: 'power2.out',
                      });
                  }
              }
          });
      };
  
   
    }
    const handleResize = () => {
      togglers.forEach((toggler) => {
          const parent = toggler.parentNode;
          const dropdown = toggler.nextElementSibling;

          if (dropdown && parent.classList.contains('active')) {

              parent.classList.remove('active');
              gsap.set(dropdown, {
                  clearProps: 'all'
              });
          }
      });
  };

  handleResize();
  const onClick = (e) => {
    e.preventDefault();

    const parent = e.target.parentNode;
    const dropdown = e.target.nextElementSibling;

    // open clicked dropdown
    if (parent.classList.contains('active')) {
        parent.classList.remove('active');

        gsap.to(dropdown, {
            duration: 0.2,
            height: 0,
            ease: 'power2.out',
            onComplete: () => {
                gsap.set(dropdown, {
                    clearProps: 'all'
                });
            }
        });
    } else {
        parent.classList.add('active');

        gsap.to(dropdown, {
            duration: 0.2,
            height: dropdown.scrollHeight,
            ease: 'power2.out',
        });
    }}
  window.addEventListener('resize', handleResize, false);
  togglers.forEach((toggler) => {
      toggler.addEventListener('click', onClick);
  });

    mobileCollapseMenu()
    handleResize()
    mobileNavigation()  
    
  })
    return (
        <>
             <header>
          <nav class="navbar">
            
            <div class="container">
              
              <div class="navbar-header">
                
                <a href="index.html" class="navbar-brand">
                  
                  <img src="img/logo.svg" alt="SurePeople" />
                </a>
                <div class="dropdown js-dropdown js-language-selector">
                  
                  <div class="dropdown-toggler js-dropdown-toggler">
                    English
                  </div>
                  <div class="dropdown-menu">
                    
                    <ul class="dropdown-list">
                      
                      <li class="dropdown-list-item active">
                        English (EN)
                      </li>
                      <li class="dropdown-list-item">Spanish (SP)</li>
                    </ul>
                  </div>
                </div>
                <button type="button" class="navbar-menu-toggler">
                  
                  <span></span> <span></span> <span></span>
                </button>
              </div>
              <div class="navbar-menu">
                
                <div class="decor">
                  
                  <img src="img/ColorsMenu.svg" alt="" />
                </div>
                <ul class="navbar-nav">
                  
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Team Leaders
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Enterprise Solution
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Plans & Pricing
                    </a>
                  </li>
                </ul>
                <div class="navbar-menu-mobile">
                  
                  <ul class="navbar-nav-mobile">
                    
                    <li class="nav-item">
                      
                      <a href="#" class="nav-link js-collapse-menu">
                        Company
                      </a>
                      <div class="collapse-menu js-collapse-menu">
                        
                        <ul class="collapse-menu-list">
                          
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Research
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Team Collaboration
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Portfolio Insights
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Data Integration
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              ESG Research
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Active Ownership
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      
                      <a href="#" class="nav-link js-collapse-menu">
                        Sales
                      </a>
                      <div class="collapse-menu js-collapse-menu">
                        
                        <ul class="collapse-menu-list">
                          
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Research
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Team Collaboration
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Portfolio Insights
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Data Integration
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              ESG Research
                            </a>
                          </li>
                          <li class="collapse-menu-list-item">
                            <a href="#" class="collapse-menu-list-link">
                              Active Ownership
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Support
                      </a>
                    </li>
                  </ul>
                  <ul class="navbar-nav-buttons">
                    
                    <li class="nav-item">
                      <a href="#" class="btn btn-primary">
                        Login
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="btn btn-blue">
                        Try It Free
                      </a>
                    </li>
                  </ul>
                  <ul class="navbar-nav-social">
                    
                    <li class="nav-item">
                      <a href="#">
                        <img src="img/icons/facebook-2.svg" alt="Facebook" />
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#">
                        <img src="img/icons/linkedin-2.svg" alt="LinkedIn" />
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#">
                        <img src="img/icons/x-2.svg" alt="X" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="navbar-actions">
                
                <ul class="navbar-nav">
                  
                  <li class="nav-item">
                    <a href="#" class="btn btn-primary">
                      Login
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="btn btn-blue">
                      Try It Free
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          </header>
        
        </>
    )
}

export default Navigation