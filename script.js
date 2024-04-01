const gridContainer = document.querySelector(".grid-container");
const slider = document.querySelector("#myRange");

let mouseEntered = false;
let mouseClicked = false;

function createGrid(iterations = 36){

    deleteGrid(gridContainer);
    let roundNumber = roundToNearestPerfectSquare(iterations);

    for(let i = 0; i < roundNumber; i++){
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        
        gridContainer.appendChild(gridItem);
    }

    const gridItems = document.querySelectorAll(".grid-item");


    gridItems.forEach(item => {
        item.addEventListener("mouseenter" ,(event) => {
            if(event.buttons == 1 || event.buttons == 3){
                item.classList.add("change-color")
            }
        })
        item.addEventListener("mousedown" ,() => {
            item.classList.add("change-color")
        })
    });

    let columns = Math.sqrt(roundNumber);
    // Set the CSS variable to adjust the number of columns dynamically
    document.documentElement.style.setProperty("--columns", columns);
}

function roundToNearestPerfectSquare(number) {
    // Find the square root of the number
    const squareRoot = Math.sqrt(number);
    
    // Round the square root to the nearest integer
    const roundedSquareRoot = Math.round(squareRoot);
    
    // Calculate the nearest perfect square
    const nearestPerfectSquare = Math.pow(roundedSquareRoot, 2);
    
    return nearestPerfectSquare;
}

function deleteGrid(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

slider.oninput = function() {
    createGrid(this.value);
}

createGrid(500);