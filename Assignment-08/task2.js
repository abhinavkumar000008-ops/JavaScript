// Name: Abhinav | Roll No: BCS2025447 H | Assignment 8
class Locker {
  constructor() {
    this.pin = 1234;
  }

  checkPin(number) {
    return number === this.pin;
  }
}

const locker = new Locker();
console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));
