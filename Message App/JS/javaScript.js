
// setting up the elements as a variables

var inputEle = document.getElementById("input");
var buttonEle = document.getElementById("btn");
var msgEle = document.getElementById("msg");


buttonEle.onclick = function(){

    // getting the input value & storing it to a new variable
    var inputValue = inputEle.value; 
    console.log(inputValue);
    
    // Store the input value to the Paragraph
    msgEle.innerHTML = inputValue

    //remove the written input 
    inputEle.value="";
}