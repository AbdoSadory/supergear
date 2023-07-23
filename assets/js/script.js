import jsonData from '../data/products.json' assert { type: 'json' }
export const shopDataFromJSONFile = jsonData

var swiper = new Swiper('.mySwiper0', {
  slidesPerView: 6,
  spaceBetween: 10,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
})

var swiper = new Swiper('.mySwiper', {
  loop: false,
  spaceBetween: 20,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
})

var swiper = new Swiper('.mySwiper2', {
  loop: false,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev ',
  },
  thumbs: {
    swiper: swiper,
  },
})

var swiper = new Swiper('.mySwiper3', {
  autoplay: true,
  slidesPerView: 1,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

var swiper = new Swiper('.mySwiper4', {
  slidesPerView: 2,
  spaceBetween: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination4',
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
})

var swiper = new Swiper('.mySwiper5', {
  slidesPerView: 2,
  spaceBetween: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination5',
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
})

var swiper = new Swiper('.mySwiper6', {
  slidesPerView: 2,
  spaceBetween: 2,
  loop: false,
  pagination: {
    el: '.swiper-pagination4',
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
})

// =====================================================
// =====================================================
// =====================================================
// =====================================================
export let wishlistElements = {}
export let elementsLength
export let productsInCard = {}
export let recentlyProducts = {}
export let cartProducts = {}
const cardProductsContainer = document.getElementById('card-products')
export const subtotalPara = document.getElementById('subtotal')
export const totalPara = document.getElementById('total')
export const firstPageMarker = document.getElementById('firstPage')
const exportWishlistProductsFromLocalStorage = () => {
  let localStorageDataLength = JSON.parse(localStorage.getItem('User_Wishlist'))
    ? Object.keys(JSON.parse(localStorage.getItem('User_Wishlist'))).length
    : 0

  if (localStorageDataLength != 0 || localStorageDataLength != null) {
    let storedUserWishlist = localStorage.getItem('User_Wishlist')
    wishlistElements = { ...JSON.parse(storedUserWishlist) }
    elementsLength = localStorageDataLength
  } else {
    console.log(`There's no data in localStorage`)
  }
}

export const exportRecentlyProductsFromLocalStorage = () => {
  let localStorageDataLength = JSON.parse(
    localStorage.getItem('recently_products')
  )
    ? Object.keys(JSON.parse(localStorage.getItem('recently_products'))).length
    : 0
  if (localStorageDataLength != 0) {
    let storedRecentlyProducts = localStorage.getItem('recently_products')
    recentlyProducts = { ...JSON.parse(storedRecentlyProducts) }
  } 
}

export const exportCartProductsFromLocalStorage = () => {
  let localStorageDataLength = JSON.parse(localStorage.getItem('cart_products'))
    ? Object.keys(JSON.parse(localStorage.getItem('cart_products'))).length
    : 0
  if (localStorageDataLength !== 0) {
    let storedCartProducts = localStorage.getItem('cart_products')
    cartProducts = { ...JSON.parse(storedCartProducts) }
  } 
}

const bottomNavWishlistbtn = document.querySelector(
  '.bottom-nav .container-fluid .col:nth-child(3) a p'
)
const bottomNavaddToCardbtn = document.querySelector(
  '.bottom-nav .container-fluid .col:nth-child(4) a p'
)
const headeraddToCardbtns = document.querySelectorAll('.add-to-card-counter')
const wishlistCounters = document.getElementsByClassName(
  'wishlist-product-number'
)
export function bottomNavWishlistbtnNumber(StoredElementsList) {
  bottomNavWishlistbtn.setAttribute(
    'data-tooltip',
    Object.keys(StoredElementsList).length
  )
}
export function bottomNavaddToCardbtnNumber(StoredElementsList) {
  bottomNavaddToCardbtn.setAttribute(
    'data-tooltip',
    Object.keys(StoredElementsList).length
  )
}

export const headeraddToCardCounter = (CardElementsObject) => {
  for (var i = 0; i < headeraddToCardbtns.length; i++) {
    headeraddToCardbtns[i].textContent = Object.keys(CardElementsObject).length
  }
}
export const wishlistCounter = (wishlistElementsObject) => {
  for (var i = 0; i < wishlistCounters.length; i++) {
    wishlistCounters[i].textContent = Object.keys(wishlistElementsObject).length
  }
}
export const cartOffcanvasProductCard = (
  productId,
  productImgPath,
  productTitle,
  productPrice,
  productAmount
) => {
  const parentDiv = document.createElement('div')
  parentDiv.classList.add('card-product', 'w-100', 'm-0', 'mb-3', 'p-0')

  const rowDiv = document.createElement('div')
  rowDiv.classList.add(
    'row',
    'justify-content-between',
    'align-items-start',
    'm-0',
    'p-0'
  )

  const cardProductImgContainer = document.createElement('div')
  cardProductImgContainer.classList.add(
    'card-product-img-container',
    'col-4',
    'border',
    'border-1',
    'text-center',
    'p-0'
  )
  cardProductImgContainer.innerHTML = `<img src="assets/${productImgPath}" alt="${productTitle}" class="w-100">`

  const cardProductDetailsContainer = document.createElement('div')
  cardProductDetailsContainer.classList.add(
    'card-product-details-container',
    'col',
    'text-start'
  )

  const cardProductDetailsTitle = document.createElement('h3')
  cardProductDetailsTitle.classList.add(
    'card-product-details-title',
    'm-0',
    'mb-1',
    'fs-6'
  )
  cardProductDetailsTitle.textContent = productTitle

  const cardProductDetailsPrice = document.createElement('p')
  cardProductDetailsPrice.classList.add(
    'card-product-details-price',
    'm-0',
    'mb-2'
  )
  cardProductDetailsPrice.textContent = productPrice

  const cardProductDetailsCounterContainer = document.createElement('div')
  cardProductDetailsCounterContainer.classList.add(
    'card-product-details-counter-container',
    'row',
    'justify-content-start',
    'align-items-start',
    'm-0',
    'p-0'
  )

  const cardProductDetailsQuantityCounterContainer =
    document.createElement('div')
  cardProductDetailsQuantityCounterContainer.classList.add(
    'card-product-details-quantity-counter-container',
    'col-4',
    'rounded-pill',
    'overflow-hidden',
    'm-0',
    'me-3',
    'fs-6',
    'p-0'
  )

  const counter = document.createElement('div')
  counter.classList.add(
    'counter',
    'm-0',
    'p-0',
    'd-flex',
    'justify-content-between',
    'align-items-center'
  )

  const quantityMinus = document.createElement('span')
  quantityMinus.classList.add('quantity-minus', 'col-3', 'text-center', 'py-2')
  quantityMinus.textContent = '-'
  quantityMinus.id = 'quantity-minus' + productId
  quantityMinus.addEventListener('click', () => {
    removequantity(productId)
    addProductToCart(
      productId,
      productImgPath,
      productTitle,
      productPrice,
      cartProductAmount
    )
    salaryCalculations(cartProducts)
  })

  const quantityCounter = document.createElement('span')
  quantityCounter.classList.add(
    `quantity-counter-${productId}`,
    'col',
    'text-center',
    'py-2'
  )
  quantityCounter.textContent = productAmount
  quantityCounter.id = 'quantity-counter' + productId

  const quantityPlus = document.createElement('span')
  quantityPlus.classList.add('quantity-plus', 'col-3', 'text-center', 'py-2')
  quantityPlus.textContent = '+'
  quantityPlus.id = 'quantity-plus' + productId
  quantityPlus.addEventListener('click', () => {
    addquantity(productId)
    addProductToCart(
      productId,
      productImgPath,
      productTitle,
      productPrice,
      cartProductAmount
    )
    salaryCalculations(cartProducts)
  })

  const cardProductDetailsRemoveBtnContainer = document.createElement('div')
  cardProductDetailsRemoveBtnContainer.classList.add(
    'card-product-details-remove-btn-container',
    'col-4',
    'm-0',
    'p-0'
  )

  const removeBtn = document.createElement('button')
  removeBtn.classList.add(
    'remove-btn',
    'w-100',
    'm-0',
    'py-2',
    'text-capitalize',
    'fw-bold',
    'rounded-pill'
  )
  removeBtn.textContent = 'remove'
  removeBtn.id = 'remove-from-cart' + productId
  removeBtn.addEventListener('click', () => {
    delete cartProducts[productId]
    localStorage.setItem('cart_products', JSON.stringify(cartProducts))
    cardProductsContainer.innerHTML = ''
    console.log(cartProducts)
    if (Object.keys(cartProducts).length > 0) {
      for (const cartProduct in cartProducts) {
        cartOffcanvasProductCard(
          cartProduct,
          cartProducts[cartProduct].img,
          cartProducts[cartProduct].title,
          cartProducts[cartProduct].price,
          cartProducts[cartProduct].amount
        )
      }
      salaryCalculations(cartProducts)
      headeraddToCardCounter(cartProducts)
      bottomNavaddToCardbtnNumber(cartProducts)
    } else {
      headeraddToCardCounter(cartProducts)
      bottomNavaddToCardbtnNumber(cartProducts)
      cardProductsContainer.innerHTML = `
    <div class="offcanvas-right-img w-75 m-auto p-0">
        <img src="assets/images/navbar/empty-cart.png" class="w-100" alt="empty">
    </div>
    <p class="fw-bold fs-6"> Your cart is currently empty.</p>
    <p class="text-gray fw-bold font-15px"> You may check out all the available products and buy some in the shop. </p>
    <a href="shopPage.html" aria-label="Close" data-bs-dismiss="offcanvas" type="button"
        class="btn btn-dark py-2 px-3 text-uppercase rounded-pill"> return to shop
    </a> `
      salaryCalculations(cartProducts)
    }
  })

  cardProductDetailsRemoveBtnContainer.appendChild(removeBtn)

  cardProductDetailsCounterContainer.appendChild(
    cardProductDetailsQuantityCounterContainer
  )
  cardProductDetailsCounterContainer.appendChild(
    cardProductDetailsRemoveBtnContainer
  )

  cardProductDetailsContainer.appendChild(cardProductDetailsTitle)
  cardProductDetailsContainer.appendChild(cardProductDetailsPrice)
  cardProductDetailsContainer.appendChild(cardProductDetailsCounterContainer)
  rowDiv.appendChild(cardProductImgContainer)
  rowDiv.appendChild(cardProductDetailsContainer)
  parentDiv.appendChild(rowDiv)
  cardProductsContainer ? cardProductsContainer.appendChild(parentDiv) : null
}
export const salaryCalculations = (productsInCart) => {
  let subtotal = 0
  let shipping = Object.keys(productsInCart).length == 0 ? 0 : 10
  let total = 0
  for (const cartProduct in productsInCart) {
    let amount = productsInCart[cartProduct].amount
    let price = productsInCart[cartProduct].price
    let cost = (amount * price).toFixed(2)
    subtotal = subtotal + +cost
  }
  total = subtotal + shipping
  subtotalPara ? (subtotalPara.textContent = subtotal) : null
  totalPara ? (totalPara.textContent = total) : null

}
exportWishlistProductsFromLocalStorage()
exportRecentlyProductsFromLocalStorage()
exportCartProductsFromLocalStorage()
bottomNavWishlistbtnNumber(wishlistElements)
wishlistCounter(wishlistElements)
headeraddToCardCounter(cartProducts)
bottomNavaddToCardbtnNumber(cartProducts)
salaryCalculations(cartProducts)
if (Object.keys(cartProducts).length > 0) {
  for (const cartProduct in cartProducts) {
    cartOffcanvasProductCard(
      cartProduct,
      cartProducts[cartProduct].img,
      cartProducts[cartProduct].title,
      cartProducts[cartProduct].price,
      cartProducts[cartProduct].amount
    )
  }
} else {
  cardProductsContainer
    ? (cardProductsContainer.innerHTML = `
    <div class="offcanvas-right-img w-75 m-auto p-0">
        <img src="assets/images/navbar/empty-cart.png" class="w-100" alt="empty">
    </div>
    <p class="fw-bold fs-6"> Your cart is currently empty.</p>
    <p class="text-gray fw-bold font-15px"> You may check out all the available products and buy some in the shop. </p>
    <a href="shopPage.html" aria-label="Close" data-bs-dismiss="offcanvas" type="button"
        class="btn btn-dark py-2 px-3 text-uppercase rounded-pill"> return to shop
    </a> `)
    : null
}
