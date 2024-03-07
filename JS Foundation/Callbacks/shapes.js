function sqaure(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfsomething(a,b,fn){
    const val1=fn(a);
    const val2=fn(b);
 console.log(val1+val2);
}

sumOfsomething(1,2,cube);//(2*2*2)+(1*1*1)=9
sumOfsomething(1,2,sqaure);