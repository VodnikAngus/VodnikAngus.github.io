const vh = v =>
  (v / 100) *
  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
const vw = v =>
  (v / 100) *
  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

scroller = document.createElement("div");
scroller.classList.add("scroller");
main = document.getElementById("slides");

for (slide of main.children) {
  let scroll = document.createElement("div");
  scroll.style.height = slide.offsetWidth + "px";
  scroll.id = slide.id + "-slide";
  scroller.appendChild(scroll);
}

document.body.appendChild(scroller);

new ResizeObserver(resized).observe(main);

function resized() {
  let i = 0;
  for (slide of main.children) {
    scroller.children[i].style.height =
      (slide.offsetWidth * vh(100)) / vw(100) + "px";
    i++;
  }
}

window.addEventListener("scroll", function() {
  main.style.transform = `translateX(${(-window.scrollY / vh(100)) *
    vw(100)}px)`;
});

function scrollRight() {
  let min;
  for (slide of main.children) {
    console.log((window.scrollY / vh(100)) * vw(100) + " " + slide.offsetLeft);
    if (Math.ceil((window.scrollY / vh(100)) * vw(100)) < slide.offsetLeft) {
      if (min == null) min = slide;
      else min = min.offsetLeft < slide.offsetLeft ? min : slide;
    }
  }
  if (min == null) return;
  window.scroll({
    top: (min.offsetLeft * vh(100)) / vw(100),
    left: 0,
    behavior: "smooth"
  });
  min = null;
}

function scrollLeft() {
  let min;
  for (slide of main.children) {
    console.log((window.scrollY / vh(100)) * vw(100) + " " + slide.offsetLeft);
    if (
      Math.floor((window.scrollY / vh(100)) * vw(100)) >
      Math.floor(slide.offsetLeft)
    ) {
      if (min == null) min = slide;
      else min = min.offsetLeft > slide.offsetLeft ? min : slide;
    }
  }
  if (min == null) return;
  window.scroll({
    top: (min.offsetLeft * vh(100)) / vw(100),
    left: 0,
    behavior: "smooth"
  });
  min = null;
}
document.addEventListener("keyup", event => {
  if (event.keyCode == 37) scrollLeft();
  if (event.keyCode == 39) scrollRight();
});
