import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    author:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    available:{
        type:Boolean,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
});

let Book = mongoose.model("Book",bookSchema);
export default Book;

