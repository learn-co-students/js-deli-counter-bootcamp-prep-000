//Function to welcome and assign customers a place in line
var katzDeliLine=[];
function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name);
return "Welcome, "+name+". You are number "+katzDeliLine.length+" in line."
}

takeANumber(katzDeliLine, "Moe");

console.log(takeANumber(katzDeliLine, "Moe"));

//Function to return the first person in line, and then remove the person from the line.
//If the line is empty, the function returns "There is nobody waiting to be served".

var katzDeliLine=[];

function nowServing(katzDeliLine) {
  //Initially in the function, an if statement is used to check for the condition of an empty array,
  //which translates to no customer in line. If this condition returns as false, an else statement is used
  //to identify the first customer in line, return their name, and then remove them from the line utilizing the .shift()
  //method of array manipulation.

  if(!katzDeliLine.length) {
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else {
    console.log("Currently serving " + katzDeliLine.shift());
    return "Currently serving " + katzDeliLine.shift();
  }
}

nowServing(katzDeliLine);
