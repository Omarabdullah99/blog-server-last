import mongoose from 'mongoose'

const blogSchema= mongoose.Schema({
    title: String,
    description: String,
    name: String,
    creator: String,
    tags: [String],
    category:String,
    imageFile:String,
    createdAt: {
      type: Date,
      default: new Date(),
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    likes: {
      type: [String],
      default: [],
    },
})

const BlogModel = mongoose.model("Blog", blogSchema)

export default BlogModel