class Car {
  topSpeed = 160;
  isTrunkOpen = false;
  areLightsOn = false;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;

    this.topReverseSpeed = -50;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    setTimeout(
      () => {
        window.setTimeout();
      },
      1000,
      this.turnLightsOn,
      this.turnLightsOff,
    );
  }
}

const audi = new Car('Audi', 'black', 4, 50);

console.warn(`Instantiaza o alta masina (Opel, red, cu 4 roti si viteza 3).
O poti salva intr-o variabila numita opel.`);

const opel = new Car('Opel', 'red', 4, 3);

console.warn(`Adauga o metoda numita stop() care sa faca
proprietatea speed 0, apoi afiseaza viteza.`);
