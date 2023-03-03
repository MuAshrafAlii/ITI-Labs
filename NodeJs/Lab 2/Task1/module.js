class ticket {
  ticketsArr = [];

  addTicket(id, seatNum, flightNum, departureAirport, arrivalAirport, date) {
    let ticket = {
      id,
      seatNum,
      flightNum,
      departureAirport,
      arrivalAirport,
      date,
    };
    this.ticketsArr.push(ticket);
  }

  getTicket(id) {
    for (let i = 0; i < this.ticketsArr.length; i++) {
      if (this.ticketsArr[i].id === id) {
        console.log(this.ticketsArr[i]);
        break;
      }
    }
  }

  updateTicket(id, seatNum, flightNum, departureAirport, arrivalAirport, date) {
    for (let i = 0; i < this.ticketsArr.length; i++) {
      if (this.ticketsArr[i].id === id) {
        this.ticketsArr[i].id = id;
        this.ticketsArr[i].seatNum = seatNum;
        this.ticketsArr[i].flightNum = flightNum;
        this.ticketsArr[i].departureAirport = departureAirport;
        this.ticketsArr[i].arrivalAirport = arrivalAirport;
        this.ticketsArr[i].date = date;
        break;
      }
    }
  }
}

module.exports = {
  ticket,
};
