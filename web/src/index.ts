import { User } from './models/User';

const user = new User({ id:1, name: 'gustav' });
const user2 = new User({ name: 'mingo' });

user.save();
user2.save();

setTimeout(() => console.log(user), 3000);