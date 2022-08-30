export default class ProductModel {
  constructor(
    frontImage,
    backImage,
    type,
    title,
    price,
    oldPrice,
    color,
    size,
    note
  ) {
    this.productModelFrontImage = frontImage;
    this.productModelBackImage = backImage;
    this.productModelType = type;
    this.productModelTitle = title;
    this.productModelPrice = price;
    this.productModelOldPrice = oldPrice;
    this.productModelColor = color;
    this.productModelSize = size;
    this.productModelNote = note;
  }
}
