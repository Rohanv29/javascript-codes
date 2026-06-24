const istatus=document.querySelector("h5")
const add=document.querySelector("#add")
// const rem=document.querySelector("#remove")
let check=0;
add.addEventListener("click",function(){
    if(check==0){
        istatus.innerHTML="following"
        istatus.style.color="green"
        check=1;
    }
    else{
        istatus.innerHTML="not followed"
        istatus.style.color="red"
        check=0;        
    }
})
// rem.addEventListener("click",function(){
//     istatus.innerHTML="follow suggestions"
// })