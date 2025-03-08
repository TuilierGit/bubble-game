const counterDisplay = document.getElementById("score");
let scoreValue = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = 100 + Math.random() * 200 + "px";
  bubble.style.width = size;
  bubble.style.height = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  bubble.style.left = plusMinus * Math.random() * 100 + "%";

  bubble.style.setProperty("--left", Math.random() * 100 + "%");

  bubble.addEventListener("click", () => {
    scoreValue++;
    counterDisplay.textContent = scoreValue;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 300);
