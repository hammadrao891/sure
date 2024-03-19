import React from 'react'

const Member10 = () => {
  return (
    <div>
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
  )
}

export default Member10
