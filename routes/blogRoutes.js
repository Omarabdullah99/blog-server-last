import express from 'express'
import { createBlog,  deleteBloge,  getBlog, getBlogBySearch, getBlogByUserId, getBlogs, getBlogsByTag, getLatestBlogs, likeBlog, testBlog, updateBlog } from '../controllers/blogController.js'
import auth from '../middleware/auth.js'

const router= express.Router()

router.get("/allblogs",getBlogs)
router.get("/latestblog",getLatestBlogs)
router.get("/search", getBlogBySearch);
router.get("/tag/:tag", getBlogsByTag);
router.get("/:id",getBlog)
router.get("/userblogs/:id",getBlogByUserId)

router.delete("/deleteblog/:id",deleteBloge)
router.post("/createblog",auth, createBlog)
router.patch("/:id",auth,updateBlog)
router.patch("/like/:id", auth, likeBlog);




router.get("/",testBlog)
export default router