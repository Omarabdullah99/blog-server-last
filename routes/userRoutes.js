import express from 'express'
import { getAllUsers, signin, signup, testUser } from '../controllers/userController.js'

const router= express.Router()

router.get("/test",testUser)
router.get("/allusers",getAllUsers)
router.post('/signup', signup)
router.post("/signin",signin)

export default router