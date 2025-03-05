/* ------------------------------ TASK 5 -----------------------------------
Parašykite TS funkciją, kuri atlieka žirklės/popierius/akmuo žaidimo patikrinimą ir grąžina atsakymą.
Funkcija priima du tekstus ir grąžina tekstą.

Pvz.:
  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
-------------------------------------------------------------------------- */

function rockPaperScissors(player1: string, player2: string): string {
  const rules: Record<string, string> = {
      "scissors": "paper",
      "paper": "rock",
      "rock": "scissors"
  };
  
  if (player1 === player2) {
      return "Draw!";
  }
  
  return rules[player1] === player2 ? "Player 1 won!" : "Player 2 won!";
}

