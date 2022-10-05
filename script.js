let sketchContainer = document.getElementsByClassName("sketch-container")[0];
let resetButton = document.getElementById("reset-btn");

// +functions
function createLineContainers() {
    for (let i = 0; i < 16; i++) {
        let lineContainer = document.createElement("div");
        lineContainer.style.maxHeight =
            sketchContainer.clientHeight / 16 + "px";
        lineContainer.style.width = getComputedStyle(sketchContainer).width;
        lineContainer.classList.add("line-container");
        sketchContainer.appendChild(lineContainer);
    }
}

function createSquares() {
    let orangeSquare = document.createElement("div");
    orangeSquare.classList.add("square");
    orangeSquare.style.display = "inline-block";
    orangeSquare.style.background = "#fee715";
    orangeSquare.style.width = sketchContainer.clientWidth / 16 + "px";
    orangeSquare.style.height = sketchContainer.clientHeight / 16 + "px";

    return orangeSquare;
}

function drawSquares(container) {
    for (let i = 0; i < 16; i++) {
        container.append(createSquares());
    }
}

function colorizeSquares() {
    this.classList.remove("transparent-squares");
}

function reset() {
    squares.forEach((square) => square.classList.add("transparent-squares"));
}

// +other things
createLineContainers();
let lineContainers = document.querySelectorAll(".line-container");
lineContainers.forEach(drawSquares);

let squares = document.querySelectorAll(".square");
squares.forEach((square) => square.classList.add("transparent-squares"));

squares.forEach((square) =>
    square.addEventListener("mouseover", colorizeSquares)
);
resetButton.addEventListener("click", reset);
