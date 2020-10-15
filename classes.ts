class Vehicle {
  constructor(public color: string) {}

  honk(): string {
    return "aaahr aaahr";
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
}

const civic = new Car(4, "blue");
