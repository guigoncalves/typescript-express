import axios, { AxiosResponse } from 'axios';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Model } from './Model';
import { ApiSync } from './ApiSync';
import { Collection } from './Collection';

export interface UserProps {
  id?: number,
  name?: string,
  age?: number
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps) {
    return new User(new Eventing(), new Attributes<UserProps>(attrs), new ApiSync<UserProps>(rootUrl));
  }

  static buildUserCollection() {
    return new Collection<User, UserProps>(rootUrl, User.buildUser);
  }

  setRandomAge() {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }

}