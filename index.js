/* need an array of names 
need an array of objects with key value pairs of the person's name and their number
the function for taking a number:
grab a person's name and assing them a number 

print a sentence with the name and number




var katzDeli = [];
var katzDeliLine = [];
var katzDeliNames = []


function takeANumber(katzDeliLine, name) {
  object.assign({"Ada": katzDeliLine.length+1}, katzDeli)
  var number = katzDeliLine.length+1
  Object.assign({number : name}, katzDeli)
  return ("Welcome, " + katzDeliLine.number + ". You are number " + katzDeliNames.name + " in line.")
}

*/



var katzDeli = [];
var katzDeliLine = [];


function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing() {
  if (katzDeliLine.length >= 1) {
      return "Currently serving " + katzDeliLine[0] + "."
      katzDeliLine.shift();
    } else if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
    }
}



  
function currentLine(katzDeliLine) {

  for (let i = katzDeliLine[0]; i <= katzDeliLine.length; i++) {
    if (i > 0) {
      katzDeli.push(katzDeliLine.length + ". " + katzDeliLine[i])
      return "The line is currently: " + katzDeliLine
    } else if (i === 0) {
      return "The line is currently empty."
    }
  }
  
}



