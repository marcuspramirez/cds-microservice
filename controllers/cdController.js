//This file is responsible for defining all the possible functions that our API will offer

// require the db created in the index file
const db = require("../models/index");

// get the cds model
const Cd = db.Cds;

const addCd = async (req, res) => {
  let input_data = {
    minimumOpeningDeposit: req.body.minimumOpeningDeposit,
    term: req.body.term,
    interestRate: req.body.interestRate,
  };
  // using the builtin 'create' function on Customer Model
  const cd = await Cd.create(input_data);

  // send a 200 response with the created entry
  res.status(200).send(cd);
};

const getAllCds = async (req, res) => {
  // using the builtin 'findOne' function on Customer Model
  let cds = await Cd.findAll({});
  res.status(200).send(cds);
};

const getOneCd = async (req, res) => {
  // getting the id from the params in the req
  let id = req.params.id;

  // using the builtin 'findOne' function on Customer Model
  let cds = await Cd.findOne({ where: { id: id } });
  res.status(200).send(cds);
};

const updateCd = async (req, res) => {
  let id = req.params.id;

  // using the builtin 'update' function on Customer Model
  const cd = await Cd.update(req.body, { where: { id: id } });
  res.status(200).send(cd);
};

const deleteCd = async (req, res) => {
  let id = req.params.id;

  // using the builtin 'destroy' function on Customer Model
  await Cd.destroy({ where: { id: id } });
  res.status(200).send(`cd with id: ${id} is deleted`);
};

// export all the controller functions
module.exports = {
  addCd,
  getAllCds,
  getOneCd,
  updateCd,
  deleteCd,
};
