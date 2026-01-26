b// Anique Daugaard, 1/25/26
// This will create playing board for Tic-Tac-Toe
let board = ["", "", "", "", "", "", "", "", ""];
// Tracks the game to be active
let gameActive = true;
function startgame(){
    // Makes sure this resets the board.
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    // This will show when it is your turn to move. 
    document.getElementById("gameMessage").innerHTML = "Game started! Your move.";
    let boardHTML = "";
    // This is a loop to show all 9 squares on board.
    for (let i = 0; i < 9; i++)     {
        // This is creating button on all 9 squares of the board
        boardHTML += "button onclick= 'playerMove(" + i + ")'>" + board[i] + "</button>";
        // Adding line breaks after every third button
        if ((i + 1) % 3 === 0){
            boardHTML += "<br";
        }
    }
    // This will show the board on HTML
    document.getElementById("gameBoard").innerHTML = boardHTML;
}
// This function will allow the players to move
function playerMove(position) {
    // Tracks the game to be active.
    if (gameActive && board[position] === "") {
        // This will allow player to place mark
        board[position] = "X";
        // This updates the board showing players mark.
         updateBoard();
        //  This checks if player won
        if (checkWinner("X")){
            endGame("You Win");
            return;
        }
        // This will allow computer to make a random move against user.
        computerMove();
         }
}
// This function makes the computer to make a random move.
function computerMove() {
    // This creates an array of availible poisitions on to use.
    let emptySpaces = [];
    // This will find empty spaces availible on board
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            emptySpaces.push(i);
        }
    }
    // This will show if no spaces left it results in a tie.
    if (emptySpaces.length === 0) {
        endGame("It's a tie!");
        return;
    }
    // Allow to choose a ramdon empty position.
    let randomIndex = Math.floor(Math.random() * emptySpaces.length);
    let move = emptySpaces[randomIndex];
    // This shows the computer mark.
    board[move] = "O";
    // This will updated the boards display
    updateBoard();
    // This checks in computer won.
    if (checkWinner("O")) {
        endGame("Computer Wins!");
    }
}
// This functions check for a winner, It will take player symbol X or O as a parameter and returns true if that player has won.
function checkWinner(player) {
    // These are all possible winning combination values.
    let wins = [
        // rows
    [0,1,2], [3,4,5], [6,7,8], 
    // columns
    [0,3,6], [1,4,7], [2,5,8],
    // diagonals
    [0,4,8], [2,4,6]
    ];
    // This will check each winning combination value.
    for (let i = 0; i < wins.length; i++) {
        let [a, b, c] = wins[i]
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
}
// This function updates board.
function updateBoard() {
    let boardHTML = "";
    // This will rebuild board buttons
    for (let i = 0; i < 9; i++) {
        boardHTML += "<button onclick= 'playerMove(" + i + ")'>" + board[i] + "</button>";
        if ((i + 1) % 3 === 0) {
            boardHTML += "<br>";
        }
    }
    // THis will display updated board
    document.getElementById("gameBoard").innerHTML = boardHTML;
}
// This fuction will end the game and display a message (tie, winner, loser).
function endGame(message) {
    // This will stop the game from being active.
    gameActive = false;
    // This will display the final messatge using innterHTML
    document.getElementById("gameMessage").innerHTML = message;
}