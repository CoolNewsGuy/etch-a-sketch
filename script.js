let sketchContainer = document.getElementsByClassName("sketch-container")[0];
let resetButton = document.getElementById("reset-btn");
let gotItButton = document.getElementById("got-it-btn");
let menu1 = document.getElementsByClassName("menu-1")[0];
let menu2 = document.getElementsByClassName("menu-2")[0];
let grid = 100;

// +functions
function createLineContainers() {
    for (let i = 0; i < grid; i++) {
        let lineContainer = document.createElement("div");
        lineContainer.style.maxHeight =
            sketchContainer.clientHeight / grid + "px";
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
    orangeSquare.style.width = sketchContainer.clientWidth / grid + "px";
    orangeSquare.style.height = sketchContainer.clientHeight / grid + "px";

    return orangeSquare;
}

function drawSquares(container) {
    for (let i = 0; i < grid; i++) {
        container.append(createSquares());
    }
}

function colorizeSquares() {
    this.classList.remove("transparent-squares");
}

function reset() {
    squares.forEach((square) => square.classList.add("transparent-squares"));
}

function addShortcuts(e) {
    if (e.key === "1") {
        squares.forEach((square) =>
            square.addEventListener("mouseover", colorizeSquares)
        );
    } else if (e.key === "2") {
        let red = Math.floor(Math.random() * 257),
            green = Math.floor(Math.random() * 257),
            blue = Math.floor(Math.random() * 257);

        squares.forEach((square) => {
            if (square.classList.contains("transparent-squares"))
                square.style.background = `rgb(${red},${green},${blue})`;
        });
    } else if (e.key === "3") {
        let rgb = ["red", "green", "blue"];

        squares.forEach((square) => {
            if (square.classList.contains("transparent-squares"))
                square.style.background = rgb[Math.floor(Math.random() * 3)];
        });
    } else if (e.key === "4") {
        squares.forEach((square) => {
            if (square.classList.contains("transparent-squares")) {
                let red = Math.floor(Math.random() * 257),
                    green = Math.floor(Math.random() * 257),
                    blue = Math.floor(Math.random() * 257);
                square.style.background = `rgb(${red},${green},${blue})`;
            }
        });
    } else if (e.key === "5") {
        squares.forEach((square) =>
            square.removeEventListener("mouseover", colorizeSquares)
        );
    } else if (e.key === "6") {
        squares.forEach((square) =>
            square.removeEventListener("mouseover", colorizeSquares)
        );
        reset();
    }
}

function hideMenu1() {
    menu1.classList.add("fade-out");
    gotItButton.setAttribute("class", "clicked-btn");
    setInterval(() => (menu1.style.display = "none"), 1500);
}

// +other things
createLineContainers();
let lineContainers = document.querySelectorAll(".line-container");
lineContainers.forEach(drawSquares);

let squares = document.querySelectorAll(".square");
squares.forEach((square) => square.classList.add("transparent-squares"));

resetButton.addEventListener("click", reset);
document.addEventListener("keypress", addShortcuts);
gotItButton.addEventListener("click", hideMenu1);
