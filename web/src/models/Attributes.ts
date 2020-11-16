export class Attributes<T> {

    constructor(public data: T) {}

    get = <K extends keyof T>(key: string): T[K] => {
      return this.data[key];
    }
  
    set = (update: T) => {
      Object.assign(this.data, update);
    }
    
    getAll() {
      return this.data;
    }
    
}