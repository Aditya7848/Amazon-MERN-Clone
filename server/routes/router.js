const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const User = require("../models/userSchema");

router.get("/getproducts", async (req, res) => {
  try {
    const productsdata = await Products.find();
    res.status(200).json(productsdata);
  } catch (error) {
    console.log(error);
  }
});

router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const individualdata = await Products.findOne({ id: id });
    // console.log("individualdata" + "=======================" + individualdata);
    res.status(200).json(individualdata);
  } catch (error) {
    // res.status(200).json(individualdata);
    console.log(error);
  }
});

router.post("/register", async (req, res) => {
  const { fname, email, mobile, password, cpassword } = req.body;

  if (!fname || !email || !mobile || !password || !cpassword) {
    res.status(422).json({ error: "fill the all data" });
    console.log("data not available");
  }

  try {
    const preuser = await User.findOne({ email: email });

    if (preuser) {
      res.status(422).json({ error: "this user is already present" });
    } else if (password != cpassword) {
      res.status(422).json({ error: "password and cpassword doesnt match" });
    } else {
      const finaluser = new User({
        fname,
        email,
        mobile,
        password,
        cpassword,
      });
      console.log("finaluser" + finaluser);

      const storedata = await finaluser.save();
      console.log(storedata + "user successfully added");

      res.status(200).json(storedata);
    }
  } catch (error) {}
});

module.exports = router;
