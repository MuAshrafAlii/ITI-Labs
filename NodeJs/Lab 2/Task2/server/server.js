const http = require("http");
const fs = require("fs");

let mainHTMLFile = fs.readFileSync("../client/index.html").toString();
let welcomeHTMLfile = fs.readFileSync("../client/welcome.html").toString();
let cssFile = fs.readFileSync("../client/style.css").toString();
let favIcon = fs.readFileSync("../client/favicon.ico");

let name, tel, address, email, password;

http
  .createServer((req, res) => {
    if (req.method == "GET") {
      switch (req.url) {
        case "/index.html":
          res.write(mainHTMLFile);
          break;
        case "/welcome.html":
          res.write(welcomeHTMLfile);
          break;
        case "/style.css":
          res.write(cssFile);
          break;
        case "/favicon.ico":
          res.write(favIcon);
          break;

        default:
          res.write("Page is not found");
          break;
      }
      res.end();
    } else if (req.method == "POST") {
      req.on("data", (data) => {
        let userData = decodeURIComponent(data.toString()).replace(/\+/g, " ");
        let dataArray = userData.split("&");

        name = dataArray[0].split("=")[1];
        tel = dataArray[1].split("=")[1];
        address = dataArray[2].split("=")[1];
        email = dataArray[3].split("=")[1];
        password = dataArray[4].split("=")[1];
      });
      req.on("end", () => {
        welcomeHTMLfile = welcomeHTMLfile
          .replace("{name}", name)
          .replace("{tel}", tel)
          .replace("{address}", address)
          .replace("{email}", email)
          .replace("{password}", password);
        res.write(welcomeHTMLfile);
        res.end();
      });
    }
  })
  .listen("7000", () => {
    console.log("Listening to 7000");
  });
