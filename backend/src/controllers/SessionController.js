const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;
        
        const users = await connection('users')
            .where('id', id).limit(5)
            .select('nomeUsuario').first();

        if(!users) {
            return response.status(400).json({ error: 'No USER found with this ID'});
        }

        return response.json(users);
    }
}