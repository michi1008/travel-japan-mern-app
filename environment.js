import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path:path.resolve('.env')})

export default {
  jwtSecret: process.env.JWT_SECRET,
  mongoDB: {
    url: process.env.MONGODB_URL
  }
}