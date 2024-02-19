function hideShowCart() {  
    const cart = document.querySelector('.cart');
    if (cart.classList.contains("showCart")){
      cart.classList.remove("showCart"); //close cart
    }
  
    else {
      cart.classList.add("showCart");
    }
}

//ADD TO CART
function addToCart(id){
    console.log(id);
}