#!/usr/bin/env ts-node

/*

  Needs:
  npm install -g typescript
  npm install -g ts-node

*/

class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return this.greeting;
    }
};

var greeter = new Greeter("Hello World!");

console.log(greeter.greet());