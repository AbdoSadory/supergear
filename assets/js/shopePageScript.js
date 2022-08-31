import productModel from "./dataModel/productModel.js";
import products from "../data/products.json" assert { type: "json" };

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
let numbersOfCardInFilterResultContainer = 0;
const loadMoreButton = document.getElementById("load-more");
const resultCardsLimit = productsNumber + 1;
shopAllResultsSpanTag.innerHTML = resultCardsLimit;
const resultCardsIncreaseByLoadMoreClick = 2;
let wishlistBtns = document.getElementsByClassName("add-to-wishlist");
let wishlistBtn = document.querySelector(".add-to-wishlist");

function renderShopProductsResults(prodcutsFromJSONFile) {
  // JSON file data
  const shopProducts = prodcutsFromJSONFile;
  //for render cards from json file
  for (let productIndex = 0; productIndex < 3; productIndex++) {
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
  addToWishlistIconAnchor.innerHTML =
    '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-white rounded-circle text-dark"></i>';
  addToWishlistIconAnchor.addEventListener("click", () => {
    console.log(
      addToWishlistIconAnchor.parentElement.parentElement.parentElement
        .parentElement.parentElement
    );
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
  for (let productIndex = 0; productIndex < 2; productIndex++) {
    shopCurrentResultsSpanTag.innerHTML = productIndex + 1;
    // console.log(numbersOfCardInFilterResultContainer);
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
  // wishlistBtns = [];
  if (numbersOfCardInFilterResultContainer < productsNumber) {
    renderMoreCards(shopProductsFromJSONFile.products);
    console.log(`btns before getting ${wishlistBtns.length}`);
    // wishlistBtns = document.getElementsByClassName("add-to-wishlist");
    console.log(`btns after getting ${wishlistBtns.length}`);
    console.log(`btns type of ${typeof wishlistBtns}`);
    // addingEventListener(wishlistBtns);
  }
};
function addingEventListener(btns) {
  for (let btn of btns) {
    btn.addEventListener("click", (e) => {
      console.log(
        btn.parentElement.parentElement.parentElement.parentElement
          .parentElement
      );
    });
  }
}
const addToWishlist = (parentID) => {
  console.log(`${parentID} is added To Wishlist`);
};
const saveToLocalStorage = () => {};

renderShopProductsResults(shopProductsFromJSONFile.products);
loadMoreButton.addEventListener("click", loadMoreCards);
// wishlistBtn.addEventListener("click", () => {
//   console.log("hii");
// });
// console.log(wishlistBtn);
