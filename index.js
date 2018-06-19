var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name) //push => end of array 
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  var i = 0;
if (i < katzDeliLine.length) { 
  var name = katzDeliLine.shift() // shift => return first person in line and remove that person.
  return `Currently serving ${name}.`
  //if the if statement passes [i < 0] -> returns this message; if the 'if' statement fails (i = 0) => cpu proceeds to the 'else if' statement.
} else if (i == katzDeliLine.length) {
  return `There is nobody waiting to be served!`
  }//if the if statement fails (0 = 0) -> returns message above.
}

var currentLine = function (katzDeliLine) {
  if (katzDeliLine.length===0) // === means identical
  {
  return "The line is currently empty.";
}
   var numberAndName = [];// new variable for number + name.
   for (var i=0; i<katzDeliLine.length; i++) // [from 0, to indefinite integer, increment]
   {
   numberAndName.push(i+1 + ". " + katzDeliLine[i]) //push; at the end of array. i+1; list starts from 0, so needs +1.; the period after the number, as well as spacing between the period and the end quoation mark to show spacing between period and name.; However, this for function only returns the numbers and names
}
  return "The line is currently: " + numberAndName.join(", "); 
}// the line is currently needs to be summed up with number and name. numberAndName.join(", ") space between comma and the next following number.









