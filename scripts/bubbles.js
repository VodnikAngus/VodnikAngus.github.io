let home = document.getElementById("home");
let bubblesDiv = document.getElementById("bubbles");
let bubbles = [];

window.onload = () => {
  for (let i = 0; i < 20; i++) {
    bubbles[i] = document.createElement("div");
    bubbles[i].classList.add("bubble");
    bubbles[i].R = 50 + Math.random(100) * 70;
    bubbles[i].style.width = bubbles[i].style.height = bubbles[i].R + "px";
    bubbles[i].style.left = 0;
    bubbles[i].style.top = 0;
    bubbles[i].left = Math.random();
    bubbles[i].top = Math.random() * home.offsetHeight;
    bubbles[i].style.transform = `translate(${bubbles[i].left *
      (home.offsetWidth - bubbles[i].R)}px, ${bubbles[i].top}px)`;
    bubbles[i].style.opacity = Math.random() / 2 + 0.1;
    bubbles[i].style.filter = `blur(${Math.random() * 3}px)`;
    bubbles[i].speed = Math.random();
    bubblesDiv.appendChild(bubbles[i]);
  }
  requestAnimationFrame(animateBubbles);
};

function animateBubbles(time) {
  for (const bubble of bubbles) {
    bubble.style.display = "unset";
    bubble.top -= 0.3 + bubble.speed;
    bubble.style.transform = `translate(${bubble.left *
      (home.offsetWidth - bubble.R)}px, ${bubble.top}px)`;

    if (bubble.top <= -parseFloat(bubble.style.height)) {
      bubble.style.filter = `blur(${Math.random() * 3}px)`;
      bubble.R = 50 + Math.random(100) * 70;
      bubble.style.width = bubble.style.height = bubble.R + "px";
      bubble.left = Math.random();
      bubble.top += home.offsetHeight + bubble.R;
      bubble.style.transform = `translate(${bubble.left *
        (home.offsetWidth - bubble.R)}px, ${bubble.top}px)`;
    }
  }
  requestAnimationFrame(animateBubbles);
}
