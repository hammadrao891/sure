import React from 'react'

const Member3 = () => {
  return (
    <div>
      <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/AdamSchneider@1x.png"
                      srcset="
                        img/leadership/team/AdamSchneider@1x.png,
                        img/leadership/team/AdamSchneider@2x.png 2x
                      "
                      alt="Adam Schneider"
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
                  <h5 class="name"><strong>Adam</strong> Schneider</h5>
                  <h6 class="job">SVP, Content</h6>
                  <div class="description">
                    <p class="paragraph">
                      Adam is an experienced digital strategist with a passion
                      for developing and curating content that people find
                      inspiring, useful and worth sharing. At SurePeople, he
                      leads the overall development and implementation of the
                      company’s growing content ecosystem, consisting of
                      world-class learning programs designed to elevate
                      individual, team and organizational performance.
                    </p>
                    <p class="paragraph">
                      Prior to joining SurePeople, Adam spearheaded innovative
                      content and marketing communications initiatives as a
                      Senior Content Strategist for SapientNitro and as a Senior
                      Coordinator, Integrated Marketing Communications for
                      Harley-Davidson Motor Company.
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

export default Member3
