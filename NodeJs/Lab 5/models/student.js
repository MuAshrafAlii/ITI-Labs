const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    dept: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
