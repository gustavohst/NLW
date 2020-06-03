import knex from 'knex';
import path from 'path'

const connections = knex({
    client: 'sqlite3', 
    connection: {
        filename: path.resolve(__dirname,'database.sqlite'),
    },
});

export default connections;

// Migrations = histórico do banco de daods

// create table points
// create table users