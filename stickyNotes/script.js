let addBtn = document.querySelector("#button");
let textarea = document.querySelector("#text_area");
let color = document.querySelector("#color");
color.value = "#00ffa1";
let notes = document.querySelector("#notes_container");
let message = document.querySelector("#message");

function addNotes(){
    if(textarea.value === ""){
        alert('Please Enter a note');
        return;
    }
    let div = document.createElement("div");
    
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");

    div.appendChild(p);
    div.appendChild(cross_btn);
    message.style.display = "none";
    
    cross_btn.innerText = 'X';
    p.innerText = textarea.value;

    div.style.backgroundColor = color.value;
    div.style.padding = "10px";
    div.style.margin = "20px";
    div.style.height = "120px";
    div.style.width = "fit-content";
    div.style.minWidth = "170px";
    div.style.position = "relative"; 
    div.style.display = "flex";
    div.style.flexWrap = "wrap";
    
    

    notes.appendChild(div);

    isNotesPresent();

    textarea.value = "";

    cross_btn.addEventListener("click", function(){
        div.style.display = "none";
        isNotesPresent();
    });
    
    
    // cross_btn.style.position = "absolute";
    // cross_btn.style.top = "5px";
    // cross_btn.style.right = "5px";
    // cross_btn.style.margin = "20px";
    cross_btn.style.color = "black";
    cross_btn.style.fontSize = "16px";
    cross_btn.style.backgroundColor = "transparent";
    cross_btn.style.border = "none";
    cross_btn.style.position = "absolute";
    cross_btn.style.right = "8px";
    cross_btn.style.top = "5px"
}
addBtn.addEventListener('click',addNotes);

addBtn[1].addEventListener("click", () =>
{
  notes.innerHTML = "";
  isNotesPresent();
});

addBtn[0].addEventListener("click",addNotes ) ;
     
function isNotesPresent(){
    let notesArr = notes.childNodes
    if(notesArr.length > 0){
        message.style.display = "none";
    }
    else{
        message.style.display = "block";
    }
}
