import {
  wishlistElements,
  wishlistCounter,
  bottomNavWishlistbtnNumber,
  headeraddToCardCounter,
  shopProductsFromJSONFile,
} from "./script.js";

const prodcutDetailsContentContainer = document.querySelector(
  ".prodcutDetails-content-container"
);
const frontImageSideBar = document.getElementById("frontImageSideBar");
const backImageSideBar = document.getElementById("backImageSideBar");
const frontImageMain = document.getElementById("frontImage");
const backImageMain = document.getElementById("backImage");

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

    console.log(`${productDetails.frontImg}`);
  } else {
    console.log(`There's no productDetails data in localStorage`);
  }
};
exportProductDetailsFromLocalStorage();
// prodcutDetailsContentContainer.innerHTML = `
// <!-- left slider -->
// <div class="col-12 col-md-6 m-0 p-0">
//     <div class="prodcutDetails-left-slider mb-3 m-lg-0 m-auto rounded-3">
//         <div class="swiper-slider-container row d-flex justify-content-start m-0 p-0">
//             <div class="swiper mySwiper col-2 swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs">
//                 <div class="swiper-wrapper w-75 " id="swiper-wrapper-1daca7995ead482b" aria-live="polite" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
//                     <div class="swiper-slide rounded-3 swiper-slide-visible swiper-slide-active" role="group" aria-label="1 / 2" style="width: 10.5px; margin-right: 20px;">
//                         <img src="assets/${productDetails.frontImg}" alt="blackCat">
//                     </div>
//                     <div class="swiper-slide my-2 rounded-3 swiper-slide-visible swiper-slide-next swiper-slide-thumb-active" role="group" aria-label="2 / 2" style="width: 10.5px; margin-right: 20px;">
//                         <img src="assets/${productDetails.backImg}" alt="blackCat">
//                     </div>
//                 </div>
//                 <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
//             </div>
//             <div
//                 class="swiper mySwiper2 col swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
//                 <div class="swiper-wrapper" id="swiper-wrapper-6810f141510e86eebb"
//                     aria-live="polite"
//                     style="transition-duration: 0ms; transform: translate3d(-1044px, 0px, 0px);">
//                     <div class="swiper-slide swiper-slide-duplicate"
//                         data-swiper-slide-index="3" role="group" aria-label="1/2"
//                         style="width: 512px; margin-right: 10px;">
//                         <img src="assets/${productDetails.frontImg}" alt="blackCat">
//                     </div>
//                     <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="0"
//                         role="group" aria-label="2 / 2"
//                         style="width: 512px; margin-right: 10px;">
//                         <img src="assets/${productDetails.backImg}" alt="blackCat">
//                     </div>
//                 </div>
//                 <div class="swiper-button-next" tabindex="0" role="button"
//                     aria-label="Next slide"
//                     aria-controls="swiper-wrapper-6810f141510e86eebb">
//                     <i class="fa-solid fa-arrow-right fs-3 text-dark"></i>
//                 </div>
//                 <div class="swiper-button-prev " tabindex="0" role="button"
//                     aria-label="Previous slide"
//                     aria-controls="swiper-wrapper-6810f141510e86eebb">
//                     <i class="fa-solid fa-arrow-left fs-3 text-dark"></i>
//                 </div>
//                 <span class="swiper-notification" aria-live="assertive"
//                     aria-atomic="true"></span>
//             </div>
//         </div>
//     </div>
// </div>
// <!-- right details -->
// <div class="col-12 col-md-6 m-0 p-0">
//     <div class="prodcutDetails-right m-0 p-0">
//         <!-- Discount -->
//         <div class="discount-container m-0 mb-4 p-0">
//             <span
//                 class="text-light bg-danger text-capitalize fs-6 rounded-pill py-1 px-2">-3%</span>
//         </div>
//         <!-- Title -->
//         <div
//             class="prodcutDetails-title-container row justify-content-between align-items-center m-0 mb-4 p-0">

//             <div class="productDetails-title col-10 m-0 p-0">
//                 <h3 class="productDetails-title-h3">ZY418 Ultra-Thin Sport MP3 MP4 Music
//                     Player</h3>
//             </div>
//             <div class="productDetails-addToWishlist col-2 m-0 p-0 text-end">
//                 <div class="add-to-wishlist-container m-0 my-2 p-0">
//                     <a href="#" class="add-to-wishlist text-decoration-none m-0 p-0">
//                         <span
//                             class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add
//                             to
//                             wishlist</span>
//                         <i
//                             class="fa-regular fa-star m-0 p-3 fs-6 bg-white rounded-circle text-dark"></i>
//                     </a>
//                 </div>
//             </div>
//         </div>
//         <!-- Price -->
//         <div
//             class="prodcutDetails-price-reviews-container row justify-content-between align-items-center m-0 mb-4 p-0 ">
//             <div class="col m-0 p-0 text-start">
//                 <span class="prodcutDetails-price-span align-self-center">$15.90</span>
//             </div>
//             <div class="col m-0 p-0 text-end align-self-center">
//                 <span class="prodcutDetails-reviews-span">
//                     <i class="fa-regular fa-star m-0 p-0"></i>
//                     <i class="fa-regular fa-star m-0 p-0"></i>
//                     <i class="fa-regular fa-star m-0 p-0"></i>
//                     <i class="fa-regular fa-star m-0 p-0"></i>
//                     <i class="fa-regular fa-star m-0 p-0"></i>
//                 </span>
//                 <span class="prodcutDetails-add-review-span">
//                     <a href="#"
//                         class="prodcutDetails-add-review-span-btn text-decoration-none text-dark btn-hover text-capitalize">add
//                         review</a>
//                 </span>
//             </div>
//         </div>
//         <!-- Views -->
//         <div class="prodcutDetails-currentViews-container  m-0 mb-4 p-0">
//             <i class="fa-solid fa-eye"></i>
//             <span> 25 people are viewing this right now</span>
//         </div>
//         <!-- Colors -->
//         <div class="prodcutDetails-colors-container  m-0 mb-4 p-0">
//             <h4 class="fs-6 fw-bold text-capitalize ">color:</h4>
//             <div class="color-btns row justify-content-start m-0 p-0">
//                 <div class="color-btn m-0 mb-2 me-3 p-0">
//                     <div class="color-btn-item color-btn-grassGreen rounded-circle m-0 p-0 row"
//                         data-tooltip="grass green">
//                         <a href="#" class="text-decoration-none"></a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <!-- Sizes -->
//         <div class="prodcutDetails-sizes-container m-0 mb-4 p-0">
//             <h4 class="fs-6 fw-bold text-capitalize">size:</h4>
//             <div class="size-btns ">
//                 <a href="#"
//                     class="size-btn d-inline-block text-decoration-none fs-5 py-1 mt-1 px-2 border border-2  rounded-3">10
//                     inch</a>
//                 <a href="#"
//                     class="size-btn d-inline-block text-decoration-none fs-5 py-1 mt-1 px-2 border border-2 rounded-3">13.5
//                     inch</a>
//                 <a href="#"
//                     class="size-btn d-inline-block text-decoration-none fs-5 py-1 mt-1 px-2 border border-2 rounded-3"><span
//                         class="text-uppercase">gts</span> 2 mini</a>
//             </div>
//         </div>
//         <!-- Quantity & Add To Card -->
//         <div class="prodcutDetails-quantity-addToCard-container m-0 mb-4 p-0 ">
//             <h4 class="fs-6 fw-bold text-capitalize">quantity:</h4>
//             <div
//                 class="quantity-addToCard-container row justify-content-between align-items-center m-0 p-0">
//                 <div
//                     class="quantity-counter-container rounded-pill overflow-hidden m-0 me-3 p-0 fs-6">
//                     <div
//                         class="counter m-0 p-0 d-flex justify-content-between align-items-center">
//                         <span class="minus col-3 text-center py-2" onclick="">-</span>
//                         <span class="number col text-center py-2">01</span>
//                         <span class="plus col-3 text-center py-2" onclick="">+</span>
//                     </div>
//                 </div>
//                 <div class="add-To-Card-btn-container col m-0 p-0 fs-6 ">
//                     <button
//                         class="add-To-Card-btn w-100 m-0 py-2 text-capitalize fw-bold  rounded-pill"
//                         type="button" data-bs-toggle="offcanvas"
//                         data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight">add
//                         to card</button>
//                 </div>
//             </div>
//         </div>
//         <!-- Buy Now -->
//         <div class="prodcutDetails-buyNow-container m-0 mb-1 p-0 fs-6">
//             <button
//                 class="buyNow-btn w-100 m-0 py-2 text-capitalize fw-bold rounded-pill">buy
//                 now</button>
//         </div>
//         <!-- compare-Ask-Share -->
//         <div
//             class="prodcutDetails-compare-ask-share-container m-0 mb-3 p-0 py-3 border-bottom border-2">
//             <a href="" class="compare-link text-decoration-none fs-6 text-capitalize me-5">
//                 <i class="fa-solid fa-arrow-right-arrow-left"></i> compare
//             </a>
//             <a href="" class="compare-link text-decoration-none fs-6 text-capitalize me-5">
//                 <i class="fa-solid fa-question"></i> ask a question
//             </a>
//             <a href="" class="compare-link text-decoration-none fs-6 text-capitalize">
//                 <i class="fa-solid fa-share-nodes"></i> share
//             </a>
//         </div>
//         <!-- estimatedDelivery -->
//         <div class=" prodcutDetails-estimatedDelivery-container mb-2">
//             <i class="fa-solid fa-truck"></i>
//             <span class="text-capitalize fw-bold">estimated delivery:</span>
//             <span class="estimatedDelivery-date text-capitalize">13 - 20 Sep,
//                 2022</span>
//         </div>
//         <!-- freeShipping -->
//         <div class="prodcutDetails-freeShipping-container mb-2">
//             <i class="fa-solid fa-box"></i>
//             <span class="text-capitalize fw-bold">free shipping & returns:</span>
//             <span class="estimatedDelivery-date text-capitalize">On all orders over
//                 $200.00</span>
//         </div>
//         <!-- paymentWays -->
//         <div class="prodcutDetails-paymentWays-container p-3 text-center align-self-center">
//             <img src="assets/images/product-trust-badge.png" alt="product-trust-badge"
//                 class="w-50">
//             <p class="p-0 m-0">Guaranteed safe & secure checkout</p>
//         </div>
//     </div>
// </div>
// `;

console.log(typeof `${productDetails.frontImg}`);
console.log(productDetails.backImg);
frontImageSideBar.src = "assets/" + productDetails.frontImg;
frontImageSideBar.alt = "frontSideBar";

backImageSideBar.src = "assets/" + productDetails.backImg;
backImageSideBar.alt = "backSideBar";

backImageMain.src = "assets/" + productDetails.backImg;
backImageMain.alt = "back";

frontImageMain.src = "assets/" + productDetails.frontImg;
frontImageMain.alt = "front";
