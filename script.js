function init() {
  updateCellData();
  board.render();
  updateBoard();
  snakeFood();
}

let snake = [{x:21,y:12}];

function renderRow() {
  var rowEl = document.createElement('div');
  rowEl.classList.add('row');

  for (var i = 0; i < 42; i++) {
    var cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.colnumber = [i];

    rowEl.appendChild(cell);
}

  return rowEl;
}
function renderGrid() {
  var newEl = document.createElement('div');
  newEl.classList.add('grid');
  for (var i = 0; i < 24; i++) {
    var newRow = this.renderRow(i);
    newEl.appendChild(newRow);
    newRow.dataset.rownumber = [i];
    newRow.childNodes.forEach(function(cell){
      cell.dataset.rownumber = [i];
    })
  }

  return newEl;
}

function render() {
  var gridEl = document.querySelector('#grid-container');
  gridContent = this.renderGrid();
  gridEl.appendChild(gridContent);

  return board;
}


function updateBoard(){
  var cells = document.querySelectorAll('.cell');

  console.log(cells);

  cells.forEach(function(cell) {
    let hasSnake = false;

    // set cell class to "cell"
    if (cell.classList.contains('food')){
      
    }
    else {
    cell.setAttribute('class', 'cell');
    }


    snake.forEach((body) => {

      var colNum = cell.dataset.colnumber;
      var rowNum = cell.dataset.rownumber;
      var x = parseInt(colNum);
      var y = parseInt(rowNum);

      if (x === body.x && y === body.y){
        hasSnake = true;

      }
    })

    if(hasSnake) {
      // toggle class "snake"
      cell.classList.toggle('snake');
    }
  })

    
}

function updateCellData() {
  // for (var i = 0; i < 24; i++) {
  //   let row = [];

    

  //   for (var j = 0; j < 42; j++) {
  //     let hasSnake = false;
  //     snake.forEach((body) => {
  //       if (j === body.x && i === body.y){
  //         hasSnake = true;
  //       }
  //     })
  //     if(hasSnake) {
  //       row.push(1)
  //     } else {
  //       row.push(0);
  //     }
  //   }

  //   board.cellData.push(row);
  // }
  // console.log(board.cellData);
}


document.addEventListener('keydown', keyListner) 

var left
var up
var right
var down

// function clearSetInt(){
//   clearInterval(left);
//   clearInterval(up);
//   clearInterval(right);
//   clearInterval(down);
// }

function keyListner(e){
   return move(e);
};


function move(e) {
  var errorSound = new Audio('audio/doorbuzz.wav');


  if (e.keyCode === 37){
    // clearInterval(up);
    // clearInterval(right);
    // clearInterval(down);
    // left = setInterval(left, 200);
    var newHead = {x:snake[0].x-1,y:snake[0].y}

    snake.unshift(newHead);
    console.log(newHead)
    snake.pop();
    console.log(snake[0].x);
    updateBoard();
    }
  if (e.keyCode === 38){
    // clearInterval(left);
    // clearInterval(right);
    // clearInterval(down);
    // up = setInterval(up, 200);
    var newHead = {x:snake[0].x,y:snake[0].y-1}

    snake.unshift(newHead);
    console.log(newHead)
    snake.pop();
    console.log(snake[0].y);
    updateBoard();
  }
  if (e.keyCode === 39){
    // clearInterval(left);
    // clearInterval(up);
    // clearInterval(down);
    // right = setInterval(right, 200);
    var newHead = {x:snake[0].x+1,y:snake[0].y}
    snake.unshift(newHead);
    console.log(newHead)
    snake.pop();
    console.log(snake[0].x);
    updateBoard();
  }
  if (e.keyCode === 40){
    // clearInterval(left);
    // clearInterval(up);
    // clearInterval(right);
    // down = setInterval(down, 200); 
    var newHead = {x:snake[0].x,y:snake[0].y+1}

    snake.unshift(newHead);
    console.log(newHead)
    console.log(snake[0].y);
    snake.pop();
    updateBoard(); 
  }
  else if (e.keyCode !== 37 && e.keyCode !==  38 && e.keyCode !==  39 && e.keyCode !== 40) {errorSound.play()
  }

  cellDeath();
}

function left(){
   var newHead = {x:snake[0].x-1,y:snake[0].y}

    snake.unshift(newHead);
    console.log(newHead)
    snake.pop();
    console.log(snake[0].x);
    updateBoard();
  }

function up(){
var newHead = {x:snake[0].x,y:snake[0].y-1}

    snake.unshift(newHead);
    console.log(newHead)
    snake.pop();
    console.log(snake[0].y);
    updateBoard();
}

function right(){
var newHead = {x:snake[0].x+1,y:snake[0].y}

    snake.unshift(newHead);
    console.log(newHead)
    snake.pop();
    console.log(snake[0].x);
    updateBoard();
}

function down(){
   var newHead = {x:snake[0].x,y:snake[0].y+1}

    snake.unshift(newHead);
    console.log(newHead)
    console.log(snake[0].y);
    snake.pop();
    updateBoard();
}


function snakeFood(){
   var cells = document.querySelectorAll('.cell');
   var ranNum = Math.floor(Math.random() * 1008);
   let noSnake = false;
   let noFood = false;


   // console.log(cells[ranNum]);

   // cells.forEach((cell) => {
   
    

  //     if (cell.hasClass('food')){
  //       noFood = false
  //     }

  //     else if (nofood){

  //     if (cell[ranNum].classList.contains('snake')){
  //       noSnake = false;
  //       }

  //     else {noSnake = true}

  //     }})
    

  //   if (noSnake) {
  //     // toggle class "food"
  //     cell[ranNum].classList.toggle('food');
  //   }
  // }
  
  cells[ranNum].classList.toggle('food');

}

function cellDeath(){

var gameOverBkrgd = document.querySelector('.gameoverback');
var gameOverVid = document.querySelector('.gameover');
var continueIMG = document.getElementById('continue');
var continueNav = document.querySelector('.continuenav');
var continueButton = document.querySelectorAll('.continuenav a')[0];
var exitButton = document.querySelectorAll('.continuenav a')[1];
var mgsThemeMusic = document.querySelector('audio');
var gameoverSound = new Audio('audio/gameover.m4a');


  if (snake[0].x <= -1 || snake[0].x >= 42) {
    gameover();
  }
  if (snake[0].y === -1 || snake[0].y >= 24) {
    gameover();
  }

  function gameover(){
    gameOverBkrgd.style = 'z-index: 98; animation: fadein .5s 0s ease-in;animation-iteration-count: 1;'
    mgsThemeMusic.src = ""
    document.removeEventListener('keydown', keyListner);
    gameOverVid.style = 'z-index: 99; animation: fadein 1.5s ease-in;animation-iteration-count: 1;'
    gameOverVid.src = "video/mgsgameover.mp4";
    continueIMG.style = 'display: block; z-index: 150; animation: gameover 15s ease-out;animation-iteration-count: 1;'
    continueIMG.src = "images/mgsgameover.png";
    continueNav.style = 'z-index: 200; animation: gameover 15s ease-out;animation-iteration-count: 1; opacity: 1;'
    gameoverSound.play();
    exitButton.addEventListener('mouseover', chime);
    continueButton.addEventListener('mouseover', chime);
    continueButton.addEventListener('click', gameReset)
  }

  function gameReset(){
    var gunshot = new Audio('audio/continuegunshot.m4a')
    gunshot.play();
    mgsThemeMusic.src = "audio/ps4homemusic.mp3";
    document.addEventListener('keydown', keyListner);
    gameOverBkrgd.style = 'animation: fadedelay 2s 0s ease-out; animation-iteration-count: 1;'
    gameOverVid.style = 'animation: fade 1.5s 0s ease-out; animation-iteration-count: 1;'
    gameOverVid.src = "";
    continueIMG.style = 'animation: fade 1.5s 0s ease-out; animation-iteration-count: 1; z-index: -200;'
    continueIMG.src = "images/mgsgameover.png";
    continueNav.style = 'animation: fade 1.5s 0s ease-out; animation-iteration-count: 1;'
    exitButton.removeEventListener('mouseover', chime);
    continueButton.removeEventListener('mouseover', chime);
    continueButton.removeEventListener('click', gameReset);
    snake = [{x:21,y:12}];
    updateBoard();
  }
}



var board = {
  render: render,
  renderGrid: renderGrid,
  renderRow: renderRow,
  cellData: []

};

init();

var startButton = document.querySelector('#startButton');
startButton.addEventListener('click', landFade);
startButton.addEventListener('mouseover', chime);

function chime(){
  var hoverChime = new Audio("audio/hover.m4a");
  hoverChime.play();
}

function landFade(){
  var codecOpen = new Audio("audio/codecopen.wav");
  var mgsThemeMusic = document.querySelector('audio');
  var startDiv = document.querySelector('.startDiv');
  codecOpen.play();
  startDiv.style = "animation:fade .8s 0s ease-in;animation-fill-mode: forwards;animation-iteration-count: 1;animation-direction: normal;";
  startButton.style.cursor = "default";
  startButton.removeEventListener('click', landFade);
  startButton.removeEventListener('mouseover', chime);
  mgsThemeMusic.src = "audio/ps4homemusic.mp3"; 
}


