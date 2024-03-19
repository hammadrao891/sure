import React from 'react'

const Member11 = () => {
  return (
    <div>
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
  )
}

export default Member11
