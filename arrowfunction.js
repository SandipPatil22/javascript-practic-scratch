// **********************************************Arrow function**************************************************************

// Array function are a concise way t write function in javascript. it cannnot be use as a constructure 


const add= (a,b)=> a+b
console.log(add(23,3)) // output-: 26

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(n => n * n);
console.log(squared); // output-: [1, 4, 9, 16, 25]
