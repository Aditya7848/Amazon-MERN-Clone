const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const User = require("../models/userSchema");

const bcrypt = require("bcryptjs");

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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "fill all the data" });
  }

  try {
    const userlogin = await User.findOne({ email: email });

    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);

      const token = await userlogin.generateAuthtoken();

      res.cookie("Amazonweb", token, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Passwords do not match." });
      } else {
        res
          .status(200)
          .json({ success: "Passwords match.", fname: userlogin.fname });
      }
    } else {
      res.status(400).json({ error: "User does not exist." });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid password." });
  }
});

module.exports = router;
