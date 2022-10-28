let Player = (name,mark)=>{
    return {
        name,mark
    };
}
let board = (()=>{
    let gameArray = ["","","","","","","","",""];
    function returnArray (){
        return gameArray;
    }
    function resetArray (){
        gameArray = ["","","","","","","","",""];
    }
    return{
        returnArray,resetArray
    }
})();
let display = (()=>{
    let displayGrid = document.querySelectorAll('.displayMark');
    let outcome = document.querySelector('#outcome');
    function drawBoard(array){
        for(let i =0;i<displayGrid.length;i++){
            displayGrid[i].textContent = array[i];
        }
    }
    function displayWinner(mark){
        if (mark == 'draw'){
            outcome.textContent = 'DRAW';
        }
        else if(mark == 'x' || mark == 'o'){
            outcome.textContent = mark.toUpperCase() + ' WINS';
        }
    }
    return{
        drawBoard,displayWinner
    }
})();
let gameControl = (()=>{
    let player1 = Player('John','x');
    let player2 = Player('Doe','o');
    let outcome = document.querySelector('#outcome');
    let turn = 1;
    let winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let grid = document.querySelectorAll('.square');
    let restart = document.querySelector('#restart');
    function checkForWin(array){
        for (let i=0;i<winConditions.length;i++){
            if(array[winConditions[i][0]] == 'x' && array[winConditions[i][1]] == 'x' &&
            array[winConditions[i][2]] == 'x')
            {return 'x'}
            else if (array[winConditions[i][0]] == 'o' && array[winConditions[i][1]] == 'o' &&
            array[winConditions[i][2]] == 'o')
            {return 'o'}
        }
    }
    function checkForDraw(array){
        for(let i=0;i<array.length;i++){
            if(array[i]==''){
                return false;
            }
        }
        return 'draw';
    }
    function play(){
        grid.forEach(square => {
            square.addEventListener('click', ()=>{
                outcome.textContent = '';
                if (board.returnArray()[square.dataset.number] == ""){
                    if(turn%2 == 1){
                        board.returnArray()[square.dataset.number] = player1.mark; 
                        display.drawBoard(board.returnArray());
                        turn++;
                    }
                    else if(turn%2 == 0){
                        board.returnArray()[square.dataset.number] = player2.mark;
                        display.drawBoard(board.returnArray());
                        turn++;
                    }
                }
                if(checkForWin(board.returnArray())=='x'|| checkForWin(board.returnArray())=='o'){
                    display.displayWinner(checkForWin(board.returnArray()));
                    turn = 1;
                    board.resetArray();
                    setTimeout(display.drawBoard(board.returnArray()), 3000);
                }
                else if(checkForDraw(board.returnArray()) == 'draw'){
                    display.displayWinner(checkForDraw(board.returnArray()));
                    turn = 1;
                    board.resetArray();
                    setTimeout(display.drawBoard(board.returnArray()), 3000);
                }
            })
        })
        restart.addEventListener('click',()=>{
            turn = 1;
            board.resetArray();
            display.drawBoard(board.returnArray());
            outcome.textContent = '';
        })
    }
    return{
        checkForWin,checkForDraw,play
    }
})()

gameControl.play();