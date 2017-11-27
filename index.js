var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
   katzDeliLine.push(name);
   return "Welcome, " + name + ". " + "You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
 }

function nowServing(katzDeliLine){
  if(katzDeliLine[0] === undefined){
    return 'There is nobody waiting to be served!';
  }
  for(var i = 0; i < katzDeliLine.length; i++){
    if(katzDeliLine[i] !== 0){
      return "Currently serving " + katzDeliLine.shift(katzDeliLine[i]) + ".";
    }
  }
}

function currentLine(line){
var numbersAndNames = [];
  if (line.length === 0){
    return "The line is currently empty.";
  } else {
    for (var i = 0, l = line.length; i < l; i++) {
   numbersAndNames.push( i + 1 + ". " + line[i])
    }
  }
return "The line is currently: " + numbersAndNames.join(", ");
}




takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "3"

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
