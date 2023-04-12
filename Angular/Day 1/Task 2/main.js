class Account {
    constructor(acc_no, balance) {
        this.acc_no = acc_no;
        this.balance = balance;
    }
    debitAmount() { }
    creditAmount() { }
    getBalance() { }
}
class saving_account extends Account {
    constructor(acc_no, balance, min_balance) {
        super(acc_no, balance);
        this.min_balance = min_balance;
    }
    addCustomer() {
        console.log("customer added");
    }
    removeCustomer() {
        console.log("customer removed");
    }
}
class current_account extends Account {
    constructor(acc_no, balance, interest_rate) {
        super(acc_no, balance);
        this.interest_rate = interest_rate;
    }
    addCustomer() {
        console.log("customer added");
    }
    removeCustomer() {
        console.log("customer removed");
    }
}
