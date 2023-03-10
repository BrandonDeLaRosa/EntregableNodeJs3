const { Router } = require('express');
const { getAllUsers,createUser, updateUser, deleteUser } = require('../controllers/users.controller');
const Users = require ('../models/users.model');


const router = Router();

router.get ('/api/v1/toDos/users', getAllUsers);
router.post('/api/v1/toDos/users', createUser);
router.put('/api/v1/toDos/users/:id',updateUser);
router.delete('/api/v1/toDos/users/:id', deleteUser)

module.exports = router;