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
  const { id } = req.params;
  const person = await Person.findOne({ _id: id });
  if (!person) {
    throw new NotFoundError(`No user with with ID ${id} in the database`);
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
  const { id } = req.params;
  const person = await Person.findOneAndDelete({ _id: id });
  if (!person) {
    throw new NotFoundError(`No user with with ID ${id} in the database`);
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: `User with ID ${id} has been deleted successfully` });
};

const updatePerson = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = await Person.findOneAndUpdate(
    { _id: id },
    { name },
    {
      runValidators: true,
      new: true,
    }
  );
  if (!person) {
    throw new NotFoundError(`No person with ID ${id} in the database`);
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: `User with ID ${id} has been Updated successfully`, person });
};

module.exports = {
  getAllPersons,
  getPerson,
  createPerson,
  deletePerson,
  updatePerson,
};
