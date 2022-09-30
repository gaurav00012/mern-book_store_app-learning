import mongoose from 'mongoose';
import express  from 'express';
//import bodyParser from 'body-parser';
import cors from 'cors';
import bookRoutes from './routes/book-routes.js';
const app = new express();

const port = 5000
const DBURI_CONNECTION_URL = 'mongodb://localhost:27017/portfolio';
app.use(express.json())
//app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// Middleware

app.use("/books",bookRoutes);
// app.use('/',(req,res,next)=>{
//     res.send('this is our starting app');
// });

//app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`))

mongoose.connect(DBURI_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`)))
  .catch((error) => console.log(`${error} did not connect`));


