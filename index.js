var katzDeliLine = [];
var counter = 0;
function takeANumber(katzDeliLine, name) {
  var counter = katzDeliLine.length;
  katzDeliLine.push(name);
  return `Welcome, ${katzDeliLine[counter]}. You are number ${++counter} in line.`;
  counter++;
   console.log(katzDeliLine);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var removed = katzDeliLine.shift();
    --counter;
    return `Currently serving ${removed}.`;
    //return katzDeliLine;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  var counter = 0;
  var remaining = "The line is currently:";
  for (let i = 0; i < katzDeliLine.length; i++) {
    i == katzDeliLine.length - 1 ? remaining += ` ${++counter}. ${katzDeliLine[i]}` : remaining += ` ${++counter}. ${katzDeliLine[i]},`
   ;
  }
  return remaining;
  } else {
    return "The line is currently empty.";
  }
}
