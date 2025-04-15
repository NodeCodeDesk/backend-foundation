import express from "express";
import { getUsers, creatUser, getUser, updateUser, deleteUser } from '../controllers/userController';

const router = express.Router();

router.get('/', getUsers);
router.poost('/', creatUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);;

export default router;