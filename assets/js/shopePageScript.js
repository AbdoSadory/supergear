import productModel from "./dataModel/productModel.js";
import products from "../data/products.json" assert { type: "json" };
//=======================================================
//=======================Variables=======================
//=======================================================
const shopProductsFromJSONFile = products;
const productsNumber = shopProductsFromJSONFile.products.length;
const shopCurrentResultsSpanTag = document.querySelector(
  ".showingitemsNumbers-current"
);
const shopAllResultsSpanTag = document.querySelector(
  ".showingitemsNumbers-all"
);
const shopFilterProductResultsContainer = document.querySelector(
  ".filterResult-results-container"
);

const shopWishlistPopupMsgContentContainer = document.querySelector(
  ".addToWishlist-popup-msg-content "
);

let numbersOfCardInFilterResultContainer = 0;
const loadMoreButton = document.getElementById("load-more");
const resultCardsIncreaseByLoadMoreClick = 2;
export let wishlistElements = {};
let wishlistElement = false;
let emptyWishlist;
const closePopUpMsg = document.getElementById("closePopUp");
const backgroundPopUpMsg = document.getElementById("addToWishlist-popup");
const wishlistCounters = document.getElementsByClassName(
  "wishlist-product-number"
);
const continueShoppingBtn = document.getElementById(
  "addToWishlist-popup-msg-footer-continueShopping"
);
export let elementsLength;

//=======================================================
//=======================Functions=======================
//=======================================================
function renderShopProductsResults(prodcutsFromJSONFile) {
  // JSON file data
  const shopProducts = prodcutsFromJSONFile;
  //for render cards from json file
  for (let productIndex = 0; productIndex < 4; productIndex++) {
    shopCurrentResultsSpanTag.innerHTML = productIndex + 1;
    numbersOfCardInFilterResultContainer++;
    let productObject = new productModel(
      shopProducts[productIndex].id,
      shopProducts[productIndex].frontImg,
      shopProducts[productIndex].backImg,
      shopProducts[productIndex].type,
      shopProducts[productIndex].title,
      shopProducts[productIndex].price,
      shopProducts[productIndex].oldPrice,
      shopProducts[productIndex].color,
      shopProducts[productIndex].size,
      shopProducts[productIndex].note
    );
    shopProductCard(productObject);
  }
}

const shopProductCard = (productObject) => {
  const parentColDiv = document.createElement("div");
  parentColDiv.classList.add("col-6", "col-sm-4", "col-lg-3", "p-0");

  const parentResultCardDiv = document.createElement("div");
  parentResultCardDiv.classList.add(
    "result-card",
    "w-100",
    "m-0",
    "p-2",
    "rounded-3"
  );
  parentResultCardDiv.id = productObject.productModelID;

  const resultCardImgDiv = document.createElement("div");
  resultCardImgDiv.classList.add("result-card-img", "overflow-hidden");

  const resultImageAnchor = document.createElement("a");
  resultImageAnchor.href = "#";
  resultCardImgDiv.classList.add("text-decoration-none", "text-dark");

  const resultFrontImage = document.createElement("img");
  resultFrontImage.src = "assets/" + productObject.productModelFrontImage;
  resultFrontImage.classList.add("main-img");
  resultFrontImage.alt = productObject.productModelTitle;

  const resultBackImage = document.createElement("img");
  resultBackImage.src = "assets/" + productObject.productModelBackImage;
  resultBackImage.classList.add("back-img");
  resultBackImage.alt = productObject.productModelTitle;

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
  productObject.productModelNote
    ? (resultNoteDiv.textContent = productObject.productModelNote)
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
    "p-0"
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
  addToWishlistIconAnchor.id = `add-to-wishlist-${productObject.productModelID}`;
  addToWishlistIconAnchor.innerHTML =
    productObject.productModelID in wishlistElements
      ? '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-dark rounded-circle text-light"></i>'
      : '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-white rounded-circle text-dark"></i>';
  addToWishlistIconAnchor.addEventListener("click", () => {
    // console.log(
    //   addToWishlistIconAnchor.parentElement.parentElement.parentElement
    //     .parentElement.parentElement
    // );
    if (productObject.productModelID in wishlistElements) {
      removeWishlistElementFromLocalStorage(productObject.productModelID);
      wishlistCounter(wishlistElements);
      addToWishlistIconAnchor.innerHTML =
        '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-white rounded-circle  text-dark"></i>';
    } else {
      saveToLocalStorage(
        productObject.productModelID,
        productObject.productModelFrontImage,
        productObject.productModelTitle,
        productObject.productModelOldPrice,
        productObject.productModelPrice
      );
      renderWishlistPopUp();
      wishlistCounter(wishlistElements);
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
  resultCardContentDiv.classList.add("result-card-content", "mt-3");

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
  resultProductType.innerHTML = `<a href="#" class="text-decoration-none text-dark">${productObject.productModelType}</a>`;

  const resultProductTitle = document.createElement("h3");
  resultProductTitle.classList.add(
    "title",
    "text-capitalize",
    "font-15px",
    "fw-bold"
  );
  resultProductTitle.innerHTML = `<a href="#" class="text-decoration-none text-dark">${productObject.productModelTitle}</a>`;

  const resultProductPriceDiv = document.createElement("div");
  resultProductPriceDiv.classList.add("price", "my-2");
  productObject.productModelOldPrice
    ? (resultProductPriceDiv.innerHTML = `<span class="text-decoration-line-through text-gray">$${productObject.productModelOldPrice}</span>  <span class=" text-dark fw-bold">$${productObject.productModelPrice}</span>`)
    : (resultProductPriceDiv.innerHTML = ` <span class=" text-dark fw-bold">$${productObject.productModelPrice}</span>`);

  const selectOptionAnchor = document.createElement("a");
  selectOptionAnchor.classList.add(
    "selectOption",
    "btn",
    "text-uppercase",
    "font-15px",
    "fw-bold",
    "w-100",
    "rounded-pill",
    "py-2"
  );
  selectOptionAnchor.href = "#";
  selectOptionAnchor.textContent = "select option";

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

  shopFilterProductResultsContainer.appendChild(parentColDiv);
};

function renderMoreCards(prodcutsFromJSONFile) {
  const shopProducts = prodcutsFromJSONFile;
  for (
    let productIndex = 0;
    productIndex < resultCardsIncreaseByLoadMoreClick;
    productIndex++
  ) {
    shopCurrentResultsSpanTag.innerHTML = productIndex + 1;
    let productObject = new productModel(
      shopProducts[numbersOfCardInFilterResultContainer].id,
      shopProducts[numbersOfCardInFilterResultContainer].frontImg,
      shopProducts[numbersOfCardInFilterResultContainer].backImg,
      shopProducts[numbersOfCardInFilterResultContainer].type,
      shopProducts[numbersOfCardInFilterResultContainer].title,
      shopProducts[numbersOfCardInFilterResultContainer].price,
      shopProducts[numbersOfCardInFilterResultContainer].oldPrice,
      shopProducts[numbersOfCardInFilterResultContainer].color,
      shopProducts[numbersOfCardInFilterResultContainer].size,
      shopProducts[numbersOfCardInFilterResultContainer].note
    );
    shopProductCard(productObject);
    if (
      numbersOfCardInFilterResultContainer == productsNumber ||
      productsNumber - numbersOfCardInFilterResultContainer == 1
    ) {
      loadMoreButton.classList.add("d-none");
      break;
    }
    numbersOfCardInFilterResultContainer++;
  }
}

const loadMoreCards = () => {
  if (numbersOfCardInFilterResultContainer < productsNumber) {
    renderMoreCards(shopProductsFromJSONFile.products);
  }
};

const renderPopUpProductCard = (wishlistFromLocalStorage) => {
  let wishlistKeys = Object.keys(wishlistFromLocalStorage);
  let wishlistLength = wishlistKeys.length;
  // console.log(shopWishlistPopupMsgContentContainer);
  shopWishlistPopupMsgContentContainer.innerHTML = null;
  for (const elementKey in wishlistFromLocalStorage) {
    popUpProdcutCard(wishlistFromLocalStorage[elementKey]);
  }
};

const popUpProdcutCard = (storedWishlistelement) => {
  const parentCardDiv = document.createElement("div");
  parentCardDiv.classList.add(
    "addToWishlist-popup-msg-content-card",
    "w-100",
    "m-0",
    "my-3",
    "p-2",
    "border-bottom",
    "border-2"
  );
  parentCardDiv.id = storedWishlistelement.id;

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("row", "justify-content-between", "align-items-center");

  // Cancel Part
  const cancelColDiv = document.createElement("div");
  cancelColDiv.classList.add("col-1", "text-dark");
  cancelColDiv.innerHTML =
    '<i class="addToWishlist-popup-msg-content-card-cancel fa-solid fa-xmark fs-5"></i>';
  cancelColDiv.addEventListener("click", () => {
    removeWishlistElementFromLocalStorage(storedWishlistelement.id);
    parentCardDiv.remove();
    wishlistCounter(wishlistElements);
    // console.log(wishlistElements);
    if (Object.keys(wishlistElements) == 0) {
      shopWishlistPopupMsgContentContainer.innerHTML = `<h4 class="text-center py-2 p-0">There are no products on the Wishlist!</h4>`;
    }
    let storedWishlistelementAnchor = document.getElementById(
      `add-to-wishlist-${storedWishlistelement.id}`
    );
    storedWishlistelementAnchor.innerHTML =
      '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-white rounded-circle text-dark"></i>';
    // console.log(storedWishlistelement);
  });

  // Content Part
  const contentColDiv = document.createElement("div");
  contentColDiv.classList.add("col-8", "m-0", "p-0");

  const contentRowDiv = document.createElement("div");
  contentRowDiv.classList.add(
    "row",
    "justify-content-between",
    "align-items-center",
    "w-100"
  );
  const contentRowCardImageDiv = document.createElement("div");
  contentRowCardImageDiv.classList.add(
    "addToWishlist-popup-msg-content-card-img",
    "col-2",
    "p-0"
  );

  const contentRowCardImage = document.createElement("img");
  contentRowCardImage.classList.add("w-100");
  contentRowCardImage.src = `assets/${storedWishlistelement.img}`;
  contentRowCardImage.alt = storedWishlistelement.title;

  const contentRowCardDetailsDiv = document.createElement("div");
  contentRowCardDetailsDiv.classList.add(
    "addToWishlist-popup-msg-content-card-details",
    "col-10"
  );
  const contentRowCardDetailsTitle = document.createElement("h3");
  contentRowCardDetailsTitle.classList.add(
    "addToWishlist-popup-msg-content-card-header",
    "fs-5",
    "m-0"
  );
  contentRowCardDetailsTitle.innerHTML = `<a href="#" class="text-decoration-none text-dark">${storedWishlistelement.title}</a>`;

  const contentRowCardDetailsOldPrice = document.createElement("span");
  contentRowCardDetailsOldPrice.classList.add(
    "addToWishlist-popup-msg-content-card-old-price",
    "fs-6",
    "m-0",
    "text-gray",
    "text-decoration-line-through"
  );
  contentRowCardDetailsOldPrice.textContent = storedWishlistelement.oldPrice;

  const contentRowCardDetailsPrice = document.createElement("span");
  contentRowCardDetailsPrice.classList.add(
    "addToWishlist-popup-msg-content-card-price",
    "fs-6",
    "m-0"
  );
  contentRowCardDetailsPrice.textContent = ` ${storedWishlistelement.price}`;

  const contentRowCardDetailsDate = document.createElement("p");
  contentRowCardDetailsDate.classList.add(
    "addToWishlist-popup-msg-content-card-currentDate",
    "fs-6",
    "m-0"
  );
  contentRowCardDetailsDate.textContent = storedWishlistelement.dataTime;

  // Select Part
  const selectColDiv = document.createElement("div");
  selectColDiv.classList.add("col-3", "m-0", "p-0");
  const selectDiv = document.createElement("div");
  selectDiv.classList.add("w-100", "text-center", "m-0", "p-0");
  const selectButton = document.createElement("button");
  selectButton.classList.add(
    "addToWishlist-popup-msg-content-card-select",
    "btn",
    "btn-dark",
    "rounded-pill",
    "text-uppercase",
    "py-2",
    "px-4"
  );
  selectButton.id = "select";
  selectButton.type = "button";
  selectButton.textContent = "select";
  //////////////////////////////
  contentRowCardImageDiv.appendChild(contentRowCardImage);
  contentRowCardDetailsDiv.appendChild(contentRowCardDetailsTitle);
  contentRowCardDetailsDiv.appendChild(contentRowCardDetailsOldPrice);
  contentRowCardDetailsDiv.appendChild(contentRowCardDetailsPrice);
  contentRowCardDetailsDiv.appendChild(contentRowCardDetailsDate);
  contentRowDiv.appendChild(contentRowCardImageDiv);
  contentRowDiv.appendChild(contentRowCardDetailsDiv);
  contentColDiv.appendChild(contentRowDiv);
  selectDiv.appendChild(selectButton);
  selectColDiv.appendChild(selectDiv);

  cardDiv.appendChild(cancelColDiv);
  cardDiv.appendChild(contentColDiv);
  cardDiv.appendChild(selectColDiv);

  parentCardDiv.appendChild(cardDiv);

  shopWishlistPopupMsgContentContainer.appendChild(parentCardDiv);
};

const saveToLocalStorage = (
  wishlistElementID,
  wishlistElementImage,
  wishlistElementTitle,
  wishlistElementOldPrice,
  wishlistElementPrice
) => {
  const currentDate = new Date().toString();

  if (!(wishlistElementID in wishlistElements)) {
    let choosenElement = {
      id: wishlistElementID,
      img: wishlistElementImage,
      title: wishlistElementTitle,
      oldPrice: wishlistElementOldPrice,
      price: wishlistElementPrice,
      dataTime: currentDate.slice(0, 15),
    };
    wishlistElements[`${wishlistElementID}`] = choosenElement;
    // console.log(wishlistElements);
    localStorage.setItem("User_Wishlist", JSON.stringify(wishlistElements));
  }
};

const exportFromLocalStorage = () => {
  let localStorageDataLength = JSON.parse(localStorage.getItem("User_Wishlist"))
    ? Object.keys(JSON.parse(localStorage.getItem("User_Wishlist"))).length
    : 0;

  if (localStorageDataLength != 0 || localStorageDataLength != null) {
    emptyWishlist = false;
    let storedUserWishlist = localStorage.getItem("User_Wishlist");
    wishlistElements = { ...JSON.parse(storedUserWishlist) };
    elementsLength = localStorageDataLength;
  } else {
    emptyWishlist = true;
    console.log(emptyWishlist);
  }
};

const removeWishlistElementFromLocalStorage = (elementID) => {
  delete wishlistElements[elementID];
  localStorage.setItem("User_Wishlist", JSON.stringify(wishlistElements));
};

const renderWishlistPopUp = () => {
  renderPopUpProductCard(wishlistElements);
  const popup = document.getElementById("addToWishlist-popup");
  popup.classList.toggle("d-none");
};

const wishlistCounter = (wishlistElementsObject) => {
  for (var i = 0; i < wishlistCounters.length; i++) {
    wishlistCounters[i].textContent = Object.keys(
      wishlistElementsObject
    ).length;
  }
};

exportFromLocalStorage();
renderShopProductsResults(shopProductsFromJSONFile.products);
renderPopUpProductCard(wishlistElements);

loadMoreButton.addEventListener("click", loadMoreCards);
closePopUpMsg.addEventListener("click", renderWishlistPopUp);
continueShoppingBtn.addEventListener("click", renderWishlistPopUp);
wishlistCounter(wishlistElements);
// console.log(wishlistElements);
