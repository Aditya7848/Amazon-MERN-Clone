const mongoose = require("mongoose");

const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.zvr0qku.mongodb.net/Amazonweb?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));
