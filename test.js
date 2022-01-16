var turn = 1;
var result = -1;
var matrix = [
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
]

function xo(game,i,j){
    if(game.innerHTML != "") return;
    if(result != -1) return;
    matrix [i][j] = turn;
     if( turn == 1){
        game.innerHTML = "X" ;
        document,getElementById("playgame").innerText ="PLAYER 2 turn "
        turn = 2 ;
    }
    else if (turn == 2){
        game.innerHTML = "O"
        document,getElementById("playgame").innerText ="PLAYER 1 turn "
        turn = 1;
    }
    for( var i=0 ; i< 3; i++){
        if(matrix [i][0] == matrix [i][1] && matrix [i][1] == matrix [i][2]) win = matrix [i][0] ;

        if(matrix  [0][i] == matrix [1][i] && matrix [1][i] == matrix  [2][i] ) win = matrix  [0][i] ;
    }
    if(matrix  [0][0] == matrix [1][1] == matrix  [2][2] ) win = matrix  [1][1] ;
    if(matrix  [0][2] == matrix [1][1] == matrix  [2][0] ) win = matrix  [1][1] ;
     
    if(result != -1){
        document.getElementById("playgame").innerText =  win + " won the game" ;
    }
}




