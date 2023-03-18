import {
    gsap
} from "gsap";
import {
    PixiPlugin
} from "gsap/PixiPlugin.js";
import {
    MotionPathPlugin
} from "gsap/MotionPathPlugin.js";


import {
    ScrollTrigger
} from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);
//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

const lapTopScreen = window.matchMedia('(min-width:992px)').matches;
console.log(lapTopScreen);

const animation = () => {
    if (lapTopScreen) {
        gsap.timeline().set('.section-1__title', {
            x: -300,
            scale: 0.5,
            // duration: 2
        }).
        set('.header__logo', {
                x: 1500,
                scale: 3
            })
            .to('.section-1__title', {
                x: 0,
                scale: 1,
                duration: 2,

            }).to('.header__logo', {
                x: 0,
                scale: 1,
                duration: 2,
            }, "=-2");
    }


    gsap.to('.header', {
        scrollTrigger: {
            trigger: '.section-1',
            start: 'top top',
            scrub: true,
        },
        css: {
            opacity: "0.5"
        }
    });
    gsap.to('.header', {
        scrollTrigger: {
            trigger: '.section-2',
            start: '-100 top',
            end: "400 top",
            scrub: true,
        },
        css: {
            backgroundColor: "#6A6A6A",
        }
    });
    gsap.to('.topToButton', {
        scrollTrigger: {
            trigger: '.section-2',
            start: 'top top',
            scrub: true,
            duration: 0.5
        },
        css: {
            display: 'flex'
            // backgroundColor: "red",

        }
    });

    // gsap.to('.menu__link', {
    //     scrollTrigger: {
    //         trigger: '.section-2',
    //         start: '-100 top',
    //         markers: true,
    //         scrub: true,
    //     },
    //     css: {
    //         color: '#000',
    //         opacity: 1,
    //         zIndex: 4
    //     }
    // });

    // yPercent: 180,
    // scale: 0.5,
    // xPercent: -80,
    // opacity: 0






    // gsap.to('.header__logo', {
    //     x: 600,
    //     scale: 1.5,
    //     duration: 2
    // })
}

export default animation;