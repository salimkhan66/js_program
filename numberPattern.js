// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let count=0;
for (let i = 0; i<5; i++) {
  let str = "";
  for (let j = 1; j <=(5-i); j++) {
    str +=j+" " ;
  }
    for(let k=1;k<i*2;k++){
      
        str+="  "
    }
    
     for (let j =5-i; j>=1; j--) {
    str += j+" ";
  }
    
  console.log(str);
}
