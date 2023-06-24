    gsap.to("#rect",{
      scrollTrigger:{
        trigger: "#rect",
        start:"0% 30%",
        end:"60% 80%",
        markers:true,
        scrub: 3
        
      },
      rotation: "360deg" ,
      ease: Expo.easeInOut,
      duration: 2
    });