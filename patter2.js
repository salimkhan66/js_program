
function numberPatter2(){
    for(let i=1;i<=5;i++){
        let ptr="";
        for(let j=1;j<=i;j++){
            if(i%2==0){
                ptr+="0 "
            }else{
                ptr+="1 ";
            }
        }
        console.log(ptr)
    }
}

// numberPatter2()

function rightPtrn(){
    for(let i=1;i<=4;i++){
        let ptr="";
        for(let k=1;k<=4-i;k++){
            ptr+="  "
        }
        for(let j=1;j<=i;j++){
            ptr+="* "
        }
        console.log(ptr)
    }
}

rightPtrn()



