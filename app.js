let sixtyFour = document.querySelector('.sixtyfour')
let twoFiftySix = document.querySelector('.twofiftysix')
let tenTwentyFour = document.querySelector('.tentwentyfour')
let fourNinetySix = document.querySelector('.fourninteysix')
let resetter = document.querySelector('.reset')
function reset(){
    let newDivvs = document.querySelectorAll('.newdiv')
    newDivvs.forEach((newDivvs) =>{
        newDivvs.style.background = "white"
    });
}


for(i=0; i<64; i++){
    let div = document.createElement("div");
    div.className = "newdiv",
    div.style.width = "80px";
    div.style.height = "80px";
    div.style.background = "white";
    div.addEventListener("mousedown", ()=>{
        div.style.background = "black";

    })
    div.addEventListener("mouseover", ()=>{
        div.style.background = "black";

    })

    document.querySelector('.container').appendChild(div)
}

sixtyFour.addEventListener("click", ()=>{
    let newDivvs = document.querySelectorAll('.newdiv')
    newDivvs.forEach((newDivvs) =>{
        newDivvs.remove()
    });
    for(i=0; i<64; i++){
        let div = document.createElement("div");
        div.className = "newdiv",
        div.style.width = "80px";
        div.style.height = "80px";
        div.style.background = "white";
        div.addEventListener("mousedown", ()=>{
            div.style.background = "black";
    
        })
        div.addEventListener("mouseover", ()=>{
            div.style.background = "black";
    
        })
    
        document.querySelector('.container').appendChild(div)
    }
})
twoFiftySix.addEventListener("click", ()=>{
    let newDivvs = document.querySelectorAll('.newdiv')
    newDivvs.forEach((newDivvs) =>{
        newDivvs.remove()
    });
    for(i=0; i<256; i++){
        let div = document.createElement("div");
        div.className = "newdiv",
        div.style.width = "40px";
        div.style.height = "40px";
        div.style.background = "white";
        div.addEventListener("mousedown", ()=>{
            div.style.background = "black";
    
        })
        div.addEventListener("mouseover", ()=>{
            div.style.background = "black";
    
        })
    
        document.querySelector('.container').appendChild(div)
    }
})
tenTwentyFour.addEventListener("click", ()=>{
    let newDivvs = document.querySelectorAll('.newdiv')
    newDivvs.forEach((newDivvs) =>{
        newDivvs.remove()
    });
    for(i=0; i<1024; i++){
        let div = document.createElement("div");
        div.className = "newdiv",
        div.style.width = "20px";
        div.style.height = "20px";
        div.style.background = "white";
        div.addEventListener("mousedown", ()=>{
            div.style.background = "black";
    
        })
        div.addEventListener("mouseover", ()=>{
            div.style.background = "black";
    
        })
    
        document.querySelector('.container').appendChild(div)
    }
})
fourNinetySix.addEventListener("click", ()=>{
    let newDivvs = document.querySelectorAll('.newdiv')
    newDivvs.forEach((newDivvs) =>{
        newDivvs.remove()
    });
    for(i=0; i<4096; i++){
        let div = document.createElement("div");
        div.className = "newdiv",
        div.style.width = "10px";
        div.style.height = "10px";
        div.style.background = "white";
        div.addEventListener("mousedown", ()=>{
            div.style.background = "black";
    
        })
        div.addEventListener("mouseover", ()=>{
            div.style.background = "black";
    
        })
    
        document.querySelector('.container').appendChild(div)
    }
})
resetter.addEventListener("click", reset)







