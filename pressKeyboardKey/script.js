const charID = document.querySelector("#charID");
const keyNote = document.querySelector("#keyNote");

const a = "You Pressed "

document.addEventListener("keypress", (event)=>{
    
    keyNote.innerHTML =   a + event.key;
    charID.innerHTML=event.charCode;
    

})