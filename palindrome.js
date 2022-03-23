function check (str){
const len=str.length;
for(var i=0;i<len/2;i++){
    if(str[i]!== str[len-1-i]){
        console.log("not a palindrome");
    }
}
console.log("this is a palindrome");
}
check("dad")