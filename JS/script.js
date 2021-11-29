
let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let message = document.querySelector("#message")
let pickedColor = pickColor();
let clickedColor = "";
let reset = document.querySelector("#reset");
let dificultad = document.querySelectorAll(".dificultad");
let h1 = document.querySelector("h1");
let btnhard = document.querySelector("#hard");
let btneasy = document.querySelector("#easy");

colorDisplay.textContent = pickedColor;

function changeColors(){
    for (let i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor= pickedColor;
    }
}

function pickColor(){
    let colorGenerado = Math.floor(Math.random()*colors.length)
    return colors[colorGenerado];
}


function randomColor(){
   let R = Math.floor(Math.random()*256);
   let G = Math.floor(Math.random()*256);
   let B = Math.floor(Math.random()*256);
   return `rgb(${R}, ${G}, ${B})`;
}
function generateRandomColors(numero){
    let randomColors = [];

    for (let i=0; i<numero; i++) {
        randomColors.push(randomColor());
    }
    return randomColors;
}


for (let i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            message.textContent = "Correct!!";
            h1.style.backgroundColor = pickedColor;
            changeColors();
            reset.textContent = "PLAY AGAIN!";
        } else {
            squares[i].style.backgroundColor = "rgb(35, 35, 35)";
            message.textContent = "Try Again!!";
        }
    })
    
}

reset.addEventListener("click", function(){
    if(document.getElementsByClassName("remove").length===0){
        
        colors = generateRandomColors(6);
    }else{
        colors = generateRandomColors(3);
    }
        for (let i=0; i<squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
        }
        colorDisplay = document.querySelector("#colorDisplay");
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        h1.style.backgroundColor = "rgb(70, 130, 180)";
        message.textContent = "";
        reset.textContent = "NEW COLORS";
})


for(let i=0; i<dificultad.length; i++){
    dificultad[i].addEventListener("click", function(){
        dificultad[1].classList.remove("selected");
        dificultad[0].classList.remove("selected");
        this.classList.add("selected");
    })
}

btneasy.addEventListener("click", function(){
    colors = generateRandomColors(3);
    colorDisplay = document.querySelector("#colorDisplay");
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor= "rgb(70, 130, 180)";
    message.textContent = "";
    reset.textContent = "NEW COLORS";
    for (let y = 0; y < squares.length; y++) {
        squares[y].style.backgroundColor = colors[y];
        squares[3].classList.add("remove");
        squares[4].classList.add("remove");
        squares[5].classList.add("remove");
    }
})

btnhard.addEventListener("click", function(){
    colors = generateRandomColors(6);
    colorDisplay = document.querySelector("#colorDisplay");
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor= "rgb(70, 130, 180)";
    message.textContent = "";
    reset.textContent = "NEW COLORS";
    for (let y = 0; y < squares.length; y++) {
        squares[y].style.backgroundColor = colors[y];
        squares[3].classList.remove("remove");
        squares[4].classList.remove("remove");
        squares[5].classList.remove("remove");
    }
})

