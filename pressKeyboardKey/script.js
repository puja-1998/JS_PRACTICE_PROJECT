//const charID = document.querySelector("#charID");
const keyNote = document.querySelector("#keyNote");
const container = document.querySelector(".container");
const a = "You Pressed "

document.addEventListener("keypress", (event)=>{
    const key = event.key; 
    
    keyNote.innerHTML =   a + key;
   //a.style.color = 'green';
    //charID.innerHTML=event.charCode;

    // Create a new <h1> element
    const charID = document.createElement('h2');

    // Set the content for the <h1> element
    charID.innerHTML = event.charCode;
    
    // Optionally, you can add a class or style
    charID.style.color = 'green';

    container.appendChild(charID);
    
})