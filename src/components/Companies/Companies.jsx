
import { useActionData } from 'react-router-dom';
import '../../scss/pages/home.scss';
import { useEffect } from 'react';
import { handleRevealCTA, handleRevealOnScroll } from '../../js/functions';
function Companies ()
{
  useEffect(()=>{
    handleRevealCTA()
    handleRevealOnScroll()
  })
  return(
        <>
            <section class="shared-section pt-0">
                <div class="container">
                    <div class="trusted-by-section">
                        <h6 class="title js-reveal-on-scroll js-split-to-lines">Trusted by Top Leaders</h6>
                        <p class="paragraph js-reveal-on-scroll js-split-to-lines">in Business, Healthcare, and Sport</p>
                    </div>
                </div>
                <div class="trusted-organizations-logos js-reveal-on-scroll">
                    <div class="marquee-track">
                        <div class="marquee-collection">
                            <div class="item">
                                <img src="img/logos/Sirtex.svg" width="106" height="40" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/Stratus.svg" width="106" height="45" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/UniversityMassachusettsBoston.svg" width="50" height="66" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/TexasRangers.svg" width="80" height="80" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/iRobot.svg" width="116" height="28" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/Vertex.svg" width="84" height="45" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/CarilionClinic.svg" width="259" height="38" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/H.svg" width="72" height="51" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/MountSinai.svg" width="52" height="64" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/EverSource.svg" width="182" height="22" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/uHealth.svg" width="120" height="40" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/TJX.svg" width="65" height="38" alt="" />
                            </div>
                        </div>
                        <div class="marquee-collection">
                            <div class="item">
                                <img src="img/logos/Sirtex.svg" width="106" height="40" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/Stratus.svg" width="106" height="45" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/UniversityMassachusettsBoston.svg" width="50" height="66" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/TexasRangers.svg" width="80" height="80" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/iRobot.svg" width="116" height="28" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/Vertex.svg" width="84" height="45" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/CarilionClinic.svg" width="259" height="38" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/H.svg" width="72" height="51" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/MountSinai.svg" width="52" height="64" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/EverSource.svg" width="182" height="22" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/uHealth.svg" width="120" height="40" alt="" />
                            </div>
                            <div class="item">
                                <img src="img/logos/TJX.svg" width="65" height="38" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                    </>
    )
}

export default Companies;