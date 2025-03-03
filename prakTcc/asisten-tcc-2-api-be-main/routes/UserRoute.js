import express from "express";
import { getUsers, createUser } from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/add-users", createUser);

export default router;
