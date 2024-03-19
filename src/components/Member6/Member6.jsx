import React from 'react'

const Member6 = () => {
  return (
    <div>
        <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/AmbarishChaudhari@1x.png"
                      srcset="
                        img/leadership/team/AmbarishChaudhari@1x.png,
                        img/leadership/team/AmbarishChaudhari@2x.png 2x
                      "
                      alt="Ambarish Chaudhari"
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
                  <h5 class="name"><strong>Ambarish</strong> Chaudhari</h5>
                  <h6 class="job">SVP, Engineering</h6>
                  <div class="description">
                    <p class="paragraph">
                      Ambarish is an accomplished software architect with more
                      than 25 years’ experience developing rapid, robust and
                      innovative solutions to complex problems for enterprise
                      SaaS companies. His expertise includes software
                      architecture, solution framework development and component
                      development.
                    </p>
                    <p class="paragraph">
                      Prior to joining SurePeople, Ambarish was founder of the
                      technology consulting firm, Challenge Handshake Inc. He
                      also served in diverse technology roles during his career,
                      including Engineering, Product Management and Solution
                      Design; Principal Technical Architect; Technology Advisor;
                      and, Product Development Lead. He received his B.E. in
                      Computer Engineering from Pune Institute of Computer
                      Technology in India.
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

export default Member6
