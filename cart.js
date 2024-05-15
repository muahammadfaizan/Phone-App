// console.log("check cart");






const cartItems = JSON.parse(localStorage.getItem("cartItems"));
// console.log(cartItems);

const main = document.getElementById("main");
const totalamount = document.getElementById("total-amount")


function renderItems (){
    let total = 0 ;

    if(cartItems != null && cartItems.length > 0){
        for(let i = 0 ; i < cartItems.length ; i++){
            // console.log(cartItems[i])
            total += cartItems[i].price  * cartItems[i].quantity ;
            
            main.innerHTML += `
            <div class = "border border-light rounded m-5 p-3">
            <h1>Model : ${cartItems[i].brand + " " + cartItems[i].model}</h1>
            <h1>Quantity :
            <button class="btn btn-primary" onclick="addbutton()">+</button>
            ${cartItems[i].quantity} 
            <button class="btn btn-primary" onclick="lessbutton()">-</button>
            </h1>
            
            <h1>Price : ${cartItems[i].price}</h1>
            </div>`
            totalamount.innerHTML = `Total Amount = ${cartItems[i].quantity * cartItems[i].price}`
        }
        
    }else{
        // console.log("Bhai cart empty ha !");
        main.innerHTML += `<div class ="text-center mt-5">
        <h3>No item Found....!</h1>
        </div>`
    }

     
}



renderItems ()





function lessbutton() {
    // console.log("less cart")
    // renderItems()
}

lessbutton();

function addbutton() {
    // console.log("add cart")
    // renderItems() 
}

addbutton();
















