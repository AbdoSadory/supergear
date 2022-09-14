export default class ProductModel {
  constructor(
    id,
    frontImage,
    backImage,
    type,
    title,
    price,
    oldPrice,
    color,
    size,
    note,
    category,
    description,
    additionalInfo,
    aboutBrand,
    reviews,
    questions,
    amount,
    relatedProducts
  ) {
    this.productModelID = id;
    this.productModelFrontImage = frontImage;
    this.productModelBackImage = backImage;
    this.productModelType = type;
    this.productModelTitle = title;
    this.productModelPrice = price;
    this.productModelOldPrice = oldPrice;
    this.productModelColor = color;
    this.productModelSize = size;
    this.productModelNote = note;
    this.productModelCategory = category;
    this.productModelDescription = description;
    this.productModelAdditionalInfo = additionalInfo;
    this.productModelAboutBrand = aboutBrand;
    this.productModelReviews = reviews;
    this.productModelQuestions = questions;
    this.productModelAmount = amount;
    this.productModelRelatedProducts = relatedProducts;
  }
}
