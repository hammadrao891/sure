import Agility from "../Agility/Agility"
import Compassion from "../Compassion/Compassion"
import Courage from "../Courage/Courage"
import Innovation from "../Innovation/Innovation"
import Integrity from "../Integrity/Integrity"
import Partnership from "../Partnership/Partnership"
import Transparency from "../Transparency/Transparency"
import Trust from "../Trust/Trust"
import Values from "../Values/Values"

function AboutValues()
{
    return(
        <>
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
              <Values/>
            </div>
            <div class="our-values-grid">
              <div class="card js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-1.svg" alt="" />
                </div>
                <Transparency/>
              </div>
              <div class="card js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-2.svg" alt="" />
                </div>
                <Agility/>
              </div>
              <div class="card js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-3.svg" alt="" />
                </div>
               <Partnership/>
              </div>
              <div class="card one-half js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-4.svg" alt="" />
                </div>
                <Integrity/>
              </div>
              <div class="card one-half js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-5.svg" alt="" />
                </div>
                <Innovation/>
              </div>
              <div class="card js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-6.svg" alt="" />
                </div>
                <Courage/>
              </div>
              <div class="card js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-7.svg" alt="" />
                </div>
                <Trust/>
              </div>
              <div class="card js-reveal-on-scroll js-reveal-batch">
                <div class="background"></div>
                <div class="icon">
                  <img src="img/about/icons/our-values-8.svg" alt="" />
                </div>
                <Compassion/>
              </div>
            </div>
          </div>
        </section>
        
        </>
    )
}

export default AboutValues