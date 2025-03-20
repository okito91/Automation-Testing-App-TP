// 1. Create an array of strings and add a new element at the end of the array. Log the result.

let cars: string[] = ["Honda", "Mitsubishi", "Nissan"];
cars.push("Mazda");
console.log("1.push",cars);

// 2. Create an array of numbers and remove the first element from the array. Log the result.

let numbers: number[] = [10, 20, 30, 40, 50];
numbers.shift();
console.log("2.shift",numbers);

// 3. Use the map method to create a new array and divide each number by 2 from [1, 2, 3, 4, 5]. Log the result.

let oneToFive: number[] = [1, 2, 3, 4, 5];
let dividedNumbers = oneToFive.map((element: number) => element / 2);
console.log("3.map",dividedNumbers);

// 4. Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.

let unfilteredNumbers: number[] = [3, 7, 1, 9, 12, 4];
let filteredNumbers = unfilteredNumbers.filter(num => num > 5);
console.log("4.filter",filteredNumbers);

// 5. Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.

let unsortedNumbers: number[] = [9, 3, 7, 2, 8, 5];
let sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
console.log("5.sort",sortedNumbers);

// 6. Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.

let unslicedFruits: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let slicedFruits = unslicedFruits.slice(0, 3);
console.log("6.slice",slicedFruits);

// 7. Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat']. Log the result.

let vehicles: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
vehicles.splice(1, 2);
console.log("7.splice", vehicles);

// 8. Write a function named "findLargest" that takes three numbers as parameters and returns the largest of them.

function findLargest(
    a: number, 
    b: number, 
    c: number
): number {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log("8.findLargest:",findLargest(10, 25, 15));

// 9. Write a function "convertToCentimeters" which receives parameter "inches" with a default value and converts to centimeters.

function convertToCentimeters(inches: number = 1): number {
    return inches * 2.54;
}
console.log(`9.convertToCentimeters with default value: ${convertToCentimeters()} cm`); 
console.log(`9.convertToCentimeters with passed value: ${convertToCentimeters(12)} cm`); 

// 10. Write a function named "calculateArea" that takes a required width parameter and an optional height parameter.
// If height is not provided, assume the shape is a square.

function calculateArea(width: number, height?: number): string {
    if (height) {
        return `Rectangle with area: ${width * height}`;
    } else {
        return `Square with area: ${width * width}`;
    }
}
console.log("10.calculateArea:",calculateArea(5)); // Square
console.log("10.calculateArea:",calculateArea(5, 10)); // Rectangle