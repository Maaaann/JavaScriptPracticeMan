

var buttonEle = document.querySelector("#btn");
var inputEle = document.querySelector("#Input");

buttonEle.addEventListener('click',togPassword);


function togPassword(){
    if (buttonEle.getAttribute('data-text')=="show"){
        inputEle.setAttribute('type','text');
        this.setAttribute('data-text','hide');
        this.innerHTML="Hide";
    }else{
        inputEle.setAttribute('type','password');
        this.setAttribute('data-text','show');
        this.innerHTML="show";
    }
}

