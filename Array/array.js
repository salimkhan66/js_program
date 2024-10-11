const arr=[2,4,5,67,34];
const flat1=[1,2,[3,4],5,[6,7]]

const arr1=[1,2,3,4]
const arr2=[5,6,7,8]



//  to push the value at the last index

arr.push(2)

// to remove the value at the last index 

arr.pop();

// to add the vlaue at the starting index and and shift the value on the next index
arr.unshift(5);


// to reove the vlaue at the starting index 
arr.shift();

// console.log(arr.splice(1,3));

// ===========concat method==============
const orignalarr1=arr1.concat(arr2);

// =================add array using two operator======
const orignalarr=[...arr1,...arr2]


// =========================flat method============
const arr4=flat1.flat(Infinity);

console.log(arr4);
