let container = document.querySelector(".container")
let orderbtn = document.querySelector(".orderbtn");
let food = document.querySelector(".food");


orderbtn.addEventListener('click', ()=>{
    container.innerHTML = null;
    

    //food.classList.add(".food")
    
    let seletdiv = document.createElement("seletdiv");

    
    let h1 = document.createElement("h1");
    h1.innerText = "Please Select Your Favourite Food";

    let btn = document.createElement("button");
    btn.innerText = "Order Food";

    // Create a checkbox element
    var checkbox1 = document.createElement("input");
    checkbox1.type = "checkbox";  // Set the type to checkbox
    checkbox1.id="burger";
    checkbox1.name = "check";
   

    // Create a label element for the checkbox
    var label1 = document.createElement("label");
    label1.innerHTML = "Burger";
    label1.setAttribute("for","checkbox1")

    // Create a checkbox element
    var checkbox2 = document.createElement("input");
    checkbox2.type = "checkbox";  // Set the type to checkbox
    checkbox2.id="fries";
    checkbox2.name = "check";
    

    // Create a label element for the checkbox
    var label2 = document.createElement("label");
    label2.innerHTML = "Fries";
    label2.setAttribute("for","checkbox2")

    // Create a checkbox element
    var checkbox3 = document.createElement("input");
    checkbox3.type = "checkbox";  // Set the type to checkbox
    checkbox3.id="drink";
    checkbox3.name = "check";

    // Create a label element for the checkbox
    var label3 = document.createElement("label");
    label3.innerHTML = "Drink";
    label3.setAttribute("for","checkbox3")


    seletdiv.appendChild(checkbox1);
    seletdiv.appendChild(label1);
    seletdiv.appendChild(checkbox2);
    seletdiv.appendChild(label2);
    seletdiv.appendChild(checkbox3);
    seletdiv.appendChild(label3);

    food.appendChild(h1);
    food.appendChild(seletdiv);
    food.appendChild(btn);

    seletdiv.classList.add("checkDiv")
    btn.classList.add("orderbtn")
    // seletdiv.style.display="flex";
    // seletdiv.style.gap="10px"


    
    // take random time between 1 to 4 sec
    function randomTime(){
        return Math.floor(Math.random() * 3000) + 1000; 
    }

    // take random id between 100 to 1099 
    function randomId(){
        return Math.floor(Math.random()*1000)+100;
    }

    

    let foodDivParent = document.createElement("div")

    //click event for order button
    btn.addEventListener('click',async ()=>{
        let listArr = [];
        let checks = document.getElementsByName("check");

        checks.forEach((check)=>{
            if(check.checked){
                listArr.push(check.id);
            } 
        })

        if(listArr.length === 0){
            alert("Please select atleast one item");
            return;
        }
        
        foodDivParent.innerHTML=""
        let foodDiv1=document.createElement("div");
        let foodimg = document.createElement("img");
        let foodidval = document.createElement("span");

        foodidval.innerHTML=null
        foodidval.innerText = `Order ID : ${randomId()}`;

        
        
       let fetchData = ()=>{
            let x = Math.floor(Math.random()*listArr.length);
            let imgref = listArr[x];

            switch(imgref){
                case 'burger':
                    foodimg.src= 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
                    break;
                case 'fries':
                    foodimg.src = 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                    break;
                case 'drink':
                    foodimg.src = 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                    break;
                default:
                    foodimg.src = 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
            }
            foodDiv1.appendChild(foodimg);
            foodDiv1.appendChild(foodidval);

            foodDivParent.appendChild(foodDiv1)
            food.appendChild(foodDivParent)

            foodimg.style.height = "300px";
            foodimg.style.width = "300px";
            foodimg.style.borderRadius = "30px";
            
            foodimg.classList.add("img");
            foodidval.classList.add("pTag");
            
       }

       

        // creating promise for order food
        const orderFood = ()=>{
            return new Promise((resolve)=>{
                setTimeout(function(){
                    fetchData();
                    resolve();
                }, randomTime())
            });
        };
        await orderFood();
        
    });

});

