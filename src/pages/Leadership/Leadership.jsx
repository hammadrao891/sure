import '../../scss/pages/leadership.scss';
import { gsap } from 'gsap';
import lottie from 'lottie-web';
import Hexagon from "../../img/leadership/lottie/05_hexagon.json"
// import Hexagon from '';
import { useEffect } from 'react';
function Leadership (){
    
    useEffect(() => {
        const teamModal = () => {
            const trigger = document.querySelectorAll('.js-member-modal');
            const body = document.body;
        
            let tl,
                modal,
                modalClose,
                modalContent,
                lottieHexagon,
                modalHexagon;
        
            const setModalContent = (element) => {
                // create lottie hexagon div
                modalHexagon = document.createElement('div');
                modalHexagon.classList.add('modal-lottie');
        
                lottieHexagon = lottie.loadAnimation({
                    container: modalHexagon,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    animationData: Hexagon,
                    rendererSettings: {
                        scaleMode: 'noScale', clearCanvas: false, progressiveLoad: true, hideOnTransparent: true
                    },
                });
        
                // create master modal div
                modal = document.createElement('div');
                modal.classList.add('f-modal');
        
                // create modal divs
                modalClose = document.createElement('div');
                const modalContent = document.createElement('div');
                const memberLayout = document.createElement('div');
        
                // add classes to modal divs
                modalClose.classList.add('f-modal-close');
                modalContent.classList.add('f-modal-content');
                memberLayout.classList.add('member-layout');
        
                // assemble modal divs
                modal.append(modalContent);
                memberLayout.append(modalClose);
                modalContent.append(memberLayout);
        
                // create member layout divs
                const memberLayoutPhoto = document.createElement('div');
                const memberLayoutContent = document.createElement('div');
                const memberLayoutScrollable = document.createElement('div');
        
                // add classes to member layout divs
                memberLayoutPhoto.classList.add('photo');
                memberLayoutContent.classList.add('content');
                memberLayoutScrollable.classList.add('scrollable');
                memberLayoutScrollable.classList.add('js-scrollable');
        
                // set content from the target element
                memberLayoutPhoto.innerHTML = `
                ${element.querySelector('.photo').innerHTML}
                `;
                memberLayoutScrollable.innerHTML = `
                <div class="copy">
                    <div class="content">
                        ${element.querySelector('.name').outerHTML}
                        ${element.querySelector('.job').outerHTML}
                        <div class="buttons">
                            <a href="#" class="btn btn-link">
                                View LinkedIn
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17.3076L17 7.30762M17 7.30762H7M17 7.30762V17.3076" stroke="#131316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                        ${element.querySelector('.description').outerHTML}
                    </div>
                </div>
                `;
        
                lottieHexagon.addEventListener('DOMLoaded', () => {
                    memberLayoutPhoto.append(modalHexagon);
                });
        
                // assemble member layout
                memberLayout.append(memberLayoutPhoto);
                memberLayout.append(memberLayoutContent);
                memberLayoutContent.append(memberLayoutScrollable);
        
                document.body.append(modal); // append modal to body
        
                // animate opening modal
                openModal(element);
            };
        

            const openModal = (element) => {
                tl = gsap.timeline({reversed: true, pause: true});
                modalContent = modal.querySelector('.f-modal-content');

                modal.classList.add('open');

                tl.set(modalContent, {
                    scale: 0.95,
                    opacity: 0
                });

                tl.to(modal, {
                    duration: 0.2,
                    opacity: 1,
                    onStart: () => {
                        body.classList.add('overflow-hidden');
                    },
                    onReverseComplete: () => {
                        body.classList.remove('overflow-hidden');
                        modal.classList.remove('open');
                        modal.remove();
                        // modalHexagon.style.display                   
                        // modalHexagon.destroy();
                    }
                }, '<+0.1').to(modalContent, {
                    duration: 0.2,
                    opacity: 1,
                    scale: 1
                });

                tl.play();
            };

            // bind on click
            trigger.forEach(element => {
                element.addEventListener('click', e => {
                    e.preventDefault();
                    setModalContent(element);
                });
            });

            // close menu when clicking outside
            document.addEventListener('click', (e) => {
                
                if (modal && modal.contains(e.target) && !modalContent.contains(e.target)) {
                    tl.reverse();
                    body.classList.remove('overflow-hidden');
                        modal.classList.remove('open');
                        modal.remove();
                }

                if (modalClose && modalClose.contains(e.target)) {
                    tl.reverse();
                    body.classList.remove('overflow-hidden');
                        modal.classList.remove('open');
                        modal.remove();
                }
                
            });
        };

        teamModal();

        return () => {
            // Cleanup code here if needed
        };
    }, []);
    const handleModal =()=>
    {

    }
return(
    <>
         <header>
      <nav class="navbar">
        <div class="container">
          <div class="navbar-header">
            <a href="index.html" class="navbar-brand">
              <img src="img/logo.svg" alt="SurePeople" />
            </a>
            <div class="dropdown js-dropdown js-language-selector">
              <div class="dropdown-toggler js-dropdown-toggler">English</div>
              <div class="dropdown-menu">
                <ul class="dropdown-list">
                  <li class="dropdown-list-item active">English (EN)</li>
                  <li class="dropdown-list-item">Spanish (SP)</li>
                </ul>
              </div>
            </div>
            <button type="button" class="navbar-menu-toggler">
              <span></span> <span></span> <span></span>
            </button>
          </div>
          <div class="navbar-menu">
            <div class="decor"><img src="img/ColorsMenu.svg" alt="" /></div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#" class="nav-link">Team Leaders</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Enterprise Solution</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Plans & Pricing</a>
              </li>
            </ul>
            <div class="navbar-menu-mobile">
              <ul class="navbar-nav-mobile">
                <li class="nav-item">
                  <a href="#" class="nav-link js-collapse-menu">Company</a>
                  <div class="collapse-menu js-collapse-menu">
                    <ul class="collapse-menu-list">
                      <li class="collapse-menu-list-item">
                        <a href="#" class="collapse-menu-list-link">Research</a>
                      </li>
                      <li class="collapse-menu-list-item">
                        <a href="#" class="collapse-menu-list-link"
                          >Team Collaboration</a
                        >
                      </li>
                      <li class="collapse-menu-list-item">
                        <a href="#" class="collapse-menu-list-link"
                          >Portfolio Insights</a
                        >
                      </li>
                      <li class="collapse-menu-list-item">
                        <a href="#" class="collapse-menu-list-link"
                          >Data Integration</a
                        >
                      </li>
                      <li class="collapse-menu-list-item">
                        <a href="#" class="collapse-menu-list-link"
                          >ESG Research</a
                        >
                      </li>
                      <li class="collapse-menu-list-item">
                        <a href="#" class="collapse-menu-list-link"
                          >Active Ownership</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link js-collapse-menu">Sales</a>
                  <div class="collapse-menu js-collapse-menu">
                    <ul class="collapse-menu-list">
                      <li class="collapse-menu-list-item">
                        <a href="#" class="collapse-menu-list-link">Research</a>
                      </li>
                      <li class="collapse-menu-list-item">
                        <a href="#" class="collapse-menu-list-link"
                          >Team Collaboration</a
                        >
                      </li>
                      <li class="collapse-menu-list-item">
                        <a href="#" class="collapse-menu-list-link"
                          >Portfolio Insights</a
                        >
                      </li>
                      <li class="collapse-menu-list-item">
                        <a href="#" class="collapse-menu-list-link"
                          >Data Integration</a
                        >
                      </li>
                      <li class="collapse-menu-list-item">
                        <a href="#" class="collapse-menu-list-link"
                          >ESG Research</a
                        >
                      </li>
                      <li class="collapse-menu-list-item">
                        <a href="#" class="collapse-menu-list-link"
                          >Active Ownership</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Support</a>
                </li>
              </ul>
              <ul class="navbar-nav-buttons">
                <li class="nav-item">
                  <a href="#" class="btn btn-primary">Login</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="btn btn-blue">Try It Free</a>
                </li>
              </ul>
              <ul class="navbar-nav-social">
                <li class="nav-item">
                  <a href="#"
                    ><img src="img/icons/facebook-2.svg" alt="Facebook"
                  /></a>
                </li>
                <li class="nav-item">
                  <a href="#"
                    ><img src="img/icons/linkedin-2.svg" alt="LinkedIn"
                  /></a>
                </li>
                <li class="nav-item">
                  <a href="#"><img src="img/icons/x-2.svg" alt="X" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="navbar-actions">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#" class="btn btn-primary">Login</a>
              </li>
              <li class="nav-item">
                <a href="#" class="btn btn-blue">Try It Free</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div id="page-wrapper">
      <main>
        <section class="shared-hero">
          <div class="line-draw js-draw-path">
            <svg
              class="d-none d-md-block"
              viewBox="0 0 1440 293"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-12.5 230.5C110.5 -154 471.5 273.5 767 220.5C1062.5 167.5 1156.31 121.674 1129.5 89.4999C1084.5 35.4999 970.841 391.079 1224 264.5C1477.16 137.921 1398 1 1538.5 1"
                stroke="#131316"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <svg
              class="d-block d-md-none"
              width="375"
              height="119"
              viewBox="0 0 375 119"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 78.6962C19.7297 81.2505 39.2327 81.3714 58.2541 77.9794C224.771 48.2853 277.634 22.6103 262.526 4.58445C237.168 -25.6699 173.12 173.549 315.777 102.631C340.668 90.257 359.859 77.7064 375 65.4178"
                stroke="#131316"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div class="decor">
            <img
              class="colors d-none d-md-block"
              src="img/leadership/ColorsHero.svg"
              alt=""
            />
            <img
              class="colors d-block d-md-none"
              src="img/leadership/ColorsHero@mobile.svg"
              alt=""
            />
            
          </div>
          <div class="container">
            <div class="hero-content">
              <span class="pretitle js-reveal-on-scroll">Our Leadership</span>
              <h1 class="heading js-reveal-on-scroll js-split-to-lines">
                We bring together a diverse,
                <span class="text-gradient">experienced leadership</span> team
                with deep domain expertise
              </h1>
              <p
                class="paragraph paragraph-xxl js-reveal-on-scroll js-split-to-lines"
              >
                All united by a shared commitment to unlocking human potential.
              </p>
            </div>
          </div>
          <svg class="d-none d-md-block" viewBox="0 0 1440 293" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-12.5 230.5C110.5 -154 471.5 273.5 767 220.5C1062.5 167.5 1156.31 121.674 1129.5 89.4999C1084.5 35.4999 970.841 391.079 1224 264.5C1477.16 137.921 1398 1 1538.5 1" stroke="#131316" stroke-width="2" stroke-linecap="round" style={{strokeDasharray: '2093.39',
    strokeDashoffset: '-0.00339316'}}></path>
            </svg>
        </section>
        <section class="shared-section section-team pb-0">
          <div class="decor">
            <img
              class="colors d-none d-md-block"
              src="img/leadership/ColorsBody.svg"
              alt=""
            />
            <img
              class="colors d-block d-md-none"
              src="img/leadership/ColorsBody@mobile.svg"
              alt=""
            />
          </div>
          <div class="container">
            <div class="shared-heading text-center">
              <h3 class="heading js-reveal-on-scroll js-split-to-lines">
                The team's skill sets vary.<br />
                <span class="big text-gradient"
                  >The principles, values, passion, and grit do not.</span
                >
              </h3>
            </div>
            <div class="team-grid">
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch" onClick={handleModal}
              >
                <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/NikoDrakoulis@1x.png"
                      srcset="
                        img/leadership/team/NikoDrakoulis@1x.png,
                        img/leadership/team/NikoDrakoulis@2x.png 2x
                      "
                      alt=""
                    />
                  </div>
                  <div class="decor">
                    <img
                      class="colors d-none d-md-block"
                      src="img/leadership/ColorsMember.svg"
                      alt=""
                    />
                    <img
                      class="colors d-block d-md-none"
                      src="img/leadership/ColorsMember@mobile.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content">
                  <h5 class="name"><strong>Niko</strong> Drakoulis</h5>
                  <h6 class="job">
                    Founder, CEO & Servant to All Stakeholders
                  </h6>
                  <div class="description">
                    <p class="paragraph">
                      Niko founded SurePeople on the belief that people are the
                      most important factor of success - that the quality of our
                      companies, careers and personal lives are determined by
                      the quality of our relationships.
                    </p>
                    <p class="paragraph">
                      Niko's ability to bring people together and create a
                      strong culture is based on more than 25 years' experience
                      as an accomplished executive leader, serial entrepreneur
                      and five-time patent holder. He is a member of the
                      University of Illinois Entrepreneurship Hall of Fame.
                    </p>
                    <p class="paragraph">
                      Prior to founding SurePeople, Niko was Chairman and CEO of
                      Akoo International, named one of Advertising Age's "Best
                      Places to Work."
                    </p>
                    <div class="buttons">
                      <a href="#" class="btn btn-outline-primary">
                        View LinkedIn
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17.3076L17 7.30762M17 7.30762H7M17 7.30762V17.3076"
                            stroke="#131316"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch"
              >
                <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/DemetraAnagnostopoulos@1x.png"
                      srcset="
                        img/leadership/team/DemetraAnagnostopoulos@1x.png,
                        img/leadership/team/DemetraAnagnostopoulos@2x.png 2x
                      "
                      alt="Demetra Anagnostopoulos"
                    />
                  </div>
                  <div class="decor">
                    <img
                      class="colors d-none d-md-block"
                      src="img/leadership/ColorsMember.svg"
                      alt=""
                    />
                    <img
                      class="colors d-block d-md-none"
                      src="img/leadership/ColorsMember@mobile.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content">
                  <h5 class="name"><strong>Demetra</strong> Anagnostopoulos</h5>
                  <h6 class="job">Chief Success Officer</h6>
                  <div class="description">
                    <p class="paragraph">
                      Demetra has more than 25 years of experience in the fields
                      of leadership training and organizational development.
                      Over the years, she has spearheaded programs for companies
                      such as Capital One, F. Hoffman-La Roche, Facebook, GE and
                      PepsiCo.
                    </p>
                    <p class="paragraph">
                      Before joining SurePeople, Demetra spent over two decades
                      with Interaction Associates, a global consulting firm that
                      is routinely named one of the "Top 20 Leadership Training
                      Companies" by Training Industry magazine.
                    </p>
                    <div class="buttons">
                      <a href="#" class="btn btn-outline-primary">
                        View LinkedIn
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17.3076L17 7.30762M17 7.30762H7M17 7.30762V17.3076"
                            stroke="#131316"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch"
              >
                <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/AdamSchneider@1x.png"
                      srcset="
                        img/leadership/team/AdamSchneider@1x.png,
                        img/leadership/team/AdamSchneider@2x.png 2x
                      "
                      alt="Adam Schneider"
                    />
                  </div>
                  <div class="decor">
                    <img
                      class="colors d-none d-md-block"
                      src="img/leadership/ColorsMember.svg"
                      alt=""
                    />
                    <img
                      class="colors d-block d-md-none"
                      src="img/leadership/ColorsMember@mobile.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content">
                  <h5 class="name"><strong>Adam</strong> Schneider</h5>
                  <h6 class="job">SVP, Content</h6>
                  <div class="description">
                    <p class="paragraph">
                      Adam is an experienced digital strategist with a passion
                      for developing and curating content that people find
                      inspiring, useful and worth sharing. At SurePeople, he
                      leads the overall development and implementation of the
                      company’s growing content ecosystem, consisting of
                      world-class learning programs designed to elevate
                      individual, team and organizational performance.
                    </p>
                    <p class="paragraph">
                      Prior to joining SurePeople, Adam spearheaded innovative
                      content and marketing communications initiatives as a
                      Senior Content Strategist for SapientNitro and as a Senior
                      Coordinator, Integrated Marketing Communications for
                      Harley-Davidson Motor Company.
                    </p>
                    <div class="buttons">
                      <a href="#" class="btn btn-outline-primary">
                        View LinkedIn
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17.3076L17 7.30762M17 7.30762H7M17 7.30762V17.3076"
                            stroke="#131316"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch"
              >
                <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/PaulTsagaroulis@1x.png"
                      srcset="
                        img/leadership/team/PaulTsagaroulis@1x.png,
                        img/leadership/team/PaulTsagaroulis@2x.png 2x
                      "
                      alt="Paul Tsagaroulis"
                    />
                  </div>
                  <div class="decor">
                    <img
                      class="colors d-none d-md-block"
                      src="img/leadership/ColorsMember.svg"
                      alt=""
                    />
                    <img
                      class="colors d-block d-md-none"
                      src="img/leadership/ColorsMember@mobile.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content">
                  <h5 class="name"><strong>Paul</strong> Tsagaroulis, Ph.D.</h5>
                  <h6 class="job">Chief Science Officer</h6>
                  <div class="description">
                    <p class="paragraph">
                      Paul has more than 20 years’ experience in people
                      analytics, with an expertise in data visualization and
                      optimizing workforce performance. At SurePeople, Paul
                      oversees the company’s growing people science team. He has
                      a Ph.D. in Business Psychology (Industrial-Organizational)
                      from the Chicago School of Professional Psychology.
                    </p>
                    <p class="paragraph">
                      Prior to joining SurePeople, Paul was Director, Analytics
                      at Carrier Corporation. He previously served as Director,
                      Human Capital Analytics at U.S. General Services
                      Administration in Washington D.C. and as an HR analyst for
                      UBS Global Asset Management and Allstate Insurance.
                    </p>
                    <div class="buttons">
                      <a href="#" class="btn btn-outline-primary">
                        View LinkedIn
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17.3076L17 7.30762M17 7.30762H7M17 7.30762V17.3076"
                            stroke="#131316"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch"
              >
                <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/MarianeMacKinnon@1x.png"
                      srcset="
                        img/leadership/team/MarianeMacKinnon@1x.png,
                        img/leadership/team/MarianeMacKinnon@2x.png 2x
                      "
                      alt="Mariane Mac Kinnon"
                    />
                  </div>
                  <div class="decor">
                    <img
                      class="colors d-none d-md-block"
                      src="img/leadership/ColorsMember.svg"
                      alt=""
                    />
                    <img
                      class="colors d-block d-md-none"
                      src="img/leadership/ColorsMember@mobile.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content">
                  <h5 class="name"><strnog>Mariane</strnog> Mac Kinnon</h5>
                  <h6 class="job">SVP, Client Success</h6>
                  <div class="description">
                    <p class="paragraph">
                      Mariane has more than 15 years’ customer service
                      experience, with an expertise in training, team
                      management, employee development, process improvement and
                      quality assurance. She leads all client implementations
                      and supports the company’s renewal activity, helping
                      achieve a near 100% renewal rate for the previous two
                      years.
                    </p>
                    <p class="paragraph">
                      Prior to joining SurePeople, Mariane was a senior manager
                      at DentalPlans.com, where she ensured the high-quality
                      service delivery and successfully promoted customer
                      renewal and retention rates.
                    </p>
                    <div class="buttons">
                      <a href="#" class="btn btn-outline-primary">
                        View LinkedIn
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17.3076L17 7.30762M17 7.30762H7M17 7.30762V17.3076"
                            stroke="#131316"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch"
              >
                <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/AmbarishChaudhari@1x.png"
                      srcset="
                        img/leadership/team/AmbarishChaudhari@1x.png,
                        img/leadership/team/AmbarishChaudhari@2x.png 2x
                      "
                      alt="Ambarish Chaudhari"
                    />
                  </div>
                  <div class="decor">
                    <img
                      class="colors d-none d-md-block"
                      src="img/leadership/ColorsMember.svg"
                      alt=""
                    />
                    <img
                      class="colors d-block d-md-none"
                      src="img/leadership/ColorsMember@mobile.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content">
                  <h5 class="name"><strong>Ambarish</strong> Chaudhari</h5>
                  <h6 class="job">SVP, Engineering</h6>
                  <div class="description">
                    <p class="paragraph">
                      Ambarish is an accomplished software architect with more
                      than 25 years’ experience developing rapid, robust and
                      innovative solutions to complex problems for enterprise
                      SaaS companies. His expertise includes software
                      architecture, solution framework development and component
                      development.
                    </p>
                    <p class="paragraph">
                      Prior to joining SurePeople, Ambarish was founder of the
                      technology consulting firm, Challenge Handshake Inc. He
                      also served in diverse technology roles during his career,
                      including Engineering, Product Management and Solution
                      Design; Principal Technical Architect; Technology Advisor;
                      and, Product Development Lead. He received his B.E. in
                      Computer Engineering from Pune Institute of Computer
                      Technology in India.
                    </p>
                    <div class="buttons">
                      <a href="#" class="btn btn-outline-primary">
                        View LinkedIn
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17.3076L17 7.30762M17 7.30762H7M17 7.30762V17.3076"
                            stroke="#131316"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch"
              >
                <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/AndyStankiewicz@1x.png"
                      srcset="
                        img/leadership/team/AndyStankiewicz@1x.png,
                        img/leadership/team/AndyStankiewicz@2x.png 2x
                      "
                      alt="Andy Stankiewicz"
                    />
                  </div>
                  <div class="decor">
                    <img
                      class="colors d-none d-md-block"
                      src="img/leadership/ColorsMember.svg"
                      alt=""
                    />
                    <img
                      class="colors d-block d-md-none"
                      src="img/leadership/ColorsMember@mobile.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content">
                  <h5 class="name"><strong>Andy</strong> Stankiewicz</h5>
                  <h6 class="job">Chief Marketing Officer</h6>
                  <div class="description">
                    <p class="paragraph">
                      Andy has more than 25 years experience as a strategic
                      marketing and communications professional. He has held
                      leadership roles across in-house, senior consulting and
                      global agency environments, including at Ogilvy Public
                      Relations Worldwide, where he served in the Corporate
                      Communications Practice.
                    </p>
                    <p class="paragraph">
                      Andy began his career as a journalist for the Voice of
                      America, where he reported on science, technology and
                      international affairs. He has a BA in Communications from
                      the University of Illinois.
                    </p>
                    <div class="buttons">
                      <a href="#" class="btn btn-outline-primary">
                        View LinkedIn
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17.3076L17 7.30762M17 7.30762H7M17 7.30762V17.3076"
                            stroke="#131316"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch"
              >
                <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/YanniLolis@1x.png"
                      srcset="
                        img/leadership/team/YanniLolis@1x.png,
                        img/leadership/team/YanniLolis@2x.png 2x
                      "
                      alt="Yanni Lolis"
                    />
                  </div>
                  <div class="decor">
                    <img
                      class="colors d-none d-md-block"
                      src="img/leadership/ColorsMember.svg"
                      alt=""
                    />
                    <img
                      class="colors d-block d-md-none"
                      src="img/leadership/ColorsMember@mobile.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content">
                  <h5 class="name"><strong>Yanni</strong> Lolis</h5>
                  <h6 class="job">Chief Product Officer</h6>
                  <div class="description">
                    <p class="paragraph">
                      Yanni has been managing cross-functional teams and
                      bringing digital products to life for over a decade. As
                      our President, Product, he leads our UX and UI designers
                      and collaborates with our technology team to provide
                      SurePeople's partners with innovative solutions that
                      exceed their expectations.
                    </p>
                    <p class="paragraph">
                      In addition to his expertise in product development, Yanni
                      has more than 20 years of experience in digital media,
                      creative direction and deploying enterprise websites
                      across industries. Prior to joining SurePeople, he served
                      as the Chief Creative Officer at Akoo International. And
                      before that, Yanni was the Senior Art Director at Orbitz
                      Worldwide.
                    </p>
                    <div class="buttons">
                      <a href="#" class="btn btn-outline-primary">
                        View LinkedIn
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17.3076L17 7.30762M17 7.30762H7M17 7.30762V17.3076"
                            stroke="#131316"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch"
              >
                <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/BrandonRosenthal@1x.png"
                      srcset="
                        img/leadership/team/BrandonRosenthal@1x.png,
                        img/leadership/team/BrandonRosenthal@2x.png 2x
                      "
                      alt="Brandon Rosenthal"
                    />
                  </div>
                  <div class="decor">
                    <img
                      class="colors d-none d-md-block"
                      src="img/leadership/ColorsMember.svg"
                      alt=""
                    />
                    <img
                      class="colors d-block d-md-none"
                      src="img/leadership/ColorsMember@mobile.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content">
                  <h5 class="name"><strong>Brandon</strong> Rosenthal</h5>
                  <h6 class="job">VP, Operations</h6>
                  <div class="description">
                    <p class="paragraph">
                      Brandon is a seasoned operations leader with over 20 years
                      of experience in implementing and maintaining systems,
                      processes, and technologies for operational efficiencies
                      and success.
                    </p>
                    <p class="paragraph">
                      At SurePeople, he leads the company's operations,
                      supporting all departments to ensure alignment and service
                      excellence. With a track record of driving organizational
                      change and continuous improvement, Brandon is known for
                      delivering results that exceed expectations. He is also a
                      dedicated community volunteer, focusing on education and
                      youth development.
                    </p>
                    <div class="buttons">
                      <a href="#" class="btn btn-outline-primary">
                        View LinkedIn
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17.3076L17 7.30762M17 7.30762H7M17 7.30762V17.3076"
                            stroke="#131316"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch"
              >
                <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/LindseyBingaman@1x.png"
                      srcset="
                        img/leadership/team/LindseyBingaman@1x.png,
                        img/leadership/team/LindseyBingaman@2x.png 2x
                      "
                      alt="Lindsey Bingaman"
                    />
                  </div>
                  <div class="decor">
                    <img
                      class="colors d-none d-md-block"
                      src="img/leadership/ColorsMember.svg"
                      alt=""
                    />
                    <img
                      class="colors d-block d-md-none"
                      src="img/leadership/ColorsMember@mobile.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content">
                  <h5 class="name"><strong>Lindsey</strong> Bingaman</h5>
                  <h6 class="job">Senior Director, SureAcademy</h6>
                  <div class="description">
                    <p class="paragraph">
                      Lindsey is an executive coach and leadership development
                      specialist who is passionate about developing coaches and
                      building supportive communities. At SurePeople, she leads
                      the SureAcademy, where she integrates people science and
                      technology into coaching and leadership development
                      practices.
                    </p>
                    <div class="buttons">
                      <a href="#" class="btn btn-outline-primary">
                        View LinkedIn
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17.3076L17 7.30762M17 7.30762H7M17 7.30762V17.3076"
                            stroke="#131316"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch"
              >
                <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/AlicjaZopf@1x.png"
                      srcset="
                        img/leadership/team/AlicjaZopf@1x.png,
                        img/leadership/team/AlicjaZopf@2x.png 2x
                      "
                      alt="Alicja Zopf"
                    />
                  </div>
                  <div class="decor">
                    <img
                      class="colors d-none d-md-block"
                      src="img/leadership/ColorsMember.svg"
                      alt=""
                    />
                    <img
                      class="colors d-block d-md-none"
                      src="img/leadership/ColorsMember@mobile.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content">
                  <h5 class="name"><strong>Alicja</strong> Zopf</h5>
                  <h6 class="job">SVP, Partnerships</h6>
                  <div class="description">
                    <p class="paragraph">
                      As the SVP of Partnerships, Alicja is shaping and
                      influencing critical aspects of our company's value chain,
                      from identifying and securing key channel partnerships to
                      addressing customer and market needs and implementing
                      essential solutions.
                    </p>
                    <p class="paragraph">
                      Alicja brings a wealth of experience and a proven track
                      record in people technology and workplace learning, which
                      aligns perfectly with SurePeople's mission and vision. Her
                      experience includes leading transformational initiatives
                      with some of the world’s largest brands including LaSalle
                      Bank/ABN AMRO, Bank of America and McDonald’s Corporation.
                    </p>
                    <div class="buttons">
                      <a href="#" class="btn btn-outline-primary">
                        View LinkedIn
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17.3076L17 7.30762M17 7.30762H7M17 7.30762V17.3076"
                            stroke="#131316"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card js-member-modal js-reveal-on-scroll js-reveal-batch"
              >
                <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/ArtKaroubas@1x.png"
                      srcset="
                        img/leadership/team/ArtKaroubas@1x.png,
                        img/leadership/team/ArtKaroubas@2x.png 2x
                      "
                      alt="Art Karoubas"
                    />
                  </div>
                  <div class="decor">
                    <img
                      class="colors d-none d-md-block"
                      src="img/leadership/ColorsMember.svg"
                      alt=""
                    />
                    <img
                      class="colors d-block d-md-none"
                      src="img/leadership/ColorsMember@mobile.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content">
                  <h5 class="name"><strong>Art</strong> Karoubas</h5>
                  <h6 class="job">Chief Innovation Office</h6>
                  <div class="description">
                    <p class="paragraph">
                      As SurePeople's Chief Innovation Officer, Art is a
                      seasoned professional with more than 20 years of
                      specialized experience in design and innovation
                      leadership. He has a distinguished track record of
                      building and directing top-tier innovation and product
                      teams, which includes researchers, strategists, designers,
                      and product managers.
                    </p>
                    <p class="paragraph">
                      Art is a key figure within our leadership, where he
                      spearheads the conceptualization, development, and
                      execution of forward-thinking products and strategies. His
                      efforts profoundly influence both the Aris OS and
                      SurePeople brands and solutions, playing a vital role in
                      driving our company's growth and innovation. His
                      leadership continues to shape our trajectory, fueling our
                      ambition to deliver cutting-edge solutions for our valued
                      partners and customers.
                    </p>
                    <div class="buttons">
                      <a href="#" class="btn btn-outline-primary">
                        View LinkedIn
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17.3076L17 7.30762M17 7.30762H7M17 7.30762V17.3076"
                            stroke="#131316"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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
                    <a href="#"
                      ><img src="img/icons/facebook.svg" alt="Facebook"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><img src="img/icons/linkedin.svg" alt="LinkedIn"
                    /></a>
                  </li>
                  <li>
                    <a href="#"><img src="img/icons/x.svg" alt="X" /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><img src="img/icons/youtube.svg" alt="YouTube"
                    /></a>
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
                        <li class="dropdown-list-item active">English</li>
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
                <li><a href="#">About</a></li>
                <li><a href="#">Leadership</a></li>
                <li><a href="#">Our Difference</a></li>
                <li><a href="#">Evolve Blog</a></li>
                <li><a href="#">News</a></li>
              </ul>
            </div>
            <div class="column">
              <h6 class="footer-title">Sales</h6>
              <ul class="footer-links">
                <li><a href="#">Contact Sales</a></li>
                <li><a href="#">Plans & Pricing</a></li>
                <li><a href="#">Let's Partner</a></li>
                <li><a href="#">Request a Demo</a></li>
              </ul>
            </div>
            <div class="column">
              <h6 class="footer-title">Support</h6>
              <ul class="footer-links">
                <li><a href="#">Getting Started</a></li>
                <li><a href="#">Support Center</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="#">Mobile App Downloads</a></li>
                <li><a href="#">Trust Center</a></li>
              </ul>
            </div>
            <div class="footer-bottom">
              <div class="footer-copyright">
                <p class="paragraph">
                  Copyright&copy; 2024 SurePeopIe, Inc. All Rights Reserved.
                </p>
              </div>
              <ul class="footer-links-small">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">User Agreement</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
)
}
export default Leadership