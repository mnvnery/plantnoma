gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
	
    // ---------------- large screens ---------------------
    "(min-width: 960px)": function() {
        // Greens-1   
        let tl = gsap.timeline({
            scrollTrigger: {
            trigger: $(".box-1"),
            // trigger element - viewport
            start: "bottom 65%",
            end: "bottom 10%",
            scrub: true
            }
        });
        tl.fromTo($(".greens"), {
            y:"100vh",
            duration: 1
            },
            {
            y:"-27vh",
            duration: 1
            }
        );
    },

    // ---------------- medium screens ---------------------
    "(min-width: 600px) and (max-width: 959px)": function() {
      // The ScrollTriggers created inside these functions are segregated and get
      // reverted/killed when the media query doesn't match anymore. 
    },

    // ---------------- small screens ---------------------
    "(max-width: 599px)": function() {
            // Greens-1
            let tl = gsap.timeline({
                scrollTrigger: {
                trigger: $(".box-1"),
                // trigger element - viewport
                start: "bottom 65%",
                end: "bottom 10%",
                scrub: true
                }
            });
            tl.fromTo($(".greens"), {
                y:"100vh",
                duration: 1
                },
                {
                y:"80vh",
                duration: 1
                }
            );
    },     
    // ---------------- all screens --------------------- 
    "all": function() {
        //start
        gsap.to(".circle", {
            width: "41vw",
            bottom: "-28vh",
            right: "-2vw",
            scrollTrigger: {
                start: "bottom 100%",
                end: "bottom 50%",
                trigger: ".box-1",
                scrub: true,
            }
        })
        
        
        
        
        // Animate From To
        
        
        let tl1 = gsap.timeline({
            scrollTrigger: {
            trigger: ".box-1",
            // trigger element - viewport
            start: "bottom 65%",
            end: "bottom 10%",
            scrub: true
            }
        });
        tl1.fromTo($(".living-world"), {
            y:550,
            duration: 1
            },
            {
            y:0,
            duration: 1
            }
        );
        
        
        // Animate From To
        
        let timeline = gsap.timeline({
        scrollTrigger: {
            trigger: $(".box-1"),
            // trigger element - viewport
            start: "bottom 50%",
            end: "bottom 50%",
            scrub: true,
            onEnter: () => {
                $(".here").removeClass("is--active");
                $(".human").addClass("is--active");
            },
            onEnterBack: () => {
                $(".human").removeClass("is--active");
                $(".here").addClass("is--active");
            }
            }
        });   
        
            
        
        // background color change - garden
        
        gsap.to("body", {
            backgroundColor: "#38523E",
            scrollTrigger: {
                start: "bottom 60%",
                end: "bottom 50%",
                trigger: ".box-2",
                scrub: true,
            }
        })
        
        
        gsap.to(".circle-2", {
            display: "block",
            width: '104vw',
            y: 5,
            scrollTrigger: {
                start: "bottom 100%",
                end: "bottom 50%",
                trigger: ".box-2",
                scrub: true,
            }
        })
        
        
        
        gsap.to(".logo-elem", {
            fill: "#EBEEEC",
            scrollTrigger: {
                start: "bottom 100%",
                end: "bottom 50%",
                trigger: ".box-2",
                scrub: true,
            }
        })
        
        
        gsap.to(".static-line", {
            borderColor: "#EBEEEC",
            scrollTrigger: {
                start: "bottom 100%",
                end: "bottom 50%",
                trigger: ".box-2",
                scrub: true,
            }
        })
        
        gsap.to(".living-world, .greens", {
            opacity: "0",
            scrollTrigger: {
                start: "bottom 100%",
                end: "bottom 60%",
                trigger: ".box-2",
                scrub: true,
            }
        })
        
        
        
        let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: $(".box-2"),
            // trigger element - viewport
            start: "bottom 80%",
            end: "bottom 80%",
            scrub: true,
            onEnter: () => {
                $(".human").removeClass("is--active");
                $(".garden").addClass("is--active");
            },
            onEnterBack: () => {
                $(".garden").removeClass("is--active");
                $(".human").addClass("is--active");
            }
            }
        });   
        
        gsap.to(".hamburger-inner", {
            scrollTrigger: {
                trigger: ".box-2",
                // trigger element - viewport
                start: "bottom 60%",
                end: "bottom 60%",
                scrub: true,
                onEnter: () => {
                    $(".hamburger-inner").addClass("dark-mode");
                },
                onEnterBack: () => {
                    $(".hamburger-inner").removeClass("dark-mode");
                }
            }
        })
        
        window.addEventListener("load", function() {
            // ARE YOU HERE
        
            gsap.to("body", {
                backgroundColor: "#EBEEEC",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".box-3",
                    start: "top bottom",
                    end: "center bottom",
                    scrub: true, 
                }
            })
        
            gsap.to(".static-line", {
                borderColor: "#38523E",
                immediateRender: false,
                scrollTrigger: {
                    start: "top bottom",
                    end: "center bottom",
                    trigger: ".box-3",
                    scrub: true,
                }
            })
        
            gsap.to(".logo-elem", {
                fill: "#38523E",
                immediateRender: false,
                scrollTrigger: {
                    start: "top bottom",
                    end: "center bottom",
                    trigger: ".box-3",
                    scrub: true,
                }
            })
        
            gsap.to(".circle-2, .circle", {
                opacity: "0",
                scrollTrigger: {
                    trigger: ".box-3",
                    start: "top bottom",
                    end: "top bottom",
                    scrub: true, 
                }
            })
        
            gsap.to(".areyouhere", {
                scrollTrigger: {
                    trigger: ".box-3",
                    // trigger element - viewport
                    start: "top bottom",
                    end: "top bottom",
                    scrub: true,
                    onEnter: () => {
                        $(".garden").removeClass("is--active");
                        $(".areyouhere").addClass("is--active");
                    },
                    onEnterBack: () => {
                        $(".areyouhere").removeClass("is--active");
                        $(".garden").addClass("is--active");
                    }
                }
            })
        
            gsap.to(".hamburger-inner", {
                scrollTrigger: {
                    trigger: ".box-3",
                    // trigger element - viewport
                    start: "top bottom",
                    end: "top bottom",
                    scrub: true,
                    onEnter: () => {
                        $(".hamburger-inner").removeClass("dark-mode");
                    },
                    onEnterBack: () => {
                        $(".hamburger-inner").addClass("dark-mode");
                    }
                }
            })
        
            gsap.from(".events-container", {
                y: "100vh",
                scrollTrigger: {
                    start: "top bottom",
                    end: "80% bottom",
                    trigger: ".box-3",
                    scrub: true,
                }
            })
            
            gsap.from(".compost-images", {
                y: 400,
                scrollTrigger: {
                    trigger: ".box-4",
                    start: "top 90%",
                    end: "center bottom",
                    scrub: true,
                }
            })
            gsap.to("body", {
                backgroundColor: "#38523E",
                scrollTrigger: {
                    start: "40% 90%",
                    end: "80% bottom",
                    trigger: ".box-4",
                    scrub: true,
                }
            })
            
            gsap.to(".logo-elem", {
                fill: "#EBEEEC",
                scrollTrigger: {
                    start: "40% bottom",
                    end: "80% bottom",
                    trigger: ".box-4",
                    scrub: true,
                }
            })
            
            
            gsap.to(".static-line", {
                borderColor: "#EBEEEC",
                scrollTrigger: {
                    start: "40% bottom",
                    end: "80% bottom",
                    trigger: ".box-4",
                    scrub: true,
                }
            })
            gsap.to(".events-container", {
                opacity: "0",
                scrollTrigger: {
                    start: "35% 90%",
                    end: "70% bottom",
                    trigger: ".box-4",
                    scrub: true,
                }
            })
        
            gsap.to(".hereyouare", {
                scrollTrigger: {
                    trigger: ".box-4",
                    // trigger element - viewport
                    start: "30% 90%",
                    end: "30% 90%",
                    scrub: true,
                    onEnter: () => {
                        $(".areyouhere").removeClass("is--active");
                        $(".hereyouare").addClass("is--active");
                    },
                    onEnterBack: () => {
                        $(".hereyouare").removeClass("is--active");
                        $(".areyouhere").addClass("is--active");
                    }
                }
            })
            gsap.to(".compost-images", {
                y: -740,
                immediateRender: false,
                scrollTrigger: {
                    start: "bottom 70%",
                    end: "bottom -8%",
                    trigger: ".box-4",
                    scrub: true,
        
                }
            })
            gsap.to("body", {
                backgroundColor: "#EBEEEC",
                immediateRender: false,
                scrollTrigger: {
                    start: "55% bottom",
                    end: "top 35%",
                    trigger: ".footer-page",
                    scrub: true,
                }
            })
        
            gsap.to(".logo-elem", {
                fill: "#38523E",
                immediateRender: false,
                scrollTrigger: {
                    start: "55% bottom",
                    end: "top 35%",
                    trigger: ".footer-page",
                    scrub: true,
                }
            })
        });
        
    }      
}); 
