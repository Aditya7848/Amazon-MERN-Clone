require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 8005;

app.listen(port, () => console.log(`server is running at port ${port}`));
