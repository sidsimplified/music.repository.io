//GSAP in Js take camelcase as default key value pair to add effects and values in strings
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#7209b7",
  duration: 1,
  height: "80px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "#body",
    markers: true,
    start: "top -10%",
    end: "top -15%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  duration: 2,
  scrollTriger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -30%",
    end: "top -80%",
    scrub: 2,
  },
});
