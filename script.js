const gridContainer = document.querySelector(".grid-container");
const slider = document.querySelector("#myRange");
const eraser = document.querySelector(".eraser");
const gridSizeText = document.querySelector("p");

function createGrid(iterations = 50){

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
                if(checkEraser()){
                    item.classList.remove("change-color")
                }else{
                    item.classList.add("change-color")
                }
            }
        })
        item.addEventListener("mousedown" ,() => {
            if(checkEraser()){
                item.classList.remove("change-color")
            }else{
                item.classList.add("change-color")
            }
        })
    });

    let columns = Math.sqrt(roundNumber);
    // Set the CSS variable to adjust the number of columns dynamically
    gridSizeText.textContent = `Grid size: ${columns} * ${columns}`;
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

function checkEraser(){
    return eraser.checked;
}

createGrid();