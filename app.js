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
    if (!e.target.classList.contains("circle") && !e.target.classList.contains("cross")) {
        const goDisplay= document.createElement("div");
        goDisplay.classList.add(go);
        e.target.append(goDisplay);
        go = go === "circle" ? "cross" : "circle";
        infoDisplay.textContent = "c'est le tour à " + go;
        checkScore()
    } else {
        infoDisplay.textContent = ("Veillez choisir une case non occupée svp \nC'est le tour a " + go)
    }

}

function checkScore() {
    winningComboChecker("circle");
    winningComboChecker("cross");
}

function winningComboChecker(figure){
    const allSquares = document.querySelectorAll(".square")
    const winningCombo = [
        [0,1,2], [3,4,5], [6,7,8], // lignes
        [0,3,6], [1,4,7], [2,5,8], // colonnes
        [0,4,8], [2,4,6]           // diagonales
    ];

    winningCombo.forEach(array => {
        const figureWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains(figure));
        if (figureWins) {
            infoDisplay.textContent = `${figure} a gagné`;
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
        }
    })
}