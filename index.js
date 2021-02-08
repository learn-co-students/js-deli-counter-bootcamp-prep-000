// var katzDeliLine = [];

function takeANumber(currentLinePeople, newPersonsName) {
  var intLine = currentLinePeople.length + 1;
  currentLinePeople.push(newPersonsName);
  return "Welcome, "  + newPersonsName + ". You are number " + intLine + " in line.";
}

function nowServing(katzDeliLine) {
  var nextPerson;
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    nextPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + nextPerson + "."; 
  }
}

function currentLine(currentLinePeople) {
  if (currentLinePeople.length === 0) {
    return "The line is currently empty.";
  } else {
    var num = 1;
    var theLineString = "The line is currently: ";
    var theNamestring;
    var i;
    for (i = 0; i < currentLinePeople.length; i++) {
      num = i + 1;
      theLineString = theLineString + num + ". " + currentLinePeople[i];
      while (num !== currentLinePeople.length) {
        theLineString = theLineString + " ,";
      }
    }
    return theLineString;
  }
}