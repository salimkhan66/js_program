
const user={
    name:"salim khan",
    email:"salimkhan668580s@gmail.com",
    age:30,
    "Full name":"salim"
}
const user1={
    name:"salim khan",
    email:"salimkhan668580s@gmail.com",
    age:40,
    "Full name":"salim"
}
const user2={
    name:"salim khan",
    email:"salimkhan668580s@gmail.com",
    age:30,
   
    "Full name":"salim"
}

// object destructring 
const {name,email,age}=user

// to access only key in object
console.log(Object.keys(user))

// to access only values of object

console.log(Object.values(user))

// combine two or multiple array

const obj3={...user1,...user2}
console.log(obj3)