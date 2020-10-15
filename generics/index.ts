class StringPrinter {
  constructor(public data: string) {}
  print() {
    console.log(this.data);
  }
}

class NumberPrinter {
  constructor(public data: number) {}
  print() {
    console.log(this.data);
  }
}

class AnyPrinter<T> {
  constructor(public data: T) {}
  print() {
    console.log(this.data);
  }
}

function printAny<T>(data: T) {
  console.log(data);
}

interface Printable {
  print(): void;
}

class House implements Printable {
  color: string = "blue";
  print() {
    console.log("I am a house!");
  }
}

class Car implements Printable {
  print() {
    console.log("I am a car!");
  }
}

function printPrintable(printable: Printable[]) {
  printable.forEach((p) => p.print());
}

function printOneTypePrintable<T extends Printable>(data: T[]) {
}

printPrintable([new House(), new Car()]);
// we can't do it
printOneTypePrintable<House>([new House(), new Car()]);
