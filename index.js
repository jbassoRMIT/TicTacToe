//define gameboard as object
const gameboard={
    game:[
        ["X","O","_"],
        ["_","_","_"],
        ["_","_","_"]
    ]
}

//Write function that removes children from parent node
const removeChildren=function(parent){
    while (parent.firstElementChild){
        parent.removeChild(parent.firstElementChild);
    }
}

//Write function that displays gameboard
const displayBoard=function(){
    //iterate over gameboard, adding a div to the gameboard div
    const gameboardDiv=document.querySelector(".gameboard");

    //Clear contents of gameboard
    removeChildren(gameboardDiv);

    for(let i=0;i<3;i++){
        //create a row and append to gameboardDiv
        const boardRow=document.createElement("div");
        gameboardDiv.appendChild(boardRow);
        boardRow.className="boardRow";

        //in each row create 3 squares
        for(let j=0;j<3;j++){
            //create square
            const square=document.createElement("div");
            square.textContent=gameboard.game[i][j];

            //target gameboard div and append square
            
            boardRow.appendChild(square);
            
        }
    }
}

//Call initial render of board
displayBoard();

//Initialise P1 as starting player, X
let player1=true;


//Add buttons in to allow player to place naught or cross in gameboard
const inputButtons=document.querySelector(".inputButtons");
const inputForm=document.createElement("form");
const formHeading=document.createElement("h1");
if(player1){
    formHeading.textContent="Player 1 - X"
}
else{
    formHeading.textContent="Player 2 - O"
}
const submit=document.createElement("button");
submit.type="submit";
submit.textContent="Submit";

const rowLabel=document.createElement("label");
rowLabel.textContent="Please enter a row number: ";
rowLabel.setAttribute("for","row");
const rowInput=document.createElement("input");
rowInput.type="number";
rowInput.name="row"
rowInput.id="row";
rowInput.min=0;
rowInput.max=2;

const colLabel=document.createElement("label");
colLabel.textContent="Please enter a column number: ";
colLabel.setAttribute("for","col");
const colInput=document.createElement("input");
colInput.type="number";
colInput.name="col";
colInput.id="col"
colInput.min=0;
colInput.max=2;

inputButtons.appendChild(inputForm);
inputForm.appendChild(formHeading);
inputForm.appendChild(rowLabel);
inputForm.appendChild(rowInput);
inputForm.appendChild(document.createElement("br"));
inputForm.appendChild(colLabel);
inputForm.appendChild(colInput);
inputForm.appendChild(document.createElement("br"));
inputForm.appendChild(submit);

//add event listener to the form
inputForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    // extract coordinates from input
    const rowNum=document.querySelector("#row").value;
    const colNum=document.querySelector("#col").value;

    //update gameboard.game with an X or O depending on player status
    if(player1){
        gameboard.game[rowNum][colNum]="X";
    }
    else{
        gameboard.game[rowNum][colNum]="O";
    }
    

    console.log(`Chosen row is: ${rowNum}`);
    console.log(`Chosen column is: ${colNum}`);
    console.log(gameboard.game);

    //call displayBoard() function
    displayBoard();

    //swap players
    player1=!player1;

    if(player1){
        formHeading.textContent="Player 1 - X"
    }
    else{
        formHeading.textContent="Player 2 - O"
    }
    
})


//Setup boolean to determine if game has been won
let isWinner=false;
let winner="";

// //play game and ask for prompts until isWinner
// while(!isWinner){
//     //get player 1 input, at the moment they are X
//     let p1x=prompt("Player 1 choose a row num");
//     let p1y=prompt("Player 1 choose a column num");
    
//     //check for empty square with while loop, while getting player input
//     while(gameboard.game[p1x][p1y]=="X" || gameboard.game[p1x][p1y]=="O"){
//         //request again for valid input as this square is full
//         p1x=prompt("Sorry that square has been filled, choose a valid row num");
//         p1y=prompt("Sorry that square has been filled, choose a valid coumn num");
//     }

//     //place square in gameboard.game
//     gameboard.game[p1x][p1y]="X";
    

//     //check if p1 wins?
//     //check row
//     let countX=0
//     for(let cell of gameboard.game[p1x]){
//         if(cell=="X"){
//             countX+=1;
//         }
//     }
//     if(countX==3){
//         isWinner=true;
//         winner="player1";
//         break;
//     }

//     //check column
//     countX=0
//     for (let i=0;i<3;i++){
//         if(gameboard.game[i][p1y]=="X"){
//             countX+=1;
//         }
//     }
//     if(countX==3){
//         isWinner=true;
//         winner="player1";
//         break;
//     }

//     //check diag
//     if(
//         (
//             gameboard.game[0][0]=="X" &&
//             gameboard.game[1][1]=="X" &&
//             gameboard.game[2][2]=="X"
//         ) ||
//         (
//             gameboard.game[0][2]=="X" &&
//             gameboard.game[1][1]=="X" &&
//             gameboard.game[2][2]=="X"
//         )
//     ){
//         isWinner=true;
//         winner="player1";
//         break;
//     }

//     //Ckeck if board full and declare draw as p1 did not win
//     let countEmpty=0;
//     for(let i=0;i<3;i++){
//         for(let j=0;j<3;j++){
//             if(gameboard.game[i][j]=="_"){
//                 countEmpty+=1;
//             }
//         }
//     }

//     if(countEmpty==0){
//         isWinner=true;
//         winner="Draw";
//         break;
//     }

//     alert(countX);
//     alert(`${gameboard.game[0][0]}|${gameboard.game[0][1]}|${gameboard.game[0][2]}\n${gameboard.game[1][0]}|${gameboard.game[1][1]}|${gameboard.game[1][2]}\n${gameboard.game[2][0]}|${gameboard.game[2][1]}|${gameboard.game[2][2]}`);

//     //Now get player 2 input, at the moment they are naughts
//     let p2x=prompt("Player 2 choose a row num");
//     let p2y=prompt("Player 2 choose a column num");

//     //check for empty square with while loop, while getting player input
//     while(gameboard.game[p2x][p2y]=="X" || gameboard.game[p2x][p2y]=="O"){
//         //request again for valid input as this square is full
//         p2x=prompt("Sorry that square has been filled, choose a valid row num");
//         p2y=prompt("Sorry that square has been filled, choose a valid column num");
//     }

//     //place square in gameboard.game
//     gameboard.game[p2x][p2y]="O";


//     //check if p2 wins?
//     //check row
//     let countY=0
//     for(let cell of gameboard.game[p2x]){
//         if(cell=="O"){
//             countY+=1;
//         }
//     }
//     if(countY==3){
//         isWinner=true;
//         winner="player2";
//         break;
//     }

//     //check column
//     countY=0
//     for (let i=0;i<3;i++){
//         if(gameboard.game[i][p2y]=="O"){
//             countY+=1;
//         }
//     }
//     if(countY==3){
//         isWinner=true;
//         winner="player1";
//         break;
//     }

//     //check diag
//     if(
//         (
//             gameboard.game[0][0]=="Y" &&
//             gameboard.game[1][1]=="Y" &&
//             gameboard.game[2][2]=="Y"
//         ) ||
//         (
//             gameboard.game[0][2]=="Y" &&
//             gameboard.game[1][1]=="Y" &&
//             gameboard.game[2][2]=="Y"
//         )
//     ){
//         isWinner=true;
//         winner="player2"
//     }

//     //Ckeck if board full and declare draw as p2 did not win
//     countEmpty=0;
//     for(let i=0;i<3;i++){
//         for(let j=0;j<3;j++){
//             if(gameboard.game[i][j]=="_"){
//                 countEmpty+=1;
//             }
//         }
//     }

//     if(countEmpty==0){
//         isWinner=true;
//         winner="Draw";
//         break;
//     }


//     console.log(gameboard.game);
//     alert(`${gameboard.game[0][0]}|${gameboard.game[0][1]}|${gameboard.game[0][2]}\n${gameboard.game[1][0]}|${gameboard.game[1][1]}|${gameboard.game[1][2]}\n${gameboard.game[2][0]}|${gameboard.game[2][1]}|${gameboard.game[2][2]}`);
//     alert(countY);

// }

// if(winner!="Draw"){
//     console.log(`Well done ${winner} you won`);
// }
// else{
//     console.log(`Draw, no one wins!`);
// }


