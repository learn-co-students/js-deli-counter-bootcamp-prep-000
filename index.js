function takeANumber(katzDeliLine,newPerson){
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var number1 = katzDeliLine[0];
    katzDeliLine.shift()
    return `Currently serving ${number1}.`
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else { 
    var lineStatus = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i ++){
      var position = i + 1;
      lineStatus = lineStatus.concat(`${position}. ${katzDeliLine[i]}`)
      if (position === katzDeliLine.length){
        return lineStatus;
      } else { lineStatus = lineStatus.concat(", ")
      }
    
    }
    return lineStatus
  }
}