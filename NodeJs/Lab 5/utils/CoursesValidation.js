const Ajv = require("ajv");
const ajv = new Ajv();

const CoursesSchema = {
  type: "object",
  properties: {
    name: { type: "string", pattern: "^[a-zA-Z]+$" },
    teacher: { type: "string", pattern: "^[a-zA-Z]+$" },
    duration: {
      type: "number",
      minLength: 2,
      maxLength: 100,
    },
  },
  required: ["name", "teacher", "duration"],
  additionalProperties: false,
};

module.exports = ajv.compile(CoursesSchema);
