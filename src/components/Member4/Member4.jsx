import React from 'react'

const Member4 = () => {
  return (
    <div>
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
  )
}

export default Member4
