function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!"; 
  }
}

function currentLine(theLine) {
  var thePeople = [];
  var theLastPerson = [];
  if (theLine.length > 0) {
    for (var i = 0; theLine.length > i + 1; i++) {
      thePeople = thePeople + (i + 1) + ". " + theLine[i] + ", ";
    }
    for (var o = theLine.length - 1; theLine.length - 1 === o; o++) {
      theLastPerson = theLastPerson + (o + 1) + ". " + theLine[o];
    }
    var message = "The line is currently: " + thePeople + theLastPerson;
    return message;
    }
   else {
    return "The line is currently empty."
  }
}
    


    
  
  



  
