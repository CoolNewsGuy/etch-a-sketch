let sketchContainer = document.getElementsByClassName("sketch-container")[0];

function createLineContainers() {
    for (let i = 0; i < 16; i++) {
        let lineContainer = document.createElement("div");
        lineContainer.style.maxHeight =
            sketchContainer.clientHeight / 16 + "px";
        lineContainer.style.backgroundColor = "red";
        lineContainer.style.width = getComputedStyle(sketchContainer).width;
        lineContainer.classList.add("line-container");
        sketchContainer.appendChild(lineContainer);
    }
}

function createOrangeSquares() {
    let orangeSquare = document.createElement("div");
    orangeSquare.style.display = "inline-block";
    orangeSquare.style.background = "#fee715";
    orangeSquare.style.width = sketchContainer.clientWidth / 16 + "px";
    orangeSquare.style.height = sketchContainer.clientHeight / 16 + "px";
    return orangeSquare;
}

function createBlackSquares() {
    let blackSquare = document.createElement("div");
    blackSquare.style.display = "inline-block";
    blackSquare.style.background = "#101820";
    blackSquare.style.width = sketchContainer.clientWidth / 16 + "px";
    blackSquare.style.height = sketchContainer.clientHeight / 16 + "px";
    return blackSquare;
}

createLineContainers();

let lineContainers = document.querySelectorAll(".line-container");
lineContainers.forEach((container) => {
    if (Array.from(lineContainers).indexOf(container) % 2 === 0) {
        for (let i = 0; i < 8; i++) {
            container.append(createOrangeSquares(), createBlackSquares());
        }
    } else if (Array.from(lineContainers).indexOf(container) % 2 !== 0) {
        for (let i = 0; i < 8; i++) {
            container.append(createBlackSquares(), createOrangeSquares());
        }
    }
});
