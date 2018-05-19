var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var place = katzDeliLine.length;
  
  return `Welcome, ${name}. You are number ${place} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    var retStr = "There is nobody waiting to be served!";
  } else {
    retStr = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    
  }
  return retStr;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    var retStr = "The line is currently empty.";
  } else {
    retStr = "The line is currently: ";
    
    for (var i = 0; i < katzDeliLine.length; i++) {
      var linePlace = i + 1;
      retStr += `${linePlace}. ${katzDeliLine[i]}`;
      if (i !== katzDeliLine.length - 1) {
        retStr += ", ";
      }
    }
  }
  return retStr;
}