import React from 'react'

const Member1 = () => {
  return (
    <div>
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
  )
}

export default Member1
