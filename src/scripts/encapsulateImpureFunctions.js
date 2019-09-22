const document = require('../../stub/document')

const pi = Math.PI;

const multiply = (n, m) => n * m;
const sum = (n, m) => n + m;
const divide = (n, m) => n / m;
const squared = n => multiply(n, n);
const doubled = n => multiply(n, 2);

const height = 10;
const diameter = 20;

const diameterRadius = diam => divide(diam,  2);
const toPerimeter = diam => multiply(pi, diam);
const areaCircle = radius => multiply(pi, squared(radius));
const areaRect = multiply;
// function surfaceAreaCylinder(height, diameter) {
// //     const areaTop = areaCircle(diameterRadius(diameter));
// //     const sideArea = areaRect(toPerimeter(diameter), height);
// //     return sum(doubled(areaTop), sideArea);
// // }

// Refactoring

const surfaceAreaCylinder = (height, diameter) => sum(
    doubled(areaCircle(diameterRadius(diameter))),
    areaRect(toPerimeter(diameter), height)
)

const totalArea = surfaceAreaCylinder(height, diameter);

function getDimensions(heightSel, diamSel) {
    return function impureDimens() {
        const height = document.querySelector(heightSel);
        const diameter = document.querySelector(diamSel);

        if (!diameter || !height) {
            return void(0);
        }
        return [height.value, diameter.value];
    };
}

// pure
const dimens = getDimensions('.height', '.diameter')
// impure
const hd = dimens()
const area = surfaceAreaCylinder(hd[1], hd[0]);
debugger;
