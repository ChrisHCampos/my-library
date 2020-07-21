import knex from 'knex';
import path from 'path';

const knex = require('knex');
//const configuration = require('../../knexfile');

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
});

export default connection;