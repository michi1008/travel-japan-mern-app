import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  place: String,
  name: String,
  creator: String,
  description: String,
  creator:String,
  prefecture: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date()
  }


})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;