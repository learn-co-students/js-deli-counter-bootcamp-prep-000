var katzDeliLine = [];

function takeANumber(line, name) {

line.push(name);


return `Welcome, ${name}. You are number ${line.length} in line.`
};

takeANumber(katzDeliLine, "Ada");

function nowServing(line) {

if (line.length === 0) {
  return "There is nobody waiting to be served!";
}




return "Currently serving " + line.shift() + "."


}



function currentLine(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";


}
var k = "The line is currently: "


for (let i = 0; i < k.length; i++) {


   console.log(k[i]);

}




// concatenate the string and var
/*
var string1 = "hello"
undefined
string1.concat
ƒ concat() { [native code] }
string1.concat("world")
"helloworld"
string1
"hello"
string1 = string1.concat("world")
"helloworld"
string1
"helloworld"
*/







/* build string off for loop
take each element out of array off for loop and add to string
*/
}
