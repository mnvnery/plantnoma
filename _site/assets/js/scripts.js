$('.hamburger').click(function() {
    $('.hamburger').toggleClass("is-active");
    $('.hamburger-inner').toggleClass("dark-mode");
    $('.navbar-container').toggleClass('navbar-open');
});

$('.prod-title').hover(function() {
    $('.left-img').toggleClass("opacity");
});

$('.rental-title').hover(function() {
    $('.right-img').toggleClass("opacity");
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    markers: true
});
/*
$(".circle").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            pin: true
        }
    });
    tl.to(targetElement, {
            width: "116vw",
            position: "absolute",
            bottom: "-62vh",
            right: "-9vw"
    });
});

*/

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
$(".box-1").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".greens");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "bottom 65%",
        end: "bottom 10%",
        scrub: true
      }
    });
    tl.fromTo(targetElement, {
        y:550,
        duration: 1
      },
      {
        y:-100,
        duration: 1
      }
    );
  });

// Animate From To
$(".box-1").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".living-world");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "bottom 65%",
        end: "bottom 10%",
        scrub: true
      }
    });
    tl.fromTo(targetElement, {
        y:550,
        duration: 1
      },
      {
        y:0,
        duration: 1
      }
    );
});

  // Animate From To
$(".box-1").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".human")

    let tl = gsap.timeline({
    scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "bottom 50%",
        end: "bottom 50%",
        scrub: true,
        onEnter: () => {
            $(".here").removeClass("is--active");
            targetElement.addClass("is--active");
        },
        onEnterBack: () => {
            targetElement.removeClass("is--active");
            $(".here").addClass("is--active");
        }
        }
    });   
});

// background color change - garden

gsap.to("body", {
    backgroundColor: "#38523E",
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

gsap.to(".living-world", {
    opacity: "0",
    scrollTrigger: {
        start: "bottom 100%",
        end: "bottom 50%",
        trigger: ".box-2",
        scrub: true,
    }
})

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".box-2",
        // trigger element - viewport
        start: "bottom 100%",
        end: "bottom 50%",
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