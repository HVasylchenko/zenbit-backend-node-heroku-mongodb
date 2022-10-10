import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Post from "./Post.js";

const PORT = process.env.PORT || 5000;
const DB_URL = 'mongodb+srv://zenbit:zenbit@cluster0.luqnens.mongodb.net/?retryWrites=true&w=majority'

const app = express();
app.use(cors({origin:true,credentials: true}));
app.use(express.json());

app.post('/', async (req, res)=>{
    try {
        const {email, password} = req.body;
        const post = await Post.create({email, password});
        res.status(200).json('сервер работает');
        res.json(post);
        console.log(req.body)
    } catch (error) {
        res.status(500).json(error);        
    }
});

async function startApp () {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => {console.log("SERVER WORKS ON PORT " + PORT)});

    } catch (error) {
        console.log(error)
    }
};
 startApp(); 

