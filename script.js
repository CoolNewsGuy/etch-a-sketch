let sketchContainer = document.getElementsByClassName("sketch-container")[0];

function createLineContainers() {
    for (let i = 0; i < 16; i++) {
        let lineContainer = document.createElement("div");
        lineContainer.style.height = sketchContainer.clientHeight / 16 + "px";
        lineContainer.style.backgroundColor = "red";
        lineContainer.classList.add("line-container");
        sketchContainer.appendChild(lineContainer);
    }
}

function createOrangeSquares() {
    let orangeSquare = document.createElement("div");
    orangeSquare.style.background = "#fee715";
    orangeSquare.style.width = "62.5px";
    orangeSquare.style.minHeight = "62.5px";
    orangeSquare.style.flex = "auto";
    return orangeSquare;
}

function createBlackSquares() {
    let blackSquare = document.createElement("div");
    blackSquare.style.background = "#101820";
    blackSquare.style.width = "62.5px";
    blackSquare.style.minHeight = "62.5px";
    blackSquare.style.flex = "auto";
    return blackSquare;
}

createLineContainers();

let lineContainers = document.querySelectorAll(".line-container");
