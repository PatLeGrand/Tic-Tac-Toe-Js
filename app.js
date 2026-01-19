const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCells = ["", "", "", "", "", "", "", "", "" ];
let go = "circle";

infoDisplay.textContent = "Cercle en premier";

function createGameBoard() {
    startCells.forEach((cell,index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.id = index;
        cellElement.addEventListener("click", addGo)
        gameBoard.appendChild(cellElement);
    })
}

createGameBoard();

function addGo(e) {
    console.log("clicked", e.target);
    const goDisplay= document.createElement("div");
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    go = go === "circle" ? "cross" : "circle";
    infoDisplay.textContent = "c'est le tour à " + go;
}