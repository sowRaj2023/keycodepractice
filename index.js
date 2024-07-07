let inputvalueEl= document.getElementById("inputvalue");
let keycodesEl = document.getElementById("keycodes");

function createKeys(keyCode){
    let listEl = document.createElement("li");
    listEl.textContent = keyCode;
    listEl.classList.add("list-style-types");
    keycodesEl.appendChild(listEl);
}

function onKeyPressed(event){
    createKeys(event.keyCode)
}



inputvalueEl.addEventListener("keydown", onKeyPressed)
