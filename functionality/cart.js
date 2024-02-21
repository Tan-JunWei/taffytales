let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
if (!productsInCart){
  productsInCart =[];
}
const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document.querySelector(".subtotal"); 
const totalItemsInCart = document.querySelector(".total-items-in-cart")
const products = document.querySelectorAll(".product");

const countTheSumPrice = function(){
  let sum = 0;
  productsInCart.forEach(item =>{
        sum += item.price;
  });
  return sum.toFixed(2);
}

const countTheTotalQuantity = function(){
  let totalQuantity = 0;
  productsInCart.forEach(item =>{
        totalQuantity += item.count;
  });
  return totalQuantity;
}

const updateShoppingCartHTML = function(){
  localStorage.setItem("shoppingCart", JSON.stringify(productsInCart));
  if (productsInCart.length >0){
    let result = productsInCart.map(product =>{
      return `
      <li class="buyItem">
        <div class="buyItem-item">
          <img src="${product.image}">
          <h5>${product.name}</h5>
        </div>
        <div class="buyItem-price">
          <h6>$${product.price.toFixed(2)}</h6>
        </div>
        <div class="buyItem-quantity">
          <div class="quantity-button-container">
            <button class="button-minus" data-id=${product.id}>-</button>  
            <span class="countOfProduct">${product.count}</span>
            <button class="button-plus" data-id=${product.id}>+</button>
          </div>
        </div>
      </li>`
  });
    parentElement.innerHTML = result.join('');
    cartSumPrice.innerHTML = "Subtotal (" + countTheTotalQuantity() + " items): $" + countTheSumPrice();
    totalItemsInCart.innerHTML = countTheTotalQuantity();
  }
  else{
    parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>'
    cartSumPrice.innerHTML = ""; 
  }
}

function updateProductsInCart(product){ 
  for(let i = 0; i < productsInCart.length; i++){
    if(productsInCart[i].id == product.id){
      productsInCart[i].count +=1;
      productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
      return;
    }
  }
  productsInCart.push(product);
  console.log("test"); 
}

products.forEach(item => {
  item.addEventListener("click", (event)=>{
    if (event.target.classList.contains("btn-cart")){
      const productID = event.target.dataset.productId;
      const productName = item.querySelector(".product-name").innerHTML;
      const productPrice = item.querySelector(".priceValue").innerHTML;
      const productImage = item.querySelector("img").src;

      let productToCart ={
        name: productName,
        image: productImage,
        id: productID,
        count: 1,
        price: +productPrice ,
        basePrice: +productPrice
      }
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

parentElement.addEventListener("click", (event)=> {
  const isPlusButton = event.target.classList.contains("button-plus");
  const isMinusButton = event.target.classList.contains("button-minus");
  if(isPlusButton || isMinusButton){
    for(let i = 0; i <productsInCart.length ; i++){
      if(productsInCart[i].id === event.target.dataset.id){
        if(isPlusButton){
          productsInCart[i].count += 1;
        }
        else if (isMinusButton){
          productsInCart[i].count -= 1;
        }
        productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
      }
      if(productsInCart[i].count <=0){
        productsInCart.splice(i,1);
      }
    }
    updateShoppingCartHTML();
  }
});

updateShoppingCartHTML();