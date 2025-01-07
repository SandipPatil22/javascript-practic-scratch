// **********************************************Scope**************************************************************

// var-: function-scoped. variables declered wit var are accessible within the funcion they are declered in, ignoring  block boundries
// let & const -: block-Scoped. accessible only within the block ( { ... } ) they are declered in

function testscope() {
  if (true) {
    var x = "var: I am function scoped";
    let y = "let: I am block scoped";
    const z = "const: I am block scoped";
  }
  console.log('outside block x =',x) //outpur-: var: I am function scoped
//   console.log('outside block y =',y) //outpur-: reference error (not defined)
//   console.log('outside block z =',z) //outpur-: reference error (not defined)

}
testscope()

// **********************************************Redeclaration**************************************************************
//  var -:  can be redeclared in the same scope 
// let & const -: cannot be redecleaed  in same scope

var m = 10;
var m = 20; // Allowed
console.log(m); // 20

let n = 10;
// let n = 20; 
console.log(n); // SyntaxError: Identifier 'n' has already been declared 

const o = 10;
// const o = 20; 
console.log(o); // SyntaxError: Identifier 'o' has already been declared 



// **********************************************Reassignment**************************************************************

// var & let -:  can be reassigned 
// const -: cannot be reassigned. the value is immutable but if its an object or array, it properties/ elements can be modified 

var p = 5;
p = 10; 
console.log(p); // 10

let q = 15;
q = 20; 
console.log(q); // 20

const r = 25;
// r = 30; // TypeError: Assignment to constant variable
console.log(r); // 25
