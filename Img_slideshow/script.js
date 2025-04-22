
let imgSlide = document.getElementById("image");
let img = ["img/1.jpg","img/2.jpg","img/3.jpg" ];

let i =0;
function sildeShow(){
    imgSlide.setAttribute("src",img[i]);
    
    
    if (i >= img.length){
        i = 0;
    } else {
        i++;
    }
    
    setTimeout(function(){
        sildeShow();
    },2000)

}

sildeShow()