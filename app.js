function reset(){
    let newDivvs = document.querySelectorAll('.newdiv')
    newDivvs.forEach((newDivvs) =>{
        newDivvs.style.background = "white"
    });
}
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

let resetter = document.querySelector('.reset')
resetter.addEventListener("click", reset)
