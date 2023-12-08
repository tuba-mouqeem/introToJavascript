function truncateString(str, num){
    //Clear out that junk in your trunk
    if (num>= str.length) return str;
    if(num<3) return str.slice(0,num)+"..." +"I am less than 3 called";
    return str.slice(0,num-3)+"...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow backet", 11))
console.log(truncateString("Tommy goes to work", 5))
console.log(truncateString("tes",2))



var name="jonathan";
console.log(name.slice(0,2))
