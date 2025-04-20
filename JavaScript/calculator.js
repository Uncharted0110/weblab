function squareNumber(num) {
    const result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
}

function halfNumber(num) {
    const result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
    return result;
}

function percentOf(num1, num2) {
    const result = (num1 / num2) * 100;
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
}

function areaOfCircle(radius) {
    const area = Math.PI * radius * radius;
    const rounded = area.toFixed(2);
    console.log(`The area for a circle with radius ${radius} is ${rounded}.`);
    return Number(rounded);
}

function performOperations(num) {
    const half = halfNumber(num);
    const squared = squareNumber(half);
    const area = areaOfCircle(squared);
    const percent = percentOf(area, squared * squared);
    return percent;
}

function main() {
    const num = 5
    halfNumber(num);
    squareNumber(num);
    areaOfCircle(num);
    percentOf(num, 10);
}

main();
