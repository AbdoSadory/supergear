import {
  wishlistElements,
  bottomNavWishlistbtnNumber,
  wishlistCounter,
  headeraddToCardCounter,
} from "./script.js";

const wishlistContentDiv = document.getElementById("wishlist-content");
let elementsFromLocalStorage = { ...wishlistElements };

const renderWishlistPageProductCard = (wishlistFromLocalStorage) => {
  let wishlistKeys = Object.keys(wishlistFromLocalStorage);
  wishlistContentDiv.innerHTML = null;
  for (const elementKey in wishlistFromLocalStorage) {
    wishlistPageProdcutCard(wishlistFromLocalStorage[elementKey]);
  }
};

const wishlistPageProdcutCard = (storedWishlistelement) => {
  const parentCardDiv = document.createElement("div");
  parentCardDiv.classList.add(
    "wishlist-card",
    "w-100",
    "m-0",
    "my-3",
    "p-0",
    "py-4",
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
    '<i class="wishlist-card-cancel fa-solid fa-xmark fs-5"></i>';
  cancelColDiv.addEventListener("click", () => {
    removeWishlistPageElementFromLocalStorage(storedWishlistelement.id);
    parentCardDiv.remove();
    bottomNavWishlistbtnNumber(elementsFromLocalStorage);
    headeraddToCardCounter(elementsFromLocalStorage);
    wishlistCounter(elementsFromLocalStorage);
    if (Object.keys(elementsFromLocalStorage) == 0) {
      wishlistContentDiv.innerHTML = `<h4 class="text-center py-2 p-0">There are no products on the Wishlist!</h4>`;
    }
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
  contentRowCardImageDiv.classList.add("wishlist-card-img", "col-2", "p-0");

  const contentRowCardImage = document.createElement("img");
  contentRowCardImage.classList.add("w-100");
  contentRowCardImage.src = `assets/${storedWishlistelement.img}`;
  contentRowCardImage.alt = storedWishlistelement.title;

  const contentRowCardDetailsDiv = document.createElement("div");
  contentRowCardDetailsDiv.classList.add("wishlist-card-details", "col-10");

  const contentRowCardDetailsTitle = document.createElement("h3");
  contentRowCardDetailsTitle.classList.add(
    "wishlist-card-header",
    "fs-5",
    "m-0"
  );
  contentRowCardDetailsTitle.innerHTML = `<a href="#" class="text-decoration-none text-dark">${storedWishlistelement.title}</a>`;

  const contentRowCardDetailsOldPrice = document.createElement("span");
  contentRowCardDetailsOldPrice.classList.add(
    "wishlist-card-old-price",
    "fs-6",
    "m-0",
    "text-gray",
    "text-decoration-line-through"
  );
  contentRowCardDetailsOldPrice.textContent = storedWishlistelement.oldPrice;

  const contentRowCardDetailsPrice = document.createElement("span");
  contentRowCardDetailsPrice.classList.add(
    "wishlist-card-price",
    "fs-6",
    "m-0"
  );
  contentRowCardDetailsPrice.textContent = ` ${storedWishlistelement.price}`;

  const contentRowCardDetailsDate = document.createElement("p");
  contentRowCardDetailsDate.classList.add(
    "wishlist-card-currentDate",
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
    "wishlist-card-select",
    "btn",
    "btn-dark",
    "rounded-pill",
    "text-uppercase",
    "py-2",
    "px-4"
  );
  selectButton.id = "select";
  selectButton.type = "button";
  selectButton.textContent = "select options";
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

  wishlistContentDiv.appendChild(parentCardDiv);
};

const removeWishlistPageElementFromLocalStorage = (elementID) => {
  delete elementsFromLocalStorage[elementID];
  localStorage.setItem(
    "User_Wishlist",
    JSON.stringify(elementsFromLocalStorage)
  );
};

renderWishlistPageProductCard(elementsFromLocalStorage);
wishlistCounter(elementsFromLocalStorage);
if (Object.keys(elementsFromLocalStorage) == 0) {
  wishlistContentDiv.innerHTML = `<h4 class="text-center py-2 p-0">There are no products on the Wishlist!</h4>`;
}
