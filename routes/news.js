const express = require("express");

const router = express.Router();

const newsController = require("../controllers/news");
const commentsController = require("../controllers/comments");
const authMiddleware = require("../middlewares/auth");
const newsMiddleware = require("../middlewares/news");

router
  .route("/:id/comments")
  .get(authMiddleware.isAuth, commentsController.getByNovelty);
router.get("/", authMiddleware.isAdmin, paginateMiddleware.pageValidation, newsController.getAll);
router.post(
  "/",
  authMiddleware.isAdmin,
  newsMiddleware.newsInputValidation,
  newsController.create
);
router.route("/:id").get(authMiddleware.isAdmin, newsController.getById);
router
  .route("/:id")
  .put(
    authMiddleware.isAdmin,
    newsMiddleware.newsInputValidation,
    newsController.update
  );
router.route("/:id").delete(authMiddleware.isAdmin, newsController.remove);


module.exports = router;
