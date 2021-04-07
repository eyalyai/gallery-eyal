'use strict'
const WALL = '🧱'
const FOOD = '.'
const EMPTY = ' ';
const CHERRY = '🍒';
const POWER_FOOD = '🦠'


var gBoard;
var gStatus = { Type: ['Game Over', 'Game Won!'] }
var gcherryInterval;
var gGame = {
    score: 0,
    isOn: false
}

function init() {
    gBoard = buildBoard()
    createPacman(gBoard);
    createGhosts(gBoard);
    printMat(gBoard, '.board-container')
    printModal();
    gcherryInterval = setInterval(printCherry, 15000);
    gGame.isOn = true
}

function buildBoard() {
    var SIZE = 10;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD;
            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL;
            }
        }
    }
    board[1][1] = POWER_FOOD;
    board[8][8] = POWER_FOOD;
    board[1][8] = POWER_FOOD;
    board[8][1] = POWER_FOOD;
    return board;
}



function updateScore(diff) {
    gGame.score += diff
    document.querySelector('h2 span').innerText = gGame.score;
    // TODO: update model and dom
}

function gameOver() {
    console.log('Game Over');
    gGame.isOn = false
    clearInterval(gIntervalGhosts);
    clearInterval(gcherryInterval);
    showModal(gStatus.Type[0])
    gGame.isOn = false;
}

function isAllFoodEaten(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j];
            if (cell === FOOD) return false;
        }
    }
    return true;
}

function gameWon() {
    console.log('Game Won');
    gGame.isOn = false
    clearInterval(gIntervalGhosts);;
    showModal(gStatus.Type[1])
    gGame.isOn = false;
}

function showModal(status) {
    var elModal = document.querySelector('.modal');
    elModal.innerText = status;
    if (status === 'Game Won!') {
        elModal.style.backgroundColor = 'rgb(255, 236, 179)';
        elModal.style.opacity = '50%';
    }
    elModal.style.display = 'block';
}


function playAgainBtn() {
    init();
}

function printCherry() {
    var emptyCells = [];

    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            var cell = gBoard[i][j];
            if (cell === EMPTY) {
                emptyCells.push({ i: i, j: j });
            }
        }
    }
    if (emptyCells.length === 0) return;
    var tempNum = getRandomIntInclusive(0, emptyCells.length - 1);
    var loc = emptyCells[tempNum];
    renderCell(loc, CHERRY)
}