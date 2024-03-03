const userModel = require('../models/user')

module.exports.searchUserById = async (req, res) => {
    const {id} = req.params;

    try {
        // Llama a la función del modelo para obtener un usuario por nombre de usuario
        const user = await userModel.getUserByid(id);

        if (user) {
            res.status(200).json(user)
        }
        else {
            res.status(500).json({message: 'Usuario no encontrado'});
        }
    } catch (e) {
        console.error('Error al obtener el usuario por nombre de usuario:', e);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}