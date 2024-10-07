function counter(name){
 let n=0;
 function count(){
    
    return n++;
 }
 return count;
}

const store=counter("salim khan");
 console.log(store())
 console.log(store())
 console.log(store())
 console.log(store())
 console.log(store())


