const User = require('../models/userModel');

class UserController {
    static async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch(error) {
            res.status(500).json({
                message: `Error fetching users: ${error}`
            });
        }
    }

    static async createUser(req, res) {
        try {
            const { name, email } = req.body;
            const user = await User.find({email: email});
            console.log(user);
            if(user.length > 0) {
                res.status(404).json({
                    message: `Ya existe un usuario con ese correo`
                });
            } else {
                const newUser = await User.create({
                    name,
                    email
                });
                res.status(201).json({
                    data: newUser,
                    message: `Usuario registrado correctamente`
                });
            }
        } catch (error) {
            res.status(500).json({
                message: `No se pudo registrar error en la conexión ${error}`
            });
        }
    }
}

module.exports = UserController;