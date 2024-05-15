


export class Bank {
  constructor(bankName) {

    this.bankName = bankName;
  }

  #balance = 0;

  deposit() {
    console.log(this.#balance + 90);
  }

  showBalance() {
    return this.#balance;
  }

}

export const age = 90;

export const greet = () => {
  const b = new Bank();


  console.log(b.showBalance());
}
