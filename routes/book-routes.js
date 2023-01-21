import express from "express"
import { getAllBooks, getById, addBook, updateBook, deleteBook, } from "../controllers/book-controllers.js";
const router = express.Router();

router.get('/', getAllBooks);
router.post('/', addBook);
router.get('/:id', getById);
router.delete('/:id', deleteBook);
router.put('/:id', updateBook);

export default router;