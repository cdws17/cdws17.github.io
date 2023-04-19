var board = [
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
];

let winner = "";
let currentMove = "R";
let lowest = [5,5,5,5,5,5,5];
let moves = 0;
let twoPlayer = true;



function restartBttn(button) {
	var htmlBoard;
	var msg;
	let cellID;

	for (var x = 0; x < 6; x++) {
		for (var y = 0; y < 7; y++) {
			board[x][y] = 0;
			cellID = String(x) + String(y);
			htmlBoard = document.getElementById(String(x) + String(y));
			htmlBoard.style.color = "#444";
			document.getElementById(cellID).style.backgroundColor="";
			htmlBoard.bgColor = "";
			htmlBoard.innerHTML = "";
			lowest = [5,5,5,5,5,5,5];
			currentMove = "R";
			moves = 0;
			winner = "";
		}
	}
	msg = document.getElementById("message");
	msg.innerHTML = "";
}

function clickedCell(cell) {

	// let x = cell.id.split("")[0];
	let y = cell.id.split("")[1];
	let x = lowest[y];
	let cellID = String(x)+String(y);

	if (cell.innerHTML === "") {
		if (currentMove === "R") {
			// cell.innerHTML = "R";
			// cell.bgColor = "Red";
			document.getElementById(cellID).style.backgroundColor="Red";
			board[x][y] = "R";
			currentMove = "B";
			if (twoPlayer === false){
				currentMove = "AI";
			}

		}
		else if (twoPlayer === true && currentMove === "B") {
			// cell.innerHTML = "B";
			// cell.bgColor = "Blue";
			document.getElementById(cellID).style.backgroundColor="Blue";
			board[x][y] = "B";
			currentMove = "R";
		}
		lowest[y] -= 1;
		moves += 1;
		if (moves>=7) {
			if (checkWin(x, y) === "Red") {
				alert("Red Wins!");
				restartBttn();
			} else if (checkWin(x, y) === "Blue") {
				alert("Blue Wins!");
				restartBttn();
			} else if (checkWin(x, y) === "Draw") {
				alert("It's a draw");
				restartBttn();
			}
		}

		if (twoPlayer === false && currentMove === "AI"){
			let move = aiMove()
			let xMove = move.split("")[0];
			let yMove = move.split("")[1];



			// alert("AI Move: " + xMove + "," + yMove);
			document.getElementById(String(move)).style.backgroundColor="Blue";
			board[xMove][yMove] = "B";
			currentMove = "R";
			lowest[yMove] -= 1;
			moves += 1;
			if (moves>=7) {
				if (checkWin(xMove, yMove) === "Red") {
					alert("Red Wins!");
					restartBttn();
				} else if (checkWin(xMove, yMove) === "Blue") {
					alert("Blue Wins!");
					restartBttn();
				} else if (checkWin(xMove, yMove) === "Draw") {
					alert("It's a draw");
					restartBttn();
				}
			}
		}
	}
}


function checkWin(x,y){
	x = parseInt(x);
	y = parseInt(y);
	// let vertical = false;
	let vert1 = [];
	let vertical = false;


	for (let i=0; i<6; i++){
		vert1.push(board[i][y]);
	}
	vertical = ((vert1[x]===vert1[x+1])&&(vert1[x]===vert1[x+2])&&(vert1[x]===vert1[x+3]));

	if (vertical){
		if (board[x][y] == "R"){
			winner = "Red";
		}
		if (board[x][y] == "B"){
			winner = "Blue";
		}
		return winner;
	}

	let horizontal = ((board[x][y] === board[x][y+1] && board[x][y] === board[x][y+2] && board[x][y] === board[x][y+3]) || (board[x][y] === board[x][y-1] && board[x][y] === board[x][y+1] && board[x][y] === board[x][y+2]) || (board[x][y] === board[x][y-2] && board[x][y] === board[x][y-1] && board[x][y] === board[x][y+1]) || (board[x][y] === board[x][y-3] && board[x][y] === board[x][y-2] && board[x][y] === board[x][y-1]));
	let diag1 = ((board[x][y]===board[x+1][y+1]) && (board[x][y]===board[x+2][y+2]) && (board[x][y]===board[x+3][y+3]));
	let diag2 = ((board[x][y]===board[x-1][y-1]) && (board[x][y]===board[x+1][y+1]) && (board[x][y]===board[x+2][y+2]));
	let diag3 = ((board[x][y]===board[x-2][y-2]) && (board[x][y]===board[x-1][y-1]) && (board[x][y]===board[x+1][y+1]));
	let diag4 = ((board[x][y]===board[x-3][y-3]) && (board[x][y]===board[x-2][y-2]) && (board[x][y]===board[x-1][y-1]));
	let diag5 = ((board[x][y]===board[x-1][y+1]) && (board[x][y]===board[x-2][y+2]) && (board[x][y]===board[x-3][y+3]));
	let diag6 = ((board[x][y]===board[x+1][y-1]) && (board[x][y]===board[x-1][y+1]) && (board[x][y]===board[x-2][y+2]));
	let diag7 = ((board[x][y]===board[x+2][y-2]) && (board[x][y]===board[x+1][y-1]) && (board[x][y]===board[x-1][y+1]));
	let diag8 = ((board[x][y]===board[x+3][y-3]) && (board[x][y]===board[x+2][y-2]) && (board[x][y]===board[x+1][y-1]));
	let diagonal = (diag1 || diag2 || diag3 || diag4 || diag5 || diag6 || diag7 || diag8);

	if (diagonal){
		if (board[x][y] == "R"){
			winner = "Red";
		}
		if (board[x][y] == "B"){
			winner = "Blue";
		}
		return winner;
	}

	if (horizontal){
		if (board[x][y] == "R"){
			winner = "Red";
		}
		if (board[x][y] == "B"){
			winner = "Blue";
		}
		return winner;
	}
}

function aiMove(){
	let validMoves = isMoveValid();
	let yMove = Math.floor(Math.random()*validMoves.length);
	let xMove = lowest[yMove];

	// if (moves>=7) {
	// 	for (let y = 0; y < 7; y++) {
	// 		if (checkWin(lowest[y], y) === "Blue") {
	// 			xMove = lowest[y];
	// 			yMove = y;
	// 		}
	// 	}
	// }
	return (String(xMove)+String(yMove));
}

function isMoveValid(){
	let validMoves = [];
	for (let y=0; y<7; y++){
		if (board[0][y] === 0){
			validMoves.push(y);
		}
	}
	return (validMoves)
}

function checkForThree(move){
	let newMove = "20";
	let ans = false;

	let xMove = move.split("")[0];
	let yMove = move.split("")[1];
	if (checkWin(xMove,yMove) === "Blue"){
		ans = false;
		newMove = move;
	}

	return ([ans, newMove])
}