const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const reviewRoutes = require("./routes/review.routes");
const gambarRoutes = require("./routes/gambar.routes");


app.use(bodyParser.json());
app.use("/upload", express.static('imagesUploaded'));
app.use("/review", reviewRoutes);
app.use("/gambar", gambarRoutes);



module.exports = app;