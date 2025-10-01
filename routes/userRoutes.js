import express from "express";
import { fetchUsers, fetchUser, addUser, editUser, removeUser } from "../controllers/userController.js";
import { validateUser } from "../validators/userValidator.js";

const router = express.Router();

router.get("/", fetchUsers);
router.get("/:id", fetchUser);
router.post("/", validateUser, addUser);
router.put("/:id", validateUser, editUser);
router.delete("/:id", removeUser);

export default router;
