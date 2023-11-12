function reset(){
    let newDivvs = document.querySelectorAll('.newdiv')
    newDivvs.forEach((newDivvs) =>{
        newDivvs.style.background = "white"
    });
}
function destroy(){
    let newDivvs = document.querySelectorAll('.newdiv')
        newDivvs.forEach((newDivvs) =>{
            newDivvs.remove()
        });
}

let selector = document.querySelector('.selector')
function getSelectorVal(){
    return +selector.value
}
let sixtyFour = document.querySelector('.selector')
let twoFiftySix = document.querySelector('.sixtyfour')
let tenTwentyFour = document.querySelector('.tentwentyfour')
let fourNinetySix = document.querySelector('.fourninetysix')

// 8x8 = 64, 16x16 = 256, 32x32 = 1024, 64x64 = 4096

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

let resetter = document.querySelector('.reset')
resetter.addEventListener("click", reset)


console.log(selector.value)

selector.addEventListener("click",()=>{
    let newDivvs = document.querySelectorAll('.newdiv')
    newDivvs.forEach((newDivvs) =>{
        newDivvs.remove()
    });
    let tempVal = getSelectorVal()
    if(tempVal === 64){
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
    }}else if(tempVal === 128){
        for(i=0; i<128; i++){
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
    }else if(tempVal === 1024){
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
    }else if(tempVal === 4096){
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
    }

})



