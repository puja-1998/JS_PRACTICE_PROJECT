
let addPlayer = document.querySelector("#addbtn");
let parent = document.querySelector("#main");
let inputDiv = document.querySelector(".inputdiv");

let dataList = [];
addPlayer.addEventListener('click', (e) => {

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = today.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    today.toISOString().split('T')[0];
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let country = document.querySelector("#country").value;
    let score = parseFloat(document.querySelector("#score").value);
    
    
   
    if(!score || !fname || !lname || !country){
        alert("Entered All Fields")
        return
    }
    
    inputDiv.classList.add("inputdiv1");
    
        let addDetails = document.createElement("div");
        let nameDiv = document.createElement("div")
        let nameTag = document.createElement("p");
        let dateTag = document.createElement("p");
        let countryTag = document.createElement("p");
        let scoreTag =  document.createElement("p");
       
        let incbtn = document.createElement("button");
        let decbtn = document.createElement("button");
        let imgTag = document.createElement('img');
        imgTag.src = './deletebtn.png';

        nameTag.innerText = fname+ ' ' +lname;
        countryTag.innerText = country;
        scoreTag.innerText = score;
        
        incbtn.innerText = "+5";
        decbtn.innerText = "-5";

        dateTag.innerText=formattedDate;

        nameDiv.appendChild(nameTag);
        nameDiv.appendChild(dateTag);

        addDetails.appendChild(nameDiv);
        addDetails.appendChild(countryTag);
        addDetails.appendChild(scoreTag);
        addDetails.appendChild(imgTag);
        addDetails.appendChild(decbtn);
        addDetails.appendChild(incbtn);

        inputDiv.appendChild(addDetails);
        //dataList.push(addDetails);
        dataList.push({ 
            element: addDetails,
            scoreTag: scoreTag,
            score: score,
            name: fname + ' ' + lname,
            country: country
        });

       

        //console.log(nameTag, countryTag, scoreTag, imgTag, decbtn, incbtn)

        //style for container
        imgTag.alt = 'An example image';
        imgTag.width = 30; 
        addDetails.style.color = "white";
        addDetails.style.height = "100px";
        addDetails.style.width = "800px";
        addDetails.style.backgroundColor = " #1179CE";
        addDetails.style.display = "flex";
        addDetails.style.justifyContent = "space-between";
        addDetails.style.alignItems = "center";
        addDetails.style.gap = "10px";
        addDetails.style.padding = "0 20px";
        addDetails.style.borderTopRightRadius = "50px";
        addDetails.style.borderBottomRightRadius  = "50px";
        addDetails.style.margin="5px";
        addDetails.style.cursor="pointer"

        incbtn.style.border = "none";
        incbtn.style.background = "transparent"
        decbtn.style.border = "none";
        decbtn.style.background = "transparent";
        decbtn.style.color = "white";
        incbtn.style.color = "white";
        incbtn.style.cursor="pointer";
        decbtn.style.cursor="pointer";
         incbtn.style.fontSize="20px";
        decbtn.style.fontSize="20px";

        incbtn.addEventListener('click',()=>{
            scoreTag.innerText=parseFloat(scoreTag.innerText) + 5; 
           
            dataList.find(player => player.scoreTag === scoreTag).score = parseFloat(scoreTag.innerText)
            sortByScore()
        })
        decbtn.addEventListener('click',()=>{
            if(scoreTag.innerText<= 0){
                return;
            }
            else{
                scoreTag.innerText = parseFloat(scoreTag.innerText) - 5; 
                dataList.find(player => player.scoreTag === scoreTag).score = parseFloat(scoreTag.innerText);
                sortByScore()
            }
            
        })
        
        imgTag.addEventListener('click',()=>{
            addDetails.remove();
            dataList = dataList.filter(player => player.element !== addDetails);
            dataList = dataList.filter(player => player.element !== addDetails);
            sortByScore();
            if(inputDiv.innerHTML == ""){
                inputDiv.classList.remove("inputdiv1");
            }
            
        })

        sortByScore();
        // const sortData = () => {
        //     dataList.sort((a, b) => {
        //         return b.score - a.score;
        //     });
        // }
        function sortByScore() {
            // Sort the dataList array based on the score in descending order
            dataList.sort((a, b) => b.score - a.score);
        
            // Re-render the list in sorted order
            inputDiv.innerHTML = ''; // Clear the current list
            dataList.forEach(player => {
                inputDiv.appendChild(player.element); // Re-append sorted players
            });
        }
});




