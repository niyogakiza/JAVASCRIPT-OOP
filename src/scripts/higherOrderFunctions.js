/*
* Higher order functions
*
* */

function isObject(val) {
    return (typeof val === 'object');
}

function getter(prop) {
    return obj => isObject(obj) ? obj[prop] : undefined;
}

const name = getter('name');
const age = getter('age');
const score = getter('score');

const p1 = {
    id: 2,
    name: 'Sandra',
    score: 1024
};

name(p1);
score(p1);
age(p1);
age(100);

debugger;
