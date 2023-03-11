const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dbURI = "mongodb://127.0.0.1:27017/lab5";
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(7000);
  })
  .catch((err) => {
    console.log(err);
  });

// Student Routes
app.use(studentRoutes);

// Course Routes
app.use(courseRoutes);
