let game = ["rock", "paper", "scissor"];
let userGuess;
let comp;
let rand;
let condionTry;
let mrWin = 0;
let userWin = 0;
do {
  let bigUserGuess = prompt("Enter rock, paper or scissor");
  userGuess = bigUserGuess.toLowerCase();
  rand = Math.floor(Math.random() * 3);
  if (userGuess == "rock" || userGuess == "paper" || userGuess == "scissor") {
    comp = game[rand];
    if (comp == "rock" && userGuess == "rock") {
      alert("Match Draw both Choosen Rock");
    } else if (comp == "rock" && userGuess == "paper") {
      alert("Congratulation! You won the match..Mr. Introvert choosed Rock");
      userWin++;
    } else if (comp == "rock" && userGuess == "scissor") {
      alert("You loss ! Better luck next time..Mr. Introvert Choosed Rock");
      mrWin++;
    } else if (comp == "paper" && userGuess == "rock") {
      alert("You loss ! Better luck next time..Mr. Introvert Choosed Paper");
      mrWin++;
    } else if (comp == "paper" && userGuess == "paper") {
      alert("Match Draw both Choosed Paper");
    } else if (comp == "paper" && userGuess == "scissor") {
      alert("Congratulation! You won the match..Mr. Introvert choosed Paper");
      userWin++;
    } else if (comp == "scissor" && userGuess == "rock") {
      alert("Congratulation! You won the match..Mr. Introvert choosed scissor");
      userWin++;
    } else if (comp == "scissor" && userGuess == "paper") {
      alert("You loss ! Better luck next time..Mr.introvert Choosed scissor");
      mrWin++;
    } else if (comp == "scissor" && userGuess == "scissor") {
      alert("Match Draw both Choosed Scissor");
    }

    console.log(
      `Mr. Introvert guessed ${comp} \n User guessed ${userGuess} \n Mr. Introvert Won ${mrWin} \n User won ${userWin}`
    );
    condionTry = confirm(
      ` You won ${userWin} & Mr.Introvert won ${mrWin}.. Do you want to play again ?`
    );
  } else {
    alert("Your input is not correct");
  }
} while (condionTry == true);

// alert(`You won ${userWin} out of ${userTry} `);

console.log(game[rand]);
