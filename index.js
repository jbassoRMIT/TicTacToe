//define gameboard as object
const gameboard={
    game:[
        ["_","_","_"],
        ["_","_","_"],
        ["_","_","_"]
    ]
}

//Setup boolean to determine if game has been won
let isWinner=false;
let winner="";

//play game and ask for prompts until isWinner
while(!isWinner){
    //get player 1 input, at the moment they are X
    const p1x=prompt("Player 1 choose a row num");
    const p1y=prompt("Player 1 choose a column num");

    //place square in gameboard.game
    gameboard.game[p1x][p1y]="X";

    //check if p1 wins?
    //check row
    let countX=0
    for(let cell of gameboard.game[p1x]){
        if(cell=="X"){
            countX+=1;
        }
    }
    if(countX==3){
        isWinner=true;
        winner="player1";
        break;
    }

    //check column
    countX=0
    for (let i=0;i<3;i++){
        if(gameboard.game[i][p1y]=="X"){
            countX+=1;
        }
    }
    if(countX==3){
        isWinner=true;
        winner="player1";
        break;
    }

    //check diag
    if(
        (
            gameboard.game[0][0]=="X" &&
            gameboard.game[1][1]=="X" &&
            gameboard.game[2][2]=="X"
        ) ||
        (
            gameboard.game[0][2]=="X" &&
            gameboard.game[1][1]=="X" &&
            gameboard.game[2][2]=="X"
        )
    ){
        isWinner=true;
        winner="player1";
        break;
    }
    alert(countX);
    alert(`${gameboard.game[0][0]}|${gameboard.game[0][1]}|${gameboard.game[0][2]}\n${gameboard.game[1][0]}|${gameboard.game[1][1]}|${gameboard.game[1][2]}\n${gameboard.game[2][0]}|${gameboard.game[2][1]}|${gameboard.game[2][2]}`);

    //Now get player 2 input, at the moment they are naughts
    const p2x=prompt("Player 2 choose a row num");
    const p2y=prompt("Player 2 choose a column num");

    //place square in gameboard.game
    gameboard.game[p2x][p2y]="O";

    //check if p2 wins?
    //check row
    let countY=0
    for(let cell of gameboard.game[p2x]){
        if(cell=="O"){
            countY+=1;
        }
    }
    if(countY==3){
        isWinner=true;
        winner="player2";
        break;
    }

    //check column
    countY=0
    for (let i=0;i<3;i++){
        if(gameboard.game[i][p2y]=="O"){
            countY+=1;
        }
    }
    if(countY==3){
        isWinner=true;
        winner="player1";
        break;
    }

    //check diag
    if(
        (
            gameboard.game[0][0]=="Y" &&
            gameboard.game[1][1]=="Y" &&
            gameboard.game[2][2]=="Y"
        ) ||
        (
            gameboard.game[0][2]=="Y" &&
            gameboard.game[1][1]=="Y" &&
            gameboard.game[2][2]=="Y"
        )
    ){
        isWinner=true;
        winner="player2"
    }


    console.log(gameboard.game);
    alert(`${gameboard.game[0][0]}|${gameboard.game[0][1]}|${gameboard.game[0][2]}\n${gameboard.game[1][0]}|${gameboard.game[1][1]}|${gameboard.game[1][2]}\n${gameboard.game[2][0]}|${gameboard.game[2][1]}|${gameboard.game[2][2]}`);
    alert(countY);

}

console.log(`Well done ${winner} you won`);

