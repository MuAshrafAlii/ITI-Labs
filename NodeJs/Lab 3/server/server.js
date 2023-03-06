const fs = require("fs");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

var welcomeHTMLFile = fs.readFileSync("../client/welcome.html").toString();
var JSONFile = "./users.json";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function joinPath(url) {
  return path.join(__dirname, url);
}

app.get("/index.html", (req, res) => {
  res.sendFile(joinPath("../client/index.html"));
});

app.get("/showAll.html", (req, res) => {
  res.sendFile(joinPath("../client/showAll.html"));
});

app.get("/style.css", (req, res) => {
  res.sendFile(joinPath("../client/style.css"));
});
app.get("/script.js", (req, res) => {
  res.sendFile(joinPath("../client/script.js"));
});
app.get("/welcome.html", (req, res) => {
  res.sendFile(joinPath("../client/welcome.html"));
});
app.get("/favicon.ico", (req, res) => {
  res.sendFile(joinPath("../client/favicon.ico"));
});
app.get("/server/users.json", (req, res) => {
  res.sendFile(joinPath("../server/users.json"));
});

app.post(
  "/welcome.html",
  (req, res, next) => {
    var name = req.body["name"];
    var tel = req.body["tel"];
    var address = req.body["address"];
    var email = req.body["email"];
    var password = req.body["password"];

    welcomeHTMLFile = welcomeHTMLFile
      .replace("{name}", name)
      .replace("{tel}", tel)
      .replace("{address}", address)
      .replace("{email}", email)
      .replace("{password}", password);

    let user = {
      Name: name,
      Tel: tel,
      Address: address,
      Email: email,
      Password: password,
    };

    fs.readFile(JSONFile, "utf-8", (err, userdata) => {
      if (err) {
        console.log(err);
      } else {
        let users = JSON.parse(userdata);
        users.user.push(user);
        fs.writeFile(JSONFile, JSON.stringify(users), (err) => {
          console.log(err);
        });
      }
    });

    next();
  },
  (req, res) => {
    res.send(welcomeHTMLFile);
  }
);

app.all("*", (req, res) => {
  res.send("Page Not Found");
});

app.listen("7000", () => {
  console.log("Listening to 7000");
});
