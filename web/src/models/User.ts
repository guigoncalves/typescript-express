import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

interface UserProps {
  id?: number,
  name?: string,
  age?: number
}

export class User {

  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>('http://localhost:3000/users');

  constructor(public data: UserProps) {}

  get(fieldName: string): (string | number) {
    return this.data[fieldName];
  }

  set(update: UserProps) {
    Object.assign(this.data, update);
  }



  fetch() {
    axios.get(`http://localhost:3000/users/${this.data.id}`)
    .then((response: AxiosResponse): void => {
      this.set(response.data);
    })
  }

  save() {
    const { id } = this.data;

    if(id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post(`http://localhost:3000/users`, this.data);
    }
  }
}