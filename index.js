function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  
  var placeInLine = katzDeliLine.length;
  
  return `Welcome, ${name}. You are number ${placeInLine} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  }
  else {
    var currentlyServing = katzDeliLine.shift();
    return "Currently serving " + currentlyServing + ".";
  }
}

function currentLine(katzDeliLine) {
  var arr = [];
  
  if(katzDeliLine.length < 1) {
    return "The line is currently empty.";
  } else {
    
  for (var i = 0; i < katzDeliLine.length; i++) {
    var lineSpot = i + 1;
    arr.push(" " + lineSpot + ". " + katzDeliLine[i]);
   }
   return `The line is currently:${arr}`;
  }
}