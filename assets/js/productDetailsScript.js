import {
  wishlistElements,
  wishlistCounter,
  bottomNavWishlistbtnNumber,
  shopDataFromJSONFile,
  recentlyProducts,
  exportRecentlyProductsFromLocalStorage,
} from "./script.js";
import {
  removeWishlistElementFromLocalStorage,
  saveElementToWishlistToLocalStorage,
  renderWishlistPopUp,
  saveElementToProductDetailsToLocalStorage,
  saveElementIDToRecentlyProductToLocalStorage,
} from "./shopePageScript.js";

const prodcutDetailsContentContainer = document.querySelector(
  ".prodcutDetails-content-container"
);
const shopProductDataFromJSON = { ...shopDataFromJSONFile.products };
let productDetails = {};

const exportProductDetailsFromLocalStorage = () => {
  let localStorageDataLength = JSON.parse(
    localStorage.getItem("product_details")
  )
    ? Object.keys(JSON.parse(localStorage.getItem("product_details"))).length
    : 0;

  if (localStorageDataLength != 0 || localStorageDataLength != null) {
    let storedProductDetails = localStorage.getItem("product_details");
    productDetails = { ...JSON.parse(storedProductDetails) };

    // console.log(`${productDetails.frontImg}`);
  } else {
    console.log(`There's no productDetails data in localStorage`);
  }
};

exportProductDetailsFromLocalStorage();

const swiperWrapperSideBad = document.getElementById("swiper-wrapper-sideBad");
const swiperWrapperMain = document.getElementById("swiper-wrapper-main");
const discountContainer = document.getElementById("discount-container");
const productDetailsTitleH3 = document.getElementById(
  "productDetails-title-h3"
);
const addToWishlistAnchor = document.getElementById("add-to-wishlist");
addToWishlistAnchor.innerHTML =
  productDetails.id in wishlistElements
    ? `<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span>
       <i class="fa-regular fa-star m-0 p-3 fs-6 bg-dark rounded-circle text-white"></i>`
    : `<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span>
       <i class="fa-regular fa-star m-0 p-3 fs-6 bg-white rounded-circle text-dark"></i>`;
const prodcutDetailsPriceSpan = document.getElementById(
  "prodcutDetails-price-span"
);
const colorBtns = document.getElementById("color-btns");
const sizeBtns = document.getElementById("size-btns");
const minusBtns = document.getElementsByClassName("quantity-minus");
const quantityCounters = document.getElementsByClassName("quantity-counter");
const plusBtns = document.getElementsByClassName("quantity-plus");
const addToCardBtn = document.getElementById("add-To-Card-btn");
const buyNowBtn = document.getElementById("buyNow-btn");
productDetails.amount == 0
  ? (addToCardBtn.disabled = true) && (buyNowBtn.disabled = true)
  : (addToCardBtn.disabled = false) && (buyNowBtn.disabled = false);
const navDesc = document.getElementById("nav-desc");
navDesc.textContent = `${productDetails.description}`;
const navAdditionalInfo = document.getElementById("nav-additionalInfo");
navAdditionalInfo.textContent = `${productDetails.additionalInfo}`;
const navAboutBrand = document.getElementById("nav-aboutBrand");
navAboutBrand.textContent = `${productDetails.aboutBrand}`;
const navReviews = document.getElementById("reviews-container");
const navQuestions = document.getElementById("questions-container");
const relatedProductContainer = document.getElementById(
  "relatedProduct-container"
);
const recentlyViewedContainer = document.getElementById(
  "recentlyViewed-container"
);

// console.log(typeof `${productDetails.frontImg}`);
// console.log(productDetails.backImg);
document.title = productDetails.title;
swiperWrapperSideBad.innerHTML = `
<div class="swiper-slide rounded-3 swiper-slide-visible swiper-slide-active swiper-slide-thumb-active" role="group" aria-label="1 / 2" style="width: 43.5px; margin-right: 20px;">
    <img src="assets/${productDetails.frontImg}" alt="frontSideBar" id="frontImageSideBar">
</div>
<div class="swiper-slide my-2 rounded-3 swiper-slide-visible swiper-slide-next" role="group" aria-label="2 / 2" style="width: 43.5px; margin-right: 20px;">
    <img src="assets/${productDetails.backImg}" alt="backSideBar" id="backImageSideBar">
</div>`;

swiperWrapperMain.innerHTML = `
<div class="swiper-slide swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" role="group" aria-label="1 / 2" style="width: 537px; margin-right: 10px;">
    <img src="assets/${productDetails.frontImg}" alt="front" id="frontImage">
</div>
<div class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="1" role="group" aria-label="2 / 2" style="width: 537px; margin-right: 10px;">
<img src="assets/${productDetails.backImg}" alt="back" id="backImage">
</div>`;

discountContainer.innerHTML = productDetails.note
  ? `<span class="text-light bg-danger text-capitalize fs-6 rounded-pill py-1 px-2">${productDetails.note}</span>`
  : null;

productDetailsTitleH3.textContent = productDetails.title
  ? productDetails.title
  : null;

addToWishlistAnchor.addEventListener("click", () => {
  if (productDetails.id in wishlistElements) {
    removeWishlistElementFromLocalStorage(productDetails.id);
    wishlistCounter(wishlistElements);
    bottomNavWishlistbtnNumber(wishlistElements);
    addToWishlistAnchor.innerHTML =
      '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-white rounded-circle  text-dark"></i>';
  } else {
    console.log(`the amount is ${productDetails.amount}`);
    saveElementToWishlistToLocalStorage(
      productDetails.id,
      productDetails.frontImg,
      productDetails.title,
      productDetails.oldPrice,
      productDetails.price,
      productDetails.category,
      productDetails.description,
      productDetails.additionalInfo,
      productDetails.aboutBrand,
      productDetails.reviews,
      productDetails.questions,
      productDetails.amount,
      productDetails.relatedProducts
    );
    renderWishlistPopUp();
    wishlistCounter(wishlistElements);
    bottomNavWishlistbtnNumber(wishlistElements);
    addToWishlistAnchor.innerHTML =
      '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-dark rounded-circle text-light"></i>';
  }
});

prodcutDetailsPriceSpan.textContent = productDetails.price
  ? `$${productDetails.price}`
  : null;

if (productDetails.color) {
  for (const key of productDetails.color) {
    let colorbtn = document.createElement("div");
    colorbtn.classList.add("color-btn", "m-0", "mb-2", "me-3", "p-0");
    colorbtn.innerHTML = `<div class="color-btn-item color-btn-${key} rounded-circle m-0 p-0 row"
                                data-tooltip="${key}">
                                <a href="#" class="text-decoration-none"></a>
                            </div>`;
    colorBtns.appendChild(colorbtn);
  }
}
if (productDetails.size) {
  for (const key of productDetails.size) {
    let sizebtn = document.createElement("a");
    sizebtn.href = "#";
    sizebtn.classList.add(
      "size-btn",
      "d-inline-block",
      "text-decoration-none",
      "fs-5",
      "mt-1",
      "py-1",
      "px-2",
      "border",
      "border-2",
      "rounded-3"
    );
    sizebtn.textContent = `${key}`;
    sizeBtns.appendChild(sizebtn);
  }
}

if (minusBtns && productDetails.amount) {
  for (const minusbtn of minusBtns) {
    minusbtn.addEventListener("click", () => {
      console.log("minus");
      removequantity();
    });
  }
}

if (plusBtns && productDetails.amount) {
  for (const plusbtn of plusBtns) {
    plusbtn.addEventListener("click", () => {
      console.log("plus");
      addquantity();
    });
  }
}

for (const quantityCounter of quantityCounters) {
  productDetails.amount
    ? (quantityCounter.textContent = 1)
    : (quantityCounter.textContent = 0);
}

const addquantity = () => {
  let amount = 1;
  for (const quantityCounter of quantityCounters) {
    if (quantityCounter.textContent < productDetails.amount) {
      quantityCounter.textContent = +quantityCounter.textContent + amount;
      quantityCounter.textContent > 0
        ? (addToCardBtn.disabled = false) && (buyNowBtn.disabled = false)
        : null;
    }
  }
};

const removequantity = () => {
  let amount = 1;
  for (const quantityCounter of quantityCounters) {
    if (quantityCounter.textContent > 0) {
      quantityCounter.textContent = +quantityCounter.textContent - amount;
      quantityCounter.textContent == 0
        ? (addToCardBtn.disabled = true) && (buyNowBtn.disabled = true)
        : null;
    }
  }
};

if (productDetails.reviews.length > 0) {
  for (const review of productDetails.reviews) {
    const reviewContainer = document.createElement("div");
    reviewContainer.classList.add(
      "review-container",
      "w-100",
      "m-0",
      "mb-4",
      "p-0",
      "border-bottom",
      "border-2"
    );
    reviewContainer.innerHTML = `<p class=" review-para fs-6 m-0 p-0 pb-2">${review}</p>`;
    navReviews ? navReviews.appendChild(reviewContainer) : null;
  }
} else {
  navReviews.classList.add("text-center");
  navReviews.innerHTML = `<p class=" review-para fs-5 m-0 p-0 pb-2 text-capitalize">there's no reviews</p>`;
}

if (productDetails.questions.length > 0) {
  for (const question of productDetails.questions) {
    const questionContainer = document.createElement("div");
    questionContainer.classList.add(
      "question-container",
      "w-100",
      "m-0",
      "mb-4",
      "p-0",
      "border-bottom",
      "border-2"
    );
    questionContainer.innerHTML = `<p class=" question-para fs-6 m-0 p-0 pb-2">${question}</p>`;
    navQuestions ? navQuestions.appendChild(questionContainer) : null;
  }
} else {
  navQuestions.classList.add("text-center");
  navQuestions.innerHTML = `<p class=" question-para fs-5 m-0 p-0 pb-2 text-capitalize">there's no questions</p>`;
}

const ProductDetailsProductsCard = (productObject, parentSwiper) => {
  const parentColDiv = document.createElement("div");
  parentColDiv.classList.add("swiper-slide", "p-0");

  const parentResultCardDiv = document.createElement("div");
  parentResultCardDiv.classList.add(
    "product-card",
    "w-100",
    "m-0",
    "p-2",
    "rounded-3"
  );
  parentResultCardDiv.id = productObject.id;

  const resultCardImgDiv = document.createElement("div");
  resultCardImgDiv.classList.add("product-card-img", "overflow-hidden");

  const resultImageAnchor = document.createElement("a");
  resultImageAnchor.href = "#";
  resultImageAnchor.classList.add("text-decoration-none", "text-dark");

  const resultFrontImage = document.createElement("img");
  resultFrontImage.src = "assets/" + productObject.frontImg;
  resultFrontImage.classList.add("main-img");
  resultFrontImage.alt = productObject.title;

  const resultBackImage = document.createElement("img");
  resultBackImage.src = "assets/" + productObject.backImg;
  resultBackImage.classList.add("back-img");
  resultBackImage.alt = productObject.title;

  const resultNoteDiv = document.createElement("div");
  resultNoteDiv.classList.add(
    "note",
    "text-uppercase",
    "fw-bold",
    "font-15px",
    "text-light",
    "bg-danger",
    "rounded-pill",
    "m-0",
    "py-1",
    "px-3"
  );
  productObject.note
    ? (resultNoteDiv.textContent = productObject.note)
    : (resultNoteDiv.textContent = "");

  const popupDiv = document.createElement("div");
  popupDiv.classList.add("popup", "w-100", "m-0", "p-0");

  const popIconsDiv = document.createElement("div");
  popIconsDiv.classList.add(
    "popup-icons",
    "d-flex",
    "flex-column",
    "align-items-end",
    "m-0",
    "p-0",
    "text-end"
  );

  const addToWishlistDiv = document.createElement("div");
  addToWishlistDiv.classList.add(
    "add-to-wishlist-container",
    "m-0",
    "my-2",
    "p-0"
  );
  const addToWishlistIconAnchor = document.createElement("a");
  addToWishlistIconAnchor.classList.add(
    "add-to-wishlist",
    "text-decoration-none",
    "m-0",
    "p-0"
  );
  addToWishlistIconAnchor.href = "#";
  addToWishlistIconAnchor.id = `add-to-wishlist-${productObject.id}`;
  addToWishlistIconAnchor.innerHTML =
    productObject.id in wishlistElements
      ? '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-dark rounded-circle text-light"></i>'
      : '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-white rounded-circle text-dark"></i>';
  addToWishlistIconAnchor.addEventListener("click", () => {
    if (productObject.id in wishlistElements) {
      removeWishlistElementFromLocalStorage(productObject.id);
      wishlistCounter(wishlistElements);
      bottomNavWishlistbtnNumber(wishlistElements);
      addToWishlistIconAnchor.innerHTML =
        '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-white rounded-circle  text-dark"></i>';
    } else {
      console.log(`the amount is ${productObject.amount}`);
      saveElementToWishlistToLocalStorage(
        productObject.id,
        productObject.frontImg,
        productObject.title,
        productObject.oldPrice,
        productObject.price,
        productObject.category,
        productObject.description,
        productObject.additionalInfo,
        productObject.aboutBrand,
        productObject.reviews,
        productObject.questions,
        productObject.amount,
        productObject.relatedProducts
      );
      renderWishlistPopUp();
      wishlistCounter(wishlistElements);
      bottomNavWishlistbtnNumber(wishlistElements);
      addToWishlistIconAnchor.innerHTML =
        '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-dark rounded-circle text-light"></i>';
    }
  });

  const compareDiv = document.createElement("div");
  compareDiv.classList.add("compare-container", "m-0", "my-2", "p-0");
  const compareIconAnchor = document.createElement("a");
  compareIconAnchor.classList.add("text-decoration-none", "m-0", "p-0");
  compareIconAnchor.href = "#";
  compareIconAnchor.innerHTML =
    '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">compare</span> <i class="fa-solid fa-arrow-right-arrow-left m-0 p-3 fs-6 bg-white  rounded-circle text-dark"></i>';

  const viewDiv = document.createElement("div");
  viewDiv.classList.add("view-container", "m-0", "my-2", "p-0");
  const viewIconAnchor = document.createElement("a");
  viewIconAnchor.classList.add("text-decoration-none", "m-0", "p-0");
  viewIconAnchor.href = "#";
  viewIconAnchor.innerHTML =
    '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">quick view</span> <i class="fa-solid fa-eye m-0 p-3 fs-6 bg-white  rounded-circle text-dark"></i>';

  const resultCardContentDiv = document.createElement("div");
  resultCardContentDiv.classList.add("product-card-content", "mt-3");

  const resultRatingDiv = document.createElement("div");
  resultRatingDiv.classList.add("rating", "d-inline", "me-3");
  resultRatingDiv.innerHTML = `
  <i class="fa-regular fa-star m-0 p-0"></i>
  <i class="fa-regular fa-star m-0 p-0"></i>
  <i class="fa-regular fa-star m-0 p-0"></i>
  <i class="fa-regular fa-star m-0 p-0"></i>
  <i class="fa-regular fa-star m-0 p-0"></i>`;

  const resultProductType = document.createElement("p");
  resultProductType.classList.add("type", "font-10px", "text-uppercase");
  resultProductType.innerHTML = `<a href="#" class="text-decoration-none text-dark">${productObject.category}</a>`;

  const resultProductTitle = document.createElement("h3");
  resultProductTitle.classList.add(
    "title",
    "text-capitalize",
    "font-15px",
    "fw-bold"
  );
  resultProductTitle.innerHTML = `<a href="productDetails.html" class="text-decoration-none text-dark">${productObject.title}</a>`;
  resultProductTitle.addEventListener("click", () => {
    saveElementToProductDetailsToLocalStorage(
      productObject.id,
      productObject.frontImg,
      productObject.backImg,
      productObject.title,
      productObject.oldPrice,
      productObject.price,
      productObject.category,
      productObject.description,
      productObject.additionalInfo,
      productObject.aboutBrand,
      productObject.reviews,
      productObject.questions,
      productObject.amount,
      productObject.relatedProducts,
      productObject.note,
      productObject.colors,
      productObject.size
    );
    saveElementIDToRecentlyProductToLocalStorage(productObject.id);
  });
  const resultProductPriceDiv = document.createElement("div");
  resultProductPriceDiv.classList.add("price", "my-2");
  productObject.oldPrice
    ? (resultProductPriceDiv.innerHTML = `<span class="text-decoration-line-through text-gray">$${productObject.oldPrice}</span>  <span class=" text-dark fw-bold">$${productObject.price}</span>`)
    : (resultProductPriceDiv.innerHTML = ` <span class=" text-dark fw-bold">$${productObject.price}</span>`);

  const selectOptionAnchor = document.createElement("a");
  selectOptionAnchor.classList.add(
    "readMore",
    "btn",
    "text-uppercase",
    "font-15px",
    "fw-bold",
    "w-100",
    "rounded-pill",
    "py-2"
  );
  selectOptionAnchor.href = "productDetails.html";
  selectOptionAnchor.textContent = "select option";
  selectOptionAnchor.addEventListener("click", () => {
    saveElementToProductDetailsToLocalStorage(
      productObject.id,
      productObject.frontImg,
      productObject.backImg,
      productObject.title,
      productObject.oldPrice,
      productObject.price,
      productObject.category,
      productObject.description,
      productObject.additionalInfo,
      productObject.aboutBrand,
      productObject.reviews,
      productObject.questions,
      productObject.amount,
      productObject.relatedProducts,
      productObject.note,
      productObject.colors,
      productObject.size
    );
  });

  resultImageAnchor.appendChild(resultFrontImage);
  resultImageAnchor.appendChild(resultBackImage);
  productObject.productModelNote
    ? resultImageAnchor.appendChild(resultNoteDiv)
    : "";

  addToWishlistDiv.appendChild(addToWishlistIconAnchor);
  compareDiv.appendChild(compareIconAnchor);
  viewDiv.appendChild(viewIconAnchor);
  popIconsDiv.appendChild(addToWishlistDiv);
  popIconsDiv.appendChild(compareDiv);
  popIconsDiv.appendChild(viewDiv);
  popupDiv.appendChild(popIconsDiv);

  resultCardImgDiv.appendChild(resultImageAnchor);
  resultCardImgDiv.appendChild(popupDiv);

  resultCardContentDiv.appendChild(resultRatingDiv);
  resultCardContentDiv.appendChild(resultProductType);
  resultCardContentDiv.appendChild(resultProductTitle);
  resultCardContentDiv.appendChild(resultProductPriceDiv);
  resultCardContentDiv.appendChild(selectOptionAnchor);

  parentResultCardDiv.appendChild(resultCardImgDiv);
  parentResultCardDiv.appendChild(resultCardContentDiv);

  parentColDiv.appendChild(parentResultCardDiv);

  if (parentSwiper == "relatedProduct") {
    relatedProductContainer
      ? relatedProductContainer.appendChild(parentColDiv)
      : null;
  } else if (parentSwiper == "recentlyViewed") {
    recentlyViewedContainer
      ? recentlyViewedContainer.appendChild(parentColDiv)
      : null;
  }
};

if (productDetails.relatedProducts.length) {
  for (const productId of productDetails.relatedProducts) {
    // console.log(shopProductDataFromJSON[productId - 1]);
    ProductDetailsProductsCard(
      shopProductDataFromJSON[productId - 1],
      "relatedProduct"
    );
  }
} else {
  relatedProductContainer.innerHTML = `
  <p class=" question-para fs-5 m-0 my-4 p-0 pb-2 text-capitalize fw-bold w-100 text-center">
    there're no related Products
  </p>;`;
}
if (Object.keys(recentlyProducts).length) {
  for (const productId in recentlyProducts) {
    console.log(productId);
    ProductDetailsProductsCard(
      shopProductDataFromJSON[productId - 1],
      "recentlyViewed"
    );
  }
} else {
  recentlyViewedContainer.innerHTML = `
  <p class=" question-para fs-5 m-0 my-4 p-0 pb-2 text-capitalize fw-bold w-100 text-center">
    there're no products recently
  </p>;`;
}
