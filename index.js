var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
   katzDeliLine.push(name);
   return "Welcome, " + name + ". " + "You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
 }

function nowServing(katzDeliLine){
  for(var i = 0; i < katzDeliLine.length; i++){
    if(katzDeliLine[i] !== 0){
      return "Currently serving " + katzDeliLine.shift(katzDeliLine[i]) + ".";
    } else if(katzDeliLine[0] === undefined){
      return 'There is nobody waiting to be served!';
    }
  }
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
