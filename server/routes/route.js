import express from 'express';



import {addUser,getUsers,getUser,editUser,deleteUser} from '../controller/user-controller.js';

const router=express.Router();//Router() function ki madad sae routing kar saktae hai

//agar post api hoti hai and '/add' sae match hoti hai toh ek callback function ko call karna hai
router.post('/add',addUser);
router.get('/all',getUsers);
router.get('/:id',getUser);
router.put('/:id',editUser);
router.delete('/:id',deleteUser);

export default router;