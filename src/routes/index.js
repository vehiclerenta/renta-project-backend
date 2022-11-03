const express = require("express");

const Router = express.Router();

const productRoutes = require("./product");
const vehicleRoutes = require("./vehicle");

Router.use("/product", productRoutes);
Router.use("/vehicle", vehicleRoutes);

module.exports = Router;
