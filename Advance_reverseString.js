let inputString="My_name_is_Piyush"

let output=""
let count=inputString.length;

let i=0;
let j=1;
while(count>0){
    if(inputString[i]=='_'){
       output+="_";
       i++;
       j++;
      
    }
    if((i<inputString.length)||(j<inputString.length)){
        output+=inputString[j]+inputString[i];
    }else{
        break;
    }
    
    
    i=i+2;
    j=j+2;    
  count--;
}


console.log(output)