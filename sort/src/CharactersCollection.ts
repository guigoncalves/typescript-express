import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    console.log(`before: ${this.data}`);
    let characters = this.data.split("");
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    this.data = characters.join("");
    console.log(`after: ${this.data}`);
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    console.log(`here: ${this.data[rightIndex]}`);
    return (this.data[leftIndex].toLowerCase() >
      this.data[rightIndex].toLowerCase());
  }
}
