const router = require('express').Router();

const {
    insertData,
    readData,
    patchData,
    deleteData
} = require('../services/data.service')

router.post('/', insertData)
router.get('/', readData)
router.patch('/:id', patchData)
router.delete('/:id', deleteData)

module.exports = router;