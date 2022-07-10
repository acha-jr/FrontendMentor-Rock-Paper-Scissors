// Open and close game rules
const rulesButton = document.querySelector(".rules-button");
const rules = document.querySelector(".rules");
const closeButton = rules.querySelector(".head img");
rulesButton.addEventListener("click", () => {
  rules.style.display = "block";
});
closeButton.addEventListener("click", () => {
  rules.style.display = "none";
});

const game = document.querySelector(".game");
const gameResult = document.querySelector(".result");
const options = document.querySelectorAll(".game div");
const choice = document.querySelector("#player-result");
const computer = document.querySelector("#computer-result");
const score = document.querySelector(".score");
score.textContent = localStorage.getItem("score") || 0;

options.forEach((e) => {
  e.addEventListener("click", () => {
    // Player choice in result
    choice.classList = e.className;
    choice.querySelector("img").src = `./images/icon-${e.className}.svg`;

    // Computer random choice in result
    const computerOptions = ["rock", "paper", "scissors"];
    let computerChoice =
      computerOptions[Math.floor(Math.random() * computerOptions.length)];
    setTimeout(() => {
      computer.classList = computerChoice;
      computer.querySelector("img").src = `./images/icon-${computerChoice}.svg`;
      computer.style.opacity = 1;
    }, 500);

    // Result conditions
    const resultAnnounce = document.querySelector(".result-announce");
    let result;
    // Win
    if (
      (choice.classList == "rock" && computerChoice == "scissors") ||
      (choice.classList == "paper" && computerChoice == "rock") ||
      (choice.classList == "scissors" && computerChoice == "paper")
    ) {
      result = "win";
      resultAnnounce.textContent = "YOU WIN";
    }
    // Lose
    if (
      (choice.classList == "rock" && computerChoice == "paper") ||
      (choice.classList == "paper" && computerChoice == "scissors") ||
      (choice.classList == "scissors" && computerChoice == "rock")
    ) {
      result = "lose";
      resultAnnounce.textContent = "YOU LOSE";
    }
    // Draw
    if (choice.classList == computerChoice) {
      result = "draw";
      resultAnnounce.textContent = "IT'S A TIE";
    }

    if (window.matchMedia("(max-width: 950px)").matches) {
      gameResult.style.display = "flex";
    }
    gameResult.style.display = "grid";
    game.style.display = "none";

    if (result == "win") {
      setTimeout(() => {
        score.textContent++;
        localStorage.setItem("score", score.textContent);
        choice.classList.add("winner");
      }, 1600);
    }
    if (result == "lose") {
      setTimeout(() => {
        score.textContent--;
        localStorage.setItem("score", score.textContent);
        computer.classList.add("winner");
      }, 1600);
    }
  });
});

const playAgain = document.querySelector(".play-again button");
playAgain.addEventListener("click", () => {
  gameResult.style.display = "none";
  game.style.display = "grid";
  computer.style.opacity = 0;
});
