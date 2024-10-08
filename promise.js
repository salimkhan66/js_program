

let promise=new Prosmise((reolve,reject)=>{
    console.log("Hello this is promise")
    reject("error occure")
  
})

promise.then(()=>{
    console.log("promiss is resolve")
}).catch((err)=>{
   console.error("error occure in this code")
})



      