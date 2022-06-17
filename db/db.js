require('dotenv').config({path: '../.env'});


const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.HOST,
        user: 'root',
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        multipleStatements: true
    }
});


knex.schema
    .createTable(process.env.TABLE_NAME, (table) => {
        table.increments('id');
        table.string('name');
        table.string('email');
        table.string('password');
    })
    .then(() => {
        console.log('table created')
    })
    .catch((err) => {
        console.log(err.message)
    })

module.exports = knex