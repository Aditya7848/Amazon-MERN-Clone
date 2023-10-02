const Products = require("./models/productsSchema");
const productsdata = require("./constant/productsdata");

const DefaultData = async () => {
  try {
    await Products.deleteMany({});
    const storeData = await Products.insertMany(productsdata);
    console.log(storeData);
  } catch (error) {
    console.log("error from default data upload...", error.message);
  }
};

module.exports = DefaultData;
