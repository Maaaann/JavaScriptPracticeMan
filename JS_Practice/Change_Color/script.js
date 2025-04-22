

var buttonEle = document.querySelector(".btn");
var myDivEle = document.querySelector(".mydiv");

var colors = ["Black", "green" ,"blue"];
var i = 0;
buttonEle.onclick = function(){
    myDivEle.style.backgroundColor = colors[i];
    i++;

    if (i==3){
        i=0
    }
}
