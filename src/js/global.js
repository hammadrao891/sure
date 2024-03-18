import '../scss/app.scss';

/// gsap
import {Expo, gsap} from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

// SplitType
import SplitType from 'split-type';

// Reveal Observer
import initiateObserver from './utils/revealObserver';

document.addEventListener('DOMContentLoaded', () => {
    fixNavbarOnScroll();
    mobileNavigation();
    mobileCollapseMenu();
    scrollToAnchor();
    customDropdown();
    languageSelector();
    handleSplitToLines();
    handleRevealOnScroll();
    handleRevealCTA();
    videoModal();
    initiateObserver();
});

// Fixed navbar on scroll
const fixNavbarOnScroll = () => {
    const navbar = document.querySelector('header');
    const triggerPoint = 50;

    const updateNavbar = (e) => {
        if (window.scrollY > triggerPoint) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    };

    if (navbar) {
        window.addEventListener('scroll', updateNavbar);
    }
};

// Split text to lines
const handleSplitToLines = () => {
    gsap.registerPlugin(ScrollTrigger);

    const splitToLines = document.querySelectorAll('.js-split-to-lines');

    let results = [];

    const initialSplit = () => {
        splitToLines.forEach((element) => {
            // results = SplitType.create(element);
            results.push(new SplitType(element, {
                types: 'lines'
            }));
        });
    };

    const animateIn = (batch) => {
        gsap.to(batch, {
            opacity: 1,
            yPercent: 0,
            stagger: 0.1,
            onComplete: () => {
                batch.forEach((batchEl) => {
                    // Check if the current element or any of its children have the class 'highlight'
                    const highlightEl = batchEl.querySelector('.highlight');

                    if (!highlightEl) { return; }
                    drawSVGPath(highlightEl.querySelector('path'));
                });
            }
        });
    };

    const animateOut = (batch) => {
        gsap.to(batch, {
            opacity: 0,
            yPercent: 25,
            stagger: 0.1,
        });
    };

    const createLinesScrollTrigger = () => {
        results.forEach((result, i) => {
            if (!result.elements[0].classList.contains('js-reveal-batch')) {
                result.lines.forEach((line) => {
                    let r = getComputedStyle(document.querySelector(':root'));
                    let globalPaddingY = parseInt(r.getPropertyValue('--sectionPaddingY'));

                    const offset = globalPaddingY * 0.5;
                    const threshold = 60;

                    gsap.set(line, {
                        'will-change': 'transform, opacity',
                        opacity: 0,
                        yPercent: (25 / 100 * line.offsetHeight) > threshold ? '' : 25,
                        y: (25 / 100 * line.offsetHeight) > threshold ? threshold : '',
                    });

                    const batchElements = result.lines;

                    ScrollTrigger.batch(batchElements, {
                        id: 'reveal-lines-on-scroll',
                        start: () => `top bottom-=${offset}`,
                        end: () => `bottom top+=${offset}`,
                        invalidateOnRefresh: true,
                        onEnter: (batch) => animateIn(batch),
                        // onLeaveBack: (batch) => animateOut(batch)
                    });
                });
            }
        });
    };

    const handleResize = () => {
        // Store the window width
        let windowWidth = window.innerWidth;

        // Initial update
        bindResize();

        // Resize Event
        window.addEventListener('resize', () => {
            // Check window width has actually changed, and it's not just iOS triggering a resize event on scroll
            if (window.innerWidth !== windowWidth) {
                // Update the window width for next time
                windowWidth = window.innerWidth;
                // Do stuff here
                bindResize();
            }
            // Otherwise do nothing
        });
    };

    const bindResize = () => {
        results.forEach((result) => {
            result.split(null);
        });

        // Kill ScrollTrigger and reinitialize it
        ScrollTrigger.getById('reveal-lines-on-scroll').kill();
        createLinesScrollTrigger();
    };

    setTimeout(() => {
        // Initialize ScrollTrigger
        initialSplit();
        createLinesScrollTrigger();

        // Attach a listener for window resize
        handleResize();
    }, 50);
};

const handleRevealOnScroll = () => {
    gsap.registerPlugin(ScrollTrigger);

    const elementToReveal = document.querySelectorAll('.js-reveal-on-scroll');
    const staggerDuration = 0.1;

    const animateIn = (batch) => {
        gsap.to(batch, {
            opacity: 1,
            yPercent: 0,
            stagger: staggerDuration,
        });
    };

    const animateOut = (batch) => {
        gsap.to(batch, {
            opacity: 0,
            yPercent: 25,
            stagger: staggerDuration,
        });
    };

    elementToReveal.forEach((element, i) => {
        if (element.classList.contains('js-reveal-batch')) {
            let r = getComputedStyle(document.querySelector(':root'));
            let globalPaddingY = parseInt(r.getPropertyValue('--sectionPaddingY'));

            gsap.set(element, {
                'will-change': 'transform, opacity',
                opacity: 0,
                yPercent: 15,
            });

            const batchElements = element.parentNode.querySelectorAll('.js-reveal-batch');

            ScrollTrigger.batch(batchElements, {
                id: 'reveal-batch-on-scroll',
                start: () => `top bottom-=${globalPaddingY * 0.5}`,
                end: () => `bottom top+=${globalPaddingY * 0.5}`,
                invalidateOnRefresh: true,
                onEnter: (batch) => animateIn(batch),
                // onLeave: (batch) => animateOut(batch),
                // onEnterBack: (batch) => animateIn(batch),
                // onLeaveBack: (batch) => animateOut(batch)
            });
        } else {
            if (!element.classList.contains('js-split-to-lines')) {
                let r = getComputedStyle(document.querySelector(':root'));
                let globalPaddingY = parseInt(r.getPropertyValue('--sectionPaddingY'));

                const tl = gsap.timeline({paused: true});
                const threshold = 60;

                if (element.classList.contains('js-fade-in')) {
                    gsap.set(element, {
                        'will-change': 'transform, opacity',
                        opacity: 0,
                    });

                    tl.to(element, {
                        opacity: 1,
                    });
                } else if (element.classList.contains('js-scale-in')) {
                    gsap.set(element, {
                        'will-change': 'transform, opacity',
                        opacity: 0,
                        scale: 0
                    });

                    tl.to(element, {
                        opacity: 1,
                        scale: 1,
                    });
                } else {
                    gsap.set(element, {
                        'will-change': 'transform, opacity',
                        opacity: 0,
                        yPercent: (25 / 100 * element.offsetHeight) > threshold ? '' : 25,
                        y: (25 / 100 * element.offsetHeight) > threshold ? threshold : '',
                    });

                    tl.to(element, {
                        opacity: 1,
                        yPercent: 0,
                        y: 0,
                    });
                }

                tl.progress(1);

                ScrollTrigger.create({
                    trigger: element,
                    id: 'reveal-singles-on-scroll',
                    start: () => `top bottom-=${globalPaddingY * 0.5}`,
                    end: () => `bottom top+=${globalPaddingY * 0.5}`,
                    animation: tl,
                    toggleActions: 'play none none reverse',
                    invalidateOnRefresh: true,
                });
            }
        }
    });
};

const handleRevealCTA = () => {
    gsap.registerPlugin(ScrollTrigger);

    const elementToReveal = document.querySelectorAll('.js-reveal-cta');
    const staggerDuration = 0.4;

    const animateIn = (batch) => {
        gsap.to(batch, {
            opacity: 1,
            stagger: staggerDuration,
        });
    };

    elementToReveal.forEach((element, i) => {
        let r = getComputedStyle(document.querySelector(':root'));
        let globalPaddingY = parseInt(r.getPropertyValue('--sectionPaddingY'));

        gsap.set(element, {
            'will-change': 'transform, opacity',
            opacity: 0,
        });

        ScrollTrigger.batch(elementToReveal, {
            start: () => `top top`,
            end: () => `top top`,
            invalidateOnRefresh: true,
            onEnter: (batch) => animateIn(batch),
        });
    });
};

// Mobile navigation
const mobileNavigation = () => {
    let mobileToggler = document.querySelector('.navbar-menu-toggler'),
        mobileMenu = document.querySelector('.navbar-menu'),
        body = document.body;

    const toggleMenu = () => {
        if (!mobileMenu.classList.contains('menu-open')) {
            animateIn(mobileMenu);
        } else {
            animateOut(mobileMenu);
        }
    };

    const animateIn = (menu) => {
        body.classList.add('menu-is-open');
        mobileMenu.classList.add('menu-open');

        gsap.set(mobileMenu, {
            height: window.innerHeight + 'px',
            yPercent: -100,
        });

        gsap.to(menu, {
            duration: 0.6,
            yPercent: 0,
            ease: 'expo.out',
        });
    };

    const animateOut = (menu) => {
        body.classList.remove('menu-is-open');

        gsap.to(menu, {
            duration: 0.6,
            yPercent: -100,
            ease: 'expo.out',
            onComplete: () => {
                gsap.set(mobileMenu, {
                    clearProps: 'height'
                });

                mobileMenu.classList.remove('menu-open');
            }
        });
    };

    const handleResize = () => {
        if (mobileMenu.classList.contains('menu-open')) {
            body.classList.remove('menu-is-open');
            mobileMenu.classList.remove('menu-open');
            gsap.set(mobileMenu, {
                clearProps: 'height'
            });
        }
    };

    handleResize();
    window.addEventListener('resize', handleResize, false);
    mobileToggler.addEventListener('click', toggleMenu, false);
};

const mobileCollapseMenu = () => {
    const togglers = document.querySelectorAll('.js-collapse-menu');

    const onClick = (e) => {
        e.preventDefault();

        const parent = e.target.parentNode;
        const dropdown = e.target.nextElementSibling;

        // open clicked dropdown
        if (parent.classList.contains('active')) {
            parent.classList.remove('active');

            gsap.to(dropdown, {
                duration: 0.2,
                height: 0,
                ease: 'power2.out',
                onComplete: () => {
                    gsap.set(dropdown, {
                        clearProps: 'all'
                    });
                }
            });
        } else {
            parent.classList.add('active');

            gsap.to(dropdown, {
                duration: 0.2,
                height: dropdown.scrollHeight,
                ease: 'power2.out',
            });
        }

        // close previously opened dropdowns
        togglers.forEach((toggler) => {
            if (toggler !== e.target) {
                const parent = toggler.parentNode;
                const dropdown = toggler.nextElementSibling;

                if (dropdown && parent.classList.contains('active')) {
                    parent.classList.remove('active');

                    gsap.to(dropdown, {
                        duration: 0.2,
                        height: 0,
                        ease: 'power2.out',
                    });
                }
            }
        });
    };

    const handleResize = () => {
        togglers.forEach((toggler) => {
            const parent = toggler.parentNode;
            const dropdown = toggler.nextElementSibling;

            if (dropdown && parent.classList.contains('active')) {

                parent.classList.remove('active');
                gsap.set(dropdown, {
                    clearProps: 'all'
                });
            }
        });
    };

    handleResize();
    window.addEventListener('resize', handleResize, false);
    togglers.forEach((toggler) => {
        toggler.addEventListener('click', onClick);
    });
};

// Scroll to anchor
const scrollToAnchor = () => {
    // ScrollTrigger
    gsap.registerPlugin(ScrollToPlugin);
    gsap.defaults({overwrite: 'auto'});

    const triggers = document.querySelectorAll('.js-smooth-scroll-to');

    let sectionPaddingY, offset;

    const getPaddingTop = () => {
        sectionPaddingY = getComputedStyle(document.body).getPropertyValue('--sectionPaddingY');
        offset = parseInt(sectionPaddingY) / 2;
    };

    const jumpToSection = e => {
        e.preventDefault();

        const contentTarget = document.querySelector(e.currentTarget.getAttribute('href'));
        const contentTargetY = contentTarget.getBoundingClientRect().top + window.scrollY;

        getPaddingTop();

        gsap.to(window, {
            duration: 1,
            scrollTo: contentTargetY - offset,
            ease: Expo.easeInOut
        });
    };

    triggers.forEach(el => el.addEventListener('click', e => jumpToSection(e)));
};

// Custom dropdown
const customDropdown = () => {
    const dropdowns = document.querySelectorAll('.js-dropdown');

    const onClick = (dropdown) => {
        const toggler = dropdown.firstElementChild;

        toggler.addEventListener('click', (e) => toggleDropdown(e));
    };

    const toggleDropdown = (e) => {
        const toggler = e.currentTarget;
        const dropdown = toggler.closest('.js-dropdown');
        const dropdownMenu = toggler.nextElementSibling;

        // open clicked dropdown
        if (dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
            toggler.classList.remove('active');

            gsap.to(dropdownMenu, {
                duration: 0.2,
                opacity: 0,
                y: -8,
                ease: 'power2.out',
                onComplete: () => {
                    gsap.set(dropdownMenu, {
                        clearProps: 'all'
                    });
                }
            });
        } else {
            dropdown.classList.add('open');
            toggler.classList.add('active');

            gsap.set(dropdownMenu, {
                display: 'block',
                opacity: 0,
                y: -8
            });

            gsap.to(dropdownMenu, {
                duration: 0.2,
                opacity: 1,
                y: 0,
                ease: 'power2.out'
            });
        }

        // close previously opened dropdowns
        dropdowns.forEach((target) => {
            if (target !== e.currentTarget.parentNode) {
                if (target.classList.contains('open')) {
                    target.classList.remove('open');
                    target.firstElementChild.classList.remove('active');

                    gsap.to(target.querySelector('.dropdown-menu'), {
                        duration: 0.2,
                        opacity: 0,
                        y: -8,
                        ease: 'power2.out',
                        onComplete: () => {
                            gsap.set(target.querySelector('.dropdown-menu'), {
                                clearProps: 'all'
                            });
                        }
                    });
                }
            }
        });
    };

    dropdowns.forEach((dropdown) => onClick(dropdown));
    document.addEventListener('click', (e) => {
        dropdowns.forEach((dropdown) => {
            if (dropdown.classList.contains('open')) {
                const isClickInside = dropdown.contains(e.target);

                if (!isClickInside) {
                    dropdown.classList.remove('open');
                    dropdown.firstElementChild.classList.remove('active');

                    gsap.to(dropdown.querySelector('.dropdown-menu'), {
                        duration: 0.2,
                        opacity: 0,
                        y: -8,
                        ease: 'power2.out',
                        onComplete: () => {
                            gsap.set(dropdown.querySelector('.dropdown-menu'), {
                                clearProps: 'all'
                            });
                        }
                    });
                }
            }
        });
    });
};

// Language selector
const languageSelector = () => {
    const elements = document.querySelectorAll('.js-language-selector');

    const onClick = (dropdown) => {
        const targets = dropdown.querySelector('.dropdown-list').children;

        Array.from(targets).forEach((target) => {
            target.addEventListener('click', (e) => updateToggler(e, dropdown));
        });
    };

    const checkActive = (e) => {
        const targets = e.querySelector('.dropdown-list').children;

        Array.from(targets).forEach((target) => {
            if (target.classList.contains('active')) {
                const toggler = e.firstElementChild;

                if (document.querySelector('.navbar-header').contains(target)) {
                    const regExp = /\(([^)]+)\)/;
                    const matches = regExp.exec(target.innerHTML);

                    toggler.innerHTML = matches[1];
                } else {
                    toggler.innerHTML = target.innerHTML;
                }
            }
        });
    };

    const updateToggler = (e, dropdown) => {
        const toggler = dropdown.firstElementChild;
        const target = e.currentTarget;
        const dropdownMenu = toggler.nextElementSibling;

        target.classList.add('active');

        if (document.querySelector('.navbar-header').contains(target)) {
            const regExp = /\(([^)]+)\)/;
            const matches = regExp.exec(target.innerHTML);

            toggler.innerHTML = matches[1];
        } else {
            toggler.innerHTML = target.innerHTML;
        }

        // remove active class from siblings
        Array.from(target.parentNode.children).forEach((toggler) => {
            if (toggler !== e.currentTarget) {
                if (toggler.classList.contains('active')) {
                    toggler.classList.remove('active');
                }
            }
        });

        // close dropdown
        if (dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
            toggler.classList.remove('active');

            gsap.to(dropdownMenu, {
                duration: 0.2,
                opacity: 0,
                y: -8,
                ease: 'power2.out',
                onComplete: () => {
                    gsap.set(dropdownMenu, {
                        clearProps: 'all'
                    });
                }
            });
        }
    };

    elements.forEach((element) => checkActive(element));
    elements.forEach((element) => onClick(element));
};

const drawSVGPath = (element) => {
    // Assuming 'element' is a single SVG path element
    element.closest('.js-draw-path').style.opacity = '1';

    const length = element.getTotalLength();
    element.style.strokeDasharray = length;
    element.style.strokeDashoffset = length;

    const animationDuration = 2000;

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    function animate(time) {
        if (!startTime) {
            startTime = time;
        }

        let elapsedTime = time - startTime;
        let progress = elapsedTime / animationDuration;
        progress = easeInOutCubic(progress);

        element.style.strokeDashoffset = length * (1 - progress);

        if (elapsedTime < animationDuration) {
            requestAnimationFrame(animate);
        }
    }

    let startTime = null;
    requestAnimationFrame(animate);
};

// Set up Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element is in view, draw the path
            drawSVGPath(entry.target);
            // Optional: Unobserve the element after drawing it
            observer.unobserve(entry.target);
        }
    });
}, {
    // Optional: Configure the observer to your needs, e.g., the threshold of visibility for triggering
    root: null, // null means it observes changes in the viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% of the element is visible
});

// Observe each .js-draw-path path element
document.querySelectorAll('.js-draw-path path').forEach(path => {
    observer.observe(path);
});

// Dynamically Generated Video Modal
const videoModal = () => {
    const trigger = document.querySelectorAll('.js-video-modal');
    const body = document.body;

    let tl,
        modal,
        modalContent;

    function playVimeo(player) {
        player.play().then(function () {
            console.log('Video is playing');
        }).catch(function (error) {
            console.error('Error playing the video:', error.name);
        });
    }

    const setModalContent = (element) => {
        element.video = element.querySelector('.js-video > *');

        // create master modal div
        modal = document.createElement('div');
        modal.classList.add('f-modal');

        // create modal divs
        const modalClose = document.createElement('div');
        const modalContent = document.createElement('div');
        const modalLayout = document.createElement('div');

        // add classes to modal divs
        modalClose.classList.add('f-modal-close');
        modalContent.classList.add('f-modal-content');
        modalLayout.classList.add('f-modal-layout');

        // assemble modal divs
        modal.append(modalClose);
        modal.append(modalContent);

        // create member layout divs
        const modalLayoutVideo = document.createElement('div');

        // add classes to member layout divs
        modalLayoutVideo.classList.add('f-modal-video');

        // set content from the target element
        modalLayoutVideo.innerHTML = `${element.video.outerHTML}`;

        // assemble member layout
        modalContent.append(modalLayoutVideo);

        document.body.append(modal); // append modal to body

        // animate opening modal
        openModal(element);
    };

    const openModal = (element) => {
        tl = gsap.timeline({reversed: true, pause: true});
        modalContent = modal.querySelector('.f-modal-content');

        modal.classList.add('open');

        tl.set(modalContent, {
            scale: 0.95,
            opacity: 0
        });

        tl.to(modal, {
            duration: 0.2,
            opacity: 1,
            onStart: () => {
                body.classList.add('overflow-hidden');
            },
            onReverseComplete: () => {
                body.classList.remove('overflow-hidden');
                modal.classList.remove('open');
                modal.remove();
            }
        }, '<+0.1').to(modalContent, {
            duration: 0.2,
            opacity: 1,
            scale: 1,
            onComplete: () => {
                const HTML5Video = modalContent.querySelector('.f-modal-video video');

                if (HTML5Video) {
                    HTML5Video.play();
                } else {
                    const iframe = modalContent.querySelector('.f-modal-video iframe');
                    const player = new Vimeo.Player(iframe);

                    playVimeo(player);
                }
            }
        });

        tl.play();
    };

    // bind on click
    trigger.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();

            const target = e.currentTarget;

            if (target.classList.contains('customer-testimonial') && target.parentNode.classList.contains('active')) {
                setModalContent(target);
            } else if (!target.classList.contains('customer-testimonial')) {
                setModalContent(target);
            }

            // openModal(element);
        });
    });

    // close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (modal && modal.contains(e.target) && !modalContent.contains(e.target)) {
            tl.reverse();
        }
    });
};
