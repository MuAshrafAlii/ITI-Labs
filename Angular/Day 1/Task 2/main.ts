class Account {
  public acc_no: number;
  public balance: number;

  constructor(acc_no: number, balance: number) {
    this.acc_no = acc_no;
    this.balance = balance;
  }

  debitAmount() {}
  creditAmount() {}
  getBalance() {}
}

interface IAccount {
  date_of_opening: Date;

  addCustomer(): any;
  removeCustomer(): any;
}

class saving_account extends Account implements IAccount {
  public date_of_opening: Date;

  constructor(acc_no: number, balance: number, public min_balance: number) {
    super(acc_no, balance);
  }

  addCustomer() {
    console.log("customer added");
  }

  removeCustomer() {
    console.log("customer removed");
  }
}

class current_account extends Account implements IAccount {
  public date_of_opening: Date;

  constructor(acc_no: number, balance: number, public interest_rate: number) {
    super(acc_no, balance);
  }

  addCustomer() {
    console.log("customer added");
  }

  removeCustomer() {
    console.log("customer removed");
  }
}
