
let number = document.getElementById("number");
let button = document.getElementById("button");
let list = document.getElementById("list")




button.addEventListener("click",()=>{
let i = 1;

while(i<=+(number.value)){
    let liste = [];
    let random1 = Math.ceil(Math.random()*89);
    let random2 = Math.ceil(Math.random()*89);
    let random3 = Math.ceil(Math.random()*89);
    let random4 = Math.ceil(Math.random()*89);
    let random5 = Math.ceil(Math.random()*89);
    let random6 = Math.ceil(Math.random()*89);
    let random7 = Math.ceil(Math.random()*89);
    let random8 = Math.ceil(Math.random()*89);
    liste.push(random1,random2,random3,random4,random5,random6);
    liste.sort((a,b)=> a-b)
    if((random1!== random7)&&(random2!== random7)&&(random3!== random7)&&(random4!== random7)&&(random5!== random7)&&(random6 !== random7)){
        liste.push("| *",random7,"* |")
        
        

    }
    if(random8){
        liste.push(random8)
    }
    let li = document.createElement("p")
    let text = document.createTextNode(liste.join(" "))
    li.appendChild(text)
    list.appendChild(li)
    i++
   


}


})


