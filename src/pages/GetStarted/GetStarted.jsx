import '../../scss/pages/get-started.scss';

function GetStarted ()
{
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
          <div class="decor">
            <img
              class="colors d-none d-md-block"
              src="img/get-started/ColorsHero.svg"
              alt=""
            />
            <img
              class="colors d-block d-md-none"
              src="img/get-started/ColorsHero@mobile.svg"
              alt=""
            />
          </div>
          <div class="container">
            <div class="hero-content">
              <span class="pretitle js-reveal-on-scroll js-split-to-lines"
                >Get Started</span
              >
              <h1 class="heading js-reveal-on-scroll js-split-to-lines">
                Start Your <span class="text-gradient">Free Trial</span> Today!
              </h1>
              <p class="paragraph js-reveal-on-scroll js-split-to-lines">
                Ready to explore what we have to offer?
              </p>
            </div>
          </div>
        </section>
        <section class="shared-section pt-0 pb-0">
          <div class="container">
            <div class="get-started-section">
              <div class="get-started-section-container">
                <h4 class="heading">Sign up</h4>
                <p class="paragraph">
                  Fill out the form below to start your free trial.
                </p>
                <form>
                  <div class="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="form-group">
                    <label>Company Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter title"
                    />
                  </div>
                  <div class="form-row align-items-sm-center mt-4">
                    <div class="form-group mb-0">
                      <p class="form-note">
                        We care about your data in our
                        <a href="#">privacy policy</a>.
                      </p>
                    </div>
                    <div class="form-group mb-0">
                      <button
                        type="submit"
                        class="btn btn-lg btn-block btn-primary"
                      >
                        Start Free Trial
                      </button>
                    </div>
                  </div>
                </form>
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

export default GetStarted