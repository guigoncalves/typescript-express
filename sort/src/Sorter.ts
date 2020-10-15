export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort() {
    const { length } = this;

    for (let j = 0; j < length; j++) {
      for (let i = 0; i < length - j - 1; i++) {
        if (this.compare(i, i + 1)) {
          this.swap(i, i + 1);
        }
      }
    }
  }
}
