let home = document.getElementById("home");
let bubblesDiv = document.getElementById("bubbles");
let bubbles = [];

window.onload = () => {
  for (let i = 0; i < 15; i++) {
    bubbles[i] = document.createElement("div");
    bubbles[i].classList.add("bubble");
    bubbles[i].R = 50 + Math.random(100) * 70;
    bubbles[i].style.setProperty("--R", bubbles[i].R);
    bubbles[i].style.setProperty("--left", Math.random());
    let top = Math.random();
    bubbles[i].style.setProperty("--top", top);
    bubbles[i].style.opacity = Math.random() / 2 + 0.1;
    bubbles[i].style.filter = `blur(${Math.random() * 3}px)`;
    bubbles[i].style.setProperty("--speed", 0.5 + Math.random() / 2);
    bubblesDiv.appendChild(bubbles[i]);
  }
};
