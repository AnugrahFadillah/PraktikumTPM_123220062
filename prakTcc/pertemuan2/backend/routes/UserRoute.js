import express from "express";
import {
    getUsers, 
    createUser, 
    updateUser,
    deleteUser
 } from "../controllers/UserController.js";

const router = express.Router();

//buat endpoint
router.get('/users', getUsers);
router.post('/users', createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;