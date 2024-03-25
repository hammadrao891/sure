import React, { useEffect } from 'react'
import { mapMarkers } from '../../js/pages/contact'

const GlobalTeam = () => {
    useEffect(()=>{
       mapMarkers()
    })
  
    return (
    <div>
      
      <section class="shared-section">
                <div class="container">
                    <div class="shared-heading text-center">
                        <h3 class="heading heading-4">Our Global Team</h3>
                    </div>
                </div>
                <div class="contact-map">
                    <div class="decor">
                        <img
                            class="colors d-none d-md-block"
                            src="img/contact/ColorsMap.svg"
                            alt=""
                        />
                        <img
                            class="colors d-block d-md-none"
                            src="img/contact/ColorsMap@mobile.svg"
                            alt=""
                        />
                    </div>
                    <div class="mobile-marker-caption"></div>
                    <div class="map-container">
                        <div class="map">
                            <img src="img/contact/Map.svg" alt="" />
                        </div>
                        <div class="map-markers">
                            <div class="marker">
                                <div class="caption active">
                                    <div class="flag">
                                        <img
                                            src="img/contact/flags/USA@1x.png"
                                            srcset="img/contact/flags/USA@1x.png 1x, img/contact/flags/USA@2x.png 2x"
                                            alt=""
                                        />
                                    </div>
                                    <div class="location">Chicago, USA</div>
                                    <div class="text">Global Headquarters</div>
                                </div>
                            </div>
                            <div class="marker">
                                <div class="caption">
                                    <div class="flag">
                                        <img
                                            src="img/contact/flags/USA@1x.png"
                                            srcset="img/contact/flags/USA@1x.png 1x, img/contact/flags/USA@2x.png 2x"
                                            alt=""
                                        />
                                    </div>
                                    <div class="location">Chicago, USA</div>
                                    <div class="text">Global Headquarters</div>
                                </div>
                            </div>
                            <div class="marker">
                                <div class="caption">
                                    <div class="flag">
                                        <img
                                            src="img/contact/flags/USA@1x.png"
                                            srcset="img/contact/flags/USA@1x.png 1x, img/contact/flags/USA@2x.png 2x"
                                            alt=""
                                        />
                                    </div>
                                    <div class="location">Chicago, USA</div>
                                    <div class="text">Global Headquarters</div>
                                </div>
                            </div>
                            <div class="marker">
                                <div class="caption">
                                    <div class="flag">
                                        <img
                                            src="img/contact/flags/USA@1x.png"
                                            srcset="img/contact/flags/USA@1x.png 1x, img/contact/flags/USA@2x.png 2x"
                                            alt=""
                                        />
                                    </div>
                                    <div class="location">Chicago, USA</div>
                                    <div class="text">Global Headquarters</div>
                                </div>
                            </div>
                            <div class="marker">
                                <div class="caption">
                                    <div class="flag">
                                        <img
                                            src="img/contact/flags/USA@1x.png"
                                            srcset="img/contact/flags/USA@1x.png 1x, img/contact/flags/USA@2x.png 2x"
                                            alt=""
                                        />
                                    </div>
                                    <div class="location">Chicago, USA</div>
                                    <div class="text">Global Headquarters</div>
                                </div>
                            </div>
                            <div class="marker">
                                <div class="caption">
                                    <div class="flag">
                                        <img
                                            src="img/contact/flags/USA@1x.png"
                                            srcset="img/contact/flags/USA@1x.png 1x, img/contact/flags/USA@2x.png 2x"
                                            alt=""
                                        />
                                    </div>
                                    <div class="location">Chicago, USA</div>
                                    <div class="text">Global Headquarters</div>
                                </div>
                            </div>
                            <div class="marker">
                                <div class="caption">
                                    <div class="flag">
                                        <img
                                            src="img/contact/flags/USA@1x.png"
                                            srcset="img/contact/flags/USA@1x.png 1x, img/contact/flags/USA@2x.png 2x"
                                            alt=""
                                        />
                                    </div>
                                    <div class="location">Chicago, USA</div>
                                    <div class="text">Global Headquarters</div>
                                </div>
                            </div>
                            <div class="marker">
                                <div class="caption">
                                    <div class="flag">
                                        <img
                                            src="img/contact/flags/USA@1x.png"
                                            srcset="img/contact/flags/USA@1x.png 1x, img/contact/flags/USA@2x.png 2x"
                                            alt=""
                                        />
                                    </div>
                                    <div class="location">Chicago, USA</div>
                                    <div class="text">Global Headquarters</div>
                                </div>
                            </div>
                            <div class="marker">
                                <div class="caption">
                                    <div class="flag">
                                        <img
                                            src="img/contact/flags/USA@1x.png"
                                            srcset="img/contact/flags/USA@1x.png 1x, img/contact/flags/USA@2x.png 2x"
                                            alt=""
                                        />
                                    </div>
                                    <div class="location">Chicago, USA</div>
                                    <div class="text">Global Headquarters</div>
                                </div>
                            </div>
                            <div class="marker">
                                <div class="caption">
                                    <div class="flag">
                                        <img
                                            src="img/contact/flags/USA@1x.png"
                                            srcset="img/contact/flags/USA@1x.png 1x, img/contact/flags/USA@2x.png 2x"
                                            alt=""
                                        />
                                    </div>
                                    <div class="location">Chicago, USA</div>
                                    <div class="text">Global Headquarters</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default GlobalTeam
