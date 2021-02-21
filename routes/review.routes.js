const routes = require ("express").Router();
const reviewController = require ("../controller/review.controller");

routes.post("/tambah", reviewController.postReview);
routes.get("/tampil/:id", reviewController.showReviewId);
routes.get("/tampil", reviewController.showAllReview);
routes.patch("/edit/:id", reviewController.editReview);
routes.delete("/hapus/:id", reviewController.hapusReview);


module.exports = routes;