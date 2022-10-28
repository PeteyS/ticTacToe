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
    function changeArray(index,mark){
        gameArray[index] = mark;
    }
    return{
        returnArray,resetArray,changeArray
    }
})();

let display = (()=>{
    let displayGrid = document.querySelectorAll('.displayMark');
    let outcome = document.querySelectorAll('#outcome');

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
            outcome.textContent = mark + 'WINS';
        }
    }

    return{
        drawBoard,displayWinner
    }
})();

let gameControl = (()=>{
    let player1 = Player('John','x');
    let player2 = Player('Doe','o');
    let outcome;
    let turn = 1;
    let winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let grid = document.querySelectorAll('.square');

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
            if(game[i]==''){
                return false;
            }
        }
        return 'draw';
    }
    grid.forEach(square => {
        square.addEventListener('click', ()=>{
            if (board.returnArray()[square.dataset.number] == ""){
                if(turn%2 == 1){
                    board.returnArray()[square.dataset.number] == player1.mark; 
                    display.drawBoard(board.returnArray);
                    turn++;
                }
                else if(turn%2 == 2){
                    board.returnArray()[square.dataset.number] == player2.mark;
                    display.drawBoard(board.returnArray);
                    turn++;
                }
            }
            if(checkForWin(board.returnArray)=='x'|| checkForWin(board.returnArray)=='o'){
                display.displayWinner(checkForWin(board.returnArray));
                turn = 1;
                setTimeout(board.resetArray(),1000)
                display.drawBoard(board.returnArray);
            }
            else if(checkForDraw(board.returnArray) == 'draw'){
                display.displayWinner(checkForDraw(board.returnArray));
                turn = 1;
                setTimeout(board.resetArray(),1000)
                display.drawBoard(board.returnArray);
            }
        })
    })


})()