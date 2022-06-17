const knex = require('../db/db')
require('dotenv').config();

const tableName = process.env.TABLE_NAME ;

const insertData = async(req, res) => {
    const data = req.body;
    try {
        await knex(tableName)
                .insert(data)
        res.status(201).send("Inserted successfully.")
    } catch (error) {
        res.status(500).send(error.message)
    }
};


const readData = async(req, res) => {
    try {
        const result = await knex(tableName)
        res.status(200).send(result? result : "There is no data.")
    } catch (error) {
        res.status(500).send(error.message)
    }
};


const patchData = async(req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        await knex(tableName)
                .where({ id })
                .update(data)
        res.status(200).send("Updated successfully.")
    } catch (error) {
        res.status(400).send(error.message)
    }
};


const deleteData = async(req, res) => {
    const id = req.params.id;
    try {
        await knex(tableName)
                .where({ id })
                .del()
        res.status(200).send("Deleted.")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    insertData,
    readData,
    patchData,
    deleteData
}