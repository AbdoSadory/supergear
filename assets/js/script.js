import jsonData from "../data/products.json" assert { type: "json" };
export const shopDataFromJSONFile = jsonData;

var swiper = new Swiper(".mySwiper0", {
  slidesPerView: 6,
  spaceBetween: 10,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  loop: false,
  spaceBetween: 20,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper = new Swiper(".mySwiper2", {
  loop: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev ",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".mySwiper3", {
  autoplay: true,
  slidesPerView: 1,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 2,
  spaceBetween: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 1,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 1,
    },
  },
});

var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 2,
  spaceBetween: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination5",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 1,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 1,
    },
  },
});

var swiper = new Swiper(".mySwiper6", {
  slidesPerView: 2,
  spaceBetween: 2,
  loop: false,
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 1,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 1,
    },
  },
});

// =====================================================
// =====================================================
// =====================================================
// =====================================================
export let wishlistElements = {};
export let elementsLength;
export let productsInCard = {};
export let recentlyProducts = {};

const exportWishlistProductsFromLocalStorage = () => {
  let localStorageDataLength = JSON.parse(localStorage.getItem("User_Wishlist"))
    ? Object.keys(JSON.parse(localStorage.getItem("User_Wishlist"))).length
    : 0;

  if (localStorageDataLength != 0 || localStorageDataLength != null) {
    let storedUserWishlist = localStorage.getItem("User_Wishlist");
    wishlistElements = { ...JSON.parse(storedUserWishlist) };
    elementsLength = localStorageDataLength;
  } else {
    console.log(`There's no data in localStorage`);
  }
};

export const exportRecentlyProductsFromLocalStorage = () => {
  let localStorageDataLength = JSON.parse(
    localStorage.getItem("recently_products")
  )
    ? Object.keys(JSON.parse(localStorage.getItem("recently_products"))).length
    : 0;
  // console.log(localStorageDataLength);
  if (localStorageDataLength != 0) {
    let storedRecentlyProducts = localStorage.getItem("recently_products");
    recentlyProducts = { ...JSON.parse(storedRecentlyProducts) };
    // console.log(recentlyProducts);
  } else {
    console.log(`There's no recentlyProducts in localStorage`);
  }
};
const bottomNavWishlistbtn = document.querySelector(
  ".bottom-nav .container-fluid .col:nth-child(3) a p"
);
const bottomNavaddToCardbtn = document.querySelector(
  ".bottom-nav .container-fluid .col:nth-child(4) a p"
);
const headeraddToCardbtns = document.querySelectorAll(".add-to-card-counter");
const wishlistCounters = document.getElementsByClassName(
  "wishlist-product-number"
);
export function bottomNavWishlistbtnNumber(StoredElementsList) {
  bottomNavWishlistbtn.setAttribute(
    "data-tooltip",
    Object.keys(StoredElementsList).length
  );
}
export function bottomNavaddToCardbtnNumber(StoredElementsList) {
  bottomNavaddToCardbtn.setAttribute(
    "data-tooltip",
    Object.keys(StoredElementsList).length
  );
}

export const headeraddToCardCounter = (CardElementsObject) => {
  for (var i = 0; i < headeraddToCardbtns.length; i++) {
    headeraddToCardbtns[i].textContent = Object.keys(CardElementsObject).length;
  }
};
export const wishlistCounter = (wishlistElementsObject) => {
  for (var i = 0; i < wishlistCounters.length; i++) {
    wishlistCounters[i].textContent = Object.keys(
      wishlistElementsObject
    ).length;
  }
};
exportWishlistProductsFromLocalStorage();
exportRecentlyProductsFromLocalStorage();
bottomNavWishlistbtnNumber(wishlistElements);
bottomNavaddToCardbtnNumber(wishlistElements);
headeraddToCardCounter(wishlistElements);
wishlistCounter(wishlistElements);
