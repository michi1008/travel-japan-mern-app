import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

import config from './environment.js';
console.log('start')
console.log(config)
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
console.log('Connecting to MongoDB: ' + config.mongoDB.url);
mongoose.connect(config.mongoDB.url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);