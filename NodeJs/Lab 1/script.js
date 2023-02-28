const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    if (req.url != "/favicon.ico") {
      var operation = req.url.split("/");
      var operator = operation[1];
      var numbersArr = operation.slice(2).map((n) => parseInt(n));
      var result;

      switch (operator) {
        case "add":
          result = 0;
          numbersArr.forEach((n) => (result += n));
          fs.appendFileSync("./result.txt", `Sum Result:${result}\n`);
          break;

        case "mult":
          result = 1;
          numbersArr.forEach((n) => (result *= n));
          fs.appendFileSync(
            "./result.txt",
            `Multiplication Result: ${result}\n`
          );
          break;

        case "sub":
          result = numbersArr[0];
          for (let i = 1; i < numbersArr.length; i++) {
            result -= numbersArr[i];
          }
          fs.appendFileSync("./result.txt", `Subtraction Result: ${result}\n`);
          break;

        case "div":
          result = numbersArr[0];
          for (let i = 1; i < numbersArr.length; i++) {
            result /= numbersArr[i];
          }
          fs.appendFileSync("./result.txt", `Division Result: ${result}\n`);
          break;
      }

      res.write(`Result: ${result}`);
    }
    res.end();
  })
  .listen(8000, () => {
    console.log("listening on port 8000");
  });
