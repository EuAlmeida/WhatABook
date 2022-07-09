const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img-c img")

let idx = 0

function carrossel(){
    idx++;
    if(idx > img.length -1){
        idx = 0;
    }
    imgs.style.transform = 'translateX(${-idx})'
    
}