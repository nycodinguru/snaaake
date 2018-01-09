function init() {
  board.render();
  updateBoard();
  snakeFood();
  createBoard();
}

let snake = [{x:21,y:12}];
var setInt = 130;

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


  cells.forEach(function(cell) {
    let hasSnake = false;

    // set cell class to "cell" if class does not contain the "food" class

    if (cell.classList.contains('food')){
      
    }
    else {
    cell.setAttribute('class', 'cell');
    
    }

    //Each 

    snake.forEach((body) => {

      var x = parseInt(cell.dataset.colnumber);
      var y = parseInt(cell.dataset.rownumber);


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

function foodFound (){
  var cells = document.querySelectorAll('.cell');

    snake.forEach((body) => {
      var apple = document.querySelector('.food');
      let foodEaten = false

      var foodx = apple.dataset.colnumber;
      var foody = apple.dataset.rownumber;

      if (foodx == snake[0].x && foody == snake[0].y){
        foodEaten = true;
      }
    
      if (foodEaten){
      var itemUsed = new Audio('audio/itemused.wav');
      var lastSnakeIndexNum = snake.length-1;
      var tailx = snake[lastSnakeIndexNum].x
      var taily = snake[lastSnakeIndexNum].y
      var newBodyDiv = {x:snake[lastSnakeIndexNum].x+1,y:snake[lastSnakeIndexNum].y}

      itemUsed.play();
      setInt+= -2
      apple.classList.toggle('food');
      snakeFood();

      snake.push(newBodyDiv);

    }

    })
    }


// function updateCellData() {
//   for (var i = 0; i < 24; i++) {
//     let row = [];

    

//     for (var j = 0; j < 42; j++) {
//       let hasSnake = false;
//       snake.forEach((body) => {
//         if (j === body.x && i === body.y){
//           hasSnake = true;
//         }
//       })
//       if(hasSnake) {
//         row.push(1)
//       } else {
//         row.push(0);
//       }
//     }

//     board.cellData.push(row);
//   }
//   console.log(board.cellData);
// }

var leftA;
var upA;
var rightA;
var downA;

function keyListner(e){
   return move(e);
};

function clear() {
  clearInterval(upA);
  clearInterval(downA);
  clearInterval(leftA);
  clearInterval(rightA);
}

var currentFunction = ['']

function move(e) {
  var errorSound = new Audio('audio/doorbuzz.wav');


  if (e.keyCode === 65 || e.keyCode === 37){
      if (currentFunction[0] !== 'right' && currentFunction[0] !== 'left'){

    clearInterval(upA);
    clearInterval(downA);
    
    leftA = setInterval(left, setInt);
    currentFunction.unshift('left');
    currentFunction.pop();
    }}
  if (e.keyCode === 87 || e.keyCode === 38){
      if (currentFunction[0] !== 'down' && currentFunction[0] !== 'up'){  
    clearInterval(leftA);
    clearInterval(rightA);
    
    upA = setInterval(up, setInt);
    currentFunction.unshift('up');
    currentFunction.pop();
  }}
  if (e.keyCode === 68 || e.keyCode === 39){
      if (currentFunction[0] !== 'left' && currentFunction[0] !== 'right'){  
    clearInterval(upA);
    clearInterval(downA);
    
    rightA = setInterval(right, setInt);
    currentFunction.unshift('right');
    currentFunction.pop();
  }}
  if (e.keyCode === 83 || e.keyCode === 40){
      if (currentFunction[0] !== 'up' && currentFunction[0] !== 'down'){

    clearInterval(leftA);
    clearInterval(rightA);
    
    downA = setInterval(down, setInt); 
    currentFunction.unshift('down');
    currentFunction.pop();
  }}
  if (e.keyCode === 80){
      pauseGame();
  }
  else if (e.keyCode !== 37 && e.keyCode !==  38 && e.keyCode !==  39 && e.keyCode !== 40 && e.keyCode !== 80 && e.keyCode !== 68 && e.keyCode !== 83 && e.keyCode !== 87 && e.keyCode !== 65 ) {errorSound.play()
  }

  
}

function left(){
   var newHead = {x:snake[0].x-1,y:snake[0].y}

    snake.unshift(newHead);
    snake.pop();
    updateBoard();
    foodFound();
    cellDeath();
  }

function up(){
var newHead = {x:snake[0].x,y:snake[0].y-1}

    snake.unshift(newHead);
    snake.pop();
    updateBoard();
    foodFound();
    cellDeath();
}

function right(){
var newHead = {x:snake[0].x+1,y:snake[0].y}

    snake.unshift(newHead);
    snake.pop();
    updateBoard();
    foodFound();
    cellDeath();
}

function down(){
   var newHead = {x:snake[0].x,y:snake[0].y+1}

    snake.unshift(newHead);
    snake.pop();
    updateBoard();
    foodFound();
    cellDeath();
}

var cells;

function snakeFood(){
   cells = document.querySelectorAll('.cell');
   var ranNum = Math.floor(Math.random() * 1008);
   let noSnake = false;
   let noFood = false;


      if (!cells[ranNum].classList.contains('snake')) {
        cells[ranNum].classList.toggle('food');
      }

      else if(cells[ranNum].classList.contains('snake')){
        ranNum = Math.floor(Math.random() * 1008);
        snakeFood();
      }

  //  cells.forEach((cell) => {
   
  //     if (cell.hasClass('food')){
  //       noFood = false
  //     }

  //     else if (noFood){

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

};



function cellDeath(){

var gameOverBkrgd = document.querySelector('.gameoverback');
var gameOverVid = document.querySelector('.gameover');
var continueIMG = document.getElementById('continue');
var continueNav = document.querySelector('.continuenav');
var continueButton = document.querySelectorAll('.continuenav a')[0];
var exitButton = document.querySelectorAll('.continuenav a')[1];
var mgsThemeMusic = document.querySelector('audio');
var gameoverSound = new Audio('audio/gameover.m4a');

  

  if (snake[0].x == -1 || snake[0].x == 42) {
    gameover();
    clear();
  }
  if (snake[0].y == -1 || snake[0].y == 24) {
    gameover();
    clear();
  }
  else {noSelfTouch()}

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

  function noSelfTouch(){


  for (var i = 2; i < snake.length; i++) {

    var headX = snake[0].x
    var headY = snake[0].y
    var bodyX = snake[i].x
    var bodyY = snake[i].y

    if (headX === bodyX && headY === bodyY){

    clear();
    gameover();

    }}}  

  function gameReset(){
    var gunshot = new Audio('audio/continuegunshot.m4a');
    gunshot.play();
    gameoverSound.pause();
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
    clear();
    snake = [{x:21,y:12}];
    updateBoard();
    document.querySelector('.food').classList.toggle('food');
    snakeFood();
    setInt = 130;
    currentFunction = [''];
    document.querySelectorAll('.cell')[525].classList.toggle('blink');
  }
}



function pauseGame(){

  // var currentFunc = currentFunction[0];
  // console.log(currentFunction.length);

  // if (currentFunction.length == 1){
  //   clear();
  //   currentFunction.push('new');
  //   ;
  // }

  // if (currentFunction.length == 2){
  //   clear();
  //   if (currentFunc == 'left' ){
  //         leftA = setInterval(left, setInt);
  //         currentFunction.unshift('left');
  //         currentFunction.pop();
  //         currentFunction.pop();
  //   }
  //   if (currentFunc == 'up' ){
  //         upA = setInterval(up, setInt);
  //         currentFunction.unshift('up');
  //         currentFunction.pop();
  //         currentFunction.pop();
  //   }
  //   if (currentFunc == 'right'){
  //         rightA = setInterval(right, setInt);
  //         currentFunction.unshift('right');
  //         currentFunction.pop();
  //         currentFunction.pop();
  //   }     
  //   if (currentFunc == 'down' ){
  //         downA = setInterval(down, setInt);
  //         currentFunction.unshift('down');
  //         currentFunction.pop();
  //         currentFunction.pop();
  //   }
  // }
  
}


var board = {
  render: render,
  renderGrid: renderGrid,
  renderRow: renderRow,
  cellData: []

};

function createBoard() {
  // for (var i = 0; i < 24; i++) {
    
  //   for (var j = 0; j < 42; j++) {
      
  //     let row = [];

  //       row.push(0)
        
      
  //     }

  //     return row
  //   }

  //   board.cellData.push(row);
  }
  // console.log(board.cellData);

init();

var startButton = document.querySelector('#startButton');
startButton.addEventListener('click', landFade);
startButton.addEventListener('mouseover', chime);

function chime(){
  var hoverChime = new Audio("audio/hover.m4a");
  hoverChime.play();
}

function landFade(){
  document.addEventListener('keydown', keyListner); 
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

var startdiv = document.querySelectorAll('.cell')[525];
startdiv.classList.toggle('blink');
