
function sum(a,b,c){
    return {
        sumtwo:function(){
            return a+b;
        },
        sumThree:function(){
            return a+b+c;
        }

    }
}
const store=sum(3,5,2);
console.log("sum of two number "+store.sumtwo());
console.log("sum of three number "+store.sumThree());