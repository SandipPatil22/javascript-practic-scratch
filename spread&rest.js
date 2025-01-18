// *******************************************Spread Operator*****************************************************************

// spread operator is used to spread elements of an array, object, or iterable  into individual elements,it is often used in function calls, array or object cloning and mearging
// purpose -: expand elements of an array
// output -: gives individual array 

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]


// *******************************************Rest Operator*****************************************************************

//  the  rest operator is used to collect miltiple element into a single variable. it is often used in function parameters, destructuring.
// purpose -: collects multiple values into one 
// output -: gives array or object 

function sum(...args) {
    return args.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // 6


function multiply(multiplier, ...nums) {
    return nums.map(num => num * multiplier);
}
console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
