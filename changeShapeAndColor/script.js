let round = document.querySelector("#color");
let btn = document.querySelectorAll("button");
let change_Shape = document.querySelector("#shape");

//to change the Color
btn[0].addEventListener("click", changeColor);

function genarateColor(){
    let color = Math.floor(Math.random() * 255);
    return color;
}

function changeColor(){
    let newColor = `rgb(${genarateColor()}, ${genarateColor()}, ${genarateColor()})`;
    round.style.backgroundColor = newColor;
}

//to change the Shape
btn[1].addEventListener("click", changeShape);
let arr=["square", "circle", "diamond", "triangle", "star","rectangle"];

function randomShape(){
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function changeShape(){
    let idname = randomShape();
    change_Shape.id = idname;
}