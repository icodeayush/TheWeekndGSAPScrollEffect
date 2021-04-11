gsap.registerPlugin(ScrollTrigger);

//---------------------Landing Page ScrollTrigger---------------------
function LandingPageScrollTrigger() {

    gsap.to('body', { // LoadingAnimation---------------------
        opacity: 1, duration: 1.3,
    }) // /LoadingAnimation---------------------

    let LandingPageScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: "#ImgWrapper",
            start: "0% 0%",
            end: "100% 0%",
            pin: "#ImgWrapper",
            scrub: 2.2,
        }
    })
    LandingPageScrollTrigger
        .to('#ImgWrapper #img7', { transform: 'translateZ(4500px)', }, 0)
        .to('#ImgWrapper #img6', { transform: 'translateZ(3700px)', }, 0)
        .to('#ImgWrapper #img5', { transform: 'translateZ(3100px)', }, 0)
        .to('#ImgWrapper #img4', { transform: 'translateZ(2800px)', }, 0)
        .to('#ImgWrapper #img3', { transform: 'translateZ(2600px)', }, 0)
        .to('#ImgWrapper #img2', { transform: 'translateZ(2400px)', }, 0)
        .to('#ImgWrapper #img1', { transform: 'translateZ(2200px)', }, 0)
}
//---------------------/Landing Page ScrollTrigger---------------------

window.onload = () => {
    LandingPageScrollTrigger()
}