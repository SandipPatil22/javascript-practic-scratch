
//  Destructuring allow you to extract values from object or arrays and assign then to a variables in a more concise way.

// **********************************************Array Destructuring**************************************************************

// eg 1
const fruits = ["Apple", "Banana", "Cherry"];
const [first, second, third] = fruits;
console.log(first); // "Apple"
console.log(second); // "Banana"
console.log(third); // "Cherry"

// eg 2
let a = 'rani';
let b = "raja";

[a, b] = [b, a]
console.log(`A: ${a}, B:${b}`)


// eg 3

const martix= [
    [1,2],
    [11,22],
    [111,222],
];

for ( const [x,y] of martix){
    console.log(`X: ${x}, Y: ${y}`)
}

// **********************************************Object Destructuring**************************************************************
const employee = {
    id: 202,
    fullName: "Alice Johnson",
    position: "Software Engineer",
  };
  
  // Renaming variables
  const { fullName: employeeName, position: jobTitle } = employee;
  
  console.log(employeeName); // "Alice Johnson"
  console.log(jobTitle); // "Software Engineer"
  