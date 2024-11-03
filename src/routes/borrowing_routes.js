const express = require("express");
const BorrowingController = require("../controllers/borrowing_controller");

const borrowingRouter = express.Router();

// borrowingRouter.get("/borrowings", BorrowingController.getAll);
// borrowingRouter.get("/borrowing/:id", BorrowingController.getById);
// borrowingRouter.post("/borrowing", BorrowingController.create);
// borrowingRouter.put("/borrowing/:id", BorrowingController.update);
// borrowingRouter.post("/borrow/book/return", BorrowingController.return);

borrowingRouter.get("/borrow/book/list", BorrowingController.getAll);
borrowingRouter.post("/borrow/book", BorrowingController.create);
borrowingRouter.post("/borrow/book/return", BorrowingController.return);
borrowingRouter.delete("/borrowing/:id", BorrowingController.delete);

module.exports = borrowingRouter;
