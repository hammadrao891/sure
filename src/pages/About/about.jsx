import '../../scss/pages/about.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap//ScrollTrigger';
import { loadLottie } from '../../utils/loadLottie';
import '../../scss/pages/about.scss';
import { useEffect } from 'react';
function About (){
  useEffect(() => {
    const handleLottieAnimations = async () => {
        const animationContainers = document.querySelectorAll('.lottie-animation-container');

        for (const container of animationContainers) {
            const jsonFile = container.getAttribute('data-animation-json');
            const animation = await loadLottie(jsonFile, container);

            if (animation) {
                // ScrollTrigger.create({
                //     trigger: container,
                //     start: 'top center',
                //     end: 'bottom center',
                //     onEnter: () => animation.play(),
                // });
            }
        }
    };

    const ourLeadership = () => {
        const graphicTrigger = document.querySelector('.our-leadership-graphic');
        const hexagon = document.querySelectorAll('.our-leadership-graphic .hexagon');
        const persons = document.querySelectorAll('.our-leadership-graphic .person');
        const tooltip = document.querySelector('.our-leadership-graphic .tooltip');

        gsap.set(gsap.utils.toArray(persons), {
            opacity: 0,
            scale: 0.75
        });

        gsap.set(tooltip, {
            opacity: 0
        });

        gsap.set(hexagon, {
            opacity: 0,
            scale: 0
        });

        const duration = 0.5;
        const ease = 'expo.out';

        const tl = gsap.timeline({ paused: true });

        tl.to(hexagon, { opacity: 1, scale: 1, duration: duration, ease: ease });
        tl.to(persons[0], { opacity: 1, scale: 1, duration: duration, ease: ease });
        tl.to(tooltip, { opacity: 1, duration: duration, ease: ease });

        for (let index = 1; index < 6; index++) {
            tl.to(persons[index], { opacity: 1, scale: 1, duration: duration, ease: ease }, `>-25%`);
        }

        // ScrollTrigger.create({
        //     trigger: graphicTrigger,
        //     id: 'leadershipGraphic',
        //     start: 'top center',
        //     end: 'top center',
        //     animation: tl,
        //     toggleActions: 'play none none none',
        // });
    };

    handleLottieAnimations();
    ourLeadership();
}, []);
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
        <section class="shared-hero js-reveal-on-scroll">
          <div class="line-draw js-draw-path">
            <svg
              class="d-none d-md-block"
              viewBox="0 0 1440 482"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.17462 481C-7.49167 468.41 34.4021 427.736 41.5665 420.638C195.948 267.693 520.651 400.998 707.047 399.85C729.982 399.708 756.813 397.634 776.502 384.07C791.41 373.8 782.924 343.788 774.654 332.224C728.63 267.869 719.982 369.417 846.264 353.138C947.189 353.138 951.347 87.0108 1050.13 226.779C1181.18 412.197 1236.47 45.3321 1321.79 6.62053C1358.26 -9.92716 1407.51 12.19 1440 45.2334"
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
                d="M375 29.8708C373.325 27.8072 371.628 25.5813 369.907 23.1868C315.026 -53.1685 312.716 92.2172 256.647 92.2172C186.49 101.11 191.295 45.6344 216.864 80.7918C221.458 87.1088 226.172 103.505 217.89 109.115C206.952 116.525 192.046 117.658 179.304 117.736C130.59 118.031 64.8721 102.071 0 93.783"
                stroke="#131316"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div class="decor">
            <img
              class="colors d-none d-md-block"
              src="img/about/ColorsHero.svg"
              alt=""
            />
            <img
              class="colors d-block d-md-none"
              src="img/about/ColorsHero@mobile.svg"
              alt=""
            />
          </div>
          <div class="container">
            <div class="hero-content">
              <span class="pretitle js-reveal-on-scroll">Our Mission</span>
              <h1 class="heading js-reveal-on-scroll js-split-to-lines">
                To make people<br />
                <span class="text-gradient">sure of themselves</span>
              </h1>
              <div class="buttons js-reveal-on-scroll">
                <a href="#" class="btn btn-lg btn-arrow btn-primary">
                  Play Video
                  <img src="img/icons/play.svg" class="filter-invert" alt="" />
                </a>
              </div>
              <div class="line-draw js-draw-path" style={{opacity: 1}}> <svg class="d-none d-md-block" viewBox="0 0 1440 482" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.17462 481C-7.49167 468.41 34.4021 427.736 41.5665 420.638C195.948 267.693 520.651 400.998 707.047 399.85C729.982 399.708 756.813 397.634 776.502 384.07C791.41 373.8 782.924 343.788 774.654 332.224C728.63 267.869 719.982 369.417 846.264 353.138C947.189 353.138 951.347 87.0108 1050.13 226.779C1181.18 412.197 1236.47 45.3321 1321.79 6.62053C1358.26 -9.92716 1407.51 12.19 1440 45.2334" stroke="#131316" stroke-width="2" stroke-linecap="round" style={{strokeDashArray: 1929.13, strokeDashOffset: -0.00306396}}></path> </svg> <svg class="d-block d-md-none" width="375" height="119" viewBox="0 0 375 119" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M375 29.8708C373.325 27.8072 371.628 25.5813 369.907 23.1868C315.026 -53.1685 312.716 92.2172 256.647 92.2172C186.49 101.11 191.295 45.6344 216.864 80.7918C221.458 87.1088 226.172 103.505 217.89 109.115C206.952 116.525 192.046 117.658 179.304 117.736C130.59 118.031 64.8721 102.071 0 93.783" stroke="#131316" stroke-width="2" stroke-linecap="round" style={{strokeDashArray: 517.89, strokeDashOffset: -0.0082487}}></path> </svg> </div>
              {/* <div class="line-draw js-draw-path" style="opacity: 1;"> <svg class="d-none d-md-block" viewBox="0 0 1440 482" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.17462 481C-7.49167 468.41 34.4021 427.736 41.5665 420.638C195.948 267.693 520.651 400.998 707.047 399.85C729.982 399.708 756.813 397.634 776.502 384.07C791.41 373.8 782.924 343.788 774.654 332.224C728.63 267.869 719.982 369.417 846.264 353.138C947.189 353.138 951.347 87.0108 1050.13 226.779C1181.18 412.197 1236.47 45.3321 1321.79 6.62053C1358.26 -9.92716 1407.51 12.19 1440 45.2334" stroke="#131316" stroke-width="2" stroke-linecap="round" style={{strokeDashArray: 1929.13, strokeDashOffset: -0.00306396}}></path> </svg> <svg class="d-block d-md-none" width="375" height="119" viewBox="0 0 375 119" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M375 29.8708C373.325 27.8072 371.628 25.5813 369.907 23.1868C315.026 -53.1685 312.716 92.2172 256.647 92.2172C186.49 101.11 191.295 45.6344 216.864 80.7918C221.458 87.1088 226.172 103.505 217.89 109.115C206.952 116.525 192.046 117.658 179.304 117.736C130.59 118.031 64.8721 102.071 0 93.783" stroke="#131316" stroke-width="2" stroke-linecap="round" style={{strokeDashArray: 517.89, strokeDashOffset: -0.0082487}}></path> </svg> </div> */}
              {/* <svg class="d-none d-md-block" viewBox="0 0 1440 482" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
              {/* <path d="M1.17462 481C-7.49167 468.41 34.4021 427.736 41.5665 420.638C195.948 267.693 520.651 400.998 707.047 399.85C729.982 399.708 756.813 397.634 776.502 384.07C791.41 373.8 782.924 343.788 774.654 332.224C728.63 267.869 719.982 369.417 846.264 353.138C947.189 353.138 951.347 87.0108 1050.13 226.779C1181.18 412.197 1236.47 45.3321 1321.79 6.62053C1358.26 -9.92716 1407.51 12.19 1440 45.2334" stroke="#131316" stroke-width="2" stroke-linecap="round" style={{strokeDashArray: 1929.13,strokeDashOffset: -0.00306396}}></path> </svg> */}
            </div>
          </div>
        </section>
        <section class="shared-section section-mission-stack pt-0">
          <div class="decor">
            <img
              class="colors d-none d-md-block"
              src="img/about/ColorsMission.svg"
              alt=""
            />
            <img
              class="colors d-block d-md-none"
              src="img/about/ColorsMission@mobile.svg"
              alt=""
            />
          </div>
          <div class="container">
            <div class="our-mission-stack">
              <div class="row">
                <div class="content">
                  <h3 class="heading js-reveal-on-scroll js-split-to-lines">
                    SurePeople is a technology innovator dedicated to unlocking
                    human potential.
                  </h3>
                  <p class="paragraph js-reveal-on-scroll js-split-to-lines">
                    We are committed to delivering positive, measurable outcomes
                    for all stakeholders – our valued team members, customers,
                    partners, and investors – by operating through our values
                    and standing true to our mission: To make people sure of
                    themselves and organizations sure of their people®.
                  </p>
                </div>
                <div class="media">
                  <div
                    class="lottie-animation-container"
                    data-animation-json="img/about/lottie/head_b.json"
                  ></div>
                </div>
              </div>
              <div class="row">
                <div class="content">
                  <h3 class="heading js-reveal-on-scroll js-split-to-lines">
                    Make people sure of themselves
                  </h3>
                  <p class="paragraph js-reveal-on-scroll js-split-to-lines">
                    At the heart of our patented technology is the Prism®
                    psychometric algorithm, revealing 54 traits and attributes
                    across Personality (Primary & Under Pressure), Processing,
                    Decision Making, Conflict Management, Motivation, and
                    Fundamental Needs. Grounded in three decades of psychometric
                    research and enhanced by advanced Artificial Intelligence
                    (AI) and Machine Learning (ML), Prism® provides profound
                    insights into human behavior and psychology.
                  </p>
                  <p class="paragraph js-reveal-on-scroll js-split-to-lines">
                    Our purpose? To make people sure of themselves. By equipping
                    them with unparalleled self-knowledge, advanced people
                    skills, and digital tools and coaching, we enhance personal
                    and professional relationships, enabling individuals to
                    navigate life’s challenges with confidence and grace.
                  </p>
                </div>
                <div class="media">
                  <div
                    class="lottie-animation-container"
                    data-animation-json="img/about/lottie/woman_b.json"
                  ></div>
                </div>
              </div>
              <div class="row">
                <div class="content">
                  <h3 class="heading js-reveal-on-scroll js-split-to-lines">
                    Make organizations sure of their people
                  </h3>
                  <p class="paragraph js-reveal-on-scroll js-split-to-lines">
                    SurePeople isn't just about individual growth. We understand
                    that for organizations to thrive, they need to be confident
                    not only in their strategies – but also in the people
                    executing them. Our patented platform fosters a
                    people-centric culture, emphasizing alignment, effective
                    onboarding, people skill enhancement, and agile change
                    management.
                  </p>
                  <p class="paragraph js-reveal-on-scroll js-split-to-lines">
                    Our purpose? To make organizations sure of their people. In
                    a dynamic world, SurePeople ensures that organizations are
                    not merely reacting to change, but leading with conviction,
                    grounded in the unwavering trust they have in their people
                    and teams.
                  </p>
                </div>
                <div class="media">
                  <div
                    class="lottie-animation-container"
                    data-animation-json="img/about/lottie/head_b.json"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="shared-section section-value pt-0">
          <div class="decor">
            <img
              class="colors d-none d-md-block"
              src="img/about/ColorsValues.svg"
              alt=""
            />
            <img
              class="colors d-block d-md-none"
              src="img/about/ColorsValues@mobile.svg"
              alt=""
            />
          </div>
          <div class="container">
            <div class="shared-heading text-center">
              <h3 class="heading">Our Values</h3>
              <p class="paragraph paragraph-xxl">
                Our values represent the deeply held ideals and behaviors that
                we share at SurePeople to positively impact our employees,
                customers and partners.
              </p>
            </div>
            <div class="our-values-grid">
              <div class="card js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-1.svg" alt="" />
                </div>
                <h6 class="title">Transparency</h6>
                <p class="paragraph">
                  Encourage radical transparency as we have nothing to fear from
                  sharing the truth.
                </p>
              </div>
              <div class="card js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-2.svg" alt="" />
                </div>
                <h6 class="title">Agility</h6>
                <p class="paragraph">
                  Be consistently adaptable and able to adjust to changing
                  business needs with swiftness and accuracy.
                </p>
              </div>
              <div class="card js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-3.svg" alt="" />
                </div>
                <h6 class="title">Partnership</h6>
                <p class="paragraph">
                  Invest in each other to strengthen our relationships.
                </p>
              </div>
              <div class="card one-half js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-4.svg" alt="" />
                </div>
                <h6 class="title">Integrity</h6>
                <p class="paragraph">
                  Create a culture of accountability by committing to sincere
                  honesty and personal responsibility.
                </p>
              </div>
              <div class="card one-half js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-5.svg" alt="" />
                </div>
                <h6 class="title">Innovation</h6>
                <p class="paragraph">
                  Encourage radical transparency as we have nothing to fear from
                  sharing the truth.
                </p>
              </div>
              <div class="card js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-6.svg" alt="" />
                </div>
                <h6 class="title">Courage</h6>
                <p class="paragraph">
                  Demonstrate bravery and boldness in all situations.
                </p>
              </div>
              <div class="card js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-7.svg" alt="" />
                </div>
                <h6 class="title">Trust</h6>
                <p class="paragraph">
                  Be personally reliable to embody confidence in one another.
                </p>
              </div>
              <div class="card js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-8.svg" alt="" />
                </div>
                <h6 class="title">Compassion</h6>
                <p class="paragraph">
                  Genuinely show kindness and a willingness to help each other.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="shared-section section-leadership pt-0 pb-0">
          <div class="decor">
            <img
              class="colors d-none d-md-block"
              src="img/about/ColorsLeadership.svg"
              alt=""
            />
            <img
              class="colors d-block d-md-none"
              src="img/about/ColorsLeadership@mobile.svg"
              alt=""
            />
          </div>
          <div class="container">
            <div class="grid-layout">
              <div class="content">
                <h3 class="heading js-reveal-on-scroll js-split-to-lines">
                  Our Leadership
                </h3>
                <p
                  class="paragraph paragraph-xxl js-reveal-on-scroll js-split-to-lines"
                >
                  We bring together a diverse, experienced leadership team with
                  deep domain expertise, all united by a shared commitment to
                  unlocking human potential.
                </p>
                <div class="buttons js-reveal-on-scroll">
                  <a href="#" class="btn btn-lg btn-primary">Meet the Team</a>
                </div>
              </div>
              <div class="media">
                <div class="our-leadership-graphic">
                  <img class="hexagon" src="img/about/Hexagon.svg" alt="" />
                  <img
                    class="tooltip"
                    src="img/about/our-leadership/Tooltip.png"
                    alt=""
                  />
                  <img
                    class="person person-1"
                    src="img/about/our-leadership/1.png"
                    alt=""
                  />
                  <img
                    class="person person-2"
                    src="img/about/our-leadership/2.png"
                    alt=""
                  />
                  <img
                    class="person person-3"
                    src="img/about/our-leadership/3.png"
                    alt=""
                  />
                  <img
                    class="person person-4"
                    src="img/about/our-leadership/4.png"
                    alt=""
                  />
                  <img
                    class="person person-5"
                    src="img/about/our-leadership/5.png"
                    alt=""
                  />
                  <img
                    class="person person-6"
                    src="img/about/our-leadership/6.png"
                    alt=""
                  />
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
export default About;