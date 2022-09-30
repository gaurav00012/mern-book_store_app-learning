import mongoose from "mongoose";
import Book from '../models/Book.js';

export const getAllBooks = async (req,res,next) =>{
    let books
    
    try {
        books = await Book.find();
    } catch (error) {
        console.log(errro);
    }
    if (!books) {
        return res.status(404).json({ message: "No Books Found" });
    }
    return res.status(200).json({ books  });
}

export const getBookById = async(req,res,next)=>{
    const id =req.params.id
    let book ;
    try {
        book = await Book.findById(id);
    } catch (error) {
        console.log(error)
    }

    if(!book)
    {
        return res.status(404).json({message:"No Book Found"});
    }
    return res.status(200).json({book});
}

export const addBook = async (req,res,next) => {
    const {name, author, description, price, available, image } = req.body;
    let book;
    try
    {
        book = new Book({
            name,author, description,price,available,image
        });
        await book.save();
    }
    catch(error)
    {
        console.log(error)
    }
    
    if(!book)
    {
        return res.status(500).json({message:'Unable To Add'})
    }
    return res.status(201).json({book})
}

export const updateBook = async(req,res,next) => {
    const id =req.params.id
    const {name, author, description, price, available, image } = req.body;
    let book;
    try
    {
        book = await Book.findByIdAndUpdate(id,{name, author, description, price, available, image });
        book = await book.save()
    }
    catch(error)
    {
        console.log(error);
    }   
    if(!book)
    {
        return res.status(500).json({message:'Unable To Add'})
    }
    return res.status(201).json({book})
}

export const deleteBook = async (req,res,next) =>{
    const id =req.params.id  
    let book;
    try
    {
        book = await Book.findByIdAndRemove(id);
    }
    catch(error){
        console.log(error);
    }
    if(!book)
    {
        return res.status(500).json({message:'Unable To delete'})
    }
    return res.status(201).json({message:'Book deleted'})
}



