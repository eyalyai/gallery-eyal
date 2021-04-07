'use strict'
const PACMAN = '😷';

var gPacman;

function createPacman(board) {
    gPacman = {
        location: {
            i: 3,
            j: 5
        },
        isSuper: false
    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN
}

function movePacman(ev) {

    if (!gGame.isOn) return

    var nextLocation = getNextLocation(ev)
    if (!nextLocation) return

    var nextCell = gBoard[nextLocation.i][nextLocation.j]

    if (nextCell === WALL) return
    if (nextCell === FOOD) updateScore(12);
    if (nextCell === CHERRY) updateScore(10);
    else if (nextCell === GHOST && gPacman.isSuper === false) {
        gameOver()

        renderCell(gPacman.location, EMPTY)
        return
    }
    if (isAllFoodEaten(gBoard)) gameWon();
    // if (nextCell === FOOD) gameWon();
    if (nextCell === POWER_FOOD) gPacman.isSuper = true;
    // if (nextCell === GHOST && gPacman.isSuper === true){

    // }





    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    renderCell(gPacman.location, EMPTY)

    gPacman.location = nextLocation

    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN

    renderCell(gPacman.location, PACMAN)
        // TODO: return if cannot move
        // TODO: hitting a ghost?  call gameOver
        // TODO: update the model
        // TODO: update the DOM
        // TODO: Move the pacman
        // TODO: update the model
        // TODO: update the DOM
}


function getNextLocation(eventKeyboard) {
    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }
    switch (eventKeyboard.code) {
        case 'ArrowUp':
            nextLocation.i--
                break;
        case 'ArrowDown':
            nextLocation.i++
                break;
        case 'ArrowLeft':
            nextLocation.j--
                break;
        case 'ArrowRight':
            nextLocation.j++
                break;
        default:
            return null
    }

    return nextLocation;
}