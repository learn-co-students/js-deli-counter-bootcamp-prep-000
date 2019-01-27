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

console.log(currentLine(katzDeliLine))