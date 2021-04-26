
const express = require('express');
const { authenticate,register,registerCheckOut,getAll,getCurrent,getById,update,remove} = require('../controllers/UserController');
const { auth } = require('../middleware/authMiddleware');
const router = express.Router();

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
//registerCheckOut
router.post('/registerCheckOut', registerCheckOut);
router.get('/', auth,getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;