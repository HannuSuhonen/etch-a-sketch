const gridContainer = document.querySelector(".grid-container");
const slider = document.querySelector("#myRange");
const eraser = document.querySelector(".eraser");
const gridToggle = document.querySelector(".gridToggle");
const resetButton = document.querySelector(".reset");
const randomColorToggle = document.querySelector(".randomColorToggle");
const gridSizeText = document.querySelector("p");

function createGrid(iterations = 4096){

    deleteGrid(gridContainer);
    let roundNumber = roundToNearestPerfectSquare(iterations);

    for(let i = 0; i < roundNumber; i++){
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        if(checkGridToggle()) gridItem.classList.add("grid-item-outline");
        gridContainer.appendChild(gridItem);
    }

    const gridItems = document.querySelectorAll(".grid-item");


    gridItems.forEach(item => {
        item.addEventListener("mouseenter" ,(event) => {
            if(event.buttons == 1 || event.buttons == 3){
                paint(item);
            }
        })
        item.addEventListener("mousedown" ,() => {
           paint(item);
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

gridToggle.addEventListener("change",(e) => {
    let gridItems = document.querySelectorAll(".grid-item")
    if(e.target.checked){
        gridItems.forEach((item)=> item.classList.add("grid-item-outline"));
    }else{
        gridItems.forEach((item)=> item.classList.remove("grid-item-outline"));
    }
})

function resetSlider(){
    slider.value = 4096;
}
resetButton.addEventListener("click", () => {
    gridToggle.checked = true;
    createGrid();
    resetSlider();
});

function checkGridToggle(){
    return gridToggle.checked;
}

function checkEraser(){
    return eraser.checked;
}
eraser.addEventListener("change",(e) => {
    if(e.target.checked) randomColorToggle.checked = false;
});

randomColorToggle.addEventListener("change",(e) => {
    if(e.target.checked) eraser.checked = false;
});


function checkRandomColorToggle(){
    return randomColorToggle.checked;
}

function paint(element){
    if(checkEraser()){
        element.style.backgroundColor = "unset";

    }else if(checkRandomColorToggle()){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        element.style.backgroundColor = `#${randomColor}`;
    }
    else{
        element.style.backgroundColor = "gray";
    }
}

createGrid();