import '../../scss/pages/leadership.scss';
function AboutLeadership()
{
    return(
        <>
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
        </>
    )
}

export default AboutLeadership