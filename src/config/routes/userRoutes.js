import express from 'express';
import { getalluser,createUser,getUserById,updateUser,deleteUser } from '../controllers/controller.js';

const router=express.Router();

router.post("/user",createUser)
router.get('/user',getalluser);
router.get('/user/:id',getUserById);
router.put('/user/:id',updateUser)
router.delete('/user',deleteUser)
//router.get('/user/:id',getuserbyid)
//router.put('/user/update',updateUser)

export default router;