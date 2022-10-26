/*let start = (() => {
    let screen = document.querySelector('.startScreen');
    let startBtn = document.querySelector('#start');
    let top = document.querySelector('.top');
    let name1;
    let mark1;
    let name2;
    let mark2;

    function startGame(){
        startBtn.addEventListener('click', ()=>{
            screen.style.display = 'none';
            let form = document.createElement('div');
            let submitBtn = document.createElement('button');
            let x = document.createElement('button');
            let o = document.createElement('button');
            let enterName = document.createElement('INPUT');
            enterName.setAttribute('type', 'text');
        });
    }
    return{
        startGame
    }
})();*/

//remove the reset board and make it a button input that does it.
//then add the start screen back in

let Player = (name,mark) => {
    return {
        name,mark,
    };
}

let boardController = (() => {
    let game = ["","","","","","","","",""];
    let displayGrid = document.querySelectorAll('.displayMark');
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    function returnGame(){
        return game;
    }
    function drawBoard (){
            for(let i=0;i<displayGrid.length;i++){
                displayGrid[i].textContent = game[i];
            }
    }

    function resetBoard(){
        game = ["","","","","","","","",""];
        drawBoard();
    }
    function checkForWin(){
        for(let i=0;i<winConditions.length;i++){
            if (game[winConditions[i][0]] == 'x'&& game[winConditions[i][1]]== 'x'&&game[winConditions[i][2]] == 'x'){
                console.log('x has won');
                console.log(game[winConditions[i][0]],game[winConditions[i][1]],game[winConditions[i][2]]);
                console.log('x wins');
                return true;
            }
            else if(game[winConditions[i][0]]== 'o'&& game[winConditions[i][1]]== 'o'&&game[winConditions[i][2]] == 'o'){
                console.log('o wins');
                return true;
            }
        }
    }
    function checkForDraw(){
        for(let i=0;i<game.length;i++){
            if(game[i]== ""){
                console.log(game);
            }
        }
        console.log('draw');
    }
    return{returnGame,drawBoard,resetBoard,checkForWin,checkForDraw};
})();

let gameController = (() => {
    let gameGrid = document.querySelectorAll('.square');

    function play(player1Mark,player2Mark){
        let mark = player1Mark;
        gameGrid.forEach(element =>{
            element.addEventListener ('click', ()=>{
                if(boardController.returnGame()[element.dataset.number] == ""){
                    boardController.returnGame()[element.dataset.number] = mark;
                    boardController.drawBoard();
                    if(mark == player1Mark){
                        mark = player2Mark;
                    }
                    else{
                        mark = player1Mark;
                    }
                    boardController.checkForWin()
                    if(boardController.checkForWin() == true){
                        setTimeout(boardController.resetBoard,1000);
                        mark = player1Mark;
                    }
                    else{
                        boardController.checkForDraw();
                        if(boardController.checkForDraw() == true){
                            setTimeout(boardController.resetBoard,1000);
                            mark = player1Mark;
                        }
                    }
                    }

            })
        })
    }
    return {play};
})();
let player1 = Player('Player1','x');
let player2 = Player('Player2','o');
gameController.play(player1.mark,player2.mark);
