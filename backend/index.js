require("./config/configdb");
const express = require("express");
const cors = require("cors");
const productRoutes = require("./app/routes/productRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(productRoutes);
app.listen(5000, () =>
    console.log("server running in : http://localhost:5000")
);
