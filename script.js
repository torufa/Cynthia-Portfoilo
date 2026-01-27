//smooth scrolling
const locomotiveScroll = new LocomotiveScroll();

//mouse


function mouseScale() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    mouseFollow(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(".mouse-circle").style.transform =
        `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function mouseFollow(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    let cursor = document.querySelector(".mouse-circle");
    cursor.style.transform =
      `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    cursor.style.opacity = 1;
  });
}

//text animation
function simpAnime(){
  const tl = gsap.timeline();
  tl.to("nav", {
    y: "0",
    duration: 0.5,
    ease: "sine.out",
  });
  tl.to(".boundingelem", {
    y: 0,
    duration: 0.5,
    stagger: 0.2,
    immediateRender: false,
    ease: "sine.out",
  });
  tl.to(".subheading p", {
    y: "0",
    stagger: 0.2,
    opacity: 1,
    immediateRender: false,
    ease: "sine.out",
  });
  tl.to(".heading-footer", {
    opacity: 1,
    duration: 2,
    ease: "sine.out",
  });
}

simpAnime();
mouseScale();
mouseFollow();


document.querySelectorAll(".portfolio .elem").forEach(function(elem){
  let rotate = 0;
  let diffrot = 0;
  elem.addEventListener("mouseleave", function(dets){
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  })
  
  elem.addEventListener("mousemove", function(dets){
    let diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  })
})