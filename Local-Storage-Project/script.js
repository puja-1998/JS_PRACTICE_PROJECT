let textarea = document.querySelector('#textarea');
let data = document.querySelector('.data');

const userInput = () =>{
  localStorage.setItem('text', textarea.value);
}

const renderData = ()=>{
    if (localStorage.getItem("text")) {
        textarea.value = localStorage.getItem("text");
    }
    //textarea.innerText = localStorage.getItem(textarea.value);
   
}

// data.addEventListener('input', renderData)
textarea.addEventListener("input", userInput);

// if(!localStorage.getItem('textarea')){
    
//     userInput();
// }
renderData();
