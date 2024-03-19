import { useEffect, useState } from "react";
import {gsap} from 'gsap';
import "../../css/index.5165d336f6d347ebc651.css"
import "../../css/global.c12ee4b9163e7c1766c1.css"
import "../../scss/pages/home.scss"
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
function Testimonials()
{
  const [active,setActive] = useState({one:true,two:false,three:false,four:false,five:false})
  useEffect(()=>{
  const customerTestimonials = () => {
    // Function to update padding based on the active element
    function updatePadding() {
        const children = document.querySelectorAll('.js-customer-testimonials-item');
        const activeElement = document.querySelector('.js-customer-testimonials-item.active');

        if (!activeElement) return;

        if (window.innerWidth > 1023) {

            let padding = 0;

            children.forEach((child) => {
                child.classList.remove('prev');
                child.classList.remove('next');
            });

            let currentElement = activeElement.previousElementSibling;
            if (currentElement) {
                currentElement.classList.add('prev');
            }
            while (currentElement) {
                padding += 48;
                gsap.killTweensOf(currentElement);
                gsap.to(currentElement, {
                    duration: 0.6,
                    paddingTop: padding + 'px',
                    paddingBottom: padding + 'px',
                });
                currentElement = currentElement.previousElementSibling;
            }

            gsap.set(activeElement, {paddingTop: '', paddingBottom: ''});

            padding = 0;
            currentElement = activeElement.nextElementSibling;
            if (currentElement) {
                currentElement.classList.add('next');
            }
            while (currentElement) {
                padding += 48;
                gsap.killTweensOf(currentElement);
                gsap.to(currentElement, {
                    duration: 0.6,
                    paddingTop: padding + 'px',
                    paddingBottom: padding + 'px',
                });
                currentElement = currentElement.nextElementSibling;
            }
        } else {
            children.forEach((child) => {
                gsap.set(child, {paddingTop: '', paddingBottom: ''});
            });
        }
    }
}

const swiperCustomerTestimonials = () => {
  const customerTestimonials = document.querySelector('.js-customer-testimonials');

  let swiper;

  const createBaseMarkup = () => {
      const swiperDiv = document.createElement('div');
      const swiperWrapperDiv = document.createElement('div');
      const swiperNavigationDiv = document.createElement('div');
      const swiperNavigationPrevDiv = document.createElement('div');
      const swiperNavigationNextDiv = document.createElement('div');

      swiperDiv.classList.add('swiper-testimonials');
      swiperWrapperDiv.classList.add('swiper-wrapper');
      swiperNavigationDiv.classList.add('swiper-navigation');
      swiperNavigationPrevDiv.classList.add('swiper-btn', 'swiper-btn-prev');
      swiperNavigationNextDiv.classList.add('swiper-btn', 'swiper-btn-next');

      swiperDiv.append(swiperWrapperDiv);
      swiperNavigationDiv.append(swiperNavigationPrevDiv, swiperNavigationNextDiv);

      Array.from(customerTestimonials.children).forEach((testimonial) => {
          const swiperSlideDiv = document.createElement('div');

          swiperSlideDiv.classList.add('swiper-slide');

          swiperSlideDiv.append(testimonial.children[0].cloneNode(true));

          swiperSlideDiv.querySelector('.hidden-info').remove();

          swiperWrapperDiv.append(swiperSlideDiv);
      });

      customerTestimonials.parentNode.insertBefore(swiperDiv, customerTestimonials.nextSibling);
      swiperWrapperDiv.parentNode.insertBefore(swiperNavigationDiv, swiperWrapperDiv.nextSibling);
  };

  const createSwiper = () => {
      const swiperContainer = document.querySelector('.swiper-testimonials');

      if (swiperContainer) {
          swiper = new Swiper(`.${swiperContainer.className}`, {
              modules: [Navigation],
              slidesPerView: 1,
              spaceBetween: 10,
              navigation: {
                  prevEl: swiperContainer.querySelector('.swiper-btn-prev'),
                  nextEl: swiperContainer.querySelector('.swiper-btn-next'),
              }
          });
      }
  };

  const init = () => {
      if (window.innerWidth < 1024) {
          if (!swiper) {
              createBaseMarkup();
              createSwiper();
          }
           else if (swiper.destroyed) {
              createBaseMarkup();
              createSwiper();
          }
      } else {
          if (swiper) {
              if (swiper.el !== undefined) {
                  swiper.el.remove();
                  swiper.destroy(true, true);
              }
          }
      }
  };

  init();
  window.addEventListener('resize', init);
};
customerTestimonials();
swiperCustomerTestimonials();

}, []);
const handleItemClick = (event,card) => {
if (card === "one")
{
setActive({one:true,two:false,three:false,four:false,five:false})
}
else if (card === "two")
{
setActive({one:false,two:true,three:false,four:false,five:false})
}
else if (card === "three")
{
setActive({one:false,two:false,three:true,four:false,five:false})
}
else if (card === "four")
{
setActive({one:false,two:false,three:false,four:true,five:false})
}
else if (card === "five")
{
setActive({one:false,two:false,three:false,four:false,five:true})
}
const element = event.currentTarget;

const classList = element.classList;
classList.remove('active');
element.classList.add('active');
updatePadding();
updateClickListeners();
};
// Initial setup
updatePadding();
updateClickListeners();

// Update padding on window resize
window.addEventListener('resize', updatePadding);
// };
function updatePadding() {
const children = document.querySelectorAll('.js-customer-testimonials-item');
const activeElement = document.querySelector('.js-customer-testimonials-item.active');

if (!activeElement) return;

if (window.innerWidth > 1023) {

let padding = 0;

children.forEach((child) => {
  child.classList.remove('prev');
  child.classList.remove('next');
});

let currentElement = activeElement.previousElementSibling;
if (currentElement) {
  currentElement.classList.add('prev');
}
while (currentElement) {
  padding += 48;
  gsap.killTweensOf(currentElement);
  gsap.to(currentElement, {
      duration: 0.6,
      paddingTop: padding + 'px',
      paddingBottom: padding + 'px',
  });
  currentElement = currentElement.previousElementSibling;
}

gsap.set(activeElement, {paddingTop: '', paddingBottom: ''});

padding = 0;
currentElement = activeElement.nextElementSibling;
if (currentElement) {
  currentElement.classList.add('next');
}
while (currentElement) {
  padding += 48;
  gsap.killTweensOf(currentElement);
  gsap.to(currentElement, {
      duration: 0.6,
      paddingTop: padding + 'px',
      paddingBottom: padding + 'px',
  });
  currentElement = currentElement.nextElementSibling;
}
} else {
children.forEach((child) => {
  gsap.set(child, {paddingTop: '', paddingBottom: ''});
});
}
}
// Function to add click listeners to non-active items
function updateClickListeners() {
const activeEls = document.querySelectorAll('.js-customer-testimonials-item');
const notActiveEls = document.querySelectorAll('.js-customer-testimonials-item:not(.active)');

// First, remove click listeners from all items
activeEls.forEach(item => {
item.removeEventListener('click', handleItemClick);
});

// Then, add click listeners only to non-active items
notActiveEls.forEach(item => {
if (window.innerWidth > 1023) {
    item.addEventListener('click', handleItemClick);
} else {
    item.removeEventListener('click', handleItemClick);
}
});
}
useEffect(()=>
{
  function updateClickListeners() {
    const activeEls = document.querySelectorAll('.js-customer-testimonials-item');
    const notActiveEls = document.querySelectorAll('.js-customer-testimonials-item:not(.active)');
    
    // First, remove click listeners from all items
    activeEls.forEach(item => {
    item.removeEventListener('click', handleItemClick);
    });
    
    // Then, add click listeners only to non-active items
    notActiveEls.forEach(item => {
    if (window.innerWidth > 1023) {
        item.addEventListener('click', handleItemClick);
    } else {
        item.removeEventListener('click', handleItemClick);
    }
    });
    }
    updateClickListeners()
    updateClickListeners()

},[handleItemClick])

    return(
        <>
            <section class="shared-section section-testimonials">
              
              <div class="decor">
                
                <img
                  class="colors d-none d-md-block"
                  src="img/home/ColorsTestimonials.svg"
                  alt=""
                />
                <img
                  class="colors d-block d-md-none"
                  src="img/home/ColorsTestimonials@mobile.svg"
                  alt=""
                />
              </div>
              <div class="customer-testimonials js-customer-testimonials" onClick={handleItemClick}>
                
                <div class={`customer-testimonials-item js-customer-testimonials-item ${active.one && 'active'}`} onClick={e=>handleItemClick(e,'one')}>
                  
                  <div class="customer-testimonial">
                    
                    <div class="hidden-info">
                      
                      <div class="name">Bill O'Brien, Ph.D.</div>
                    </div>
                    <div class="photo">
                      
                      <img
                        width="1024"
                        height="574"
                        src="img/home/BillO'Brien@1x.png"
                        srcset="img/home/BillO'Brien@1x.png, img/home/BillO'Brien@2x.png 2x"
                        alt="Bill O'Brien"
                      />
                    </div>
                    <div class="overlay">
                      
                      <div class="content">
                        
                        <h6 class="name">Bill O'Brien, Ph.D.</h6>
                        <p class="job">CEO, Mission Development Corp.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={`customer-testimonials-item js-customer-testimonials-item ${active.two && 'active'}`} onClick={(e)=>handleItemClick(e,'two')}>
                  
                  <div class="customer-testimonial">
                    
                    <div class="hidden-info">
                      
                      <div class="name">Jennifer Braun</div>
                    </div>
                    <div class="photo">
                      
                      <img
                        width="1024"
                        height="574"
                        src="img/home/JenniferBraun@1x.png"
                        srcset="img/home/JenniferBraun@1x.png, img/home/JenniferBraun@2x.png 2x"
                        alt="Bill O'Brien"
                      />
                    </div>
                    <div class="overlay">
                      
                      <div class="content">
                        
                        <h6 class="name">Jennifer Braun</h6>
                        <p class="job">
                          Director of Workforce & Organizational Development
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={`customer-testimonials-item js-customer-testimonials-item ${active.three && 'active'}`} onClick={(e)=>handleItemClick(e,'three')}>
                  
                  <div class="customer-testimonial">
                    
                    <div class="hidden-info">
                      
                      <div class="name">Inez Stewart, M.Ed.</div>
                    </div>
                    <div class="photo">
                      
                      <img
                        width="1024"
                        height="574"
                        src="img/home/InezStewart@1x.png"
                        srcset="img/home/InezStewart@1x.png, img/home/InezStewart@2x.png 2x"
                        alt="Inez Stewart, M.Ed."
                      />
                    </div>
                    <div class="overlay">
                      
                      <div class="content">
                        
                        <h6 class="name">Inez Stewart, M.Ed.</h6>
                        <p class="job">Chief Human Resources Officer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={`customer-testimonials-item js-customer-testimonials-item ${active.four && 'active'}`} onClick={e=>handleItemClick(e,'four')}>
                  
                  <div class="customer-testimonial">
                    
                    <div class="hidden-info">
                      
                      <div class="name">Lisa DeAngelis</div>
                    </div>
                    <div class="photo">
                      
                      <img
                        width="1024"
                        height="574"
                        src="img/home/LisaDeAngelis@1x.png"
                        srcset="img/home/LisaDeAngelis@1x.png, img/home/LisaDeAngelis@2x.png 2x"
                        alt="Lisa DeAngelis"
                      />
                    </div>
                    <div class="overlay">
                      
                      <div class="content">
                        
                        <h6 class="name">Lisa DeAngelis</h6>
                        <p class="job">CEO, Mission Development Corp.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={`customer-testimonials-item js-customer-testimonials-item ${active.five && 'active'}`} onClick={e=>handleItemClick(e,'five')}>
                  
                  <div class="customer-testimonial">
                    
                    <div class="hidden-info">
                      
                      <div class="name">Chris Newell</div>
                    </div>
                    <div class="photo">
                      
                      <img
                        width="1024"
                        height="574"
                        src="img/home/ChrisNewell@1x.png"
                        srcset="img/home/ChrisNewell@1x.png, img/home/ChrisNewell@2x.png 2x"
                        alt="Chris Newell"
                      />
                    </div>
                    <div class="overlay">
                      
                      <div class="content">
                        
                        <h6 class="name">Chris Newell</h6>
                        <p class="job">CEO, Mission Development Corp.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default Testimonials