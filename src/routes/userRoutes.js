const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API to manage users
 */


/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve a list of users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "605c72b594b829001f0e9d32"
 *                   name:
 *                     type: string
 *                     example: "John Doe"
 *                   email:
 *                     type: string
 *                     example: "john.doe@example.com"
 */
router.get('/', async (req, res) => {
    UserController.getAllUsers(req, res);
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *     responses:
 *       201:
 *         description: User created
 *       500:
 *         description: Error creating user
 */
router.post('/', async (req, res) => {
    UserController.createUser(req, res);
});

module.exports = router;