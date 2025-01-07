// *******************************************Functional Scope*****************************************************************

// variable decleared with var are scoped to the newarest function. they ignore block boundries
const functionScope = () => {
  var funscope = "here i am";
  if (true) {
    var funscope = "i am inside the condition ";
    console.log(funscope);
  }
  console.log(funscope);
};

// output -:
// i am inside the condition
// i am inside the condition
functionScope();

// *******************************************Block Scope*****************************************************************

// variable decleared with 'let' and "const" are scoped to the nearest enclosing block. each block create new scope
const blockScope = () => {
  let block = "i am here";
  if (true) {
    let block = " inside the condition ";
    console.log(block);
  }
  console.log(block);
};

// output -:
// inside the condition
// i am here
blockScope();

// **********************************************Hoisting**************************************************************
// note -: only the decleration  is hoisted not the initialization
// hoisting in js behaviour where variable and function declaratoin are moved to the top  of their conataining scope during compile phase

// variable hosting with var
// due to hoisting the decleration of x  is moved to the top of its scope , but the assigment (x= 10) is not. this iswhy first console is undefine
// for  "let" and " const" it is a dead zone si
console.log("value of x is :", x); // value of x is :undifine
var x = 10;
console.log("value of x is :", x); // value of x is :10

// function decleration hoisting 
greeting()
function greeting(){
console.log('hello world')
}