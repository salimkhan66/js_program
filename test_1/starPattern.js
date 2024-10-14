

// ==================Question one======================
let n=4;
let result = "";
for(let i=0;i<n;i++){
    for(let j=n;j>i;j--){
        result += " ";
    }
    for(let k=0;k<=i;k++){
        result += "* ";
    }
    result += "\n";
}
console.log(result);
//  output
//    *
//   * *
// *  *  *

// =============================Question 2===============

let n=7
let result=""
for(let i=1;i<=n;i++){
    result+=" "
    for(let j=1;j<=i;j++){
        result+="1"
    }
}
console.log(result)

//  output : 1 11 111 1111 1111 11111 111111
// ==============================Question 3==============
let arr=[4,7,5,6]

for(let i=0;i<arr.length;i++){
    let result=""
    for(let j=0;j<arr[i];j++){
        result+="*"
    }
    console.log(result)
}

output:
// ****
// *******
// *****
// ******

// =============================Question 4==================
let arr = [4, 5, 7, 5];

let max = Math.max(...arr);

for (let i = 0; i < max; i++) {
  let row = '';
  for (let j = 0; j < arr.length; j++) {
    if (i < arr[j]) {
      row += '*\t'; 
    } else {
      row += '\t';  
    }
  }
  console.log(row);
}

output:
// print star column wise






