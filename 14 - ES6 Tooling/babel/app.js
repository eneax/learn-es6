const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

const age = 100;
const people = ['Wes', 'Kait'];

const fullNames = people.map(name => `${name} Bos`);


/*
  Babel is a JavaScript compiler
  - You put JS with ES6 in and it will return you ES5 out
  - A preset is a collection of plugins
*/ 