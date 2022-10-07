"use strict";
let sketchContainer = document.getElementsByClassName("sketch-container")[0],
    resetButton = document.getElementById("reset-btn"),
    gotItButton = document.getElementById("got-it-btn"),
    menu1 = document.getElementsByClassName("menu-1")[0],
    menu2 = document.getElementsByClassName("menu-2")[0],
    sliderValue = document.getElementById("grid-slider"),
    gridValue = document.getElementsByClassName("current-grid-value")[0];

// +functions
function createLineContainers() {
    for (let i = 0; i < +sliderValue.value; i++) {
        let lineContainer = document.createElement("div");
        lineContainer.style.maxHeight =
            sketchContainer.clientHeight / +sliderValue.value + "px";
        lineContainer.style.width = getComputedStyle(sketchContainer).width;
        lineContainer.classList.add("line-container");
        sketchContainer.appendChild(lineContainer);
    }
}

function removeLineContainers() {
    sketchContainer.innerHTML = "";
}

function createSquares() {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.display = "inline-block";
    square.style.background = "#fee715";
    square.style.width =
        sketchContainer.clientWidth / +sliderValue.value + "px";
    square.style.height =
        sketchContainer.clientHeight / +sliderValue.value + "px";

    return square;
}

function drawSquares(container) {
    for (let i = 0; i < +sliderValue.value; i++) {
        container.append(createSquares());
    }
}

function colorizeSquares() {
    this.classList.remove("transparent-squares");
}

function reset() {
    squares.forEach((square) => {
        square.classList.add("transparent-squares");
    });
}

function addShortcuts(e) {
    var red = Math.floor(Math.random() * 257),
        green = Math.floor(Math.random() * 257),
        blue = Math.floor(Math.random() * 257),
        color = `rgb(${red},${green},${blue})`;
    if (e.key === "1") {
        squares.forEach((square) => {
            square.classList.add("transparent-squares");
            square.addEventListener("mouseover", colorizeSquares);
        });
    } else if (e.key === "2") {
        squares.forEach((square) => {
            if (square.classList.contains("transparent-squares"))
                square.style.background = color;
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
        squares.forEach((square) => {
            square.removeEventListener("mouseover", colorizeSquares);
        });
        reset();
    }
}

function hideMenu1() {
    menu1.classList.add("fade-out");
    gotItButton.setAttribute("class", "clicked-btn");
    setInterval(() => (menu1.style.display = "none"), 1500);
}

function changeGridText() {
    gridValue.textContent = `${sliderValue.value}x${sliderValue.value}`;
}

// +other things
createLineContainers();
let lineContainers = document.querySelectorAll(".line-container");
lineContainers.forEach(drawSquares);

let squares = document.querySelectorAll(".square");
squares.forEach((square) => square.classList.add("transparent-squares"));

document.addEventListener("keypress", addShortcuts);
gotItButton.addEventListener("click", hideMenu1);

sliderValue.addEventListener("input", changeGridText);
sliderValue.addEventListener("mouseup", () => {
    reset();
    removeLineContainers();
    createLineContainers();
    lineContainers = document.querySelectorAll(".line-container");
    lineContainers.forEach(drawSquares);
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => square.classList.add("transparent-squares"));
});
