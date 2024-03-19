import React from 'react'

const Member5 = () => {
  return (
    <div>
       <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/MarianeMacKinnon@1x.png"
                      srcset="
                        img/leadership/team/MarianeMacKinnon@1x.png,
                        img/leadership/team/MarianeMacKinnon@2x.png 2x
                      "
                      alt="Mariane Mac Kinnon"
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
                  <h5 class="name"><strnog>Mariane</strnog> Mac Kinnon</h5>
                  <h6 class="job">SVP, Client Success</h6>
                  <div class="description">
                    <p class="paragraph">
                      Mariane has more than 15 years’ customer service
                      experience, with an expertise in training, team
                      management, employee development, process improvement and
                      quality assurance. She leads all client implementations
                      and supports the company’s renewal activity, helping
                      achieve a near 100% renewal rate for the previous two
                      years.
                    </p>
                    <p class="paragraph">
                      Prior to joining SurePeople, Mariane was a senior manager
                      at DentalPlans.com, where she ensured the high-quality
                      service delivery and successfully promoted customer
                      renewal and retention rates.
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

export default Member5
