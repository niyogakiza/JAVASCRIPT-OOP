"use strict";

/*
* What pure functions, side-effects, and referential transparency mean
* Thinking of functions in terms of their inputs and outputs
* How to identify and encapsulate impurities inside functions
* */

const things = [
    { name: 'thing1', id: 1},
    { name: 'thing2', id: 2},
];

/* Impure function */
function impureFunction() {
    const thing = things[0];
    return thing.id;
    /* if something happen on things array,
     the error will be thrown inside this function
     */
}

/* pure function */
function pureFunction(thing) {
    return thing.id;
    /*
    * Here the error will be thrown outside of the function*/
}
pureFunction(things[0]);

const people = ['Robert', 'Aime', 'Catelyn', 'Tom'];

function addPersonImpure(list, name) {
  //  return people.push(name); // push mutate the array means the length or people will be 5
  // return list.concat(name);
   //  or
     // return [].concat(list, name);
    //  return [].concat(...list, [1, 2, 3], 3444, name);
    return [...list, name];
}

const peopleCopy = addPersonImpure(people, 'Wonderful me');

const add = (a, b) => a + b

add(1, 2)
const hello = add('Good Morning', 'Jane');

debugger;
