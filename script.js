const gridContainer = document.querySelector(".grid-container");

let mouseEntered = false;
let mouseClicked = false;

function createGrid(iterations = 36){
    for(let i = 0; i < iterations; i++){
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
}


createGrid();