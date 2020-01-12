let home = document.getElementById("home");
let bubblesDiv = document.getElementById("bubbles");
let bubbles = [];

function createBubble() {
  let bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.R = 120 + Math.random(100) * 140;
  bubble.style.setProperty("--R", bubble.R);
  bubble.style.setProperty("--left", Math.random());
  bubble.style.setProperty("--top", Math.random());
  bubble.style.setProperty("--opacity", Math.random() / 2 + 0.1);
  bubble.style.setProperty("--speed", 0.5 + Math.random() / 2);
  //bubble.style.filter = `blur(${Math.random() * 3}px)`;
  bubblesDiv.appendChild(bubble);
  return bubble;
}

window.onload = () => {
  nBubbles = 3 + Math.ceil(bubblesDiv.offsetWidth / 250);

  for (let i = 0; i <= nBubbles; i++) {
    bubbles = [...bubbles, createBubble()];
  }
  new ResizeObserver(bubblesResized).observe(bubblesDiv);
};

function bubblesResized() {
  let newBubbles = 3 + Math.ceil(bubblesDiv.offsetWidth / 250);

  if (newBubbles <= nBubbles) {
    for (let index = 0; index < bubbles.length; index++) {
      bubbles[index].style.opacity = index < newBubbles ? null : 0;
    }
    return;
  }

  for (let index = 0; index < newBubbles - nBubbles; index++) {
    bubbles = [...bubbles, createBubble()];
  }
  nBubbles = newBubbles;
}
