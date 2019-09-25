/*
* What is arity
* What happens when we call a function
* How partial application differs from total application
* How currying differs from partial application
* */
// Arity of 1
function unaryFn(a) {
    return unaryFn.length;
}

const arity = unaryFn.length;

console.log(arity === 1);
console.log(unaryFn(2,2) === 1);
console.log('===================================================');
// Arity of 2
function binaryFn(a1, a2) {
    return binaryFn.length;
}

const arity2 = binaryFn.length;

console.log(arity2 === 1);
console.log(binaryFn(null) === 1);
console.log('===================================================');
// Arity of 3
function ternaryFn(a1, a2, a3) {
    return ternaryFn.length;
}

const arity3 = ternaryFn.length;

console.log(arity3 === 3);
console.log(ternaryFn() === 3);

function partialApp(b1, b2, b3) {
    console.log('BOOM');
}

const part1 = partialApp(100);
const part2 = part1(20);
const part3 = part2(30);
console.log(part3);

function normalFunc(who, what, where, when) {
    return `${who} is ${what} to ${where} on ${when}`;
}

const meetingTownHall = normalFunc(__, __, "Town Hall", _)
const inviteAll = meetingTownHall('Everyone', 'Invited', _)
alert(inviteAll('Sunday, 7pm'))


