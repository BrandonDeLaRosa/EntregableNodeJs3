const { Router } = require('express');
const { createtoDo, getToDos, updateToDo, deleteToDo } = require('../controllers/toDosControler');


const router = Router();

router.get('/api/v1/toDos/toDo', getToDos);
router.post('/api/v1/toDos/toDo', createtoDo);
router.put('/api/v1/toDos/toDo/:id', updateToDo);
router.delete('/api/v1/toDos/toDo/:id', deleteToDo);

module.exports = router;