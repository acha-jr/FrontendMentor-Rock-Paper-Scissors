//Media query
var x = window.matchMedia("(min-width: 901px)");

//Rules open
const button = document.querySelector(".rules-button");
const rules = document.querySelector(".rules");
const closeRules = document.getElementById("close");
//dark background behind rules box
const dark = document.querySelector(".dark");
button.addEventListener("click", () => {
  rules.style.display = "block";
  dark.style.zIndex = "1";
  dark.style.opacity = "0.5";
});
closeRules.addEventListener("click", () => {
  rules.style.display = "none";
  dark.style.zIndex = "-2";
  dark.style.opacity = "0";
});

//
const picked = document.querySelector(".picked");
const pickedImage = document.querySelector(".picked-image");
//
const computerImage = document.querySelector(".computer-image");
const computer = document.querySelector(".computer");
//
const circle = document.querySelectorAll(".circle");
//
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
//
//
const game = document.querySelector(".game");
const stepTwo = document.querySelector(".step-two");
//
const winOrLose = document.querySelector(".win-or-lose");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const stepThree = document.querySelector(".step-three");
//
const playAgain = document.querySelector("button");
//
const score = document.querySelector(".score-value");
//Array if player choice is rock
let playerRock = [
  (paperObject = { classname: "paper", image: "./images/icon-paper.svg" }),
  (scissorsObject = {
    classname: "scissors",
    image: "./images/icon-scissors.svg",
  }),
];
//Array if player choice is paper
let playerPaper = [
  (rockObject = { classname: "rock", image: "./images/icon-rock.svg" }),
  (scissorsObject = {
    classname: "scissors",
    image: "./images/icon-scissors.svg",
  }),
];
//Array if player choice is scissors
let playerScissors = [
  (rockObject = { classname: "rock", image: "./images/icon-rock.svg" }),
  (paperObject = { classname: "paper", image: "./images/icon-paper.svg" }),
];
//
//
//
//selects the options
localStorage.setItem("finalscore", score.textContent);

circle.forEach((e) => {
  e.addEventListener("click", () => {
    //selects rock and adds its styles
    if (e.classList.contains("rock")) {
      picked.classList.add("rock");
      picked.classList.remove("paper", "scissors");
      pickedImage.src = "./images/icon-rock.svg";
      //selects at random from the above array
      let rockOption =
        playerRock[Math.floor(Math.random() * playerRock.length)];
      computerImage.src = rockOption.image;
      computer.className = rockOption.classname;
      computer.classList.add("circle-result", "computer");
    }
    //selects paper and add its styles
    if (e.classList.contains("paper")) {
      picked.classList.add("paper");
      picked.classList.remove("rock", "scissors");
      pickedImage.src = "./images/icon-paper.svg";
      //selects at random from the above array
      let paperOption =
        playerPaper[Math.floor(Math.random() * playerPaper.length)];
      computerImage.src = paperOption.image;
      computer.className = paperOption.classname;
      computer.classList.add("circle-result", "computer");
    }
    //selects scissors and add its styles
    if (e.classList.contains("scissors")) {
      picked.classList.add("scissors");
      picked.classList.remove("rock", "paper");
      pickedImage.src = "./images/icon-scissors.svg";
      //selects at random from the above array
      let scissorsOption =
        playerScissors[Math.floor(Math.random() * playerScissors.length)];
      computerImage.src = scissorsOption.image;
      computer.className = scissorsOption.classname;
      computer.classList.add("circle-result", "computer");
    }
    //shows the result
    game.style.display = "none";
    stepTwo.style.display = "grid";
    if (x.matches) {
      left.style.animation = "move-left 1s linear forwards";
      right.style.animation = "move-right 1s linear forwards";
    }
    stepThree.style.display = "block";
    //adds or subtracts score if win or lose
    const addScore = () => {
      score.textContent++;
    };
    const subScore = () => {
      score.textContent--;
    };
    //if rock wins or not, show "win" or "lose"
    if (e.classList.contains("rock") && computer.classList.contains("paper")) {
      winOrLose.textContent = "LOSE";
      setTimeout(subScore, 1500);
      computer.classList.add("ripple-effect");
      picked.classList.remove("ripple-effect");
    } else if (
      e.classList.contains("rock") &&
      computer.classList.contains("scissors")
    ) {
      winOrLose.textContent = "WIN";
      setTimeout(addScore, 1500);
      picked.classList.add("ripple-effect");
      computer.classList.remove("ripple-effect");
    }
    //if paper wins or not, show "win" or "lose"
    if (
      e.classList.contains("paper") &&
      computer.classList.contains("scissors")
    ) {
      winOrLose.textContent = "LOSE";
      setTimeout(subScore, 1500);
      computer.classList.add("ripple-effect");
      picked.classList.remove("ripple-effect");
    } else if (
      e.classList.contains("paper") &&
      computer.classList.contains("rock")
    ) {
      winOrLose.textContent = "WIN";
      setTimeout(addScore, 1500);
      picked.classList.add("ripple-effect");
      computer.classList.remove("ripple-effect");
    }
    //if scissors wins or not, show "win" or "lose"
    if (
      e.classList.contains("scissors") &&
      computer.classList.contains("rock")
    ) {
      winOrLose.textContent = "LOSE";
      setTimeout(subScore, 1500);
      computer.classList.add("ripple-effect");
      picked.classList.remove("ripple-effect");
    } else if (
      e.classList.contains("scissors") &&
      computer.classList.contains("paper")
    ) {
      winOrLose.textContent = "WIN";
      setTimeout(addScore, 1500);
      picked.classList.add("ripple-effect");
      computer.classList.remove("ripple-effect");
    }
    console.log(localStorage);
  });
});

playAgain.addEventListener("click", () => {
  game.style.display = "block";
  stepTwo.style.display = "none";
  stepThree.style.display = "none";
});
