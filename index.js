//Function "takeANumber", which welcomes and assigns customers a place in line
var katzDeliLine=[];
function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name);
return "Welcome, "+name+". You are number "+katzDeliLine.length+" in line."
}

takeANumber(katzDeliLine, "Moe");

console.log(takeANumber(katzDeliLine, "Moe"));

//Function "nowServing", which returns the first person in line, and then remove the person from the line.
//If the line is empty, the function returns "There is nobody waiting to be served".

var katzDeliLine=[];

function nowServing(katzDeliLine) {
  //Initially in the function, an if statement is used to check for the condition of an empty array,
  //which translates to no customer being in line. If this condition returns as false, an else statement is used
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


//Function "currentLine", which uses a for loop to iterate through the katzDeliLine array and use the elements within it to
//formulate a new array printed out in the desired format (in this case the number in line and name associated with it).
function currentLine(katzDeliLine){
  if(!katzDeliLine.length) {
    return "The line is currently empty.";
  }
  var katzDeliLineNameAndNumber = [];

  for(var i=0; i<katzDeliLine.length; i++) {
    katzDeliLineNamesAndNumbers.push(i+1 + ". "+ katzDeliLine[i]);
  }
  console.log("The line is currently: " + katzDeliLineNamesAndNumbers)
  return "The line is currently: " + katzDeliLineNamesAndNumbers.join(', ');
}

console.log(currentLine(katzDeliLineNamesAndNumbers));
