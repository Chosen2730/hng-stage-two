const router = require("express").Router();
const {
  getAllPersons,
  getPerson,
  createPerson,
  deletePerson,
  updatePerson,
} = require("../controllers/personController");

router.route("/").post(createPerson).get(getAllPersons);
router.route("/:id").get(getPerson).delete(deletePerson).patch(updatePerson);

module.exports = router;
