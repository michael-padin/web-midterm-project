const products = [
  {
    id: 1,
    title: "V-neck mini dress",
    description:
      "Short, A-line dress in a cotton weave. Deep V-neck front and back, narrow, tie-top shoulder straps, and horizontal ties at the back. Unlined.",
    price: 899,
    discountPercentage: 15.05,
    rating: 4.65,
    stock: 21,
    size: "M",
    category: "dresses",
    thumbnail: "./images/products/dresses/dress01.jpg",
  },
  {
    id: 2,
    title: "V-neck dress",
    description:
      "Short dress in woven fabric with a slight sheen. Deep V-neck front and back with horizontal ties at the back of the neck, and voluminous, wide 3/4-length sleeves with narrow, covered elastication at the cuffs. Gathered seam under the bust at the front and at the back of the waist. Unlined.",
    price: 1190,
    rating: 4.65,
    stock: 21,
    size: "M",
    category: "dresses",
    thumbnail: "./images/products/dresses/dress02.webp",
  },
  {
    id: 3,
    title: "Ribbed jersey dress",
    description:
      "Long-sleeved dress in ribbed cotton jersey with a deep, round neckline, fitted bodice and flared skirt.",
    price: 1490,
    rating: 4.65,
    stock: 21,
    size: "S",
    category: "dresses",
    thumbnail: "./images/products/dresses/dress03.webp",
  },
  {
    id: 4,
    title: "Jersey bodycon dress",
    description:
      "Calf-length, sleeveless bodycon dress in jersey. Narrow, adjustable shoulder straps and a sweetheart neckline. Shaped cups, flat felled seams front and back, a seam at the waist and a straight-cut hem.",
    price: 1190,
    rating: 4.65,
    stock: 21,
    size: "L",
    category: "dresses",
    thumbnail: "./images/products/dresses/dress04.webp",
  },
  {
    id: 5,
    title: "Wide twill trousers",
    description:
      "Stretch cotton twill long pants with five pockets, a high waist, a zip-and-button fly, and wide, straight legs.",
    price: 549,
    rating: 5,
    size: "M",
    stock: 34,
    category: "trousers",
    thumbnail: "./images/products/trousers/trouser01.webp",
  },
  {
    id: 6,
    title: "Pull-on cropped trousers",
    description:
      "Ankle-length pants made of viscose with a delicate drape. Wide, straight legs, a high waist with concealed elastic, and covert side pockets.",
    price: 999,
    rating: 5,
    stock: 34,
    size: "S",
    category: "trousers",
    thumbnail: "./images/products/trousers/trouser02.webp",
  },
  {
    id: 7,
    title: "Button-front trousers",
    description:
      "Trousers in heavy jersey. High waist with concealed elastication, decorative buttons at the front and wide, straight legs.",
    price: 1190,
    rating: 5,
    stock: 34,
    size: "M",
    category: "trousers",
    thumbnail: "./images/products/trousers/trouser03.webp",
  },
  {
    id: 8,
    title: "Canvas cargo trousers",
    description:
      "Relaxed-fit cargo trousers in cotton canvas. Low waist with covered elastication at the sides and back, a zip fly with a press-stud, diagonal side pockets and straight legs. Flap pocket on each leg and an extra pocket on one leg.",
    price: 999,
    rating: 5,
    size: "L",
    stock: 34,
    category: "trousers",
    thumbnail: "./images/products/trousers/trouser04.webp",
  },
  {
    id: 9,
    title: "Hooded jacket",
    description:
      "Jacket in sweatshirt fabric with a lined drawstring hood, zip down the front, side pockets and ribbing at the cuffs and hem.",
    price: 999,
    rating: 5,
    stock: 34,
    size: "S",
    category: "jackets",
    thumbnail: "./images/products/jackets/jacket01.jpg",
  },
  {
    id: 10,
    title: "Relaxed Fit Zip-through hoodie",
    description:
      "Sweatshirt-style hoodie with a zip-up front. Relaxed fit with a zip down the front, welt side pockets that are diagonally positioned, and ribbing at the cuffs and hem. Inside is softly brushed.",
    price: 999,
    rating: 5,
    stock: 32,
    size: "M",
    category: "jackets",
    thumbnail: "./images/products/jackets/jacket02.jpg",
  },
  {
    id: 11,
    title: "Puffer jacket",
    description:
      "Quilted puffer jacket in woven fabric. Relaxed fit with a stand-up collar, zip down the front, welt front pockets, covered elastication at the cuffs and an elasticated drawstring with cord stoppers at the hem. Lined.",
    price: 2290,
    rating: 5,
    stock: 35,
    size: "S",
    category: "jackets",
    thumbnail: "./images/products/jackets/jacket03.webp",
  },
  {
    id: 12,
    title: "Drawstring zip-through hoodie",
    description:
      "Zip-through hoodie in sweatshirt fabric made from a cotton blend with a lined hood and zip down the front. Dropped shoulders, long sleeves with covered elastication at the cuffs, and covered elastication and a drawstring at the hem. Soft brushed inside.",
    price: 999,
    rating: 5,
    stock: 32,
    size: "L",
    category: "jackets",
    thumbnail: "./images/products/jackets/jacket04.jpg",
  },
  {
    id: 13,
    title: "Slim High Ankle Jeans",
    description:
      "5-pocket, ankle-length jeans in washed, stretch denim with a high waist, zip fly and button, and slim legs.",
    price: 1190,
    rating: 4.65,
    stock: 21,
    category: "jeans",
    size: "M",
    thumbnail: "./images/products/jeans/jeans01.jpg",
  },
  {
    id: 14,
    title: "Super Skinny High Jeans",
    description:
      "High-waisted jeans in washed, superstretch denim with a zip fly and button, fake front pockets, back pockets and super-skinny legs.",
    price: 999,
    rating: 4.65,
    stock: 21,
    category: "jeans",
    thumbnail: "./images/products/jeans/jeans02.jpg",
    size: "S",
  },
  {
    id: 15,
    title: "Mom High Ankle Jeans",
    description:
      "5-pocket, ankle-length jeans in washed denim with a high waist, zip fly and button and gently tapered legs.",
    price: 1290,
    rating: 4.65,
    stock: 21,
    category: "jeans",
    thumbnail: "./images/products/jeans/jeans03.jpg",
    size: "S",
  },
  {
    id: 16,
    title: "Wide High Jeans",
    description:
      "5-pocket jeans in sturdy cotton denim with a high waist and wide, straight legs.",
    price: 1690,
    rating: 4.65,
    stock: 21,
    category: "jeans",
    thumbnail: "./images/products/jeans/jeans04.jpg",
    size: "S",
  },
  {
    id: 17,
    title: "2-pack jersey pyjama bottoms",
    description:
      "Pyjama bottoms in soft jersey with an elasticated, drawstring waist, side pockets and tapered legs with cuffed hems.",
    price: 1490,
    rating: 4.65,
    stock: 21,
    category: "loungewear",
    thumbnail: "./images/products/loungewear/loungewear01.webp",
    size: "S",
  },
  {
    id: 18,
    title: "Twill dressing gown",
    description:
      "Long dressing gown in soft cotton twill with a detachable tie belt at the waist.",
    price: 1990,
    rating: 4.65,
    stock: 21,
    category: "loungewear",
    thumbnail: "./images/products/loungewear/loungewear02.webp",
    size: "S",
  },
  {
    id: 19,
    title: "Cotton poplin shorts",
    description:
      "Shorts in cotton poplin. High waist with covered elastication, a fake fly with decorative buttons and discreet pockets in the side seams.",
    price: 899,
    rating: 4.65,
    stock: 21,
    category: "loungewear",
    thumbnail: "./images/products/loungewear/loungewear03.webp",
    size: "S",
  },
  {
    id: 20,
    title: "Cropped velour zip-though hoodie",
    description:
      "Cropped zip-through hoodie in soft velour with a lined hood, zip down the front and trims at the cuffs and hem.",
    price: 999,
    rating: 4.65,
    stock: 21,
    category: "loungewear",
    thumbnail: "./images/products/loungewear/loungewear04.jpg",
    size: "S",
  },
];

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
const cartQtyContainer = document.querySelector(".cart-qty-container");
const contactForm = document.querySelector(".contact-form-container ");

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

  // loop items in cart and append each product in cart section 
  cart.products.map((cartProd) => {
    const { id, title, price, thumbnail, size } = cartProd;
    let prodInfo = `
    <div class="cart-card-container">
      <div class="cart-prod-img-container">
        <img src=${thumbnail} alt="${title + id}" />
      </div>
      <div class="cart-prod-dtls">
        <h1 class="cart-prod-title">${title}</h1>
        <div class = "cart-prod-size-container flex">
        <label htmlFor="">Size</label>
        <p class="cart-prod-size">${size}</p>
        </div>
        <div class = "cart-prod-size-container flex">
        <label htmlFor="">Quantity</label>
        <p class="cart-prod-size">1</p>
        </div>
        <div class = "cart-prod-price-container flex">
        <label htmlFor="">Price</label>
        <p class="cart-prod-price">₱${price.toLocaleString()}.00</p>
        </div>
      
        
      </div>
    </div>
    `;
    cartProdsContainer.innerHTML += prodInfo;
  });

  
  totalAmountContainer.innerHTML = `
    <div class = "cart__bottom-info">
      <div class="total-amount-text">
        Total (${cart.quantity} ${cart.quantity > 1 ? "items" : "item"}):
      </div>
      <div class="total-amount-price">
        ₱${cart.totalAmount.toLocaleString()}.00
      </div>
    </div>`;

  // disable place order button if there no items in cart
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
    const { title, price, thumbnail, id } = data;

    const product = `
      <div class="prod-card-container">
        <div class="prod-img-container">
          <img class="prod-img" src=${thumbnail} alt="${
      title + id
    }"data-id=${id} />
        </div>
        <div class="prod-info-container">
          <p>${title.length > 26 ? title.slice(0, 26) + "...." : title}</p>
          <p class = "info-price">₱${price.toLocaleString("en-US")}.00</p>
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
    <div class="back-img-container"> <img src="./images/back.svg" alt="" /></div>
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
          <p>${title.length > 26 ? title.slice(0, 26) + "...." : title}</p>
          <p class = "info-price">₱${price.toLocaleString("en-US")}.00</p>
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
            <img src="images/close.png" alt="close" />
          </div>
          <div class="prod-dtls-left">
            <div class="prod-dtls-img-container">
              <img src="${thumbnail}" alt="${title}" + id} />
            </div>
          </div>
          <div class="prod-dtls-right">
            <div class="prod-infos-container">
              <p class="prod-info-title">${title}</p>
              <div class="prod-info-price-container">
                <p class="prod-info-price">
                  ₱${price.toLocaleString()}.00
                </p>
              </div>
              <div class="prod-info-desc-container flex">
                <label htmlFor="">Description</label>
                <p class="prod-desc">${description}</p>
              </div>
              <div class="prod-info-size-container flex">
                <label htmlFor="">Size</label>
                <p>${size}</p>
              </div>
              <div class="prod-info-stock-container flex">
                <label htmlFor="">Stock</label>
                <p>${stock}</p>
              </div>
            </div>
            <div class="action-container">
              <div class="cart-btn-container">
                <button type="button" class="cart-btn" data-id="${id}">
                  Add to cart
                </button>
              </div>
              <div class="buy-btn-container">
                <button type="button" class="buy-btn">Buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

      //  append product info template to index.html as child
      productDetailContainer.innerHTML += productInfo;

      // prevent window from scrolling when viewing product
      document.body.style.overflow = "hidden";

      closeBtn = document.querySelector(".close-img-container");

      // close product info
      closeBtn.addEventListener("click", closeProductDetail);

      buyNowBtn = document.querySelector(".buy-btn");
      buyNowBtn.addEventListener("click", buyNow);

      addToCartBtn = document.querySelector(".cart-btn");
      addToCartBtn.addEventListener("click", addToCart);
    }
  });
}

// Close Product Detail
function closeProductDetail() {
  const prodDtlsWrapper = document.querySelector(".prod-dtls-wrapper");
  prodDtlsWrapper && prodDtlsWrapper.classList.toggle("remove-box");
  prodDtlsWrapper && prodDtlsWrapper.remove();
  document.body.style.overflow = "";
}

function appendCartQty() {
  cartQtyContainer.innerHTML = cart.quantity
    ? `<div class = "cart-qty"><span>${cart.quantity}</span></div>`
    : "";
}

// function for adding product in cart
function addToCart(e) {
  const productId = parseInt(e.currentTarget.getAttribute("data-id"));

  products.map((prod) => {
    const { id, price, title } = prod;

    if (productId === id) {
      cart.products.unshift({ ...prod });
      cart.quantity += 1;
      cart.totalAmount += price;
      displayCartMessage(title);
    }
  });

  appendCartQty();
}

// function to notify user if item is added in cart
function displayCartMessage(prodName) {
  const messageWrapper = document.querySelector(".cart-message-wrapper");

  const message = `
    <div class="cart-message-container">
      <p>${prodName} added to your cart. <span class="view-message-cart">View item</span></p>
    </div>
  `;
  messageWrapper.innerHTML += message;

  const viewCartItems = document.querySelectorAll(".view-message-cart");
  viewCartItems.forEach((message) =>
    message.addEventListener("click", () => {
      closeProductDetail();
      showCart();
    })
  );

  setTimeout(() => {
    document.querySelector(".cart-message-container").remove();
  }, 4000);
}

// buy now button
function buyNow() {
  displayOrderMessage();
  closeProductDetail();
}

// place order button
function placeOrder() {
  displayOrderMessage();
  cart = {
    quantity: 0,
    products: [],
    totalAmount: 0,
  };
  appendCartQty();
}

// display place order message
function displayOrderMessage() {
  const orderMsgWrapper = document.querySelector(".order-msg-wrapper");
  const orderMessage = `
    <div class="order-msg-container">
      <div class="order-close-container">
        <img src="images/close.png" alt="" />
      </div>
      <div class="ok-img-container">
        <img src="images/ok.svg" alt="ok message" />
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

  const orderCloseContainer = document.querySelector(".order-close-container");
  orderCloseContainer.addEventListener("click", () => {
    orderMsgWrapper.classList.toggle("order-msg-wrapper-show");
  });
}

// send message button
function displaySendMessage(e) {
  e.preventDefault();

  let fullName = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  fullName.value = "";
  email.value = "";
  message.value = "";
  displayContactFeedback();
}

function displayContactFeedback() {
  const orderMsgWrapper = document.querySelector(".contact-msg-wrapper");
  const orderMessage = `

    <div class="order-msg-container">
      <div class="order-close-container">
        <img src="images/close.png" alt="" />
      </div>
      <div class="ok-img-container">
        <img src="images/send.png" alt="ok message" />
      </div>
      <h1>
        Woohoo! <br />
        Thank you for getting in touch!
      </h1>
      <p>
      We appreciate you contacting us. One of our customer support will get back in touch with you soon! Have a great day!
      </p>
    
    </div>
  `;
  orderMsgWrapper.innerHTML = orderMessage;
  orderMsgWrapper.classList.toggle("contact-msg-show");

  document.body.style.overflow = "hidden";

  const orderCloseContainers = document.querySelectorAll(
    ".order-close-container"
  );

  orderCloseContainers.forEach((container) => {
    container.addEventListener("click", () => {
      orderMsgWrapper.classList.toggle("contact-msg-show");
      document.body.style.overflow = "";
    });
  });
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

  // send message
  contactForm.addEventListener("submit", displaySendMessage);
};
