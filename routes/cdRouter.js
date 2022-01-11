// import the controller functions
const cdController = require('../controllers/cdController.js');

// create a Router object from express
const router = require('express').Router();

// add a new customer to the table
router.post('/', cdController.addCd);

// access all the cds in the table
router.get('/', cdController.getAllCds);

// access one customer by id
router.get('/:id', cdController.getOneCd);

// modify one customer by id
router.put('/:id', cdController.updateCd);

// delete one customer by id
router.delete('/:id', cdController.deleteCd);

module.exports = router