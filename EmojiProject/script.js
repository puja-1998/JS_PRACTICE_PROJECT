const sarchBtn = document.querySelector(".filter-emoji");
// const buttons = document.querySelectorAll(".btn");
const search = document.querySelector(".search");
const displayEmg = document.querySelector("#display-emoji");
const flag = document.querySelector("#flag");
const sports = document.querySelector("#sports");
const allbtn = document.querySelector("#allbtn");
const face = document.querySelector("#face");
const heart = document.querySelector("#heart");
const book = document.querySelector("#book");
const hand = document.querySelector("#hand");

search.addEventListener('keyup', (e)=>{
    loadEmojis(e.target.value.toLowerCase()) 
})


//Load All Data on Window
emojiList.forEach((emojis) =>{
        let emojiDiv = document.createElement("div")
        let pTag = document.createElement("p");

        pTag.innerText = emojis.emoji;
        pTag.style.width = "50px";
        pTag.style.fontSize = "50px";

        emojiDiv.appendChild(pTag);
        displayEmg.appendChild(emojiDiv);
});

allbtn.addEventListener('click', () => {
    displayEmg.innerHTML = "";
    emojiList.forEach((emojis) =>{

        let emojiDiv = document.createElement("div")
        let pTag = document.createElement("p");

        pTag.innerText = emojis.emoji;
        pTag.style.width = "50px";
        pTag.style.fontSize = "50px";

        emojiDiv.appendChild(pTag);
        displayEmg.appendChild(emojiDiv);
  });
});



face.addEventListener('click', () => {
    loadEmojis("face")
});

heart.addEventListener('click', () => {
    loadEmojis("heart")
});

book.addEventListener('click', () => {
    loadEmojis("book")
});

hand.addEventListener('click', (e) => {
    loadEmojis("hand")
});

flag.addEventListener('click', () => {
    loadEmojis("flag")
});

sports.addEventListener('click', () => {
    loadEmojis("sports")
});

let loadEmojis = (x) => {
    displayEmg.innerHTML="";
    emojiList.forEach((emojis)=>{
        if(emojis.aliases.includes(x) || emojis.description.includes(x) || emojis.tags.includes(x)){
            
            let emojiDiv = document.createElement("div")
            let pTag = document.createElement("p");

            pTag.innerText = emojis.emoji;
            pTag.style.width = "50px";
            pTag.style.fontSize = "50px";
            emojiDiv.appendChild(pTag);

            displayEmg.appendChild(emojiDiv);

        }   
    })
}
// function displayEmoji(value = emojiList){
//     displayEmg.innerHTML = "";
    
//     value.forEach(e => {
//         let emojiBox = document.createElement("span");
//         emojiBox.style.width = "50px";
//         emojiBox.style.fontSize = "50px";
//         emojiBox.innerText = e.emoji;
//         emojiBox.style.cursor = "pointer";
//         displayEmg.append(emojiBox);
//     });
// }

// Page Load Event Listener
// window.addEventListener('load',()=>{
//     displayEmoji(emojiList);
// })

// let loadFlag = ()=>{
//     displayEmg.innerHTML="";

//     emojiList.forEach((emojis)=>{
//         if(emojis.category == "Flags"){
    
//             let emojiDiv = document.createElement("div")
//             let pTag = document.createElement("p");

//             pTag.innerText = emojis.emoji;

//             emojiDiv.appendChild(pTag);

//             displayEmg.appendChild(emojiDiv);

//         }
//     })
// }
