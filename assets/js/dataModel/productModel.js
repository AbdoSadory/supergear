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
    note
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
  }
}
