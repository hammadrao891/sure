import React from 'react'

const Member12 = () => {
  return (
    <div>
      <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/ArtKaroubas@1x.png"
                      srcset="
                        img/leadership/team/ArtKaroubas@1x.png,
                        img/leadership/team/ArtKaroubas@2x.png 2x
                      "
                      alt="Art Karoubas"
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
                  <h5 class="name"><strong>Art</strong> Karoubas</h5>
                  <h6 class="job">Chief Innovation Office</h6>
                  <div class="description">
                    <p class="paragraph">
                      As SurePeople's Chief Innovation Officer, Art is a
                      seasoned professional with more than 20 years of
                      specialized experience in design and innovation
                      leadership. He has a distinguished track record of
                      building and directing top-tier innovation and product
                      teams, which includes researchers, strategists, designers,
                      and product managers.
                    </p>
                    <p class="paragraph">
                      Art is a key figure within our leadership, where he
                      spearheads the conceptualization, development, and
                      execution of forward-thinking products and strategies. His
                      efforts profoundly influence both the Aris OS and
                      SurePeople brands and solutions, playing a vital role in
                      driving our company's growth and innovation. His
                      leadership continues to shape our trajectory, fueling our
                      ambition to deliver cutting-edge solutions for our valued
                      partners and customers.
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

export default Member12
