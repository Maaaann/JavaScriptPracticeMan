

var buttonEle = document.querySelector("#btn");
var inputEle = document.querySelector("#Input");

buttonEle.onclick = function(){
    if (buttonEle.getAttribute('data-text')=="show"){
        inputEle.setAttribute('type','text');
        buttonEle.setAttribute('data-text','hide');
        buttonEle.innerHTML="Hide";
    }else{
        inputEle.setAttribute('type','password');
        buttonEle.setAttribute('data-text','show');
        buttonEle.innerHTML="show";
    }
}

