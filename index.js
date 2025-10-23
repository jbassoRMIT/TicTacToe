//define gameboard as object
const gameboard={
    game:[
        ["","",""],
        ["","",""],
        ["","",""]
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
    for (let i=0;i<2;i++){
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
        winner="player1"
    }

    console.log(gameboard.game);
}

console.log("Well done player 1 you won");

