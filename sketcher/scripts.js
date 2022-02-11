let numberOfSquares = 64;
let onOff = 'on';
let currentState = 'shade';
let currentColor = 'red';

let grid = document.querySelector('#canvas');
let big = document.querySelector('#big');
let medium = document.querySelector('#medium');
let small = document.querySelector('#small');

let onSwitch = document.querySelector('#switch');
let canvas = document.querySelector('#canvas');
let colorChoice = document.querySelector('#colour');
let colorButton = document.querySelector("#chooseColour");
let erase = document.querySelector('#erase');
let rainbow = document.querySelector('#rgb');
let shader = document.querySelector('#shader');


setGrid();

canvas.addEventListener('click', ()=>{
    if (onOff == 'on'){
        onOff = 'off';
        grid.style.borderColor = 'red';
        onSwitch.style.background = 'black';
    }
    else{
        onOff = 'on';
        grid.style.borderColor = 'green';
        onSwitch.style.background = 'aqua';
    }
});



colorButton.addEventListener('click', ()=>{
    currentState = 'colour'
    currentColor = colorChoice.value;
});
erase.addEventListener('click', ()=>{
    currentState = 'erase';
});
rainbow.addEventListener('click',()=>{
    currentState = 'rainbow';
});
shader.addEventListener('click', ()=>{
    currentState = 'shade';
});



big.addEventListener('click', ()=>{
    numberOfSquares = 128;
    setGrid();
});
medium.addEventListener('click', ()=>{
    numberOfSquares = 64;
    setGrid();
});
small.addEventListener('click', ()=>{
    numberOfSquares = 32;
    setGrid();
});



function setGrid(){
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${numberOfSquares},1fr)`;
    grid.style.gridTemplateRows = `repeat(${numberOfSquares},1fr)`;
    for(let i=0;i<numberOfSquares*numberOfSquares;i++){
        let box = document.createElement('div');
        box.style.background = 'white';
        box.dataset.count = 'first';
        box.addEventListener('mouseover', draw);
        grid.appendChild(box);
    }
}

function draw(e){
    //alert(e.target.dataset.count);
    if(onOff == 'on'){
        if (currentState == 'shade'){
            if(e.target.dataset.count == 'first'){
                e.target.style.background = 'rgb(223,223,223)';
                e.target.dataset.count = 'second';
            }
            else if(e.target.dataset.count == 'second'){
                e.target.style.background = 'rgb(207, 205, 205)';
                e.target.dataset.count = 'third';
            }
            else if(e.target.dataset.count == 'third'){
                e.target.style.background = 'rgb(201,201,201)';
                e.target.dataset.count = 'fourth';
            }
            else if(e.target.dataset.count == 'fourth'){
                e.target.style.background = 'rgb(179,179,179)';
                e.target.dataset.count = 'fifth';
            }
            else if(e.target.dataset.count == 'fifth'){
                e.target.style.background = 'rgb(138,138,138)';
                e.target.dataset.count = 'sixth';
            }
            else if(e.target.dataset.count == 'sixth'){
                e.target.style.background = 'rgb(122,122,122)';
                e.target.dataset.count = 'seventh';
            }
            else if(e.target.dataset.count == 'seventh'){
                e.target.style.background = 'rgb(97,97,97)';
                e.target.dataset.count = 'eighth';
            }
            else if(e.target.dataset.count == 'eighth'){
                e.target.style.background = 'rgb(69,69,69)';
                e.target.dataset.count = 'ninth';
            }
            else if(e.target.dataset.count == 'ninth'){
                e.target.style.background = 'rgb(41,41,41)';
                e.target.dataset.count = 'tenth';
            }
            else if(e.target.dataset.count == 'tenth'){
                e.target.style.background = 'rgb(0, 0, 0)';
            }
        }
        else if(currentState == 'colour'){
            e.target.style.background = currentColor;
        }
        else if(currentState == 'rainbow'){
            e.target.style.background = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 256)})`;
        }
        else if(currentState == 'erase'){
            e.target.style.background = 'white';
        }   
        
    }
}
