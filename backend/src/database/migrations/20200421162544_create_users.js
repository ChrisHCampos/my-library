exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('id').primary();
        table.string('nomeUsuario').notNullable();
        table.string('cpf').notNullable();
        table.string('endereco').notNullable();
        table.string('contato').notNullable();
        table.string('email').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
