import React from 'react'

const Member9 = () => {
  return (
    <div>
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
  )
}

export default Member9
