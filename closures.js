// Defination -: closure  allow function to access variables  from their enclosing scopes , even after those scopes have exited.

// eg 1
function outerfun() {
  let outertext = 'i am from outer scope'

  function innerfun(){
    console.log(outertext)
  }
  return innerfun
}

const result = outerfun()
result() // output -: i am form outer scope 



// eg 2 
 function count(){
    let count=0

    function addcount(){
        count++
        console.log(count)
    }
    return addcount
 }

 const counter = count()
 counter() // output -: 1
 counter() // output -: 2
 counter() // output -: 3