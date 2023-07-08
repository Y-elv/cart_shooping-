import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRoute from '../Routes/productRoutes';
import cartRoute from '../Routes/cartRoutes'
import photoRoutes from '../Routes/photoRoutes'
dotenv.config();

//connect to mongo db

const MongoDB_connection_string ="mongodb+srv://mugishaelvis456:umugishamwiza@cluster0.0ooycod.mongodb.net/?retryWrites=true&w=majority";
async function connectToMongoDB(connectionstring: string) {
  await mongoose.connect(connectionstring);
  console.log("connected to the database successfully!");
}
try {
  connectToMongoDB(MongoDB_connection_string)
}catch (e) {
  console.log("error occured while connecting to the database: ",e);
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(cookieParser());
const port = 5500;

//creating product

app.use("/product",productRoute)
//create cart
app.use("/cart",cartRoute)
//photo upload
app.use("/upload",photoRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('welcome to cart Shopping');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
