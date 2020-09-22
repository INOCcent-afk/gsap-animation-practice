gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".scrollContainer"),
  smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".scrollContainer", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  pinType: document.querySelector(".scrollContainer").style.transform
    ? "transform"
    : "fixed",
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box-3",
    start: "top center",
    end: "top 100px",
    scrub: 3,
    scroller: ".scrollContainer",
  },
});

tl.to(".box-3", {
  x: 400,
  rotation: 360,
  ease: "none",
  duration: 3,
})
  .to(".box-3", {
    backgroundColor: "brown",
    duration: 1,
  })
  .to(".box-3", {
    x: 0,
    duration: 3,
  });

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".box-2",
    start: "top center",
    end: "top 100px",
    scrub: 3,
    scroller: ".scrollContainer",
  },
});

tl2
  .to(".box-2", {
    x: 400,
    rotation: 360,
    ease: "none",
    duration: 3,
  })
  .to(".box-2", {
    backgroundColor: "brown",
    duration: 1,
  })
  .to(".box-2", {
    x: 0,
    duration: 3,
  });

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".box-1",
    start: "top center",
    end: "top 100px",
    scrub: 3,
    scroller: ".scrollContainer",
  },
});

tl1
  .to(".box-1", {
    x: 400,
    rotation: 360,
    ease: "none",
    duration: 3,
  })
  .to(".box-1", {
    backgroundColor: "brown",
    duration: 1,
  })
  .to(".box-1", {
    x: 0,
    duration: 3,
  });

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
