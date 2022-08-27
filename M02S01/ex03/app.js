var Car = {
  make: '',
  color: '',
  wheels: 4,
  speed: 0,
  topSpeed: 140,
  topReverseSpeed: 5,

  displaySpeed: function () {
    console.log(`Viteza curenta este:, ${this.speed}`);
  },

  accelerate: function () {
    if (this.speed < this.topSpeed) {
      this.speed = this.speed + 1;
    }
    this.displaySpeed();
  },
  decelerate: function () {
    if (this.speed > this.topReverseSpeed) {
      this.speed = this.speed - 1;
    }
    this.displaySpeed();
  },

  setSpeed(speed) {
    if (this.speed > this.topSpeed) {
      this.speed = this.topSpeed;
    } else {
      this.speed = this.speed;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = this.speed;
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.speed = 0;
