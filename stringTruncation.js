function truncateString(str, num){
    //Clear out that junk in your trunk
    if(num<=3) return str.slice(0,num)+"..."
    return str.slice(0,num)
}

truncateString("A-tisket a-tasket A green and yellow backet", 11)
truncateString("Tommy goes to work", 4)
var name="jonathan";
console.log(name.slice(0,2))