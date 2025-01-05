const container = document.querySelector(".container");
const product = document.querySelector(".product");
const cart = document.querySelector(".cart");

let Total  = 0;
//Product Array
const Products = [
    {id: 1, name: "Product-1", price:100, que: 0},
    {id: 2, name: "Product-2", price:200, que: 0},
    {id: 3, name: "Product-3", price:300, que: 0}
    ];
    
Products.forEach((item)=>{ 
//created all Elemets 
let prodDetails = document.createElement("div");
let nam = document.createElement("p");
let price = document.createElement("p");
let buttons = document.createElement("div");
let sub = document.createElement("button");
let quantity = document.createElement("p");
let add = document.createElement("button");

//Assigning values to all elements

    nam.innerText = item.name;
    price.innerText = item.price;
    quantity.innerText = item.que;
    sub.innerText = "-";
    add.innerText = "+"
//connected to the div
prodDetails.appendChild(nam);
prodDetails.appendChild(price);
prodDetails.appendChild(buttons);

buttons.appendChild(sub);
buttons.appendChild(quantity);
buttons.appendChild(add);
console.log(prodDetails);

product.appendChild(prodDetails);

//style
prodDetails.style.display ="flex";
prodDetails.style.alignItems ="center"
prodDetails.style.gap= "50px";
prodDetails.style.backgroundColor = "#A6A6A6"
prodDetails.style.margin = "10px";
prodDetails.style.padding = "10px ";
sub.style.border = "none";
add.style.border = "none";
add.style.background ="transparent";
sub.style.background ="transparent";
prodDetails.style.color = "white";
add.style.color = "white";
sub.style.color = "white";
add.style.fontSize = "20px"
sub.style.fontSize = "20px"

buttons.classList.add("btns");

// Initialize the quantity counter
 //quant = 0;

// Event listener for incrementing the counter
add.addEventListener('click', function () {
    item.que++;
    updateQuantityDisplay();
    totalprice();
    loadCart()
});

// Event listener for decrementing the counter
sub.addEventListener('click', function () {
    if (item.que > 0) {
        item.que--;
        updateQuantityDisplay();
        totalprice();
        loadCart();
        
    }
});

// Function to update the displayed quantity
function updateQuantityDisplay() {
    quantity.textContent = item.que;
}

//Cart Section
const cartMessage = document.getElementById('cart-message');
cart.appendChild(cartMessage);

function loadCart(){
    cart.innerHTML = "";
    let totalDiv = document.createElement("div");
    let totalName = document.createElement("span");
    let totalPrice = document.createElement("span");

    Products.forEach((item1)=>{
        if(item1.que > 0){
            let cartDetails = document.createElement("div");
            let calculate = document.createElement("div");
            let cartNa = document.createElement("p");
            let cartque = document.createElement("p");
            let multi = document.createElement("p");
            let cartPrice = document.createElement("p");

            //let result = document.createElement("h2");
            //let totalVal = document.createElement("span");
            //let totalPrice = 0;
    
            cartNa.innerText = item1.name;
            cartque.innerText = item1.que;
            multi.innerText = "x";
            cartPrice.innerText = item1.price;
            //result.innerText = "Total: ";
            
    
            cartDetails.appendChild(cartNa);
            cartDetails.appendChild(calculate);
            calculate.appendChild(cartque);
            calculate.appendChild(multi);
            calculate.appendChild(cartPrice);
    
            cart.appendChild(cartDetails);
    
            cartDetails.style.display = "flex";
            cartDetails.style.gap = "50px";
            calculate.style.display = "flex"
            calculate.style.gap = "10px"
            cartDetails.style.backgroundColor = "#A6A6A6"
            cartDetails.style.margin = "10px";
            cartDetails.style.padding = "10px ";
            cartDetails.style.color = "white";
            
        } 
        if(Total > 0){
            totalDiv.style.display = "flex";
            totalDiv.style.justifyContent = "space-between";
            totalDiv.style.padding = "10px";
            totalDiv.style.margin = "10px";
            totalDiv.style.color = "white";
            totalDiv.style.fontWeight = "600";
            totalDiv.style.backgroundColor = "#A6A6A6";

            totalName.innerText = "Total";
            totalPrice.innerText = Total;

            totalDiv.appendChild(totalName);
            totalDiv.appendChild(totalPrice);
            cart.appendChild(totalDiv);
        }

        
    });
    if(Total == 0){
        cart.appendChild(cartMessage);
    }

    }

    //Total
    totalprice = () => {
        Total = 0;
        Products.forEach((item2)=>{
            Total += item2.que * item2.price;
        });
    }



});





