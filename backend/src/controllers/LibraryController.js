const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const { page= 1 } = request.query;

        const [count] = await connection('library')
            .count();

        const library = await connection('library')
            .join('users', 'id_users', '=', 'library.id_users')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'library.*', 
                'users.nomeUsuario', 
                'users.cpf', 
                'users.endereco', 
                'users.contato', 
                'users.email'
            ]);

        response.header('X-Total-Count', count['count(*)']);
    
        return response.json(library);
    },

    async create(request, response) {
        const { autor, genero, leitura, nomeLivro, numeroSerie, status } = request.body;
        const id_users = request.headers.authorization;

        const [id] = await connection('library').insert({
            nomeLivro,
            genero,
            numeroSerie,
            autor,
            status,
            leitura,
            id_users,
        });

        return response.json({ id });
    }, 

    async delete(request, response) {
        const { id } = request.params;
        const id_users = request.headers.authorization;

        const library = await connection('library')
            .where('id', id)
            .select('id_users')
            .first();

        if(library.id_users != id_users) {
            return response.status(401).json( {error: 'Operation not permitted'});
        }

        await connection('library').where('id', id).delete();

        return response.status(204).send();
    }
};