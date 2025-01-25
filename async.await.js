// *******************************************Async/await*****************************************************************

// async/await is a modern javascript syntax that allow you to write asynchonous code in a cleaner,more readable way, avoiding the complexity of chainig .then() in promises.
// async -: decleare an asynchronous function that always return a pormise
// await -: pause the execuation of the function until the promise is resolved or reject 


// eg.1

const featchData =()=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data featch succesfully ")
        }, 1000)
    })
}

const getData = async()=>{
    try {
        const result = await featchData()
        console.log("feached data", result)
    } catch (error) {
        console.log(error)
    }
}