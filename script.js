const gridContainer = document.querySelector(".grid-container");

function createGrid(iterations = 36){
    for(let i = 0; i < iterations; i++){
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        
        gridContainer.appendChild(gridItem);
    }

    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach(item => {
        item.addEventListener("click" ,() => {
            item.classList.length <= 1 ? item.classList.add("change-color") : item.classList.remove("change-color")
        })
    });
}

createGrid();