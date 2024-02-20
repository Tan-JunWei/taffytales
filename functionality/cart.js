const products = [
  {
    id: 0,
    name: "FluffyCloud Bites",
    price: 11.25,
    instock: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
    imgSrc:"../assets/marshmallowProduct.png",
    imgid:"img1",
  },
  {
    id: 1,
    name: "DivineCocoa Euphoria",
    price: 10.00,
    instock: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
    imgSrc: "../assets/chocolateProduct.png",
    imgid:"img2",
  },
  {
    id: 2,
    name: "HeavenlyHues Macarons",
    price: 15.20,
    instock: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
    imgSrc: "../assets/macaronProduct.png",
    imgid:"img3",
  },
  {
    id: 3,
    name: "Minty Velvet Fudge",
    price: 15.00,
    instock: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
    imgSrc: "../assets/redVelvetProduct.png",
    imgid:"img4",
  },
  {
    id: 4,
    name: "White Chocolate Whisper",
    price: 16.50,
    instock: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
    imgSrc: "../assets/whiteChocProduct.png",
    imgid:"img5",
  },
  {
    id: 5,
    name: "Blueberry Bliss Buttons",
    price: 17.90,
    instock: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
    imgSrc: "../assets/blueberryProduct.png",
    imgid:"img6",
  },
  {
      id: 6,
      name: "Pistachio Dream Drops",
      price: 16.70,
      instock: 8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      imgSrc: "../assets/pistachioProduct.png",
      imgid:"img7",
    },
];

function addToCart(id){
  products.forEach( (product) => {
    console.log(id);
  });
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
  })
};