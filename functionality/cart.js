let productsInCart = [];
const parentElement = document.querySelector("#buyItems");
// const cartSumPrice = document.querySelector(".subtotal"); 
const products = document.querySelectorAll(".product");

//const countTheSumPrice = function(){
//  let sumPrice = 0;
//  productsInCart.forEach(product =>{
//      sumPrice += product.price;
//  });
//}

const updateShoppingCartHTML = function(){
  if (productsInCart.length >0){
    let result = productsInCart.map(product =>{ //inner HTML does not change
      return `
      <li class="buyItem">
        <img src="${product.image}">
        <div>
          <h5>${product.name}</h5>
          <h6>$${product.price}</h6>
          <div>
            <button class="button-minus" data-id=${product.id}>-</button>  
            <span class="countOfProduct">${product.count}</span>
            <button class="button-plus" data-id=${product.id}>+</button>
          </div>
        </div>
      </li>`
  });
    parent.innerHTML =result.join('');
    cartSumPrice.innerHTML = "$" + countTheSumPrice(); 
    console.log("kmy") //works
  }
  else{
    parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>'
    console.log("PLease")
    cartSumPrice.innerHTML = ""; 
  }
  console.log("txt");

}

function updateProductsInCart(product){ //works
  for(let i=0; i<productsInCart.length; i++){
    if(productsInCart[i].id == product.id){
      productsInCart[i].count +=1;
      productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
      return;
    }
  }
  productsInCart.push(product);
  console.log("test"); //works
}

products.forEach(product => {
  product.addEventListener("click", (event)=>{ //works
    if (event.target.classList.contains("btn-cart")){
      const productID = event.target.dataset.productId;
      const productName = product.querySelector(".product-name").innerHTML;
      const productPrice = product.querySelector(".priceValue").innerHTML;
      const productImage = product.querySelector("img").src;

      let productToCart ={
        name: productName,
        image: productImage,
        id: productID,
        count: 1,
        price: +productPrice,
        basePrice: +productPrice
      }
      console.log("Hello World"); //works
      console.log(productsInCart); //works
      updateProductsInCart(productToCart);
      updateShoppingCartHTML();
    }
  })
})


//cart slides in from the right
function hideShowCart() {  
    const cart = document.querySelector('.cart');
    if (cart.classList.contains("showCart")){
      cart.classList.remove("showCart"); //close cart
    }
  
    else {
      cart.classList.add("showCart");
    }
}

// remove item from cart by clicking on the product when its highlighted red
var removeCartItem = document.getElementsByClassName("remove");
for (let i=0; i < removeCartItem.length; i++){
  var button = removeCartItem[i];
  button.addEventListener("click", function(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
  })
};