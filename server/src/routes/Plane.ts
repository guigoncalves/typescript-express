import 'reflect-metadata';

class Plane {

    @markFunction
    fly() {
        console.log('flying vruuum');
    }
}

function markFunction(target: Plane, key: string) {
    Reflect.defineMetadata('secret', 123, target, key);
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);