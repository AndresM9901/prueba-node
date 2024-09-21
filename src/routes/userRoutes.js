const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/', async (req, res) => {
    UserController.getAllUsers(req, res);
});

router.post('/', async (req, res) => {
    UserController.createUser(req, res);
});

module.exports = router;