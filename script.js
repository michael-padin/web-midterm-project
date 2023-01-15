"use strict";

import { products } from "./products.js";
const productsWrapper = document.querySelector(".prods-wrapper");
const productDetailContainer = document.querySelector(".product");
const userProfileContainer = document.querySelector(".user-container");
const authOptions = document.querySelector(".account-options-hide");
const authLinks = document.querySelectorAll(".auth-links");
const catCardContainer = document.querySelectorAll(".card-container");
const catCardParent = document.querySelector(".cat-products");
const navLinks = document.querySelectorAll(".nav-links");
const cartBtn = document.querySelector(".nav-cart-btn");
const cartBackBtn = document.querySelector(".cart-back");
const cartSection = document.querySelector("#cart");
const cartContainer = document.querySelector(".cart__wrapper");
const cartProdsContainer = document.querySelector(".cart__products");
let addToCartBtn;
let closeBtn;
let buyNowBtn;

let cart = {
  quantity: 0,
  products: [],
  totalAmount: 0,
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeProductsByCat();
    closeProductDetail();
  });
});



// This function will show the cart
function showCart() {
  const totalAmountContainer = document.querySelector(".cart-total-amount");
  const placeOrderBtn = document.querySelector(".checkout-btn");

  // prevent window from scrolling
  document.body.style.overflow = "hidden";

  // add class name .cart-show
  cartSection.classList.toggle("cart-show");

  // delay 1ms to show cart container for animation only
  setTimeout(() => {
    cartContainer.classList.toggle("cart__wrapper-show");
  }, 100);

  cart.products.map((cartProd) => {
    const { id, title, price, thumbnail, size } = cartProd;
    let prodInfo = `
    <div class="cart-card-container">
      <div class="cart-prod-img-container">
        <img src=${thumbnail} alt="${title + id}" />
      </div>
      <div class="cart-prod-dtls">
        <h1 class="cart-prod-title">${title}</h1>
        <p class="cart-prod-title">Size: <b>${size}</b></p>
        <p class="cart-prod-price">Price: <b>₱ ${price.toLocaleString(
          ""
        )}.00</b></p>
      </div>
    </div>
    `;
    cartProdsContainer.innerHTML += prodInfo;
  });

  totalAmountContainer.innerHTML = `Total Amount: <b>₱ ${cart.totalAmount.toLocaleString()}.00</b>`;

  if (cart.products.length > 0) {
    placeOrderBtn.disabled = false;
  } else {
    placeOrderBtn.disabled = true;
  }

  placeOrderBtn.addEventListener("click", placeOrder);
  cartSection.addEventListener("click", hideCart);
  cartBackBtn.addEventListener("click", hideCart);
}



// This function will hide the cart
function hideCart() {
  cartContainer.classList.toggle("cart__wrapper-hide");
  cartContainer.classList.remove("cart__wrapper-show");
  setTimeout(() => {
    cartSection.classList.toggle("cart-hide");
    cartSection.classList.remove("cart-show");
  }, 200);

  cartProdsContainer.innerHTML = "";

  document.body.style.overflow = "";
}



// function to show login signup overlay
function showAuth() {
  authOptions.classList.toggle("account-options");
}




// function to display all products
function displayProducts() {
  // iterate data and append each element in products wrapper as children
  products.map((data) => {
    const { title, description, price, thumbnail, id } = data;

    const product = `
      <div class="prod-card-container">
        <div class="prod-img-container">
          <img class="prod-img" src=${thumbnail} alt="${
      title + id
    }"data-id=${id} />
        </div>
        <div class="prod-info-container">
          <p>${title.length > 18 ? title.slice(0, 18) + "...." : title}</p>
          <p style="font-weight: 600">₱ ${price.toLocaleString("en-US")}.00</p>
        </div>
      </div>`;

    productsWrapper.innerHTML += product;
  });
}





// function to display products by Category ie: dresses, jackets, lounge wear,
function displayProductsByCat(e) {
  const catName = e.currentTarget.innerText.split(" ").join("").toLowerCase();
  const catTopContainer = document.querySelector(".cat-top-container");
  const wrapperHide = document.querySelector(".cat-wrapper-hide");

  catTopContainer.innerHTML = `
    <div class="back-img-container"> <img src="/images/back.svg" alt="" /></div>
    <h1 class="cat-title">${e.currentTarget.innerText}</h1>
  `;
  wrapperHide.classList.toggle("cat-wrapper");

  products.map((prod) => {
    const { id, title, price, description, thumbnail, stock, category } = prod;
    if (catName === category) {
      const product = `
      <div class="prod-card-container">
        <div class="prod-img-container">
          <img class="prod-img" src=${thumbnail} alt="${
        title + description.slice(0, 15)
      }" data-id=${id} />
        </div>
        <div class="prod-info-container">
          <p>${title.length > 18 ? title.slice(0, 18) + "...." : title}</p>
          <p style="font-weight: 600">₱ ${price.toLocaleString("en-US")}.00</p>
        </div>
      </div>`;

      catCardParent.innerHTML += product;
    }
  });

  const backIcon = document.querySelector(".back-img-container");
  backIcon.addEventListener("click", closeProductsByCat);

  // prevent window from scrolling when viewing product
  document.body.style.overflow = "hidden";

  const prodCards = document.querySelectorAll(".prod-card-container");

  // display single product details
  prodCards.forEach((prod) => {
    prod.addEventListener("click", viewProdDetails);
  });

  document.body.style.overflow = "hidden";
}




// function close product by category overlay
function closeProductsByCat() {
  const wrapperHide = document.querySelector(".cat-wrapper-hide");
  const catProducts = document.querySelector(".cat-products");
  wrapperHide && wrapperHide.classList.remove("cat-wrapper");
  catProducts.innerHTML = "";
  document.body.style.overflow = "";
}

// function to display Product Details
function viewProdDetails(e) {
  // convert data id as integer
  const productId = parseInt(e.target.getAttribute("data-id"));

  products.map((prod) => {
    const { id, title, price, description, thumbnail, stock, size } = prod;

    if (id === productId) {
      const productInfo = `
        <div class="prod-dtls-wrapper">
          <div class="prod-dtls-container">
            <div class="close-img-container">
              <img src="/images/close.png" alt="close" />
            </div>
            <div class="prod-dtls-left">
              <div class="prod-dtls-img-container">
                <img src=${thumbnail} alt=${title} + id} />
              </div>
            </div>
            <div class="prod-dtls-right">
              <div class="prod-infos-container">
                <h1>${title}</h1>
                <p style="font-weight: 600">₱ ${price.toLocaleString()}.00</p>
                <p class = "prod-desc">${description}</p>
                <p>Size: ${size}</p>
                <p>Stock: ${stock}</p>
              </div>
              <div class="action-container">
                <div class="cart-btn-container">
                  <button type="button" class="cart-btn"  data-id = ${id}>Add to cart</button>
                </div>
                <div class="buy-btn-container">
                  <button type="button" class="buy-btn">Buy now</button>
                </div>
              </div>
            </div>
          </div>
       </div>`;

      //  append product info template to index.html as child
      productDetailContainer.innerHTML += productInfo;

      // prevent window from scrolling when viewing product
      document.body.style.overflow = "hidden";

      closeBtn = document.querySelector(".close-img-container");

      // close product info
      closeBtn.addEventListener("click", closeProductDetail);

      buyNowBtn = document.querySelector(".buy-btn");
      buyNowBtn.addEventListener("click", buyNow)

      addToCartBtn = document.querySelector(".cart-btn");
      addToCartBtn.addEventListener("click", addToCart);
    }
  });
}

// Close Product Detail
function closeProductDetail() {
  const prodDtlsWrapper = document.querySelector(".prod-dtls-wrapper");
  prodDtlsWrapper.classList.toggle("remove-box");
  prodDtlsWrapper && prodDtlsWrapper.remove();
  document.body.style.overflow = "";
}

// function for adding product in cart
function addToCart(e) {
  const productId = parseInt(e.currentTarget.getAttribute("data-id"));

  console.log(productId);

  console.log("hello");

  products.map((prod) => {
    const { id, price, title } = prod;

    if (productId === id) {
      cart.products.unshift({ ...prod });
      cart.quantity += 1;
      cart.totalAmount += price;
      displayCartMessage(title);
    }
  });
}

function displayCartMessage(prodName) {
  const messageWrapper = document.querySelector(".cart-message-wrapper");

  const message = `
    <div class="cart-message-container">
      <p>${prodName} added to your cart. <span class="view-message-cart">View Items</span></p>
    </div>
  `;
  messageWrapper.innerHTML += message;

  const viewCartItems = document.querySelectorAll(".view-message-cart");
  viewCartItems.forEach((message) =>
    message.addEventListener("click", () => {
      showCart();
      closeProductDetail();
    })
  );

  setTimeout(() => {
    document.querySelector(".cart-message-container").remove();
  }, 4000);
}


function buyNow () {
  displayOrderMessage();
  closeProductDetail()
}

function placeOrder() {
  displayOrderMessage();
  cart = {
    quantity: 0,
    products: [],
    totalAmount: 0,
  };
}

function displayOrderMessage() {
  console.log("order message");
  const orderMsgWrapper = document.querySelector(".order-msg-wrapper");
  const orderMessage = `

    <div class="order-msg-container">
      <div class="order-close-container">
        <img src="/images/close.png" alt="" />
      </div>
      <div class="ok-img-container">
        <img src="/images/ok.svg" alt="ok message" />
      </div>
      <h1>
        Woohoo! <br />
        Your order has been placed
      </h1>
      <p>
        Pull up a chair, sit back and relax <br />as your order is on it's way
        to you
      </p>
    
    </div>
  `;
  orderMsgWrapper.innerHTML = orderMessage;
  orderMsgWrapper.classList.toggle("order-msg-wrapper-show");

  const orderCloseContainer = document.querySelector(".order-close-container")
  orderCloseContainer.addEventListener("click", () => {
    orderMsgWrapper.classList.toggle("order-msg-wrapper-show")
  })

 
}

// trigger functions on webpage load
window.onload = () => {
  // display all products
  displayProducts();

  const prodCards = document.querySelectorAll(".prod-card-container");

  // display single product details
  prodCards.forEach((prod) => {
    prod.addEventListener("click", viewProdDetails);
  });

  // display sign up login
  userProfileContainer.addEventListener("click", showAuth);

  // if user click links
  authLinks.forEach((link) => link.addEventListener("click", showAuth));

  // display products by category
  catCardContainer.forEach((card) =>
    card.addEventListener("click", displayProductsByCat)
  );

  // toggle Cart
  cartBtn.addEventListener("click", showCart);
};
