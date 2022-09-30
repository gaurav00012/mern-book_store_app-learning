import express from 'express';
import {getAllBooks, addBook, getBookById, updateBook, deleteBook} from '../controllers/book-controller.js';
import Book from '../models/Book.js'

const router = express.Router();


router.get('/', getAllBooks);
router.post('/',addBook);
router.get("/:id",getBookById);
router.put("/:id",updateBook);
router.delete("/:id",deleteBook);


//module.exports = router;
export default router;