import {
  wishlistElements,
  wishlistCounter,
  bottomNavWishlistbtnNumber,
  headeraddToCardCounter,
  shopDataFromJSONFile,
  recentlyProducts,
} from './script.js'
import productModel from './dataModel/productModel.js'
//=======================================================
//=======================Variables=======================
//=======================================================
const JSONProductData = shopDataFromJSONFile.products
const productsNumber = JSONProductData.length
export const secondPageMarker = document.getElementById('secondPage')

const shopCurrentResultsSpanTag = document.querySelector(
  '.showingitemsNumbers-current'
)

const shopFilterProductResultsContainer = document.querySelector(
  '.filterResult-results-container'
)
const shopCardsContainer = document.getElementById(
  'filterResult-results-container'
)
// if (shopCardsContainer) {
//   shopCardsContainer.innerHTML = `<div class="spinner-border text-center" role="status">
// <span class="sr-only">Loading...</span>
// </div>`
// }
const shopWishlistPopupMsgContentContainer = document.querySelector(
  '.addToWishlist-popup-msg-content '
)

let numbersOfCardInFilterResultContainer = 0
const loadMoreButton = document.getElementById('load-more')
const resultCardsIncreaseByLoadMoreClick = 2

const closePopUpMsg = document.getElementById('closePopUp')

const continueShoppingBtn = document.getElementById(
  'addToWishlist-popup-msg-footer-continueShopping'
)
let shopCardalginmentType = 'four'
const alignmentList = document.getElementById('alignment-list')
const alignmentTwo = document.getElementById('alignment-two')
const alignmentThree = document.getElementById('alignment-three')
const alignmentFour = document.getElementById('alignment-four')
const alignmentFive = document.getElementById('alignment-five')
let shopCardresults = document.getElementsByClassName('result-card-container')
let shopCardResultsContent = document.getElementsByClassName('result-card')
let shopCardResultsContentDetails = document.getElementsByClassName(
  'result-card-content'
)
let shopCardResultsContentImgs =
  document.getElementsByClassName('result-card-img')

//=======================================================
//=======================Functions=======================
//=======================================================

const renderShopProductsResults = (prodcutsFromJSONFile) => {
  // JSON file data
  const shopProducts = prodcutsFromJSONFile
  //for render cards from json file
  shopCardsContainer && (shopCardsContainer.innerHTML = '')
  for (let productIndex = 0; productIndex < 5; productIndex++) {
    shopCurrentResultsSpanTag
      ? (shopCurrentResultsSpanTag.innerHTML = productIndex + 1)
      : null
    numbersOfCardInFilterResultContainer++
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
      shopProducts[productIndex].note,
      shopProducts[productIndex].category,
      shopProducts[productIndex].description,
      shopProducts[productIndex].additionalInfo,
      shopProducts[productIndex].aboutBrand,
      shopProducts[productIndex].reviews,
      shopProducts[productIndex].questions,
      shopProducts[productIndex].amount,
      shopProducts[productIndex].relatedProducts
    )
    shopProductCard(productObject)
  }
}

const shopProductCard = (productObject) => {
  const parentColDiv = document.createElement('div')

  shopCardalginmentType == 'three' || screen.width <= 991
    ? parentColDiv.classList.add('result-card-container', 'col-4', 'p-0')
    : null
  shopCardalginmentType == 'two' || screen.width <= 767
    ? parentColDiv.classList.add('result-card-container', 'col-6', 'p-0')
    : null
  shopCardalginmentType == 'four'
    ? parentColDiv.classList.add('result-card-container', 'col-3', 'p-0')
    : null
  shopCardalginmentType == 'five'
    ? parentColDiv.classList.add('result-card-container', 'col-2', 'p-0')
    : null
  shopCardalginmentType == 'list'
    ? parentColDiv.classList.add('result-card-container', 'col-12', 'p-0')
    : null

  const parentResultCardDiv = document.createElement('div')
  parentResultCardDiv.classList.add(
    'result-card',
    'w-100',
    'm-0',
    'p-2',
    'rounded-3'
  )
  shopCardalginmentType == 'list'
    ? parentResultCardDiv.classList.add('d-flex')
    : null

  parentResultCardDiv.id = productObject.productModelID

  const resultCardImgDiv = document.createElement('div')
  resultCardImgDiv.classList.add('result-card-img', 'overflow-hidden')
  shopCardalginmentType == 'list'
    ? (resultCardImgDiv.style.width = '25%')
    : null

  const resultImageAnchor = document.createElement('a')
  resultImageAnchor.href = '#'
  resultImageAnchor.classList.add('text-decoration-none', 'text-dark')

  const resultFrontImage = document.createElement('img')
  resultFrontImage.src = 'assets/' + productObject.productModelFrontImage
  resultFrontImage.classList.add('main-img')
  resultFrontImage.alt = productObject.productModelTitle

  const resultBackImage = document.createElement('img')
  resultBackImage.src = 'assets/' + productObject.productModelBackImage
  resultBackImage.classList.add('back-img')
  resultBackImage.alt = productObject.productModelTitle

  const resultNoteDiv = document.createElement('div')
  resultNoteDiv.classList.add(
    'note',
    'text-uppercase',
    'fw-bold',
    'font-15px',
    'text-light',
    'bg-danger',
    'rounded-pill',
    'm-0',
    'py-1',
    'px-3'
  )
  productObject.productModelNote
    ? (resultNoteDiv.textContent = productObject.productModelNote)
    : (resultNoteDiv.textContent = '')

  const popupDiv = document.createElement('div')
  popupDiv.classList.add('popup', 'w-100', 'm-0', 'p-0')

  const popIconsDiv = document.createElement('div')
  popIconsDiv.classList.add(
    'popup-icons',
    'd-flex',
    'flex-column',
    'align-items-end',
    'm-0',
    'p-0',
    'text-end'
  )

  const addToWishlistDiv = document.createElement('div')
  addToWishlistDiv.classList.add(
    'add-to-wishlist-container',
    'm-0',
    'my-2',
    'p-0'
  )
  const addToWishlistIconAnchor = document.createElement('a')
  addToWishlistIconAnchor.classList.add(
    'add-to-wishlist',
    'text-decoration-none',
    'm-0',
    'p-0'
  )
  addToWishlistIconAnchor.href = '#'
  addToWishlistIconAnchor.id = `add-to-wishlist-${productObject.productModelID}`
  addToWishlistIconAnchor.innerHTML =
    productObject.productModelID in wishlistElements
      ? '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-dark rounded-circle text-light"></i>'
      : '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-white rounded-circle text-dark"></i>'
  addToWishlistIconAnchor.addEventListener('click', () => {
    if (productObject.productModelID in wishlistElements) {
      removeWishlistElementFromLocalStorage(productObject.productModelID)
      wishlistCounter(wishlistElements)
      bottomNavWishlistbtnNumber(wishlistElements)
      addToWishlistIconAnchor.innerHTML =
        '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-white rounded-circle  text-dark"></i>'
    } else {
      saveElementToWishlistToLocalStorage(
        productObject.productModelID,
        productObject.productModelFrontImage,
        productObject.productModelTitle,
        productObject.productModelOldPrice,
        productObject.productModelPrice,
        productObject.productModelCategory,
        productObject.productModelDescription,
        productObject.productModelAdditionalInfo,
        productObject.productModelAboutBrand,
        productObject.productModelReviews,
        productObject.productModelQuestions,
        productObject.productModelAmount,
        productObject.productModelRelatedProducts
      )
      renderWishlistPopUp()
      wishlistCounter(wishlistElements)
      bottomNavWishlistbtnNumber(wishlistElements)
      addToWishlistIconAnchor.innerHTML =
        '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-dark rounded-circle text-light"></i>'
    }
  })

  const compareDiv = document.createElement('div')
  compareDiv.classList.add('compare-container', 'm-0', 'my-2', 'p-0')
  const compareIconAnchor = document.createElement('a')
  compareIconAnchor.classList.add('text-decoration-none', 'm-0', 'p-0')
  compareIconAnchor.href = '#'
  compareIconAnchor.innerHTML =
    '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">compare</span> <i class="fa-solid fa-arrow-right-arrow-left m-0 p-3 fs-6 bg-white  rounded-circle text-dark"></i>'

  const viewDiv = document.createElement('div')
  viewDiv.classList.add('view-container', 'm-0', 'my-2', 'p-0')
  const viewIconAnchor = document.createElement('a')
  viewIconAnchor.classList.add('text-decoration-none', 'm-0', 'p-0')
  viewIconAnchor.href = '#'
  viewIconAnchor.innerHTML =
    '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">quick view</span> <i class="fa-solid fa-eye m-0 p-3 fs-6 bg-white  rounded-circle text-dark"></i>'

  const resultCardContentDiv = document.createElement('div')
  resultCardContentDiv.classList.add('result-card-content', 'mt-3')

  const resultRatingDiv = document.createElement('div')
  resultRatingDiv.classList.add('rating', 'd-inline', 'me-3')
  resultRatingDiv.innerHTML = `
  <i class="fa-regular fa-star m-0 p-0"></i>
  <i class="fa-regular fa-star m-0 p-0"></i>
  <i class="fa-regular fa-star m-0 p-0"></i>
  <i class="fa-regular fa-star m-0 p-0"></i>
  <i class="fa-regular fa-star m-0 p-0"></i>`

  const resultProductType = document.createElement('p')
  resultProductType.classList.add('type', 'font-10px', 'text-uppercase')
  resultProductType.innerHTML = `<a href="#" class="text-decoration-none text-dark">${productObject.productModelType}</a>`

  const resultProductTitle = document.createElement('h3')
  resultProductTitle.classList.add(
    'title',
    'text-capitalize',
    'font-15px',
    'fw-bold'
  )
  resultProductTitle.innerHTML = `<a href="productDetails.html" class="text-decoration-none text-dark">${productObject.productModelTitle}</a>`
  resultProductTitle.addEventListener('click', () => {
    saveElementToProductDetailsToLocalStorage(
      productObject.productModelID,
      productObject.productModelFrontImage,
      productObject.productModelBackImage,
      productObject.productModelTitle,
      productObject.productModelOldPrice,
      productObject.productModelPrice,
      productObject.productModelCategory,
      productObject.productModelDescription,
      productObject.productModelAdditionalInfo,
      productObject.productModelAboutBrand,
      productObject.productModelReviews,
      productObject.productModelQuestions,
      productObject.productModelAmount,
      productObject.productModelRelatedProducts,
      productObject.productModelNote,
      productObject.productModelColor,
      productObject.productModelSize
    )

    saveElementIDToRecentlyProductToLocalStorage(productObject.productModelID)
  })
  const resultProductPriceDiv = document.createElement('div')
  resultProductPriceDiv.classList.add('price', 'my-2')
  productObject.productModelOldPrice
    ? (resultProductPriceDiv.innerHTML = `<span class="text-decoration-line-through text-gray">$${productObject.productModelOldPrice}</span>  <span class=" text-dark fw-bold">$${productObject.productModelPrice}</span>`)
    : (resultProductPriceDiv.innerHTML = ` <span class=" text-dark fw-bold">$${productObject.productModelPrice}</span>`)

  const selectOptionAnchor = document.createElement('a')
  selectOptionAnchor.classList.add(
    'selectOption',
    'btn',
    'text-uppercase',
    'font-15px',
    'fw-bold',
    'w-100',
    'rounded-pill',
    'py-2'
  )
  selectOptionAnchor.href = 'productDetails.html'
  selectOptionAnchor.textContent = 'select option'
  selectOptionAnchor.addEventListener('click', () => {
    saveElementToProductDetailsToLocalStorage(
      productObject.productModelID,
      productObject.productModelFrontImage,
      productObject.productModelBackImage,
      productObject.productModelTitle,
      productObject.productModelOldPrice,
      productObject.productModelPrice,
      productObject.productModelCategory,
      productObject.productModelDescription,
      productObject.productModelAdditionalInfo,
      productObject.productModelAboutBrand,
      productObject.productModelReviews,
      productObject.productModelQuestions,
      productObject.productModelAmount,
      productObject.productModelRelatedProducts,
      productObject.productModelNote,
      productObject.productModelColor,
      productObject.productModelSize
    )
  })

  resultImageAnchor.appendChild(resultFrontImage)
  resultImageAnchor.appendChild(resultBackImage)
  productObject.productModelNote
    ? resultImageAnchor.appendChild(resultNoteDiv)
    : ''

  addToWishlistDiv.appendChild(addToWishlistIconAnchor)
  compareDiv.appendChild(compareIconAnchor)
  viewDiv.appendChild(viewIconAnchor)
  popIconsDiv.appendChild(addToWishlistDiv)
  popIconsDiv.appendChild(compareDiv)
  popIconsDiv.appendChild(viewDiv)
  popupDiv.appendChild(popIconsDiv)

  resultCardImgDiv.appendChild(resultImageAnchor)
  resultCardImgDiv.appendChild(popupDiv)

  resultCardContentDiv.appendChild(resultRatingDiv)
  resultCardContentDiv.appendChild(resultProductType)
  resultCardContentDiv.appendChild(resultProductTitle)
  resultCardContentDiv.appendChild(resultProductPriceDiv)
  resultCardContentDiv.appendChild(selectOptionAnchor)

  parentResultCardDiv.appendChild(resultCardImgDiv)
  parentResultCardDiv.appendChild(resultCardContentDiv)

  parentColDiv.appendChild(parentResultCardDiv)

  shopFilterProductResultsContainer
    ? shopFilterProductResultsContainer.appendChild(parentColDiv)
    : null
}

const renderMoreCards = (prodcutsFromJSONFile) => {
  const shopProducts = prodcutsFromJSONFile
  for (
    let productIndex = 0;
    productIndex < resultCardsIncreaseByLoadMoreClick;
    productIndex++
  ) {
    shopCurrentResultsSpanTag.innerHTML = productIndex + 1
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
      shopProducts[numbersOfCardInFilterResultContainer].note,
      shopProducts[numbersOfCardInFilterResultContainer].category,
      shopProducts[numbersOfCardInFilterResultContainer].description,
      shopProducts[numbersOfCardInFilterResultContainer].additionalInfo,
      shopProducts[numbersOfCardInFilterResultContainer].aboutBrand,
      shopProducts[numbersOfCardInFilterResultContainer].reviews,
      shopProducts[numbersOfCardInFilterResultContainer].questions,
      shopProducts[numbersOfCardInFilterResultContainer].amount,
      shopProducts[numbersOfCardInFilterResultContainer].relatedProducts
    )
    shopProductCard(productObject)
    if (
      numbersOfCardInFilterResultContainer == productsNumber ||
      productsNumber - numbersOfCardInFilterResultContainer == 1
    ) {
      loadMoreButton.classList.add('d-none')
      break
    }
    numbersOfCardInFilterResultContainer++
  }
}

const loadMoreCards = () => {
  if (numbersOfCardInFilterResultContainer < productsNumber) {
    renderMoreCards(JSONProductData)
  }
}

const renderPopUpProductCard = (wishlistFromLocalStorage) => {
  let wishlistKeys = Object.keys(wishlistFromLocalStorage)
  shopWishlistPopupMsgContentContainer
    ? (shopWishlistPopupMsgContentContainer.innerHTML = null)
    : null
  for (const elementKey in wishlistFromLocalStorage) {
    popUpProdcutCard(wishlistFromLocalStorage[elementKey])
  }
}

const popUpProdcutCard = (storedWishlistelement) => {
  const parentCardDiv = document.createElement('div')
  parentCardDiv.classList.add(
    'addToWishlist-popup-msg-content-card',
    'w-100',
    'm-0',
    'my-3',
    'p-2',
    'border-bottom',
    'border-2'
  )
  parentCardDiv.id = storedWishlistelement.id

  const cardDiv = document.createElement('div')
  cardDiv.classList.add('row', 'justify-content-between', 'align-items-center')

  // Cancel Part
  const cancelColDiv = document.createElement('div')
  cancelColDiv.classList.add('col-1', 'text-dark')
  cancelColDiv.innerHTML =
    '<i class="addToWishlist-popup-msg-content-card-cancel fa-solid fa-xmark fs-5"></i>'
  cancelColDiv.addEventListener('click', () => {
    removeWishlistElementFromLocalStorage(storedWishlistelement.id)
    parentCardDiv.remove()
    wishlistCounter(wishlistElements)
    bottomNavWishlistbtnNumber(wishlistElements)
    if (Object.keys(wishlistElements) == 0) {
      shopWishlistPopupMsgContentContainer.innerHTML = `<h4 class="text-center py-2 p-0">There are no products on the Wishlist!</h4>`
    }
    let storedWishlistelementAnchor = document.getElementById(
      `add-to-wishlist-${storedWishlistelement.id}`
    )
    storedWishlistelementAnchor
      ? (storedWishlistelementAnchor.innerHTML =
          '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-white rounded-circle text-dark"></i>')
      : null
    const addToWishlistAnchor = document.getElementById('add-to-wishlist')
    addToWishlistAnchor
      ? (addToWishlistAnchor.innerHTML =
          '<span class="m-0 p-2 px-3 bg-dark text-white font-15px rounded-3 text-capitalize">add to wishlist</span> <i class="fa-regular fa-star m-0 p-3 fs-6 bg-white rounded-circle text-dark"></i>')
      : null
    // console.log(storedWishlistelement);
  })

  // Content Part
  const contentColDiv = document.createElement('div')
  contentColDiv.classList.add('col-8', 'm-0', 'p-0')

  const contentRowDiv = document.createElement('div')
  contentRowDiv.classList.add(
    'row',
    'justify-content-between',
    'align-items-center',
    'w-100'
  )
  const contentRowCardImageDiv = document.createElement('div')
  contentRowCardImageDiv.classList.add(
    'addToWishlist-popup-msg-content-card-img',
    'col-2',
    'p-0'
  )

  const contentRowCardImage = document.createElement('img')
  contentRowCardImage.classList.add('w-100')
  contentRowCardImage.src = `assets/${storedWishlistelement.img}`
  contentRowCardImage.alt = storedWishlistelement.title

  const contentRowCardDetailsDiv = document.createElement('div')
  contentRowCardDetailsDiv.classList.add(
    'addToWishlist-popup-msg-content-card-details',
    'col-10'
  )
  const contentRowCardDetailsTitle = document.createElement('h3')
  contentRowCardDetailsTitle.classList.add(
    'addToWishlist-popup-msg-content-card-header',
    'fs-5',
    'm-0'
  )
  contentRowCardDetailsTitle.innerHTML = `<a href="productDetails.html" class="text-decoration-none text-dark">${storedWishlistelement.title}</a>`
  contentRowCardDetailsTitle.addEventListener('click', () => {
    saveElementToProductDetailsToLocalStorage(
      JSONProductData[storedWishlistelement.id - 1].id,
      JSONProductData[storedWishlistelement.id - 1].frontImg,
      JSONProductData[storedWishlistelement.id - 1].backImg,
      JSONProductData[storedWishlistelement.id - 1].title,
      JSONProductData[storedWishlistelement.id - 1].oldPrice,
      JSONProductData[storedWishlistelement.id - 1].price,
      JSONProductData[storedWishlistelement.id - 1].category,
      JSONProductData[storedWishlistelement.id - 1].description,
      JSONProductData[storedWishlistelement.id - 1].additionalInfo,
      JSONProductData[storedWishlistelement.id - 1].aboutBrand,
      JSONProductData[storedWishlistelement.id - 1].reviews,
      JSONProductData[storedWishlistelement.id - 1].questions,
      JSONProductData[storedWishlistelement.id - 1].amount,
      JSONProductData[storedWishlistelement.id - 1].relatedProducts,
      JSONProductData[storedWishlistelement.id - 1].note,
      JSONProductData[storedWishlistelement.id - 1].color,
      JSONProductData[storedWishlistelement.id - 1].size
    )
  })

  const contentRowCardDetailsOldPrice = document.createElement('span')
  contentRowCardDetailsOldPrice.classList.add(
    'addToWishlist-popup-msg-content-card-old-price',
    'fs-6',
    'm-0',
    'text-gray',
    'text-decoration-line-through'
  )
  contentRowCardDetailsOldPrice.textContent = storedWishlistelement.oldPrice

  const contentRowCardDetailsPrice = document.createElement('span')
  contentRowCardDetailsPrice.classList.add(
    'addToWishlist-popup-msg-content-card-price',
    'fs-6',
    'm-0'
  )
  contentRowCardDetailsPrice.textContent = ` ${storedWishlistelement.price}`

  const contentRowCardDetailsDate = document.createElement('p')
  contentRowCardDetailsDate.classList.add(
    'addToWishlist-popup-msg-content-card-currentDate',
    'fs-6',
    'm-0'
  )
  contentRowCardDetailsDate.textContent = storedWishlistelement.dataTime

  // Select Part
  const selectColDiv = document.createElement('div')
  selectColDiv.classList.add('col-3', 'm-0', 'p-0')
  const selectDiv = document.createElement('div')
  selectDiv.classList.add('w-100', 'text-center', 'm-0', 'p-0')
  const selectButton = document.createElement('a')
  selectButton.classList.add(
    'addToWishlist-popup-msg-content-card-select',
    'btn',
    'btn-dark',
    'rounded-pill',
    'text-uppercase',
    'py-2',
    'px-4'
  )
  selectButton.href = 'productDetails.html'
  selectButton.id = 'select'
  selectButton.type = 'button'
  selectButton.textContent = 'select'
  selectButton.addEventListener('click', () => {
    saveElementToProductDetailsToLocalStorage(
      JSONProductData[storedWishlistelement.id - 1].id,
      JSONProductData[storedWishlistelement.id - 1].frontImg,
      JSONProductData[storedWishlistelement.id - 1].backImg,
      JSONProductData[storedWishlistelement.id - 1].title,
      JSONProductData[storedWishlistelement.id - 1].oldPrice,
      JSONProductData[storedWishlistelement.id - 1].price,
      JSONProductData[storedWishlistelement.id - 1].category,
      JSONProductData[storedWishlistelement.id - 1].description,
      JSONProductData[storedWishlistelement.id - 1].additionalInfo,
      JSONProductData[storedWishlistelement.id - 1].aboutBrand,
      JSONProductData[storedWishlistelement.id - 1].reviews,
      JSONProductData[storedWishlistelement.id - 1].questions,
      JSONProductData[storedWishlistelement.id - 1].amount,
      JSONProductData[storedWishlistelement.id - 1].relatedProducts,
      JSONProductData[storedWishlistelement.id - 1].note,
      JSONProductData[storedWishlistelement.id - 1].color,
      JSONProductData[storedWishlistelement.id - 1].size
    )
  })
  //////////////////////////////
  contentRowCardImageDiv.appendChild(contentRowCardImage)
  contentRowCardDetailsDiv.appendChild(contentRowCardDetailsTitle)
  contentRowCardDetailsDiv.appendChild(contentRowCardDetailsOldPrice)
  contentRowCardDetailsDiv.appendChild(contentRowCardDetailsPrice)
  contentRowCardDetailsDiv.appendChild(contentRowCardDetailsDate)
  contentRowDiv.appendChild(contentRowCardImageDiv)
  contentRowDiv.appendChild(contentRowCardDetailsDiv)
  contentColDiv.appendChild(contentRowDiv)
  selectDiv.appendChild(selectButton)
  selectColDiv.appendChild(selectDiv)

  cardDiv.appendChild(cancelColDiv)
  cardDiv.appendChild(contentColDiv)
  cardDiv.appendChild(selectColDiv)

  parentCardDiv.appendChild(cardDiv)

  shopWishlistPopupMsgContentContainer
    ? shopWishlistPopupMsgContentContainer.appendChild(parentCardDiv)
    : null
}

export const saveElementToWishlistToLocalStorage = (
  wishlistElementID,
  wishlistElementImage,
  wishlistElementTitle,
  wishlistElementOldPrice,
  wishlistElementPrice,
  wishlistElementCategory,
  wishlistElementDescription,
  wishlistElementAdditionalInfo,
  wishlistElementAboutBrand,
  wishlistElementReviews,
  wishlistElementQuestions,
  wishlistElementAmount,
  wishlistElementRelatedProducts
) => {
  const currentDate = new Date().toString()

  if (!(wishlistElementID in wishlistElements)) {
    let choosenElement = {
      id: wishlistElementID,
      img: wishlistElementImage,
      title: wishlistElementTitle,
      oldPrice: wishlistElementOldPrice,
      price: wishlistElementPrice,
      dataTime: currentDate.slice(0, 15),
      category: wishlistElementCategory,
      description: wishlistElementDescription,
      additionalInfo: wishlistElementAdditionalInfo,
      aboutBrand: wishlistElementAboutBrand,
      reviews: wishlistElementReviews,
      questions: wishlistElementQuestions,
      amount: wishlistElementAmount,
      relatedProducts: wishlistElementRelatedProducts,
    }
    wishlistElements[`${wishlistElementID}`] = choosenElement
    // console.log(wishlistElements);
    localStorage.setItem('User_Wishlist', JSON.stringify(wishlistElements))
  }
}

export const saveElementToProductDetailsToLocalStorage = (
  productDetailsID,
  productDetailsFrontImage,
  productDetailsBackImage,
  productDetailsTitle,
  productDetailsOldPrice,
  productDetailsPrice,
  productDetailsCategory,
  productDetailsDescription,
  productDetailsAdditionalInfo,
  productDetailsAboutBrand,
  productDetailsReviews,
  productDetailsQuestions,
  productDetailsAmount,
  productDetailsRelatedProducts,
  productDetailsNote,
  productDetailsColor,
  productDetailsSize
) => {
  let choosenElement = {
    id: productDetailsID,
    frontImg: productDetailsFrontImage,
    backImg: productDetailsBackImage,
    title: productDetailsTitle,
    oldPrice: productDetailsOldPrice,
    price: productDetailsPrice,
    category: productDetailsCategory,
    description: productDetailsDescription,
    additionalInfo: productDetailsAdditionalInfo,
    aboutBrand: productDetailsAboutBrand,
    reviews: productDetailsReviews,
    questions: productDetailsQuestions,
    amount: productDetailsAmount,
    relatedProducts: productDetailsRelatedProducts,
    note: productDetailsNote,
    color: productDetailsColor,
    size: productDetailsSize,
  }
  // console.log(productDetailss);
  localStorage.setItem('product_details', JSON.stringify(choosenElement))
}

export const saveElementIDToRecentlyProductToLocalStorage = (elementID) => {
  let choosenElement = elementID
  recentlyProducts[choosenElement] = choosenElement
  console.log(typeof recentlyProducts)
  localStorage.setItem('recently_products', JSON.stringify(recentlyProducts))
}

export const removeWishlistElementFromLocalStorage = (elementID) => {
  delete wishlistElements[elementID]
  localStorage.setItem('User_Wishlist', JSON.stringify(wishlistElements))
}

export const renderWishlistPopUp = () => {
  renderPopUpProductCard(wishlistElements)
  const popup = document.getElementById('addToWishlist-popup')
  popup.classList.toggle('d-none')
}

const shopCartAlignment = (alginmentTypeFromHTML) => {
  shopCardalginmentType = alginmentTypeFromHTML

  for (const key of shopCardresults) {
    if (shopCardalginmentType == 'three' || screen.width <= 991) {
      key.classList.contains('col-2') ? key.classList.remove('col-2') : null
      key.classList.contains('col-3') ? key.classList.remove('col-3') : null
      key.classList.contains('col-6') ? key.classList.remove('col-6') : null
      key.classList.contains('col-12') ? key.classList.remove('col-12') : null
      key.classList.add('col-4')
    } else if (shopCardalginmentType == 'two' || screen.width <= 767) {
      key.classList.contains('col-2') ? key.classList.remove('col-2') : null
      key.classList.contains('col-3') ? key.classList.remove('col-3') : null
      key.classList.contains('col-4') ? key.classList.remove('col-4') : null
      key.classList.contains('col-12') ? key.classList.remove('col-12') : null
      key.classList.add('col-6')
    } else if (shopCardalginmentType == 'four') {
      key.classList.contains('col-2') ? key.classList.remove('col-2') : null
      key.classList.contains('col-4') ? key.classList.remove('col-4') : null
      key.classList.contains('col-6') ? key.classList.remove('col-6') : null
      key.classList.contains('col-12') ? key.classList.remove('col-12') : null
      key.classList.add('col-3')
    } else if (shopCardalginmentType == 'five') {
      key.classList.contains('col-3') ? key.classList.remove('col-3') : null
      key.classList.contains('col-4') ? key.classList.remove('col-4') : null
      key.classList.contains('col-6') ? key.classList.remove('col-6') : null
      key.classList.contains('col-12') ? key.classList.remove('col-12') : null
      key.classList.add('col-2')
    } else if (shopCardalginmentType == 'list') {
      key.classList.contains('col-2') ? key.classList.remove('col-2') : null
      key.classList.contains('col-3') ? key.classList.remove('col-3') : null
      key.classList.contains('col-4') ? key.classList.remove('col-4') : null
      key.classList.contains('col-6') ? key.classList.remove('col-6') : null
      key.classList.add('col-12')
    }
  }

  for (const key of shopCardResultsContent) {
    if (shopCardalginmentType == 'list') {
      key.classList.add('d-flex')
    } else {
      key.classList.remove('d-flex')
    }
  }
  for (const key of shopCardResultsContentImgs) {
    if (shopCardalginmentType == 'list') {
      key.style.width = '25%'
    } else {
      key.style.width = 'unset'
    }
  }
  for (const key of shopCardResultsContentDetails) {
    if (shopCardalginmentType == 'list') {
      key.classList.add('align-self-center')
    } else {
      key.classList.remove('align-self-center')
    }
  }
}

renderShopProductsResults(JSONProductData)
renderPopUpProductCard(wishlistElements)
loadMoreButton ? loadMoreButton.addEventListener('click', loadMoreCards) : null
closePopUpMsg
  ? closePopUpMsg.addEventListener('click', renderWishlistPopUp)
  : null
continueShoppingBtn
  ? continueShoppingBtn.addEventListener('click', renderWishlistPopUp)
  : null
wishlistCounter(wishlistElements)

alignmentList
  ? alignmentList.addEventListener(
      'click',
      shopCartAlignment.bind(this, 'list')
    )
  : null
alignmentTwo
  ? alignmentTwo.addEventListener('click', shopCartAlignment.bind(this, 'two'))
  : null
alignmentThree
  ? alignmentThree.addEventListener(
      'click',
      shopCartAlignment.bind(this, 'three')
    )
  : null
alignmentFour
  ? alignmentFour.addEventListener(
      'click',
      shopCartAlignment.bind(this, 'four')
    )
  : null
alignmentFive
  ? alignmentFive.addEventListener(
      'click',
      shopCartAlignment.bind(this, 'five')
    )
  : null
// console.log(shopCardresults);
