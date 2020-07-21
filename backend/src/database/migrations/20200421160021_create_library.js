exports.up = function(knex) {
  return knex.schema.createTable('library', function (table) {
    table.increments();

    table.string('nomeLivro').notNullable();
    table.string('genero').notNullable();
    table.string('numeroSerie').notNullable();
    table.string('autor').notNullable();
    table.string('descricao').notNullable();
    table.string('status').notNullable();

    table.string('id_users').notNullable();

    table.foreign('id_users').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('library');
};
