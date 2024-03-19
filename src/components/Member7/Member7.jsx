import React from 'react'

const Member7 = () => {
  return (
    <div>
      <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/AndyStankiewicz@1x.png"
                      srcset="
                        img/leadership/team/AndyStankiewicz@1x.png,
                        img/leadership/team/AndyStankiewicz@2x.png 2x
                      "
                      alt="Andy Stankiewicz"
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
                  <h5 class="name"><strong>Andy</strong> Stankiewicz</h5>
                  <h6 class="job">Chief Marketing Officer</h6>
                  <div class="description">
                    <p class="paragraph">
                      Andy has more than 25 years experience as a strategic
                      marketing and communications professional. He has held
                      leadership roles across in-house, senior consulting and
                      global agency environments, including at Ogilvy Public
                      Relations Worldwide, where he served in the Corporate
                      Communications Practice.
                    </p>
                    <p class="paragraph">
                      Andy began his career as a journalist for the Voice of
                      America, where he reported on science, technology and
                      international affairs. He has a BA in Communications from
                      the University of Illinois.
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

export default Member7
