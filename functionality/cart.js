const products = [
  {
    id: 0,
    name: "FluffyCloud Bites",
    price: 11.25,
    instock: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
    imgSrc:"C:\Users\Admin\Desktop\CS\website\FrontEndDev\Frontend-dev-project_1\assets\marshmallowProduct.png"
  },
  {
    id: 1,
    name: "DivineCocoa Euphoria",
    price: 10.00,
    instock: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
    imgSrc: "C:\Users\Admin\Desktop\CS\website\FrontEndDev\Frontend-dev-project_1\assets\chocolateProduct.png",
  },
  {
    id: 2,
    name: "HeavenlyHues Macarons",
    price: 15.20,
    instock: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
    imgSrc: "C:\Users\Admin\Desktop\CS\website\FrontEndDev\Frontend-dev-project_1\assets\macaronProduct.png",
  },
  {
    id: 3,
    name: "Minty Velvet Fudge",
    price: 15.00,
    instock: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
    imgSrc: "C:\Users\Admin\Desktop\CS\website\FrontEndDev\Frontend-dev-project_1\assets\redVelvetProduct.png",
  },
  {
    id: 4,
    name: "White Chocolate Whisper",
    price: 16.50,
    instock: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
    imgSrc: "C:\Users\Admin\Desktop\CS\website\FrontEndDev\Frontend-dev-project_1\assets\whiteChocProduct.png",
  },
  {
    id: 5,
    name: "Blueberry Bliss Buttons",
    price: 17.90,
    instock: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
    imgSrc: "C:\Users\Admin\Desktop\CS\website\FrontEndDev\Frontend-dev-project_1\assets\blueberryProduct.png",
  },
  {
      id: 6,
      name: "Pistachio Dream Drops",
      price: 16.70,
      instock: 8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      imgSrc: "C:\Users\Admin\Desktop\CS\website\FrontEndDev\Frontend-dev-project_1\assets\pistachioProduct.png",
    },
];

// Iterate over the 'products' array and assign each item to the 'product' variable
for (let i = 0; i < products.length; i++) {
  product = products[i];
  console.log(product); 
}

//ADD TO CART
function addToCart(id){
  console.log(id);
}

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
  });
}

