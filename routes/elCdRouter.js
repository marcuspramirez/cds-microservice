// the router file contains all the routes that can be accessed
const elCdController = require('../controllers/elCdController.js')

// create a Router object from express
const router = require('express').Router()

// add a new bag to the table
router.post('/', elCdController.addElcd)

// access all the bags in the table
router.get('/', elCdController.getAllElcds)

// access one bag by id
router.get('/:id', elCdController.getOneElcd)

// modify one bag by id
router.put('/:id', elCdController.updateElcd)

// delete one bag by id
router.delete('/:id', elCdController.deleteElcd)

module.exports = router 