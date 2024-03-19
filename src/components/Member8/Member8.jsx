import React from 'react'

const Member8 = () => {
  return (
    <div>
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
  )
}

export default Member8
