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

let game = setInterval(bubbleMaker, 300);

setTimeout(() => {
  clearInterval(game);
  const blackScreen = document.createElement("div");
  const endMenu = document.createElement("div");

  const finalScrore = scoreValue;
  const content = `
    <h1>Score : ${finalScrore}</h1>
    <a href=${window.location.href}>
      <button>Refaire une partie</button>
    </a>
  `;

  counterDisplay.remove();

  document.body.appendChild(blackScreen);
  blackScreen.appendChild(endMenu);

  endMenu.classList.add("endMenu");
  blackScreen.classList.add("blackScreen");

  endMenu.innerHTML = content;
}, 60000);
