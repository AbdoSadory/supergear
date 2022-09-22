import {
  wishlistElements,
  wishlistCounter,
  bottomNavWishlistbtnNumber,
} from "./script.js";
import {
  removeWishlistElementFromLocalStorage,
  saveElementToWishlistToLocalStorage,
  renderWishlistPopUp,
} from "./shopePageScript.js";

const prodcutDetailsContentContainer = document.querySelector(
  ".prodcutDetails-content-container"
);

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
const prodcutDetailsPriceSpan = document.getElementById(
  "prodcutDetails-price-span"
);
const colorBtns = document.getElementById("color-btns");
const sizeBtns = document.getElementById("size-btns");

// console.log(typeof `${productDetails.frontImg}`);
// console.log(productDetails.backImg);

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
console.log(productDetails.size);
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
