const fs = require("fs");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

var WelcomeFileHTML = fs.readFileSync("../client/welcome.html").toString();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function joinPath(url) {
  return path.join(__dirname, url);
}

app.get("/index.html", (req, res) => {
  res.sendFile(joinPath("../client/index.html"));
});
app.get("/style.css", (req, res) => {
  res.sendFile(joinPath("../client/style.css"));
});
/* app.get("/script.js", (req, res) => {
  res.sendFile(joinPath("../client/script.js"));
}); */
app.get("/welcome.html", (req, res) => {
  res.sendFile(joinPath("../client/welcome.html"));
});
app.get("/favicon.ico", (req, res) => {
  res.sendFile(joinPath("../client/favicon.ico"));
});
/* app.get("/serverSide/users.json", (req, res) => {
  res.sendFile(joinPath("../server/users.json"));
}); */

app.post(
  "/welcome.html",
  (req, res, next) => {
    var name = req.body["name"];
    var tel = req.body["tel"];
    var address = req.body["address"];
    var email = req.body["email"];
    var password = req.body["password"];

    WelcomeFileHTML = WelcomeFileHTML.replace("{name}", name)
      .replace("{tel}", tel)
      .replace("{address}", address)
      .replace("{email}", email)
      .replace("{password}", password);

    /*  let users = { clients: [] };
    let user = {
      Name: name,
      Tel: tel,
      Address: address,
      Email: email,
      Password: password,
    };

    let clients = fs.readFile(JSONFile, "utf-8", (err, userdata) => {
      if (err) throw err;
      else {
        users = JSON.parse(userdata); //Adding JSON File Data In Object
        users.clients.push(user); //Adding Data to Object
        fs.writeFile(JSONFile, JSON.stringify(users), (err) => {
          if (err) throw err;
        }); //Adding Data To JSON File
      }
    }); */

    next();
  },
  (req, res) => {
    res.send(WelcomeFileHTML);
  }
);

app.all("*", (req, res) => {
  res.send("Page Not Found");
});

app.listen("7000", () => {
  console.log("Listening to 7000");
});
