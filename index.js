var katzDeliLine = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {

  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else if (katzDeliLine.length > 0){
  var first = katzDeliLine[0]
  katzDeliLine.shift();
  return "Currently serving " + first + "."
}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else if (katzDeliLine.length > 0){
    var deliString = "The line is currently:"
    for (var i=1;i<=katzDeliLine.length;i++) {
      if (i<katzDeliLine.length){
      deliString = deliString + " " + i + ". " + katzDeliLine[i-1]+ ","
    }
    else if (i === katzDeliLine.length){
      deliString = deliString + " " + i + ". " + katzDeliLine[i-1];
    }
    }
    return deliString
  }
}
