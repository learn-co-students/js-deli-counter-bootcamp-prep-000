var katzDeliLine = [];

function takeANumber(array, name) {
  array.push(name);
  return ("Welcome, " + name +". You are number " + (array.indexOf(name) + 1) + " in line.");
}

function nowServing(array) {
 var people = [];
 if (array.length < 1) {
 return "There is nobody waiting to be served!";
 }
 else { people.push(array[0]);
 array.shift();
 return "Currently serving " + people[0] + ".";
   
 }
}


var first = [];
  
function currentLine(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
  first.push(` `+ [i+1] +`. `+katzDeliLine[i])
  i++;
  }
  if (katzDeliLine.length === 0) {
  return "The line is currently empty."
  }
  else {
    return ("The line is currently:" + first)
  }
}








