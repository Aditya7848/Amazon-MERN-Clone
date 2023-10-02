const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");

router.get("/getproducts", async (req, res) => {
  try {
    const productsdata = await Products.find();
    res.status(200).json(productsdata);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
