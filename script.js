const display = document.getElementById('display');


function appendToDisplay(input){
    display.value += input;
}

function clearInput(){
    display.value = "";
}

function answer(){
    display.value = eval(display.value)
}