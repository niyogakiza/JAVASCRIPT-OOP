
const gt10 = n => n > 10;
const addTen = n => n + 10;

const items = [1, 2, 14, 12, 6, 29]
const itemOverTen = items.filter(gt10);
const mapAddTen = map(addTen)
const itemsAddTen = mapAddTen(items);

const mapThenFilter = filter(gt10, mapAddTen([1, 2, -4, 3, 4, -5]));

function map(transformer, list) {
    if(arguments.length === 1) {
        return list => map(transformer, list);
    }

    const output = new list.constructor();
    const keys = Object.keys(list);
    const isArray = Array.isArray(list);

    keys.forEach(key => {
        if (isArray) {
            output.push(transformer(list[key]));
        } else {
            output[key] = transformer(list[key]);
        }
    });

    return output;
}

function filter(predicate, list) {
    if(arguments.length === 1) {
        return list => filter(predicate, list);
    }

    const output = new list.constructor();
    const keys = Object.keys(list);
    const isArray = Array.isArray(list);

    keys.forEach(key => {
        if (predicate(list[key])) {
            if (isArray) {
                output.push(list[key]);
            } else {
                output[key] = list[key];
            }
        }
    });

    return output;
}

const obj = {
    a: 1,
    b: 20,
    c: 34,
    d: 3,
    e:-3
}
const objMapAddTen = mapAddTen(obj)

debugger;
