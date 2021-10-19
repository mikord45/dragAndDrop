window.addEventListener("DOMContentLoaded", ()=>{
    const element = document.getElementById("draggableElement");
    element.addEventListener("dragstart", dragstartHandler)

    const element2 = document.getElementById("dropZone");
    element2.addEventListener("dragover", dragOverHandler);
    element2.addEventListener("drop", dropHandler);
})

const dragstartHandler = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
}

const dragOverHandler = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
}

const dropHandler = (e) => { 
    e.preventDefault();
    const idToMove = e.dataTransfer.getData("text/plain");
    const item = document.getElementById(idToMove);
    // const item2 = item.cloneNode();
    e.target.appendChild(item);
}