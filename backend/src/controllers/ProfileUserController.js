const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const id_users = request.headers.authorization;

        const library = await connection('library')
            .where('id_users', id_users)
            .select('*');
        
        return response.json(library);
    }
}