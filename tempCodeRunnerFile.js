let inputString="My_name_is_Piyush"

let output=""
let count=inputString.length;

let i=0;
let j=1;
while(count>0){
    if(inputString[i]=='_'){
        i++;
        j++
    }
    output+=inputString[j]+inputString[i];
    i=i+2;