import React from 'react'

const Member2 = () => {
  return (
    <div>
      <div class="photo">
                  <div class="image">
                    <img
                      width="280"
                      height="280"
                      src="img/leadership/team/DemetraAnagnostopoulos@1x.png"
                      srcset="
                        img/leadership/team/DemetraAnagnostopoulos@1x.png,
                        img/leadership/team/DemetraAnagnostopoulos@2x.png 2x
                      "
                      alt="Demetra Anagnostopoulos"
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
                  <h5 class="name"><strong>Demetra</strong> Anagnostopoulos</h5>
                  <h6 class="job">Chief Success Officer</h6>
                  <div class="description">
                    <p class="paragraph">
                      Demetra has more than 25 years of experience in the fields
                      of leadership training and organizational development.
                      Over the years, she has spearheaded programs for companies
                      such as Capital One, F. Hoffman-La Roche, Facebook, GE and
                      PepsiCo.
                    </p>
                    <p class="paragraph">
                      Before joining SurePeople, Demetra spent over two decades
                      with Interaction Associates, a global consulting firm that
                      is routinely named one of the "Top 20 Leadership Training
                      Companies" by Training Industry magazine.
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

export default Member2
