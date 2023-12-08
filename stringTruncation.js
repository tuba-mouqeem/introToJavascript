function truncateString(str, num) {
    //Clear out that junk in your trunk
    if (num >= str.length) return str;
    if (num < 3) return str.slice(0, num) + "..." + "I am less than 3 called";
    return str.slice(0, num - 3) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow backet", 11))
console.log(truncateString("Tommy goes to work", 5))
console.log(truncateString("tes", 2))


//Declaring a string in javascript
var name = "jonathan";
console.log(name.slice(0, 2))
let name1 = "harry"
console.log(name1.length)
let friend = "Prakash"
console.log(friend)

//Template Literal
//We can insert variables directly in template litleral. This is called string interpolation.
let boy1 = "Pramod"
let boy2 = "Nikhil"

let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)

//Escape Sequence characters
let fruit = "Bana\'na"
console.log(fruit)

//Real work
let content = `Truncate better if the message contains a single very
 long word Instead of truncating at a word boundary, you can truncate at a specific character limit. 
 This would handle cases where a single very long word exceeds the limit. For example, if you want to 
 limit the content to 150 characters, you can do:`




function truncateString1(str, num) {
    const characterLimit = 150;
    if (content.length > characterLimit)
        return content.slice(0, characterLimit - 3) + "..."
}

console.log(truncateString1(content, 2))

