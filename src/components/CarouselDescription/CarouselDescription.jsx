
import { useEffect } from "react";
import { handleRevealCTA, handleRevealOnScroll } from "../../js/functions";

function CarouselDescription()
{
    useEffect(()=>{
  
        handleRevealCTA()
        handleRevealOnScroll()
        
        }) 
    return(
        <>
                        <p class="paragraph js-reveal-on-scroll js-split-to-lines">Managing teams has never been more difficult. We empower leaders to align, develop, and optimize their teams for performance in the flow of work, when they need it most.</p>
                      
                    
        </>
    )
}

export default CarouselDescription