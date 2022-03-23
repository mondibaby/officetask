var a,b,result;
a=0;
b=1;
console.log(a);
console.log(b);
for(var i=1;i<10;i++){
    result=a+b;
    a=b;
    b=result
    console.log(result)
}