const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCells = ["", "", "", "", "", "", "", "", "" ];

function createGameBoard() {
    startCells.forEach((cell,index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        gameBoard.appendChild(cellElement);
    })
}