// require the db created in the index file
const db = require('../models/index')

// get the Bags model
const Elcd = db.Elcds;

// main work
const addElcd = async (req, res) => {
    let input_data = {
        symbol: req.body.symbol,
        name: req.body.name,
        price: req.body.price,
        changesPercentage: req.body.changesPercentage,
        yearLow: req.body.yearLow,
        yearHigh: req.body.yearHigh,
        symbol: req.body.symbol
        
     }
     // using the builtin 'create' function on Bag Model
     const elcd = await Elcd.create(input_data)
     
     // send a 200 response with the created entry
     res.status(200).send(elcd)
}

const getAllElcds = async (req, res) => {

    // using the builtin 'findAll' function on Bag Model
    let elcds = await Elcd.findAll({})
    res.status(200).send(elcds)
}

const getOneElcd = async (req, res) => {
    
    // getting the id from the params in the req
    let id = req.params.id

    // using the builtin 'findAll' function on Bag Model
    let elcd = await Elcd.findOne({where: {id: id}})
    res.status(200).send(elcd)
}

const updateElcd = async (req, res) => {
    let id = req.params.id

    // using the builtin 'findAll' function on Bag Model
    const elcd = await Elcd.update(req.body, { where: {id: id}})
    res.status(200).send(bag)
}

const deleteElcd = async (req, res) => {
    let id = req.params.id

    // using the builtin 'destroy' function on Bag Model
    await Elcd.destroy({where :{id: id}})
    res.status(200).send(`elcd with id: ${id} is deleted`)
}

// export all the controller functions
module.exports = {
    addElcd,
    getAllElcds,
    getOneElcd,
    updateElcd,
    deleteElcd
}