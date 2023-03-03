var ticketModule = require("./module");

let TicketClass = ticketModule.ticket;

var ticketObj = new TicketClass();
ticketObj.addTicket(
  1,
  29,
  2763,
  "Alexandria",
  "New York",
  new Date("2019-2-19")
);
ticketObj.addTicket(2, 188, 1927, "Australia", "Berlin", new Date("2023-7-11"));

console.log("\nTicket 1 Details Before Update");
ticketObj.getTicket(1);

ticketObj.updateTicket(
  1,
  20,
  1986,
  "London",
  "Emirates",
  new Date("2023-7-15")
);

console.log("\nTicket 1 Details After Update:");
ticketObj.getTicket(1);
