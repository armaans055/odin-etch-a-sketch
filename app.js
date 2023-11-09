let resetter = document.querySelector('.reset')
for(i=0; i<1024; i++){
    let div = document.createElement("div");
    div.className = "newdiv",
    div.style.width = "20px";
    div.style.height = "20px";
    div.style.background = "white";
    div.addEventListener("mouseover", ()=>{
        div.style.background = "black";

    })

    document.querySelector('.container').appendChild(div)
}
let divs = document.querySelectorAll('.newdiv')

function reset(){
    let divs = document.querySelectorAll('.newdiv')
    divs.style.background= "white"
}

resetter.addEventListener("click", reset())

