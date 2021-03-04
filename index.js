import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

// set up server
dotenv.config({path:path.resolve('.env')})
const app = express();
const PORT = process.env.PORT || 5000;
// Define middleware
app.use(bodyParser.json({ limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true}));
app.use(cors());
app.options('*', cors());

app.use('/posts', postRoutes);
app.use('/users', userRoutes);



//connnect to mongoDB

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);