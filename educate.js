const one=document.querySelector(".one")
const two=document.querySelector(".two")
const three=document.querySelector(".three")
const four=document.querySelector(".four")
const five=document.querySelector(".five")
const six=document.querySelector(".six")
const h1=document.querySelector("h1")
const years=[one,two,three,four,five,six]
for (let period of years){
    const classe=period.className
    period.addEventListener("mouseover",()=>{
        document.querySelector("#"+classe).style.display="flex";
    })
    document.querySelector("#"+classe).addEventListener("mouseover",()=>{
        document.querySelector("#"+classe).style.display="flex";
    })

}
for (let period of years){
      let classe=period.className
    period.addEventListener("mouseout",()=>{
        
        document.querySelector("#"+classe).style.display="none";
    })
    document.querySelector("#"+classe).addEventListener("mouseout",()=>{
        classe=period.className
        document.querySelector("#"+classe).style.display="none";
    })
}
const title="let you and i delve into my academic progress so far:".split(" ")
window.addEventListener("load",()=>{
    let index=0
    const bitbybit=setInterval(()=>{
        if (index<title.length){
            h1.innerText+=" "+title[index]
            index++
        }else{
            h1.innerText=""
            index=0
        }

    },500)
})
