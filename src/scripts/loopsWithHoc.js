const list = [12, 3, 4, 6, 8, 54];

// function every(predicate, list, i = 0) {
//     let allPassing = true;
//     for (let i = 0; i < list.length; i++) {
//         const item = list[i];
//         if (!predicate(item)) {
//             allPassing = false;
//             break;
//         }
//     }
//     return allPassing;
// }


// function some(predicate, list) {
//     let onePassed = false;
//     let i = list.length;
//     while (i--) {
//         const item = list[i];
//         if (predicate(item)){
//             onePassed = true;
//             break;
//         }
//     }
//     return onePassed;
// }

function every(predicate, [item, ...list]) {
    if (list.length) {
        return predicate(item) ? every(predicate, list) : false;
    }
    return true;
}

function some(predicate, [item, ...list]) {
    if (list.length) {
        return predicate(item) ? true : some(predicate, list);
    }
    return false;
}

function test([a, b, ...c]) {
    console.log(c, c.length);
}

test([]);
const gt4 = n => n > 4;
const lt5 = n => n < 5;

console.log(`${some(lt5, list) ? 'Some' : 'none'} in list are less than 5`)
console.log(`${every(gt4, list) ? 'All' : 'Not all'} in list are greater than 4`)




debugger;
