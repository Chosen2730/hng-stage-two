const { StatusCodes } = require("http-status-codes");
const Person = require("../model/personSchema");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllPersons = async (req, res) => {
  const persons = await Person.find();
  if (persons.length < 1) {
    return res
      .status(StatusCodes.OK)
      .json({ msg: "No persons in the database" });
  }
  res.status(StatusCodes.OK).json(persons);
};

const getPerson = async (req, res) => {
  const person = await Person.findOne({ name: req.params.name });
  if (!person) {
    throw new NotFoundError("No person with this name in the database");
  }
  res.status(StatusCodes.OK).json(person);
};

const createPerson = async (req, res) => {
  const { name } = req.body;
  if (typeof name !== "string") {
    throw new BadRequestError("Name must be a string");
  }
  if (!name) {
    throw new BadRequestError("Please enter a name");
  }
  const existingPerson = await Person.findOne({ name: name });
  if (existingPerson) {
    throw new BadRequestError(
      "This name already exist, enter a new unique name"
    );
  }
  const person = await Person.create({ name });
  res.status(StatusCodes.CREATED).json(person);
};

const deletePerson = async (req, res) => {
  const { name } = req.params;
  const person = await Person.findOneAndDelete({ name });
  if (!person) {
    throw new NotFoundError("No person with this name in the database");
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: `${name} has been deleted successfully` });
};

const updatePerson = async (req, res) => {
  const { name } = req.params;
  const newName = req.body.name;
  const person = await Person.findOneAndUpdate(
    { name },
    { name: newName },
    {
      runValidators: true,
      new: true,
    }
  );
  if (!person) {
    throw new NotFoundError("No person with this name in the database");
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: `${name} has been Updated successfully`, person });
};

module.exports = {
  getAllPersons,
  getPerson,
  createPerson,
  deletePerson,
  updatePerson,
};
