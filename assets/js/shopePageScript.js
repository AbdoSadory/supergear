import products from "../data/products.json" assert { type: "json" };

const shopProductsFromJSONFile = products;

typeof shopProductsFromJSONFile.products.forEach((ele) => {
  console.log(ele.title);
});
