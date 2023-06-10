let menu = document.getElementById("menu");
let x = document.getElementById("mark");
let showNAv = document.getElementById("show-nav");
let triplea= "triple a store";
let index = 1 ;
x.onclick = function(){
    showNAv.style.display = "none"
}
menu.onclick = function(){
    showNAv.style.display = "block"
}

function writeText(){
    document.querySelector(".trip").textContent = triplea.slice(0,index)
    index++
    if(index  > triplea.length){
        index = 1
    }
}

setInterval(() => {
    writeText()
}, 400);