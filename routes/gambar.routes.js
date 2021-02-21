const routes = require ("express").Router();
const gambarController = require ("../controller/gambar.controller");
const gambarUploader = require ("../helper/imageUploader");

routes.post('/upload', gambarUploader.upload.single('image'), gambarController.uploadGambar);


module.exports = routes;