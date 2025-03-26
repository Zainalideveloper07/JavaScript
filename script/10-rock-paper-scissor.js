let score = JSON.parse(localStorage.getItem("score")) || {
    win: 0,
    losses: 0,
    ties: 0,
  };
  if (!score.wins) score.wins = 0;
  if (!score.losses) score.losses = 0;
  if (!score.ties) score.ties = 0;
  updateScoreElement();

  // if (!score) {
  //     score={
  //         win:0,
  //         losses:0,
  //         ties:0,
  //     }

  // }
  function playGame(playerMove) {
    const computerMove = pickcomputerMove();
    let result = "";
    if (playerMove === "scissors") {
      if (computerMove === "Rock") {
        result = "lose";
      } else if (computerMove === "paper") {
        result = "win";
      } else if (computerMove === "scissors") {
        result = "Tie";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "Rock") {
        result = "Win";
      } else if (computerMove === "paper") {
        result = "Tie";
      } else if (computerMove === "scissors") {
        result = "lose";
      }
    } else if (playerMove === "Rock") {
      if (computerMove === "Rock") {
        result = "Tie";
      } else if (computerMove === "paper") {
        result = "lose";
      } else if (computerMove === "scissors") {
        result = "win";
      }
    }

    if (result === "win") {
      score.wins += 1;
    } else if (result === "lose") {
      score.losses += 1;
    } else if (result === "Tie") {
      score.ties += 1;
    }
    function updateScoreElement() {
      document.querySelector(
        ".js-score"
      ).innerHTML = `Win${score.wins},losses${score.losses},Tie${score.ties}`;
    }

    localStorage.setItem("score", JSON.stringify(score));
    updateScoreElement();

    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(
      ".js-move"
    ).innerHTML = `<img class="move-emoji" src="/images/${playerMove}-emoji.png"> Compurter <img class="move-emoji" src="/images/${computerMove}-emoji.png">`;
    // alert(`you picked the ${playerMove}.Computer picked ${computerMove}. ${result} Win:${score.wins},Losses:${score.losses},Tie:${score.ties}`);
  }

  function pickcomputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "Rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "scissors";
    }

    return computerMove;
  }