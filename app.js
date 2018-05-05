var scoreP1 = document.querySelector("#score-0");
var scoreP2 = document.querySelector("#score-1");
var totalP1 = 0;
var totalP2 = 0;

var random = 0;
var math;
var game = false;
var final = false;
var holdStart = false;
var winnerScore = 25;
var player1 = document.querySelector("#name-0");
var player2 = document.querySelector("#name-1");

var backPlayer1 = document.querySelector(".player-0-panel");
var backPlayer2 = document.querySelector(".player-1-panel");

var pic = document.querySelector(".dice");
var newGame = document.querySelector(".btn-new");
var start = document.querySelector(".btn-roll");
var hold = document.querySelector(".btn-hold");
var block = document.querySelector(".alert__btn");
var alertPush = document.querySelector(".alert");
var containerAdd = document.querySelector(".alert__container");
var blockModal = document.querySelector(".modal");
var currentScoreP1 = document.querySelector("#current-0");
var currentScoreP2 = document.querySelector("#current-1");

function alert() {
  final = true;
  blockModal.classList.add("modal-active");
  alertPush.classList.add("alert-active");

  block.addEventListener("click", function() {
    final = false;
    blockModal.classList.remove("modal-active");
    alertPush.classList.remove("alert-active");
  });
}
 
start.addEventListener("click", function() {
  if (final == false) {
    if (game == false) {
      math = Math.floor(Math.random() * 6 + 1);
      if (math == 1) {
        currentScoreP1.textContent = "0";
        backPlayer1.classList.remove("active");
        backPlayer2.classList.add("active");

        pic.setAttribute("src", "img/dice-" + math + ".png");
        setTimeout(function() {
          pic.style.display = "none";
        }, 300);

        alert();
        random = 0;
        game = true;
      } else {
        pic.style.display = "block";
        pic.setAttribute("src", "img/dice-" + math + ".png");
        random += math;
        currentScoreP1.textContent = random;
      }
    } else {
      math = Math.floor(Math.random() * 6 + 1);
      if (math == 1) {
        currentScoreP2.textContent = "0";
        backPlayer2.classList.remove("active");
        backPlayer1.classList.add("active");

        pic.setAttribute("src", "img/dice-" + math + ".png");
        setTimeout(function() {
          pic.style.display = "none";
        }, 300);

        alert();
        random = 0;
        game = false;
      } else {
        pic.style.display = "block";
        pic.setAttribute("src", "img/dice-" + math + ".png");
        random += math;
        currentScoreP2.textContent = random;
      }
    }
  }
});
hold.addEventListener("click", function() {
  if (holdStart == false) {
    if (game == false) {
      totalP1 += random;
      scoreP1.textContent = totalP1;
      currentScoreP1.textContent = "0";
      game = true;
      random = 0;

      backPlayer1.classList.toggle("active");
      backPlayer2.classList.toggle("active");

      if (totalP1 >= winnerScore) {
        player1.textContent = "Winner";
        backPlayer1.classList.add("winner");
        backPlayer2.classList.remove("active");
        currentScoreP1.textContent = "0";
        currentScoreP2.textContent = "0";
        pic.style.display = "none";

        final = true;
        holdStart = true;
      }
    } else {
      totalP2 += random;
      scoreP2.textContent = totalP2;
      currentScoreP2.textContent = "0";
      game = false;
      random = 0;

      backPlayer1.classList.toggle("active");
      backPlayer2.classList.toggle("active");

      if (totalP2 >= winnerScore) {
        player2.textContent = "Winner";
        backPlayer2.classList.add("winner");
        backPlayer1.classList.remove("active");
        currentScoreP1.textContent = "0";
        currentScoreP2.textContent = "0";
        pic.style.display = "none";

        final = true;
        holdStart = true;
      }
    }
  }
});

newGame.addEventListener("click", function() {
  totalP1 = 0;
  totalP2 = 0;
  random = 0;
  scoreP1.textContent = "0";
  scoreP2.textContent = "0";
  player1.textContent = "Player 1";
  player2.textContent = "Player 2";
  currentScoreP1.textContent = "0";
  currentScoreP2.textContent = "0";
  pic.style.display = "none";
  backPlayer1.classList.add("active");
  backPlayer2.classList.remove("active");
  backPlayer1.classList.remove("winner");
  backPlayer2.classList.remove("winner");
  game = false;
  final = false;
  holdStart = false;
});
