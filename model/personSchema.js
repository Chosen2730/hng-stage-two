const { model, Schema } = require("mongoose");

const PersonSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Person", PersonSchema);
