import { useEffect } from "react"
import { handleSplitToLines } from "../../js/functions"

function GetStartedHero()
{

    useEffect(()=>{
        // handleRevealOnScroll()
        // handleRevealCTA()
        handleSplitToLines()
      })    
    return(
        <section class="shared-hero">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="~img/get-started/ColorsHero.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="~img/get-started/ColorsHero@mobile.svg"
                        alt=""
                    />
                </div>
        <div class="container">
        <div class="hero-content">
            <span class="pretitle js-reveal-on-scroll js-split-to-lines">Get Started</span>
            <h1 class="heading js-reveal-on-scroll js-split-to-lines">
                Start Your <span class="text-gradient">Free Trial</span> Today!
            </h1>
            <p class="paragraph js-reveal-on-scroll js-split-to-lines">Ready to explore what we have to offer? </p>
        </div>
    </div>
    </section>
    )
}

export default GetStartedHero