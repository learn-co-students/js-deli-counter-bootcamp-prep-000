var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === name) {
      return "Welcome, " + name + ". " + "You are number " + (i + 1) + " in line."
    }
  }
}

function nowServing(deliLine) {
  var nextUp = "";
  if (deliLine.length > 0) {
      nextUp += "Currently serving " + deliLine[0] + ".";
      deliLine.shift();
  }
  else {
      nextUp += "There is nobody waiting to be served!"
      
  }
  return nextUp;
}

function currentLine(katzDeliLine) {
  var output = [];
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      output.push((i + 1) + ". " + katzDeliLine[i]);
    }
    return "The line is currently: " + output.join(", ");
  }
  else {
   return "The line is currently empty."
  }   
}